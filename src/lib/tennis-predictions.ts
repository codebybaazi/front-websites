// Deterministic AI-style predictions for tennis fixtures.
// Editorial content — used to populate the tennis match detail page.

export type TennisContender = {
  name: string;
  seed: string;
  country: string;
  winProbability: number;
  form: string;
  strength: string;
};

export type TennisPrediction = {
  favourite: TennisContender;
  challenger: TennisContender;
  predictedScore: string; // e.g. "6-4, 6-3, 7-5"
  predictedSets: string; // "3-0" / "3-1" / "3-2"
  aiOverview: string;
  whoWillWin: string;
  matchup: string;
  keyStats: { label: string; value: string }[];
  surface: string;
  overGamesProbability: number; // over 22.5 games
  tiebreakProbability: number;
};

const SURFACE: Record<string, string> = {
  "Australian Open": "Hard (Plexicushion)",
  "Roland Garros": "Clay",
  "French Open": "Clay",
  Wimbledon: "Grass",
  "US Open": "Hard (Laykold)",
  "Italian Open": "Clay",
  "Madrid Open": "Clay (altitude)",
  "Monte-Carlo Masters": "Clay",
  "Miami Open": "Hard",
  "BNP Paribas Open": "Hard",
  "Indian Wells": "Hard",
  "Cincinnati Open": "Hard",
  "National Bank Open": "Hard",
  "Canadian Open": "Hard",
  "Rolex Shanghai Masters": "Hard",
  "Rolex Paris Masters": "Hard (indoor)",
  "Nitto ATP Finals": "Hard (indoor)",
  "WTA Finals": "Hard (indoor)",
  "Halle Open": "Grass",
  "Queen's Club Championships": "Grass",
  "Stuttgart Open": "Grass / Hard",
  "China Open": "Hard",
  Wuhan: "Hard",
};

function surfaceFor(seriesName: string): string {
  for (const key of Object.keys(SURFACE)) {
    if (seriesName.includes(key)) return SURFACE[key];
  }
  return "Hard court";
}

// Editorial contender bank per tour.
const ATP_TOP: TennisContender[] = [
  { name: "Jannik Sinner", seed: "1", country: "Italy", winProbability: 62, form: "W W W W L", strength: "First-strike hard-court tennis; best return-of-serve on tour." },
  { name: "Carlos Alcaraz", seed: "2", country: "Spain", winProbability: 60, form: "W W W L W", strength: "All-court variety, unmatched drop-shot and net game." },
  { name: "Novak Djokovic", seed: "3", country: "Serbia", winProbability: 55, form: "W L W W W", strength: "Elite return game and best-of-5 pedigree — still the reference on hard courts." },
  { name: "Alexander Zverev", seed: "4", country: "Germany", winProbability: 48, form: "W W L W W", strength: "Huge first serve, deep backhand — best on medium-fast hard." },
];

const WTA_TOP: TennisContender[] = [
  { name: "Aryna Sabalenka", seed: "1", country: "Belarus", winProbability: 60, form: "W W W L W", strength: "Fastest first serve on tour; dictates from the baseline." },
  { name: "Iga Świątek", seed: "2", country: "Poland", winProbability: 62, form: "W W W W W", strength: "Best forehand-topspin combo on clay; elite movement." },
  { name: "Coco Gauff", seed: "3", country: "USA", winProbability: 55, form: "W L W W W", strength: "Elite defence and speed — thrives in long rallies." },
  { name: "Elena Rybakina", seed: "4", country: "Kazakhstan", winProbability: 52, form: "W W W L W", strength: "Best serve in women's tennis; grass-court specialist." },
];

// Grand-Slam / tournament-specific favourites.
const TOURNAMENT_OVERRIDES: Record<string, { atp?: [string, string]; wta?: [string, string] }> = {
  Wimbledon: { atp: ["Carlos Alcaraz", "Jannik Sinner"], wta: ["Elena Rybakina", "Aryna Sabalenka"] },
  "Roland Garros": { atp: ["Carlos Alcaraz", "Jannik Sinner"], wta: ["Iga Świątek", "Aryna Sabalenka"] },
  "French Open": { atp: ["Carlos Alcaraz", "Jannik Sinner"], wta: ["Iga Świątek", "Aryna Sabalenka"] },
  "Australian Open": { atp: ["Jannik Sinner", "Carlos Alcaraz"], wta: ["Aryna Sabalenka", "Coco Gauff"] },
  "US Open": { atp: ["Jannik Sinner", "Novak Djokovic"], wta: ["Coco Gauff", "Aryna Sabalenka"] },
  "Italian Open": { atp: ["Carlos Alcaraz", "Jannik Sinner"], wta: ["Iga Świątek", "Aryna Sabalenka"] },
  "Madrid Open": { atp: ["Carlos Alcaraz", "Jannik Sinner"], wta: ["Iga Świątek", "Aryna Sabalenka"] },
  "Monte-Carlo": { atp: ["Carlos Alcaraz", "Novak Djokovic"] },
  "Halle Open": { atp: ["Jannik Sinner", "Alexander Zverev"] },
  "Queen's Club": { atp: ["Carlos Alcaraz", "Jannik Sinner"] },
  "WTA Finals": { wta: ["Iga Świątek", "Aryna Sabalenka"] },
  "Nitto ATP Finals": { atp: ["Jannik Sinner", "Carlos Alcaraz"] },
};

function pick(tour: "ATP" | "WTA", tournament: string): [TennisContender, TennisContender] {
  const bank = tour === "ATP" ? ATP_TOP : WTA_TOP;
  for (const key of Object.keys(TOURNAMENT_OVERRIDES)) {
    if (tournament.includes(key)) {
      const pair = TOURNAMENT_OVERRIDES[key][tour === "ATP" ? "atp" : "wta"];
      if (pair) {
        const fav = bank.find((c) => c.name === pair[0]);
        const chl = bank.find((c) => c.name === pair[1]);
        if (fav && chl) return [{ ...fav, winProbability: 58 }, { ...chl, winProbability: 34 }];
      }
    }
  }
  return [{ ...bank[0], winProbability: 55 }, { ...bank[1], winProbability: 38 }];
}

const STAGE_SCORES: Record<string, { sets: string; score: string; over: number; tb: number }> = {
  "Round of 16": { sets: "3-0", score: "6-3, 6-4, 6-2", over: 55, tb: 22 },
  "Quarter-finals": { sets: "3-1", score: "6-4, 4-6, 6-3, 6-2", over: 68, tb: 34 },
  "Semi-finals": { sets: "3-1", score: "7-5, 6-7(4), 6-4, 6-3", over: 74, tb: 46 },
  Final: { sets: "3-2", score: "6-4, 3-6, 7-6(5), 4-6, 6-3", over: 80, tb: 62 },
};

const WTA_STAGE_SCORES: Record<string, { sets: string; score: string; over: number; tb: number }> = {
  "Round of 16": { sets: "2-0", score: "6-3, 6-2", over: 42, tb: 18 },
  "Quarter-finals": { sets: "2-1", score: "6-4, 3-6, 6-3", over: 58, tb: 30 },
  "Semi-finals": { sets: "2-1", score: "7-5, 4-6, 6-3", over: 64, tb: 38 },
  Final: { sets: "2-1", score: "6-4, 6-7(3), 7-5", over: 70, tb: 52 },
};

export function getTennisPrediction(
  seriesName: string,
  tour: "ATP" | "WTA",
  stage: string,
): TennisPrediction {
  const [favourite, challenger] = pick(tour, seriesName);
  const bank = tour === "ATP" ? STAGE_SCORES : WTA_STAGE_SCORES;
  const stageDef = bank[stage] ?? bank["Quarter-finals"];
  const surface = surfaceFor(seriesName);

  const isSlam = seriesName.includes("Open") || seriesName.includes("Wimbledon") || seriesName.includes("Roland Garros");

  return {
    favourite,
    challenger,
    predictedScore: stageDef.score,
    predictedSets: stageDef.sets,
    aiOverview: `${favourite.name} enters the ${stage.toLowerCase()} of ${seriesName} as the model's favourite over ${challenger.name} on ${surface.toLowerCase()}. Expect a ${stage === "Final" ? "high-quality, best-of-" + (tour === "ATP" && isSlam ? "five" : "three") + " decider" : "physical set-by-set battle"} — ${favourite.strength}`,
    whoWillWin: `Model call: ${favourite.name} to advance. Serve-hold percentage on ${surface.toLowerCase()} and recent form tilt the ${stage.toLowerCase()} his way — ${challenger.name} needs an early break in set one to swing the tie.`,
    matchup: `${favourite.name}'s ${favourite.strength.toLowerCase()} vs ${challenger.name}'s ${challenger.strength.toLowerCase()}. Points typically end inside 5 shots on ${surface.toLowerCase()}, which favours the bigger first-serve %.`,
    keyStats: [
      { label: "Surface", value: surface },
      { label: "Head-to-head", value: `${favourite.name.split(" ").pop()} leads recent H2H` },
      { label: "Serve hold %", value: `${favourite.name.split(" ").pop()}: 87% · ${challenger.name.split(" ").pop()}: 82%` },
      { label: "Break-point saved %", value: `${favourite.name.split(" ").pop()}: 66% · ${challenger.name.split(" ").pop()}: 59%` },
      { label: "First-serve %", value: `${favourite.name.split(" ").pop()}: 68% · ${challenger.name.split(" ").pop()}: 63%` },
      { label: "Tour ranking", value: `#${favourite.seed} vs #${challenger.seed}` },
    ],
    surface,
    overGamesProbability: stageDef.over,
    tiebreakProbability: stageDef.tb,
  };
}

export function isTennisMatch(sport: string): boolean {
  return sport === "tennis";
}

export function tennisStageFromSubtitle(subtitle: string): string {
  if (/final/i.test(subtitle) && !/semi|quarter/i.test(subtitle)) return "Final";
  if (/semi/i.test(subtitle)) return "Semi-finals";
  if (/quarter/i.test(subtitle)) return "Quarter-finals";
  if (/round of 16/i.test(subtitle)) return "Round of 16";
  return "Quarter-finals";
}

export function tennisTourFromSubtitle(subtitle: string): "ATP" | "WTA" {
  return /wta/i.test(subtitle) ? "WTA" : "ATP";
}
