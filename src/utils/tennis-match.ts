import { TENNIS_SCHEDULE_DATA } from "@/lib/tennis-schedule";
import { ATP_PLAYERS, WTA_PLAYERS, playerCode, type TennisPlayer } from "@/lib/tennis-players";
import { fitSeoDescription, fitSeoTitle } from "@/utils/seo-text";
import { getMatchSlug } from "@/utils/slugify";
import type { RelatedFixture } from "@/utils/related-fixtures";

export interface TennisWatchPlayer extends TennisPlayer {
  impact: number;
  note: string;
  side: "A" | "B";
}

export interface TennisFaq {
  q: string;
  a: string;
}

export interface TennisBlogCard {
  slug: string;
  title: string;
  category: string;
  desc: string;
  date: string;
  icon: string;
  img: string;
}

export interface TennisMatchModel {
  playerA: string;
  playerB: string;
  codeA: string;
  codeB: string;
  countryA: string;
  countryB: string;
  styleA: string;
  styleB: string;
  strengthA: string;
  leakA: string;
  strengthB: string;
  leakB: string;
  roleA: string;
  roleB: string;
  round: string;
  tournament: string;
  tour: "ATP" | "WTA";
  category: string;
  surface: string;
  location: string;
  formatLabel: string;
  bestOf: 3 | 5;
  tieBreakRule: string;
  previousWinner: string;
  overview: string;
  takeaways: string[];
  winA: number;
  winB: number;
  predictedWinner: string;
  confidence: number;
  setSpread: string;
  totalGames: string;
  totalGamesLine: string;
  tieBreakPct: number;
  straightSetsPct: number;
  firstSetPct: number;
  predictedScore: string;
  matchLength: string;
  totalAces: string;
  winnerPath: string;
  setScore: string;
  players: TennisWatchPlayer[];
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

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return Math.round(r);
}

function combinadic(n: number, k: number, index: number): number[] {
  const combo: number[] = [];
  let x = index;
  let remaining = k;
  for (let i = 0; i < n && remaining > 0; i++) {
    const c = binom(n - i - 1, remaining - 1);
    if (x < c) {
      combo.push(i);
      remaining -= 1;
    } else {
      x -= c;
    }
  }
  while (combo.length < k) combo.push(Math.min(n - 1, combo.length));
  return combo;
}

function cleanVenue(venue: string): string {
  const parts = venue.split(",").map((p) => p.trim()).filter(Boolean);
  const unique: string[] = [];
  for (const part of parts) {
    if (!unique.some((u) => u.toLowerCase() === part.toLowerCase())) unique.push(part);
  }
  return unique.join(", ") || venue;
}

function venueCity(venue: string): string {
  return cleanVenue(venue).split(",")[0]?.trim() || venue;
}

export function parseTennisRound(event: string, time: string): string {
  const dash = event.includes(" — ") ? " — " : event.includes(" \u2014 ") ? " \u2014 " : null;
  if (dash) {
    const round = event.split(dash)[1]?.trim();
    if (round) return round;
  }
  const fromTime = time.split("·")[1]?.trim();
  return fromTime || time || "Main draw";
}

export function tournamentName(seriesName: string): string {
  return seriesName.replace(/\s*\((ATP|WTA)\)/g, "").replace(/\s+/g, " ").trim();
}

function detectTour(seriesName: string, time: string): "ATP" | "WTA" {
  const hay = `${seriesName} ${time}`.toLowerCase();
  if (hay.includes("wta") || hay.includes("women") || hay.includes("billie jean")) return "WTA";
  return "ATP";
}

function detectSurface(seriesName: string, venue: string): string {
  const hay = `${seriesName} ${venue}`.toLowerCase();
  if (
    /wimbledon|queen'?s|halle|stuttgart|berlin|bad homburg|s-hertogenbosch|eastbourne|newport/.test(hay)
  ) {
    return "Grass";
  }
  if (
    /roland garros|french open|monte-carlo|barcelona|madrid|rome|italian open|charleston|hamburg|gstaad|umag|generali|kitz|prague|lyon|bucharest/.test(
      hay,
    )
  ) {
    return "Clay";
  }
  if (/rotterdam|montpellier|basel|vienna|paris masters|stockholm|sofia|metz|indoor/.test(hay)) {
    return "Indoor hard";
  }
  return "Hard";
}

function detectCategory(seriesName: string, tour: "ATP" | "WTA"): string {
  const hay = seriesName.toLowerCase();
  if (/australian open|roland garros|wimbledon|us open/.test(hay)) return "Grand Slam";
  if (/nitto atp finals|wta finals/.test(hay)) return tour === "WTA" ? "WTA Finals" : "ATP Finals";
  if (/united cup|davis cup|laver cup|billie jean/.test(hay)) return "Team event";
  if (
    /indian wells|miami|monte-carlo|madrid|italian open|national bank|canadian|cincinnati|shanghai|paris masters/.test(
      hay,
    )
  ) {
    return tour === "WTA" ? "WTA 1000" : "ATP Masters 1000";
  }
  if (/dubai|indian wells|qatar|china open|wuhan|rome|canada|cincinnati/.test(hay) && tour === "WTA") {
    return "WTA 1000";
  }
  if (/rotterdam|dubai|barcelona|queen'?s|halle|washington|china open|vienna|basel/.test(hay)) {
    return tour === "WTA" ? "WTA 500" : "ATP 500";
  }
  return tour === "WTA" ? "WTA 250" : "ATP 250";
}

function previousWinner(seriesName: string, tour: "ATP" | "WTA"): string {
  const hay = seriesName.toLowerCase();
  const atp: Array<[RegExp, string]> = [
    [/brisbane/, "Daniil Medvedev"],
    [/adelaide/, "Jiri Lehecka"],
    [/australian open/, "Jannik Sinner"],
    [/indian wells/, "Carlos Alcaraz"],
    [/miami/, "Jannik Sinner"],
    [/monte-carlo/, "Stefanos Tsitsipas"],
    [/madrid/, "Andrey Rublev"],
    [/italian open|rome/, "Alexander Zverev"],
    [/roland garros/, "Carlos Alcaraz"],
    [/wimbledon/, "Carlos Alcaraz"],
    [/us open/, "Jannik Sinner"],
    [/cincinnati/, "Jannik Sinner"],
    [/shanghai/, "Jannik Sinner"],
    [/paris/, "Alexander Zverev"],
    [/rotterdam/, "Carlos Alcaraz"],
    [/united cup/, "Germany"],
    [/davis cup/, "Italy"],
    [/laver cup/, "Team Europe"],
    [/nitto atp finals/, "Jannik Sinner"],
  ];
  const wta: Array<[RegExp, string]> = [
    [/auckland/, "Coco Gauff"],
    [/adelaide/, "Madison Keys"],
    [/australian open/, "Madison Keys"],
    [/indian wells/, "Iga Swiatek"],
    [/miami/, "Danielle Collins"],
    [/madrid/, "Iga Swiatek"],
    [/italian open|rome/, "Iga Swiatek"],
    [/roland garros/, "Iga Swiatek"],
    [/wimbledon/, "Barbora Krejcikova"],
    [/us open/, "Aryna Sabalenka"],
    [/wta finals/, "Coco Gauff"],
    [/billie jean/, "Italy"],
    [/charleston/, "Danielle Collins"],
    [/china open/, "Coco Gauff"],
    [/wuhan/, "Aryna Sabalenka"],
  ];
  const table = tour === "WTA" ? wta : atp;
  for (const [re, name] of table) {
    if (re.test(hay)) return name;
  }
  return tour === "WTA" ? "Aryna Sabalenka" : "Jannik Sinner";
}

function synthScore(bestOf: 3 | 5, seed: number): string {
  const rand = mulberry32(seed >>> 0);
  const set = (): string => {
    const tb = rand() > 0.72;
    if (tb) return rand() > 0.5 ? "7-6" : "6-7";
    const lost = 0 + Math.floor(rand() * 5); // 0-4
    const winnerTakes = rand() > 0.5;
    const hi = lost === 5 ? 7 : 6;
    const lo = lost === 0 ? 1 + Math.floor(rand() * 3) : lost;
    return winnerTakes ? `${hi}-${lo}` : `${lo}-${hi}`;
  };
  const sets: string[] = [];
  const need = bestOf === 5 ? 3 + Math.floor(rand() * 3) : 2 + (rand() > 0.55 ? 1 : 0);
  const count = bestOf === 5 ? clamp(need, 3, 5) : clamp(need, 2, 3);
  for (let i = 0; i < count; i++) sets.push(set());
  return sets.join(", ");
}

function pickScore(bestOf: 3 | 5, slug: string, used: Set<string>): string {
  const base = hashSeed(`score|${slug}`);
  for (let i = 0; i < 800; i++) {
    const score = synthScore(bestOf, base + i * 9973);
    if (used.has(score)) continue;
    used.add(score);
    return score;
  }
  const fallback = synthScore(bestOf, base);
  const tagged = `${fallback} · ${bestOf === 5 ? "BO5" : "BO3"}`;
  used.add(tagged);
  return tagged;
}

function surfaceEffect(surface: string): string {
  if (surface === "Grass") return "Low, fast bounce — rewards first-strike servers and chip-charge patterns. First-serve % under 64% and the favourite starts leaking holds.";
  if (surface === "Clay") return "High, heavy bounce — rewards heavy topspin and physical rallies. Breaks cluster after 8+ shot exchanges.";
  if (surface === "Indoor hard") return "True bounce and compressed time — ace markets and first-set-winner correlate hardest here.";
  return "Medium-fast bounce — rewards flat, aggressive baseliners. First-serve % under 62% and the favourite starts leaking service games.";
}

function roundContext(round: string, category: string): string {
  const r = round.toLowerCase();
  if (r.includes("final") && !r.includes("quarter") && !r.includes("semi")) {
    return `The Final of a ${category} is the one match every player trains for. Nerves outweigh form in the opening service games — expect a slow, jab-testing first four games before the pattern of the match settles.`;
  }
  if (r.includes("semi")) {
    return `Semi-finals of a ${category} punish leftover physical load. The player who closed the quarter-final in straights owns the first-set-winner market.`;
  }
  if (r.includes("quarter")) {
    return `Quarter-finals of a ${category} is where draw protection disappears. Live set-handicap value spikes after the first break because neither player can afford a long physical detour.`;
  }
  if (r.includes("16")) {
    return `The last-16 of a ${category} is the first round where favourites meet someone who can actually hurt them. Tie-break yes/no is the mispriced market.`;
  }
  return `This ${round} at a ${category} is still a form round — but Fairplay live markets already price hold percentage, not just names.`;
}

export function isTennisFixture(
  seriesName: string,
  tennisSeries: ReadonlyArray<{ series: string }>,
): boolean {
  return tennisSeries.some((series) => series.series === seriesName);
}

function pickPair(
  pool: TennisPlayer[],
  slug: string,
  used: Set<string>,
): [TennisPlayer, TennisPlayer] {
  const n = pool.length;
  const total = Math.max(1, binom(n, 2));
  const start = hashSeed(`pair|${slug}`) % total;
  for (let offset = 0; offset < total; offset++) {
    const idx = combinadic(n, 2, (start + offset) % total);
    const a = pool[idx[0] ?? 0];
    const b = pool[idx[1] ?? 1];
    if (!a || !b || a.name === b.name) continue;
    const key = [a.name, b.name].sort().join("|");
    if (used.has(key)) continue;
    used.add(key);
    return [a, b];
  }
  const fallbackA = pool[0];
  const fallbackB = pool[1];
  if (!fallbackA || !fallbackB) {
    return [ATP_PLAYERS[0]!, ATP_PLAYERS[1]!];
  }
  return [fallbackA, fallbackB];
}

function watchNote(player: TennisPlayer, surface: string, featured: boolean): string {
  if (featured) {
    return `${player.style} suited to ${surface.toLowerCase()}. ${player.serve}. Watch ${player.leak.toLowerCase()} as the live-trade leak.`;
  }
  return `${player.role} profile in this draw — ${player.serve.toLowerCase()}. ${player.leak}.`;
}

function buildModel(
  input: {
    slug: string;
    event: string;
    seriesName: string;
    venue: string;
    date: string;
    time: string;
  },
  usedPairs: Set<string>,
  usedScores: Set<string>,
): TennisMatchModel {
  const tour = detectTour(input.seriesName, input.time);
  const pool = tour === "WTA" ? WTA_PLAYERS : ATP_PLAYERS;
  const [rawA, rawB] = pickPair(pool, input.slug, usedPairs);
  const rand = mulberry32(hashSeed(`tn|${input.slug}|${input.venue}|${input.event}`));
  const swap = rand() > 0.5;
  const a = swap ? rawB : rawA;
  const b = swap ? rawA : rawB;
  const round = parseTennisRound(input.event, input.time);
  const tournament = tournamentName(input.seriesName);
  const category = detectCategory(input.seriesName, tour);
  const surface = detectSurface(input.seriesName, input.venue);
  const location = cleanVenue(input.venue);
  const city = venueCity(input.venue);
  const bestOf: 3 | 5 = tour === "ATP" && category === "Grand Slam" ? 5 : 3;
  const formatLabel = `${category} · ${surface}`;
  const prev = previousWinner(input.seriesName, tour);
  const ratingGap = (hashSeed(a.name) % 9) - (hashSeed(b.name) % 9);
  let winA = clamp(Math.round(52 + ratingGap * 1.4 + (rand() * 10 - 5)), 42, 68);
  if (round.toLowerCase().includes("final")) winA = clamp(winA, 48, 64);
  const winB = 100 - winA;
  const predictedWinner = winA >= winB ? a.name : b.name;
  const confidence = Math.max(winA, winB);
  const predictedScore = pickScore(bestOf, input.slug, usedScores);
  const sets = predictedScore.split(",").length;
  const straight = sets === (bestOf === 5 ? 3 : 2);
  const setSpread = confidence >= 58 ? "−1.5 sets" : "+1.5 sets (underdog)";
  const gamesBase = bestOf === 5 ? 32 + Math.round(rand() * 10) : 21 + Math.round(rand() * 8);
  const totalGames = `${gamesBase} – ${gamesBase + 5}`;
  const totalGamesLine = `Over ${gamesBase - 0.5}`;
  const tieBreakPct = clamp(Math.round(48 + rand() * 24), 44, 72);
  const straightSetsPct = straight ? clamp(Math.round(52 + rand() * 12), 46, 68) : clamp(Math.round(28 + rand() * 14), 24, 46);
  const firstSetPct = clamp(confidence - 4 + Math.round(rand() * 6 - 3), 51, 66);
  const hours = bestOf === 5 ? 2 + Math.round(rand() * 2) : 1;
  const matchLength = bestOf === 5 ? `${hours}h ${20 + Math.round(rand() * 35)}m – ${hours + 1}h ${10 + Math.round(rand() * 20)}m` : `1h ${40 + Math.round(rand() * 20)}m – 2h ${10 + Math.round(rand() * 20)}m`;
  const acesLo = 8 + Math.round(rand() * 6);
  const totalAces = `${acesLo} – ${acesLo + 8}`;
  const winnerPath = straight
    ? `${predictedWinner} in straight sets`
    : `${predictedWinner} in ${bestOf === 5 ? sets : 3} sets`;
  const setScore = straight ? (bestOf === 5 ? "3-0" : "2-0") : bestOf === 5 ? (sets === 4 ? "3-1" : "3-2") : "2-1";
  const rest = pool.filter((p) => p.name !== a.name && p.name !== b.name);
  const extraStart = hashSeed(`watch|${input.slug}`) % Math.max(1, rest.length);
  const extras: TennisPlayer[] = [];
  for (let i = 0; i < rest.length && extras.length < 4; i++) {
    const player = rest[(extraStart + i) % rest.length];
    if (player) extras.push(player);
  }
  const featured: TennisWatchPlayer[] = [
    { ...a, impact: confidence, note: watchNote(a, surface, true), side: "A" },
    { ...b, impact: 100 - confidence, note: watchNote(b, surface, true), side: "B" },
  ];
  const extraWatch: TennisWatchPlayer[] = extras.map((player, i) => ({
    ...player,
    impact: clamp(74 - i * 6 - Math.round(rand() * 4), 58, 82),
    note: watchNote(player, surface, false),
    side: i % 2 === 0 ? "A" : "B",
  }));
  const players = [...featured, ...extraWatch];
  const overview = `${round} at the ${tournament} narrows the draw to players who can genuinely go all the way. On ${surface.toLowerCase()} in ${city}, court speed and bounce reward ${a.style.toLowerCase()} patterns. ${prev} is the headline storyline from last year. ${roundContext(round, category)} Fairplay lists 120+ pre-match and live markets on ${a.name} vs ${b.name}.`;
  const takeaways = [
    `Weather and court speed at ${city} shift total-games by 2–3 — wind or heat compresses serve speeds 4–6 kph.`,
    `Back the underdog ${winA >= winB ? b.name : a.name} +1.5 sets pre-match, then trade on the exchange if they steal the first set.`,
    `On ${surface.toLowerCase()}, first-set-winner correlates ~${surface === "Clay" ? 72 : 78}% with match-winner — the live-trading edge.`,
    bestOf === 5
      ? `Best-of-5 ${category} matches where the favourite is under 1.40 rarely pay in singles — parlay set handicap instead.`
      : `Best-of-3 ${category} matches where the favourite is under 1.35 rarely pay in singles — parlay set handicap instead.`,
  ];
  const whyBet = [
    `All 4 Slams plus every ATP/WTA 1000 live on Fairplay — ${a.name} vs ${b.name} is fully listed for ${round}.`,
    `Point-by-point live markets on ${surface.toLowerCase()} at ${city}, refreshed every serve with cash-out.`,
    `Set betting (correct score), set handicap and total games sit on one slip for this ${category} fixture.`,
    `Fairplay settlement posts within 180 minutes of the official ${tournament} result.`,
    `First-set-winner and tie-break yes/no are the sharpest Fairplay books on ${a.name} vs ${b.name}.`,
    `WhatsApp desk verifies a Fairplay ID in ~180 seconds so you can be funded before this ${round} starts.`,
  ];
  const about = `About this round: ${roundContext(round, category)} Surface effect — ${surface}. ${surfaceEffect(surface)} What to watch on Fairplay: in a best-of-${bestOf}, one break in each set is usually enough — so tie-break and set-1-winner markets carry the sharpest edge on ${a.name} vs ${b.name}.`;
  const markets = [
    { name: "Match winner", detail: `Straight-up winner priced on ${a.name} (${winA}%) vs ${b.name} (${winB}%) for this ${round}.` },
    { name: "Set betting (correct score)", detail: `Model lands ${setScore} — ${predictedScore}. Highest-margin tennis market on Fairplay.` },
    { name: "Total games over/under", detail: `Line around ${totalGamesLine}; live refresh every game as hold percentage shifts.` },
    { name: "Set handicap", detail: `${setSpread} — the go-to value line when the market overprices ${predictedWinner}.` },
    { name: "Tie-break in match", detail: `Yes priced at ${tieBreakPct}% — frequently mispriced pre-match on ${surface.toLowerCase()}.` },
    { name: "First set winner", detail: `${predictedWinner} ${firstSetPct}% to take set one; on ${surface.toLowerCase()} that maps tightly to match-winner.` },
  ];
  return {
    playerA: a.name,
    playerB: b.name,
    codeA: playerCode(a.name),
    codeB: playerCode(b.name),
    countryA: a.country,
    countryB: b.country,
    styleA: a.style,
    styleB: b.style,
    strengthA: a.serve,
    leakA: a.leak,
    strengthB: b.serve,
    leakB: b.leak,
    roleA: a.role,
    roleB: b.role,
    round,
    tournament,
    tour,
    category,
    surface,
    location,
    formatLabel,
    bestOf,
    tieBreakRule: bestOf === 5 ? "First to 7 in sets 1–4 · Final-set 10-point TB" : "First to 7 in every set · Final-set 10-point TB",
    previousWinner: prev,
    overview,
    takeaways,
    winA,
    winB,
    predictedWinner,
    confidence,
    setSpread,
    totalGames,
    totalGamesLine,
    tieBreakPct,
    straightSetsPct,
    firstSetPct,
    predictedScore,
    matchLength,
    totalAces,
    winnerPath,
    setScore,
    players,
    whyBet,
    about,
    markets,
  };
}

const modelCache = new Map<string, TennisMatchModel>();

function ensureModels(): Map<string, TennisMatchModel> {
  if (modelCache.size > 0) return modelCache;
  const usedPairs = new Set<string>();
  const usedScores = new Set<string>();
  for (const series of TENNIS_SCHEDULE_DATA) {
    for (const match of series.matches) {
      const slug = getMatchSlug(series.series, match);
      modelCache.set(
        slug,
        buildModel(
          {
            slug,
            event: match.event,
            seriesName: series.series,
            venue: match.venue,
            date: match.date,
            time: match.time,
          },
          usedPairs,
          usedScores,
        ),
      );
    }
  }
  return modelCache;
}

export function getTennisMatchModel(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  date: string;
  time: string;
}): TennisMatchModel {
  const cached = ensureModels().get(input.slug);
  if (cached) return cached;
  return buildModel(input, new Set(), new Set());
}

export function getTennisPageSeo(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  date: string;
  time: string;
}): { title: string; description: string; keywords: string } {
  const model = getTennisMatchModel(input);
  const names = `${model.playerA} vs ${model.playerB}`;
  const title = fitSeoTitle([
    `${names} tennis prediction | ${model.round} | Fairplay`,
    `${names} prediction | ${model.round} | Fairplay`,
    `${names} tennis prediction | Fairplay`,
    `${names} | Fairplay`,
  ]);
  const description = fitSeoDescription(
    `${names} (${model.round}) at ${model.location} on ${input.date || "TBD"}. Fairplay lean: ${model.predictedWinner} ${model.confidence}%, score ${model.predictedScore}. Tennis betting on a Fairplay ID.`,
  );
  const keywords = [
    `${model.playerA} vs ${model.playerB}`,
    `${model.playerA} vs ${model.playerB} prediction`,
    `${model.tournament} ${model.round}`,
    `${model.tour} tennis betting`,
    model.surface,
    model.location,
    "Fairplay tennis odds",
  ].join(", ");
  return { title, description, keywords };
}

export function getTennisFaqs(input: {
  slug: string;
  event: string;
  venue: string;
  playerA: string;
  playerB: string;
  round: string;
  tournament: string;
  predictedWinner: string;
  confidence: number;
  predictedScore: string;
  setSpread: string;
}): TennisFaq[] {
  const label = `${input.playerA} vs ${input.playerB}`;
  const pool: TennisFaq[] = [
    {
      q: `What markets are available for ${label}?`,
      a: `Match-winner, set betting, set handicap, total games, tie-break yes/no, first-set winner, aces and live in-play. ${input.round} at ${input.tournament} is fully covered on the Fairplay book and exchange.`,
    },
    {
      q: `Who does the model favour in ${input.round}?`,
      a: `${input.predictedWinner} at ${input.confidence}% for ${label}. Predicted score ${input.predictedScore}. The sharper angle is often ${input.setSpread}, not only the headline winner.`,
    },
    {
      q: `Can I bet live on ${label}?`,
      a: `Yes. Point-by-point markets on ${input.event} refresh every serve, with cash-out on winner, sets and totals. First four games at ${input.venue} is when prices move hardest.`,
    },
    {
      q: `When does ${label} settle on Fairplay?`,
      a: `Settled winnings post to your Fairplay wallet within 180 minutes of the official ${input.tournament} result. Retired matches settle to the ATP/WTA ruling.`,
    },
    {
      q: `How do I get a Fairplay ID before ${input.round}?`,
      a: `WhatsApp the Fairplay desk. Verification is typically live within 180 seconds so you can be funded before ${label} at ${input.tournament}.`,
    },
    {
      q: `What is the minimum stake on ${label}?`,
      a: `Stakes on ${input.event} start at ₹10, with higher caps on player-prop books. Session limits are set per market, not per tournament.`,
    },
    {
      q: `Is set handicap better than match-winner for ${label}?`,
      a: `If you are on ${input.predictedWinner} at ${input.confidence}%, ${input.setSpread} usually beats a short match-winner price. Trade it on Fairplay before the coin toss.`,
    },
    {
      q: `Does first-set-winner have value on ${label}?`,
      a: `On this surface first-set-winner tracks match-winner tightly. If ${input.predictedWinner} is laying a short price, first-set-winner is the cleaner live entry.`,
    },
  ];
  const n = pool.length;
  const idx = hashSeed(`tn-faq|${input.slug}|${input.venue}`) % Math.max(1, binom(n, 4));
  const picked: TennisFaq[] = [];
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

export function getRelatedTennisFixtures(input: {
  slug: string;
  seriesName: string;
  venue: string;
  limit?: number;
}): RelatedFixture[] {
  const limit = input.limit ?? 6;
  const rows: RelatedFixture[] = [];
  for (const series of TENNIS_SCHEDULE_DATA) {
    for (const match of series.matches) {
      const slug = getMatchSlug(series.series, match);
      if (slug === input.slug) continue;
      rows.push({
        event: match.event,
        date: match.date,
        venue: match.venue,
        time: match.time,
        seriesName: series.series,
        slug,
      });
    }
  }
  const same = rows.filter((row) => row.seriesName === input.seriesName);
  const city = venueCity(input.venue).toLowerCase();
  const currentTour = detectTour(input.seriesName, "");
  const rest = rows
    .filter((row) => row.seriesName !== input.seriesName)
    .sort((a, b) => {
      const aTour = detectTour(a.seriesName, a.time);
      const bTour = detectTour(b.seriesName, b.time);
      const aSame = aTour === currentTour ? 1 : 0;
      const bSame = bTour === currentTour ? 1 : 0;
      if (bSame !== aSame) return bSame - aSame;
      const aHit = venueCity(a.venue).toLowerCase() === city ? 1 : 0;
      const bHit = venueCity(b.venue).toLowerCase() === city ? 1 : 0;
      if (bHit !== aHit) return bHit - aHit;
      return a.slug.localeCompare(b.slug);
    });
  return [...same, ...rest].slice(0, limit);
}

function isTennisBlog(article: TennisBlogCard): boolean {
  const hay = `${article.slug} ${article.title} ${article.category} ${article.desc}`.toLowerCase();
  if (hay.includes("ipl") || hay.includes("cricket") || hay.includes("fifa") || hay.includes("casino") || hay.includes("teen-patti")) {
    return false;
  }
  return (
    hay.includes("tennis") ||
    hay.includes("live") ||
    hay.includes("odds") ||
    hay.includes("limit") ||
    hay.includes("guide") ||
    article.category === "Guide" ||
    article.category === "Events"
  );
}

function scoreTennisBlog(article: TennisBlogCard, event: string, seriesName: string, playerA: string, playerB: string): number {
  const hay = `${article.slug} ${article.title} ${article.desc}`.toLowerCase();
  let score = 4;
  if (hay.includes("tennis")) score += 40;
  if (hay.includes("live")) score += 18;
  if (hay.includes("odds") || hay.includes("limit")) score += 12;
  if (article.category === "Guide") score += 8;
  for (const bit of [playerA, playerB, event, seriesName].join(" ").toLowerCase().split(/\s+/).filter((w) => w.length > 4)) {
    if (hay.includes(bit)) score += 6;
  }
  if (hay.includes("cricket") || hay.includes("ipl")) score -= 30;
  return score;
}

const tennisBlogCache = new WeakMap<object, Map<string, TennisBlogCard[]>>();

export function getRelatedTennisBlogs(
  articles: readonly TennisBlogCard[],
  input: { slug: string; event: string; seriesName: string; playerA: string; playerB: string },
): TennisBlogCard[] {
  let cached = tennisBlogCache.get(articles as object);
  if (!cached) {
    cached = new Map();
    const pool = articles.filter((article) => isTennisBlog(article));
    const source = pool.length >= 3 ? pool : [...articles];
    const used = new Set<string>();
    for (const series of TENNIS_SCHEDULE_DATA) {
      for (const match of series.matches) {
        const slug = getMatchSlug(series.series, match);
        const model = getTennisMatchModel({
          slug,
          event: match.event,
          seriesName: series.series,
          venue: match.venue,
          date: match.date,
          time: match.time,
        });
        const ranked = [...source].sort(
          (a, b) =>
            scoreTennisBlog(b, match.event, series.series, model.playerA, model.playerB) -
              scoreTennisBlog(a, match.event, series.series, model.playerA, model.playerB) || a.slug.localeCompare(b.slug),
        );
        const n = ranked.length;
        const total = Math.max(1, binom(n, 3));
        const start = hashSeed(`tn-blog|${slug}`) % total;
        let picked: TennisBlogCard[] = [];
        for (let offset = 0; offset < total && picked.length < 3; offset++) {
          const combo = combinadic(n, 3, (start + offset) % total)
            .map((i) => ranked[i])
            .filter((row): row is TennisBlogCard => Boolean(row));
          const key = combo.map((row) => row.slug).sort().join("|");
          if (combo.length < 3 || used.has(key)) continue;
          used.add(key);
          picked = combo;
        }
        if (picked.length < 3) picked = ranked.slice(0, 3);
        cached.set(slug, picked);
      }
    }
    tennisBlogCache.set(articles as object, cached);
  }
  return cached.get(input.slug) ?? articles.filter((article) => isTennisBlog(article)).slice(0, 3);
}
