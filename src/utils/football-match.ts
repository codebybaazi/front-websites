import { FOOTBALL_SCHEDULE_DATA } from "@/lib/sports-data";
import { resolveFootballSquad, type FootballPlayer } from "@/lib/football-squads";
import { parseMatchTeams } from "@/utils/match-projections";
import { fitSeoDescription, fitSeoTitle } from "@/utils/seo-text";
import { getMatchSlug } from "@/utils/slugify";

export interface FootballWatchPlayer extends FootballPlayer {
  team: string;
  impact: number;
}

export interface FootballFaq {
  q: string;
  a: string;
}

export interface FootballBlogCard {
  slug: string;
  title: string;
  category: string;
  desc: string;
  date: string;
  icon: string;
  img: string;
}

export interface FootballMatchModel {
  teamA: string;
  teamB: string;
  codeA: string;
  codeB: string;
  stage: string;
  group: string;
  formatLabel: string;
  tournament: string;
  referee: string;
  styleA: string;
  styleB: string;
  strengthA: string;
  strengthB: string;
  leakA: string;
  leakB: string;
  overview: string;
  takeaways: string[];
  winA: number;
  winD: number;
  winB: number;
  predictedWinner: string;
  confidence: number;
  btts: number;
  over25: number;
  under35: number;
  dnb: string;
  asianHandicap: string;
  groupLean: string;
  htA: number;
  htB: number;
  ftA: number;
  ftB: number;
  xgA: string;
  xgB: string;
  shotsA: string;
  shotsB: string;
  firstGoalWindow: string;
  secondGoalWindow: string;
  htft: string;
  firstScorer: string;
  corners: string;
  cards: string;
  scorerLeanA: string;
  scorerLeanB: string;
  players: FootballWatchPlayer[];
  whyBet: string[];
  about: string;
  markets: Array<{ name: string; detail: string }>;
}

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

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

const TEAM_RATING: Record<string, number> = {
  brazil: 94, argentina: 93, france: 92, england: 90, spain: 90, germany: 88, portugal: 88,
  netherlands: 86, italy: 85, belgium: 84, uruguay: 82, croatia: 81, usa: 80, mexico: 79,
  colombia: 78, japan: 77, morocco: 77, senegal: 76, denmark: 76, switzerland: 75,
  "korea republic": 74, turkey: 73, austria: 72, "man city": 91, liverpool: 88, arsenal: 86,
  chelsea: 82, "man utd": 80, canada: 73, australia: 72, nigeria: 74, egypt: 73, ecuador: 71,
  "ivory coast": 70, paraguay: 70, "czechia": 69, norway: 78, scotland: 68, algeria: 70,
  ghana: 69, iran: 68, "south africa": 66, "saudi arabia": 65, qatar: 64, panama: 63,
  jamaica: 63, "costa rica": 62, haiti: 60, tunisia: 67, jordan: 61, uzbekistan: 64,
  "new zealand": 61, "bosnia and herzegovina": 67,
};

function teamRating(name: string): number {
  const key = name.toLowerCase();
  const hit = Object.keys(TEAM_RATING).find((n) => key.includes(n) || n.includes(key));
  if (hit && TEAM_RATING[hit] != null) return TEAM_RATING[hit];
  return 68 + (hashSeed(name) % 12);
}

function teamCode(name: string): string {
  const codes: Record<string, string> = {
    mexico: "MEX", "south africa": "RSA", "korea republic": "KOR", czechia: "CZE",
    canada: "CAN", "bosnia and herzegovina": "BIH", spain: "ESP", algeria: "ALG",
    haiti: "HAI", scotland: "SCO", brazil: "BRA", morocco: "MAR", usa: "USA",
    paraguay: "PAR", australia: "AUS", turkey: "TUR", germany: "GER", ghana: "GHA",
    japan: "JPN", norway: "NOR", france: "FRA", senegal: "SEN", ecuador: "ECU",
    qatar: "QAT", argentina: "ARG", "ivory coast": "CIV", netherlands: "NED",
    uzbekistan: "UZB", england: "ENG", egypt: "EGY", colombia: "COL", "new zealand": "NZL",
    portugal: "POR", nigeria: "NGA", uruguay: "URU", iran: "IRN", belgium: "BEL",
    panama: "PAN", croatia: "CRO", "saudi arabia": "KSA", italy: "ITA", jamaica: "JAM",
    switzerland: "SUI", jordan: "JOR", denmark: "DEN", "costa rica": "CRC", austria: "AUT",
    tunisia: "TUN", "man city": "MCI", liverpool: "LIV", arsenal: "ARS", chelsea: "CHE",
    "man utd": "MUN",
  };
  const key = name.toLowerCase();
  const hit = Object.keys(codes).find((n) => key === n || key.includes(n));
  if (hit && codes[hit]) return codes[hit];
  return name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase() || "TBD";
}

export function parseFootballStage(event: string, seriesName: string): string {
  const group = event.match(/\(Group\s+([A-L])\)/i)?.[1];
  const prefix = event.split(":")[0]?.trim() ?? "";
  if (group) {
    const md = prefix.match(/Match\s+(\d+)/i);
    const n = md?.[1] ? Number(md[1]) : 1;
    const matchday = n <= 12 ? 1 : n <= 24 ? 2 : 3;
    const opening = n <= 12 ? " · Opening Match" : "";
    return `Group ${group.toUpperCase()} · Matchday ${matchday}${opening}`;
  }
  if (/final/i.test(event) && !/play-off|third/i.test(event)) return "FIFA World Cup Final";
  if (/third place/i.test(event)) return "Third Place Play-off";
  if (/semi/i.test(event)) return "Semi-Final";
  if (/quarter/i.test(event)) return "Quarter-Final";
  if (/round of 16/i.test(event)) return "Round of 16";
  if (/round of 32/i.test(event)) return "Round of 32";
  if (/derby|opening weekend/i.test(event)) return prefix || "Premier League";
  return prefix || seriesName;
}

export function isFootballFixture(
  seriesName: string,
  footballSeries: ReadonlyArray<{ series: string }>,
): boolean {
  return footballSeries.some((series) => series.series === seriesName);
}

export function getFootballPageSeo(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  date: string;
  time: string;
}): { title: string; description: string; keywords: string } {
  const model = getFootballMatchModel(input);
  const names = `${model.teamA} vs ${model.teamB}`;
  const title = fitSeoTitle([
    `${names} football prediction | ${model.stage} | Fairplay`,
    `${names} prediction | ${model.stage} | Fairplay`,
    `${names} football prediction | Fairplay`,
    `${names} | Fairplay`,
  ]);
  const description = fitSeoDescription(
    `${names} (${model.stage}) at ${input.venue} on ${input.date || "TBD"}. Fairplay lean: ${model.predictedWinner} ${model.confidence}%, FT ${model.ftA}-${model.ftB}. 1X2 and live football betting on a Fairplay ID.`,
  );
  const keywords = [
    `${model.teamA} vs ${model.teamB}`,
    `${model.teamA} vs ${model.teamB} prediction`,
    `${model.teamA} vs ${model.teamB} betting`,
    model.stage,
    model.tournament,
    input.venue,
    "Fairplay football odds",
    "FIFA World Cup 2026 betting",
  ].join(", ");
  return { title, description, keywords };
}

export function getFootballMatchModel(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  date: string;
  time: string;
}): FootballMatchModel {
  const { teamA, teamB } = parseMatchTeams(input.event);
  const rand = mulberry32(hashSeed(`fb|${input.slug}|${input.venue}|${input.event}`));
  const ratingA = teamRating(teamA);
  const ratingB = teamRating(teamB);
  const homeBoost = /mexico city|azteca|toronto|bmo|los angeles|sofi|etihad|old trafford|emirates/i.test(input.venue) ? 3.2 : 0;
  let winA = 36 + (ratingA - ratingB) * 0.9 + homeBoost + (rand() * 8 - 4);
  winA = clamp(Math.round(winA), 28, 62);
  const winD = clamp(Math.round(22 + rand() * 8), 18, 30);
  let winB = 100 - winA - winD;
  if (winB < 16) {
    winA -= 16 - winB;
    winB = 16;
  }
  winA = clamp(winA, 24, 64);
  winB = 100 - winA - winD;

  const favorite = winA >= winB ? teamA : teamB;
  const underdog = favorite === teamA ? teamB : teamA;
  const favPct = Math.max(winA, winB);
  const ftFav = favPct >= 52 ? 2 : 1;
  const ftDog = rand() > 0.55 ? 1 : rand() > 0.35 ? 0 : 1;
  const ftA = favorite === teamA ? ftFav : ftDog;
  const ftB = favorite === teamA ? ftDog : ftFav;
  const htA = Math.min(ftA, rand() > 0.45 ? 1 : 0);
  const htB = Math.min(ftB, rand() > 0.5 ? 1 : 0);
  const btts = clamp(Math.round(48 + (ftA > 0 && ftB > 0 ? 12 : 0) + rand() * 10 - 4), 42, 68);
  const over25 = clamp(Math.round(44 + (ftA + ftB >= 3 ? 14 : 0) + rand() * 8), 40, 66);
  const under35 = clamp(100 - Math.round(over25 * 0.55), 54, 78);
  const xgA = (1.05 + ftA * 0.42 + rand() * 0.25).toFixed(1);
  const xgB = (0.85 + ftB * 0.4 + rand() * 0.22).toFixed(1);
  const stage = parseFootballStage(input.event, input.seriesName);
  const group = input.event.match(/\(Group\s+([A-L])\)/i)?.[1]?.toUpperCase() ?? "";
  const knockout = /round of|quarter|semi|final|play-off/i.test(stage);
  const formatLabel = knockout
    ? /group/i.test(stage)
      ? "90 minutes (group stage)"
      : "90 minutes + extra time if required"
    : /premier/i.test(input.seriesName)
      ? "90 minutes (Premier League)"
      : "90 minutes (group stage)";

  const styles = ["4-3-3", "4-2-3-1", "4-4-2", "3-4-3", "4-3-1-2"];
  const styleA = styles[hashSeed(teamA) % styles.length] ?? "4-3-3";
  const styleB = styles[hashSeed(teamB) % styles.length] ?? "4-4-2";
  const venueShort = input.venue.split(",")[0]?.trim() ?? input.venue;
  const kickoff = input.time && input.time !== "TBD" ? input.time : "kick-off TBC";

  const squadA = resolveFootballSquad(teamA);
  const squadB = resolveFootballSquad(teamB);
  const pA = squadA[0];
  const pB = squadB[0];
  const players: FootballWatchPlayer[] = [
    ...squadA.slice(0, 3).map((player, i) => ({
      ...player,
      team: teamA,
      impact: Math.min(96, 78 + Math.round(rand() * 12) + i),
    })),
    ...squadB.slice(0, 3).map((player, i) => ({
      ...player,
      team: teamB,
      impact: Math.min(95, 76 + Math.round(rand() * 12) + i),
    })),
  ];

  const ahLine = favPct >= 56 ? `${favorite} -0.5` : `${favorite} -0.25`;
  const htft = htA === htB ? `Draw / ${favorite}` : `${favorite} / ${favorite}`;
  const firstScorer = winA >= winB ? teamA : teamB;

  const overview = `${teamA} face ${teamB} in the ${stage} of ${input.seriesName} at ${input.venue} on ${input.date || "TBD"}, ${kickoff}. ${
    knockout
      ? "Knockout football swings on the first goal — a draw keeps nobody alive, so the first 20 minutes usually write the entire script."
      : "Group-stage football at this level swings on the first goal. Both sides know a draw keeps them alive, so watch the shape of the opening 25 minutes — it usually tells you the entire match story."
  } Fairplay has priced 200+ markets on this fixture, with live cash-out every minute.`;

  const takeaways = [
    `Wait for confirmed line-ups (60 mins before KO) — Fairplay's exchange margin on ${teamA} vs ${teamB} tightens after team news at ${venueShort}.`,
    `Trade first, bet later: back over 0.5 first-half goals pre-match, cash out on a red card or a corner spell in ${stage}.`,
    `Asian handicap ${ahLine} beats straight 1X2 on this card — you get half your stake back on a draw.`,
    knockout
      ? `Never chase a losing anytime-scorer in extra time — the ${stage} market is already priced for penalties.`
      : `HT/FT ${htft} is the value combo if ${favorite} control territory after a cagey first half at ${venueShort}.`,
  ];

  const whyBet = [
    `${favorite} opens at ${favPct}% on Fairplay for ${input.event}. ${underdog} still has live lay/back if the first 25 minutes stay 0-0 at ${venueShort}.`,
    `${input.venue} tilts territorial stats. Modelled xG sits at ${teamA} ${xgA} / ${teamB} ${xgB} — totals and BTTS (${btts}%) are the first live edges.`,
    `${stage} liquidity concentrates in 1X2, BTTS, over 2.5 (${over25}%) and HT/FT ${htft}. Cash-out is live on all four.`,
    `A 300% Fairplay ID boost still applies to ${teamA} vs ${teamB} — use it on ${underdog} if the ${styleB} block holds through 60 minutes.`,
  ];

  const about = `About ${teamA}: they set up in a ${styleA}. Strengths are ${
    ratingA >= 82 ? "territorial control and set-piece delivery" : "transitions from a compact block"
  }; the leak is ${
    ratingA >= 82 ? "space behind full-backs when the press is broken" : "centre-back cover if they concede first"
  }. About ${teamB}: a ${styleB} side that ${
    ratingB >= 82 ? "plays through the half-spaces and loads the box late" : "protects a low block and counters on the first turnover"
  }. Head-to-head modelling for this venue averages ${(Number(xgA) + Number(xgB)).toFixed(1)} xG and prices BTTS at ${btts}%.`;

  return {
    teamA,
    teamB,
    codeA: teamCode(teamA),
    codeB: teamCode(teamB),
    stage,
    group: group ? `Group ${group}` : stage,
    formatLabel,
    tournament: input.seriesName.includes("Premier")
      ? "Premier League 2026/27"
      : "FIFA World Cup 2026 — Canada · Mexico · USA",
    referee: "To be confirmed by FIFA",
    styleA,
    styleB,
    strengthA: ratingA >= 82 ? "Transitions and chance quality" : "Compact block and set pieces",
    strengthB: ratingB >= 82 ? "Territory and chance quality" : "Low block and counters",
    leakA: ratingA >= 82 ? "Space behind full-backs" : "Set-piece defending",
    leakB: ratingB >= 82 ? "High line vs direct balls" : "Set-piece defending",
    overview,
    takeaways,
    winA,
    winD,
    winB,
    predictedWinner: favorite,
    confidence: favPct,
    btts,
    over25,
    under35,
    dnb: `${favorite} @ value on Fairplay`,
    asianHandicap: ahLine,
    groupLean: group ? `${favorite} — narrow favourite for ${group}` : `${favorite} — knockout favourite`,
    htA,
    htB,
    ftA,
    ftB,
    xgA,
    xgB,
    shotsA: `${4 + ftA}-${6 + ftA}`,
    shotsB: `${3 + ftB}-${5 + ftB}`,
    firstGoalWindow: `${18 + (hashSeed(input.slug) % 8)} – ${34 + (hashSeed(input.venue) % 8)} min`,
    secondGoalWindow: "55 – 70 min",
    htft,
    firstScorer,
    corners: `9 – 11 total · ${teamA} 5-7 · ${teamB} 3-5`,
    cards: `3.5 – 4.5 yellow · ${teamA} 1-2 · ${teamB} 2-3 · 0-1 red risk`,
    scorerLeanA: [pA?.name, squadA[1]?.role].filter(Boolean).join(" · ") || teamA,
    scorerLeanB: [pB?.name, squadB[1]?.role].filter(Boolean).join(" · ") || teamB,
    players,
    whyBet,
    about,
    markets: [
      { name: "Match Result (1X2)", detail: `Home / draw / away live on Fairplay — ${teamA} ${winA}% · Draw ${winD}% · ${teamB} ${winB}%.` },
      { name: "Both Teams to Score", detail: `Priced at ${btts}% for this ${stage} — a strong hedge against a 1-0 grind.` },
      { name: "Over/Under Total Goals", detail: `Over 2.5 at ${over25}% · Under 3.5 at ${under35}% pre-match and in-play.` },
      { name: "HT/FT (Double Result)", detail: `Model lean ${htft} at ${venueShort} — highest-margin combo if the first half stays tight.` },
      { name: "Anytime Goalscorer", detail: `Full books for ${teamA} and ${teamB} squads plus first & last scorer.` },
      { name: "Asian Handicap", detail: `${ahLine} is the value line versus straight 1X2 on this card.` },
    ],
  };
}

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  const kk = Math.min(k, n - k);
  let r = 1;
  for (let i = 1; i <= kk; i++) {
    r = (r * (n - kk + i)) / i;
  }
  return Math.round(r);
}

function combinadic(n: number, k: number, idx: number): number[] {
  const combo: number[] = [];
  let x = idx;
  let remaining = k;
  for (let i = 0; i < n && remaining > 0; i++) {
    const ways = binom(n - i - 1, remaining - 1);
    if (x < ways) {
      combo.push(i);
      remaining -= 1;
    } else {
      x -= ways;
    }
  }
  while (combo.length < k) combo.push(Math.min(n - 1, combo.length));
  return combo;
}

export function getFootballFaqs(input: {
  slug: string;
  event: string;
  teamA: string;
  teamB: string;
  stage: string;
  venue: string;
  predictedWinner: string;
  confidence: number;
  btts: number;
  over25: number;
}): FootballFaq[] {
  const label = `${input.teamA} vs ${input.teamB}`;
  const pool: FootballFaq[] = [
    {
      q: `What markets are live for ${label}?`,
      a: `1X2, BTTS, over/under 2.5 and 3.5, HT/FT, Asian handicap, anytime scorer, cards and corners. ${input.event} is fully covered on the Fairplay book and exchange.`,
    },
    {
      q: `Who does the model favour in ${input.stage}?`,
      a: `${input.predictedWinner} at ${input.confidence}% for ${label} at ${input.venue}. The sharper angles are still BTTS (${input.btts}%) and over 2.5 (${input.over25}%), not just the headline winner.`,
    },
    {
      q: `Can I bet live on ${label}?`,
      a: `Yes. In-play markets on ${input.event} refresh continuously with cash-out on 1X2, BTTS, totals and HT/FT. First 25 minutes at ${input.venue} is when prices move hardest.`,
    },
    {
      q: `When does ${label} settle on Fairplay?`,
      a: `Settled winnings post to your Fairplay wallet within 180 minutes of the official result at ${input.venue}. Extra time and penalties on knockout ties settle with the FIFA result.`,
    },
    {
      q: `How do I get a Fairplay ID before ${input.event}?`,
      a: `WhatsApp the Fairplay desk. Verification is typically live within 180 seconds so you can be funded before kick-off for ${label} in ${input.stage}.`,
    },
    {
      q: `What is the minimum stake on ${label}?`,
      a: `Stakes on ${input.event} start at ₹10, with VIP limits on scorer and corner books. Session caps are set per market, not per tournament.`,
    },
    {
      q: `Is Asian handicap better than 1X2 for ${label}?`,
      a: `If you are on ${input.predictedWinner} at ${input.confidence}%, the handicap line usually beats straight 1X2 because a draw returns half your stake. Trade it on Fairplay before line-ups land.`,
    },
    {
      q: `Does BTTS have value on ${label}?`,
      a: `The model prices both teams to score at ${input.btts}% for this ${input.stage} at ${input.venue}. That is the hedge if ${input.predictedWinner} scores first and the game opens.`,
    },
  ];
  const n = pool.length;
  const idx = hashSeed(`fb-faq|${input.slug}|${input.venue}`) % Math.max(1, binom(n, 4));
  const picked: FootballFaq[] = [];
  const used = new Set<string>();
  for (const index of combinadic(n, 4, idx)) {
    const faq = pool[index];
    if (!faq || used.has(faq.q)) continue;
    used.add(faq.q);
    picked.push(faq);
  }
  for (const faq of pool) {
    if (picked.length >= 4) break;
    if (!used.has(faq.q)) {
      used.add(faq.q);
      picked.push(faq);
    }
  }
  return picked.slice(0, 4);
}

function isFootballBlog(article: FootballBlogCard): boolean {
  const hay = `${article.slug} ${article.title} ${article.category}`.toLowerCase();
  if (hay.includes("ipl") || hay.includes("t20") || (hay.includes("cricket") && !hay.includes("football"))) return false;
  if (hay.includes("casino") || hay.includes("poker") || hay.includes("teen-patti")) return false;
  return hay.includes("football") || hay.includes("fifa") || hay.includes("soccer") || hay.includes("world-cup") || hay.includes("world cup");
}

function scoreFootballBlog(article: FootballBlogCard, event: string, seriesName: string, teamA: string, teamB: string): number {
  const hay = `${article.slug} ${article.title} ${article.desc}`.toLowerCase();
  let score = 4;
  if (hay.includes("football")) score += 40;
  if (hay.includes("fifa") || hay.includes("world cup") || hay.includes("world-cup")) score += 36;
  if (hay.includes("prediction") || hay.includes("live")) score += 12;
  if (seriesName.toLowerCase().includes("premier") && hay.includes("premier")) score += 20;
  for (const bit of [teamA, teamB, event].join(" ").toLowerCase().split(/\s+/).filter((w) => w.length > 4)) {
    if (hay.includes(bit)) score += 6;
  }
  if (hay.includes("cricket") || hay.includes("ipl") || hay.includes("t20")) score -= 30;
  return score;
}

const footballBlogCache = new WeakMap<object, Map<string, FootballBlogCard[]>>();

export function getRelatedFootballBlogs(
  articles: readonly FootballBlogCard[],
  input: { slug: string; event: string; seriesName: string; teamA: string; teamB: string },
): FootballBlogCard[] {
  let cached = footballBlogCache.get(articles as object);
  if (!cached) {
    cached = new Map();
    const pool = articles.filter((article) => isFootballBlog(article));
    const source = pool.length >= 3 ? pool : [...articles];
    const used = new Set<string>();
    for (const series of FOOTBALL_SCHEDULE_DATA) {
      for (const match of series.matches) {
        const slug = getMatchSlug(series.series, match);
        const { teamA, teamB } = parseMatchTeams(match.event);
        const ranked = [...source].sort(
          (a, b) =>
            scoreFootballBlog(b, match.event, series.series, teamA, teamB) -
              scoreFootballBlog(a, match.event, series.series, teamA, teamB) || a.slug.localeCompare(b.slug),
        );
        const n = ranked.length;
        const total = Math.max(1, binom(n, 3));
        const start = hashSeed(slug) % total;
        let picked: FootballBlogCard[] = [];
        for (let offset = 0; offset < total && picked.length < 3; offset++) {
          const combo = combinadic(n, 3, (start + offset) % total)
            .map((i) => ranked[i])
            .filter((row): row is FootballBlogCard => Boolean(row));
          const key = combo.map((row) => row.slug).sort().join("|");
          if (combo.length < 3 || used.has(key)) continue;
          used.add(key);
          picked = combo;
        }
        if (picked.length < 3) picked = ranked.slice(0, 3);
        cached.set(slug, picked);
      }
    }
    footballBlogCache.set(articles as object, cached);
  }
  return cached.get(input.slug) ?? articles.filter((article) => isFootballBlog(article)).slice(0, 3);
}
