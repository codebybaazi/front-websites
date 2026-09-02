import { cricketKeywordCluster, cricketTeamCode, venueSeoLabel } from "@/utils/cricket-keywords";
import { fitSeoDescription, fitSeoTitle } from "@/utils/seo-text";

export type CricketFormat = "T20" | "ODI" | "TEST";

export interface ScorePhase {
  phase: string;
  teamA: string;
  teamB: string;
}

export interface CricketProjection {
  format: CricketFormat;
  formatLabel: string;
  phases: ScorePhase[];
  totalA: string;
  totalB: string;
  winA: number;
  winB: number;
  surface: string;
}

const TEAM_BATTING: Record<string, number> = {
  india: 92,
  australia: 90,
  england: 88,
  "south africa": 84,
  "new zealand": 83,
  pakistan: 80,
  "west indies": 74,
  "sri lanka": 72,
  afghanistan: 70,
  bangladesh: 66,
  ireland: 58,
  zimbabwe: 55,
};

const HIGH_SCORING_VENUES = [
  "wankhede",
  "chidambaram",
  "chennai",
  "adelaide",
  "perth",
  "edgbaston",
  "trent bridge",
  "nottingham",
  "southampton",
  "rose bowl",
  "melbourne",
  "sydney",
  "wanderers",
  "johannesburg",
  "gabba",
  "brisbane",
  "manuka",
  "bristol",
  "oval",
  "centurion",
  "supersport",
];

const LOW_SCORING_VENUES = [
  "lord's",
  "lords",
  "chester-le-street",
  "riverside",
  "basin reserve",
  "wellington",
  "hagley",
  "christchurch",
  "hobart",
  "bellerive",
  "galle",
  "newlands",
  "cape town",
  "gqeberha",
  "st george",
  "bready",
  "headingley",
  "dunedin",
];

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let n = Math.imul(t ^ (t >>> 15), t | 1);
    n ^= n + Math.imul(n ^ (n >>> 7), n | 61);
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}

function jitter(rand: () => number, spread: number): number {
  return (rand() * 2 - 1) * spread;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function roundRange(mid: number, width: number): { low: number; high: number } {
  const half = Math.max(3, Math.round(Math.abs(width) / 2));
  const low = Math.max(8, Math.round(mid) - half);
  const high = Math.max(low + 4, Math.round(mid) + half);
  return { low, high };
}

function formatRange(low: number, high: number): string {
  return `${low}-${high}`;
}

export function parseMatchTeams(event: string): { teamA: string; teamB: string } {
  const vsParts = event.split(/\s+vs\s+/i);
  const rawA = vsParts[0];
  const rawB = vsParts[1];
  if (!rawA || !rawB) {
    return { teamA: "Team A", teamB: "Team B" };
  }
  const teamA = rawA.replace(/^.*:\s*/, "").trim() || "Team A";
  const teamB = rawB.replace(/\s*\([^)]*\)\s*$/, "").trim() || "Team B";
  return { teamA, teamB };
}

export function detectCricketFormat(event: string, series: string): CricketFormat {
  const text = `${event} ${series}`.toLowerCase();
  if (/\btest\b/.test(text) || text.includes("4-day") || text.includes("4 day")) {
    return "TEST";
  }
  if (/\bodi\b/.test(text)) {
    return "ODI";
  }
  return "T20";
}

function teamRating(teamName: string): number {
  const key = teamName.toLowerCase();
  const match = Object.keys(TEAM_BATTING).find(
    (name) => key.includes(name) || name.includes(key),
  );
  if (match) {
    return TEAM_BATTING[match] ?? 75;
  }
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h + key.charCodeAt(i) * (i + 3)) % 18;
  }
  return 68 + h;
}

function venueFactor(venue: string): number {
  const v = venue.toLowerCase();
  if (HIGH_SCORING_VENUES.some((name) => v.includes(name))) return 10;
  if (LOW_SCORING_VENUES.some((name) => v.includes(name))) return -8;
  return 0;
}

function surfaceForVenue(venue: string, format: CricketFormat): string {
  const v = venue.toLowerCase();
  if (v.includes("galle") || v.includes("chennai") || v.includes("chidambaram")) {
    return "DRY / SPIN";
  }
  if (
    v.includes("lord") ||
    v.includes("chester") ||
    v.includes("basin") ||
    v.includes("wellington") ||
    v.includes("hagley") ||
    v.includes("headingley")
  ) {
    return "GREEN / SEAM";
  }
  if (venueFactor(venue) > 0) {
    return format === "TEST" ? "FLAT / BATTERS" : "FLAT / HIGH-SCORING";
  }
  if (venueFactor(venue) < 0) {
    return "TWO-PACED / BOWLING";
  }
  return "BALANCED / DRY";
}

function formatLabel(format: CricketFormat, event: string): string {
  const e = event.toLowerCase();
  if (format === "TEST") {
    return e.includes("4-day") || e.includes("4 day") ? "4-DAY FIRST-CLASS" : "TEST MATCH";
  }
  if (format === "ODI") return "ODI (50 OVERS)";
  if (e.includes("t20i")) return "T20 INTERNATIONAL";
  return "T20";
}

function phaseTemplates(format: CricketFormat): { phase: string; base: number; width: number }[] {
  if (format === "ODI") {
    return [
      { phase: "Powerplay (0-10)", base: 52, width: 10 },
      { phase: "Middle Overs (11-40)", base: 168, width: 22 },
      { phase: "Death Overs (41-50)", base: 86, width: 16 },
    ];
  }
  if (format === "TEST") {
    return [
      { phase: "Session 1", base: 86, width: 16 },
      { phase: "Session 2", base: 94, width: 16 },
      { phase: "Session 3", base: 82, width: 14 },
    ];
  }
  return [
    { phase: "Powerplay (0-6)", base: 51, width: 8 },
    { phase: "Middle Overs (7-15)", base: 76, width: 12 },
    { phase: "Death Overs (16-20)", base: 60, width: 12 },
  ];
}

export function getCricketProjection(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  teamA: string;
  teamB: string;
}): CricketProjection {
  const format = detectCricketFormat(input.event, input.seriesName);
  const rand = mulberry32(
    hashSeed(
      `${input.slug}|${input.event}|${input.seriesName}|${input.venue}|${input.teamA}|${input.teamB}`,
    ),
  );
  const ratingA = teamRating(input.teamA);
  const ratingB = teamRating(input.teamB);
  const venueAdj = venueFactor(input.venue);
  const templates = phaseTemplates(format);

  const phases: ScorePhase[] = [];
  let lowA = 0;
  let highA = 0;
  let lowB = 0;
  let highB = 0;

  const phaseBounds: [number, number][] =
    format === "ODI"
      ? [
          [40, 72],
          [140, 205],
          [65, 115],
        ]
      : format === "TEST"
        ? [
            [62, 110],
            [70, 118],
            [58, 105],
          ]
        : [
            [40, 66],
            [60, 92],
            [46, 78],
          ];

  for (const [index, template] of templates.entries()) {
    const strengthA = (ratingA - 78) * 0.35;
    const strengthB = (ratingB - 78) * 0.35;
    const phaseShift = index * 1.4;
    const bounds = phaseBounds[index] ?? [40, 100];

    const midA = clamp(
      template.base + venueAdj * 0.45 + strengthA + jitter(rand, 4.5) + phaseShift,
      bounds[0],
      bounds[1],
    );
    const midB = clamp(
      template.base + venueAdj * 0.45 + strengthB + jitter(rand, 4.5) - phaseShift * 0.4,
      bounds[0],
      bounds[1],
    );

    const rangeA = roundRange(midA, template.width + jitter(rand, 1.5));
    const rangeB = roundRange(midB, template.width + jitter(rand, 1.5));

    lowA += rangeA.low;
    highA += rangeA.high;
    lowB += rangeB.low;
    highB += rangeB.high;

    phases.push({
      phase: template.phase,
      teamA: formatRange(rangeA.low, rangeA.high),
      teamB: formatRange(rangeB.low, rangeB.high),
    });
  }

  const midTotalA = (lowA + highA) / 2;
  const midTotalB = (lowB + highB) / 2;
  const surface = surfaceForVenue(input.venue, format);
  const winA = computeWinProbability({
    slug: input.slug,
    event: input.event,
    seriesName: input.seriesName,
    venue: input.venue,
    teamA: input.teamA,
    teamB: input.teamB,
    format,
    surface,
    ratingA,
    ratingB,
    midTotalA,
    midTotalB,
  });

  return {
    format,
    formatLabel: formatLabel(format, input.event),
    phases,
    totalA: formatRange(lowA, highA),
    totalB: formatRange(lowB, highB),
    winA,
    winB: 100 - winA,
    surface,
  };
}

function homeSide(seriesName: string, teamA: string, teamB: string): "A" | "B" | null {
  const tour = seriesName.match(/tour of\s+([^,]+)/i);
  const host = (tour?.[1] ?? "").trim().toLowerCase();
  if (!host) return null;
  if (teamA.toLowerCase().includes(host) || host.includes(teamA.toLowerCase())) return "A";
  if (teamB.toLowerCase().includes(host) || host.includes(teamB.toLowerCase())) return "B";
  return null;
}

function seriesMatchIndex(event: string): number {
  const numbered = event.match(/(\d+)(?:st|nd|rd|th)/i);
  if (numbered?.[1]) return Number(numbered[1]);
  if (event.toLowerCase().includes("one-off")) return 1;
  return 2;
}

function computeWinProbability(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  teamA: string;
  teamB: string;
  format: CricketFormat;
  surface: string;
  ratingA: number;
  ratingB: number;
  midTotalA: number;
  midTotalB: number;
}): number {
  const winRand = mulberry32(hashSeed(`win|${input.slug}|${input.venue}|${input.format}|${input.event}`));
  const slugSpread = (hashSeed(`win-spread|${input.slug}`) % 21) - 10;
  const matchNo = seriesMatchIndex(input.event);
  const home = homeSide(input.seriesName, input.teamA, input.teamB);

  let winA =
    50 +
    (input.ratingA - input.ratingB) * 0.85 +
    (input.midTotalA - input.midTotalB) * 0.12 +
    slugSpread +
    (matchNo - 2) * 1.6 +
    jitter(winRand, 4.5);

  const homeBoost = input.format === "TEST" ? 6.5 : input.format === "ODI" ? 4 : 3.2;
  if (home === "A") winA += homeBoost;
  if (home === "B") winA -= homeBoost;
  if (input.surface.includes("SEAM") && home === "A") winA += 2.2;
  if (input.surface.includes("SEAM") && home === "B") winA -= 2.2;
  if (input.surface.includes("SPIN") && home === "A") winA += 1.6;
  if (input.surface.includes("SPIN") && home === "B") winA -= 1.6;

  return Math.round(clamp(winA, 37, 67));
}

export function isCricketFixture(
  seriesName: string,
  cricketSeries: ReadonlyArray<{ series: string }>,
): boolean {
  return cricketSeries.some((series) => series.series === seriesName);
}

export function getCricketPageSeo(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  date: string;
  time: string;
}): { title: string; description: string; keywords: string } {
  const { teamA, teamB } = parseMatchTeams(input.event);
  const projection = getCricketProjection({
    slug: input.slug,
    event: input.event,
    seriesName: input.seriesName,
    venue: input.venue,
    teamA,
    teamB,
  });
  const favorite = projection.winA >= projection.winB ? teamA : teamB;
  const favPct = Math.max(projection.winA, projection.winB);
  const cluster = cricketKeywordCluster({
    teamA,
    teamB,
    event: input.event,
    seriesName: input.seriesName,
    venue: input.venue,
    formatLabel: projection.formatLabel,
  });
  const favoriteCode = cricketTeamCode(favorite);

  const title = fitSeoTitle([
    `${cluster.primary} & pitch report | Fairplay`,
    `${cluster.primary} | Fairplay`,
    `${cluster.codePair} prediction | ${cluster.stage} | Fairplay`,
    `${cluster.codePair} prediction | Fairplay`,
  ]);
  const description = fitSeoDescription(
    `${cluster.codePair} ${cluster.stage} prediction: who will win at ${venueSeoLabel(input.venue)}? ${favoriteCode} lean ${favPct}%, projected ${projection.totalA} vs ${projection.totalB}, plus pitch report and Fairplay odds.`,
  );
  // Meta keywords stay at the football/tennis page length; the full cluster still
  // drives titles, H1s and body copy.
  const keywords = [
    cluster.codePair,
    `${cluster.codePair} prediction`,
    `${cluster.codePair} ${cluster.stage} prediction`,
    `${cluster.codePair} pitch report`,
    cluster.namePair,
    `${cluster.namePair} prediction`,
    `${cluster.venueShort} pitch report`,
    `${projection.formatLabel} match prediction`,
  ].join(", ");
  return { title, description, keywords };
}

function venueShortName(venue: string): string {
  const primary = venue.split(",")[0]?.trim();
  return primary && primary.length > 0 ? primary : venue;
}

function stageLabel(event: string): string {
  const beforeVs = event.split(":")[0]?.trim();
  return beforeVs && beforeVs.length > 0 ? beforeVs : event;
}

export function getWhyBetReasons(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  teamA: string;
  teamB: string;
  format: CricketFormat;
  formatLabel: string;
  surface: string;
  winA: number;
  winB: number;
  totalA: string;
  totalB: string;
}): string[] {
  const venueShort = venueShortName(input.venue);
  const stage = stageLabel(input.event);
  const matchNo = seriesMatchIndex(input.event);
  const home = homeSide(input.seriesName, input.teamA, input.teamB);
  const host = home === "A" ? input.teamA : home === "B" ? input.teamB : null;
  const favorite = input.winA >= input.winB ? input.teamA : input.teamB;
  const underdog = favorite === input.teamA ? input.teamB : input.teamA;
  const favPct = Math.max(input.winA, input.winB);
  const underPct = 100 - favPct;
  const phaseHint =
    input.format === "TEST"
      ? "Session 2"
      : input.format === "ODI"
        ? "overs 11-40"
        : "the Powerplay";

  const market =
    favPct >= 57
      ? `${favorite} opens as a ${favPct}% favourite in the ${stage} at ${venueShort}. Fairplay still carries deep lay/back on ${underdog} (${underPct}%) if the new ball bites.`
      : `${input.teamA} vs ${input.teamB} is a ${input.winA}-${input.winB} coin-flip at ${venueShort}. Tight ${input.formatLabel} books usually move hardest through ${phaseHint}.`;

  const venueLine = input.surface.includes("SEAM")
    ? `${input.venue} is tagged ${input.surface}. Early wicket and swing markets are the first edges${host ? ` — especially with ${host} bowling first change` : ""}.`
    : input.surface.includes("SPIN")
      ? `${venueShort} is a ${input.surface} deck. Middle-over spin and partnership-break markets on ${input.event} typically outperform pre-toss prices.`
      : input.surface.includes("HIGH-SCORING") || input.surface.includes("BATTERS")
        ? `Projected bands sit at ${input.totalA} (${input.teamA}) and ${input.totalB} (${input.teamB}). Totals, boundaries, and ${phaseHint} run markets are the live edges at ${venueShort}.`
        : `${venueShort} reads ${input.surface}. First-innings projection ${input.teamA} ${input.totalA} / ${input.teamB} ${input.totalB} — trade the ${input.formatLabel} total before the toss premium vanishes.`;

  const formatLine =
    input.format === "TEST"
      ? `This is ${input.formatLabel} cricket: session-by-session ladders for ${input.event} settle faster on Fairplay than overnight bookmaker lines, especially after Session 1 at ${venueShort}.`
      : input.format === "ODI"
        ? `${input.formatLabel} at ${venueShort} funnels liquidity into middle-over and death-over brackets. ${input.teamA} ${input.totalA} vs ${input.teamB} ${input.totalB} is the first-innings map to fade or back.`
        : `${input.formatLabel} at ${venueShort} is a 20-over sprint. Watch Powerplay and death-over extras on ${input.teamA} vs ${input.teamB} — those two windows price the whole innings.`;

  const seriesLine = (() => {
    if (matchNo <= 1) {
      return `${stage} opens ${input.seriesName}. Opening-night prices on ${input.teamA} vs ${input.teamB} are widest before the venue settles — Fairplay fills that gap in minutes.`;
    }
    if (matchNo >= 5) {
      return `${stage} is the back end of ${input.seriesName}. Series-context fancy (top batter, most sixes) at ${venueShort} usually lags the live ${input.formatLabel} winner market.`;
    }
    if (matchNo === 3) {
      return `${stage} is the midpoint of ${input.seriesName}. ${favorite} at ${favPct}% can flip on one session — in-play ${underdog} lays are the value if ${venueShort} holds up.`;
    }
    return `${stage} of ${input.seriesName} at ${venueShort}. Form from the previous fixture is already in the ${favorite} price — Fairplay's matching engine still lets you back ${underdog} without the bookmaker margin.`;
  })();

  const extras = [
    `${input.event} at ${venueShort}: toss-to-first-ball is when Fairplay depth on ${input.teamA}/${input.teamB} is thinnest — that is the window for ${phaseHint} overlays.`,
    `Settlement on ${input.event} posts inside 180 minutes. Lock ${input.formatLabel} positions now; ${favorite}'s ${favPct}% line will not wait until ${phaseHint} is done.`,
    `${host ? `${host} have home information at ${venueShort}. ` : ""}A 300% Fairplay ID boost still applies to ${input.event} — use it on ${underdog} if the ${input.surface.toLowerCase()} read is wrong.`,
    `Live ${input.formatLabel} fancy (next ${input.format === "TEST" ? "10 overs" : "over"}) on ${input.teamA} vs ${input.teamB} is sharper on exchange than on a book — especially after ${phaseHint} at ${venueShort}.`,
  ];

  const extra = extras[hashSeed(`why-extra|${input.slug}|${input.venue}`) % extras.length] ?? extras[0] ?? seriesLine;

  const pool = [market, venueLine, formatLine, seriesLine, extra];
  const start = hashSeed(`why-order|${input.slug}`) % 4;
  const picked = [0, 1, 2, 3].map((offset) => {
    const item = pool[(start + offset) % pool.length];
    return item ?? market;
  });

  return picked;
}
