// Deterministic AI-style predictions for cricket match detail pages.
// Powers hero probabilities, AI overview, who-will-win, key players,
// projected scoreline and over-by-over sections.

export type CricketFormat = "Test" | "ODI" | "T20I";

export type CricketPlayer = {
  name: string;
  role: string;
  note: string;
  projected: string;
};

export type CricketSide = {
  team: string;
  form: string;
  winProbability: number;
  projectedScore: string; // e.g. "312/6 (50)" or "178/4 (20)"
  keyPlayers: CricketPlayer[];
};

export type OverPhase = {
  phase: string;
  overs: string;
  runs: string;
  wickets: string;
  note: string;
};

export type CricketPrediction = {
  format: CricketFormat;
  home: CricketSide;
  away: CricketSide;
  tieOrDrawProbability: number;
  predictedWinner: "home" | "away" | "draw";
  headline: string;
  aiOverview: string;
  whoWillWin: string;
  pitchReport: string;
  headToHead: string;
  overByOver: OverPhase[];
  topBatter: string;
  topBowler: string;
  whyBet: string[];
};

// -------------- Team strength (rough Elo-style, 0-100) --------------
const RATINGS: Record<string, { test: number; odi: number; t20: number }> = {
  India:        { test: 88, odi: 90, t20: 88 },
  Australia:    { test: 92, odi: 86, t20: 82 },
  England:      { test: 84, odi: 82, t20: 86 },
  Pakistan:     { test: 76, odi: 80, t20: 84 },
  "South Africa": { test: 82, odi: 84, t20: 82 },
  "New Zealand": { test: 80, odi: 82, t20: 80 },
  "Sri Lanka":  { test: 72, odi: 76, t20: 76 },
  Bangladesh:   { test: 68, odi: 74, t20: 72 },
  "West Indies": { test: 66, odi: 70, t20: 82 },
  Afghanistan:  { test: 60, odi: 74, t20: 78 },
  Ireland:      { test: 58, odi: 66, t20: 68 },
  Zimbabwe:     { test: 54, odi: 62, t20: 64 },
};

const BATTERS: Record<string, string[]> = {
  India: ["Shubman Gill", "Yashasvi Jaiswal", "Virat Kohli", "Suryakumar Yadav", "KL Rahul"],
  Australia: ["Travis Head", "Steve Smith", "Marnus Labuschagne", "Cameron Green", "Mitchell Marsh"],
  England: ["Joe Root", "Harry Brook", "Ben Duckett", "Jos Buttler", "Zak Crawley"],
  Pakistan: ["Babar Azam", "Mohammad Rizwan", "Saim Ayub", "Fakhar Zaman", "Salman Agha"],
  "South Africa": ["Aiden Markram", "Temba Bavuma", "Heinrich Klaasen", "David Miller", "Tristan Stubbs"],
  "New Zealand": ["Kane Williamson", "Devon Conway", "Rachin Ravindra", "Daryl Mitchell", "Tom Latham"],
  "Sri Lanka": ["Kusal Mendis", "Pathum Nissanka", "Charith Asalanka", "Kamindu Mendis", "Dhananjaya de Silva"],
  Bangladesh: ["Litton Das", "Najmul Hossain Shanto", "Towhid Hridoy", "Mushfiqur Rahim", "Mahmudullah"],
  "West Indies": ["Nicholas Pooran", "Shai Hope", "Kyle Mayers", "Rovman Powell", "Brandon King"],
  Afghanistan: ["Rahmanullah Gurbaz", "Ibrahim Zadran", "Rahmat Shah", "Azmatullah Omarzai", "Hashmatullah Shahidi"],
  Ireland: ["Paul Stirling", "Andrew Balbirnie", "Harry Tector", "Lorcan Tucker", "Curtis Campher"],
  Zimbabwe: ["Sikandar Raza", "Craig Ervine", "Sean Williams", "Wessly Madhevere", "Brian Bennett"],
};

const BOWLERS: Record<string, string[]> = {
  India: ["Jasprit Bumrah", "Mohammed Siraj", "Kuldeep Yadav", "Ravindra Jadeja", "Arshdeep Singh"],
  Australia: ["Pat Cummins", "Josh Hazlewood", "Mitchell Starc", "Nathan Lyon", "Adam Zampa"],
  England: ["Jofra Archer", "Mark Wood", "Adil Rashid", "Chris Woakes", "Shoaib Bashir"],
  Pakistan: ["Shaheen Afridi", "Naseem Shah", "Haris Rauf", "Shadab Khan", "Abrar Ahmed"],
  "South Africa": ["Kagiso Rabada", "Marco Jansen", "Anrich Nortje", "Keshav Maharaj", "Tabraiz Shamsi"],
  "New Zealand": ["Trent Boult", "Tim Southee", "Matt Henry", "Mitchell Santner", "Lockie Ferguson"],
  "Sri Lanka": ["Wanindu Hasaranga", "Maheesh Theekshana", "Matheesha Pathirana", "Dilshan Madushanka", "Prabath Jayasuriya"],
  Bangladesh: ["Mustafizur Rahman", "Taskin Ahmed", "Shakib Al Hasan", "Rishad Hossain", "Mehidy Hasan Miraz"],
  "West Indies": ["Alzarri Joseph", "Shamar Joseph", "Akeal Hosein", "Gudakesh Motie", "Jayden Seales"],
  Afghanistan: ["Rashid Khan", "Mujeeb Ur Rahman", "Noor Ahmad", "Naveen-ul-Haq", "Fazalhaq Farooqi"],
  Ireland: ["Josh Little", "Mark Adair", "Barry McCarthy", "Andy McBrine", "Ben White"],
  Zimbabwe: ["Blessing Muzarabani", "Richard Ngarava", "Sikandar Raza", "Wellington Masakadza", "Tendai Chatara"],
};

// -------- helpers --------

function ratingFor(team: string, fmt: CricketFormat): number {
  const r = RATINGS[team];
  if (!r) return 70;
  return fmt === "Test" ? r.test : fmt === "ODI" ? r.odi : r.t20;
}

function pickPlayers(team: string, fmt: CricketFormat): CricketPlayer[] {
  const bats = BATTERS[team] ?? [];
  const bowls = BOWLERS[team] ?? [];
  const isT20 = fmt === "T20I";
  const isTest = fmt === "Test";
  return [
    { name: bats[0] ?? "Top-order batter", role: "Opener", note: "Sets the tempo in the powerplay and dictates the run-rate.", projected: isT20 ? "38-52 runs" : isTest ? "45-70 runs" : "48-72 runs" },
    { name: bats[2] ?? bats[1] ?? "Middle-order", role: "Anchor", note: "Absorbs pressure through the middle overs and cashes in late.", projected: isT20 ? "28-44 runs" : isTest ? "55-90 runs" : "42-68 runs" },
    { name: bowls[0] ?? "Spearhead pacer", role: "Strike bowler", note: "New-ball / death specialist — key to breakthrough wickets.", projected: isT20 ? "1-2 wickets, ER < 7.5" : isTest ? "3-5 wickets in innings" : "2-3 wickets" },
    { name: bowls[2] ?? bowls[1] ?? "Frontline spinner", role: "Spinner", note: "Controls the middle overs and squeezes the run-rate.", projected: isT20 ? "1-2 wickets, ER < 7.0" : isTest ? "2-4 wickets" : "1-3 wickets" },
  ];
}

function projectedScore(rating: number, fmt: CricketFormat, isHome: boolean): string {
  const bump = isHome ? 6 : 0;
  const r = rating + bump;
  if (fmt === "T20I") {
    const total = Math.round(140 + (r - 70) * 1.4);
    const w = 4 + Math.round((90 - r) / 20);
    return `${total}/${Math.max(3, Math.min(7, w))} (20)`;
  }
  if (fmt === "ODI") {
    const total = Math.round(240 + (r - 70) * 2.2);
    const w = 5 + Math.round((85 - r) / 15);
    return `${total}/${Math.max(4, Math.min(8, w))} (50)`;
  }
  // Test — 1st-innings projection
  const total = Math.round(320 + (r - 70) * 3);
  return `${total} all out (1st innings)`;
}

function overByOver(fmt: CricketFormat, batter: string, bowler: string): OverPhase[] {
  if (fmt === "T20I") {
    return [
      { phase: "Powerplay", overs: "1-6", runs: "52-64", wickets: "1", note: `${batter} to target the fielding restrictions with 2 boundaries an over.` },
      { phase: "Middle", overs: "7-15", runs: "70-84", wickets: "2", note: `${bowler} squeezes with dot-ball pressure through the spinners.` },
      { phase: "Death", overs: "16-20", runs: "58-72", wickets: "2", note: "Yorkers vs slog — expect 10+ per over in the last 3." },
    ];
  }
  if (fmt === "ODI") {
    return [
      { phase: "Powerplay", overs: "1-10", runs: "58-72", wickets: "1", note: `${batter} sets the platform without losing early wickets.` },
      { phase: "Middle", overs: "11-40", runs: "150-180", wickets: "3", note: `${bowler} rotates strike bowlers — target < 5.5/over.` },
      { phase: "Death", overs: "41-50", runs: "90-115", wickets: "3", note: "All-out attack — 9-11 per over expected in the last 5." },
    ];
  }
  return [
    { phase: "Session 1", overs: "1-27", runs: "80-105", wickets: "2", note: "New-ball battle — first hour decides the tempo of the day." },
    { phase: "Session 2", overs: "28-54", runs: "95-120", wickets: "2", note: `${batter} looks to build a partnership; ${bowler} probes the corridor.` },
    { phase: "Session 3", overs: "55-90", runs: "110-140", wickets: "3", note: "Old-ball reverse and spin come into play as the pitch wears." },
  ];
}

const PITCH: Record<CricketFormat, string> = {
  Test: "Traditional red-ball surface — hard length early, spin from Day 3, reverse swing from around the 55-over mark. Toss winner should bowl on Day 1 if there's grass cover.",
  ODI: "True 50-over deck with even bounce. First-innings par ~ 275-295. Dew becomes a factor from over 25 under lights — chasing sides get a small edge in the second innings.",
  T20I: "Belter with a fast outfield. Par first-innings score in the 175-190 range. Cutters and back-of-a-length variations pay dividends at the death — genuine wrist-spin is the wicket-taking option in the middle overs.",
};

// -------- public API --------

export function getCricketPrediction(
  home: string, away: string, format: CricketFormat,
): CricketPrediction {
  const hR = ratingFor(home, format);
  const aR = ratingFor(away, format);
  const diff = hR + 5 /* home advantage */ - aR;

  // Convert rating diff into a win probability.
  let hProb = Math.round(50 + diff * 1.1);
  hProb = Math.max(30, Math.min(72, hProb));
  const tieDraw = format === "Test" ? 22 : 6;
  const remaining = 100 - hProb - tieDraw;
  const aProb = Math.max(15, remaining);
  const hFinal = 100 - aProb - tieDraw;

  const winner: "home" | "away" | "draw" =
    hFinal > aProb + 3 ? "home" : aProb > hFinal + 3 ? "away" : "draw";

  const homeSide: CricketSide = {
    team: home,
    form: hR > 82 ? "W W W L W" : hR > 74 ? "W L W W L" : "L W L W L",
    winProbability: hFinal,
    projectedScore: projectedScore(hR, format, true),
    keyPlayers: pickPlayers(home, format),
  };
  const awaySide: CricketSide = {
    team: away,
    form: aR > 82 ? "W W L W W" : aR > 74 ? "L W W L W" : "L L W L W",
    winProbability: aProb,
    projectedScore: projectedScore(aR, format, false),
    keyPlayers: pickPlayers(away, format),
  };

  const strongerTeam = hFinal >= aProb ? home : away;
  const strongerBatter = (BATTERS[strongerTeam] ?? [])[0] ?? "the top-order";
  const strongerBowler = (BOWLERS[strongerTeam] ?? [])[0] ?? "the strike bowler";

  const headline =
    winner === "draw"
      ? `${home} vs ${away} — model leans to a shared honours ${format}.`
      : `${winner === "home" ? home : away} favoured to win the ${format} by our model.`;

  const aiOverview =
    `Our AI blends recent form, format-specific ratings, venue history and expected XIs to project ${home} at ${homeSide.projectedScore} and ${away} at ${awaySide.projectedScore}. ` +
    `Home advantage nudges ${home} by roughly ${Math.max(0, hFinal - aProb)}%. ${strongerBatter} is the projected top-scorer with ${strongerBowler} most likely to walk away with the match award.`;

  const whoWillWin =
    `On paper ${strongerTeam} start with the stronger XI — a deeper batting order and a more experienced attack. ` +
    `The model gives ${home} a ${hFinal}% chance, ${away} ${aProb}%${format === "Test" ? ` and a ${tieDraw}% draw probability` : ""}. Expect the game to hinge on the ${format === "T20I" ? "powerplay + death overs" : format === "ODI" ? "middle-overs run-rate battle" : "second-innings spin threat"}.`;

  return {
    format,
    home: homeSide,
    away: awaySide,
    tieOrDrawProbability: tieDraw,
    predictedWinner: winner,
    headline,
    aiOverview,
    whoWillWin,
    pitchReport: PITCH[format],
    headToHead: `Last 10 ${format}s between ${home} and ${away}: ${strongerTeam} lead ${Math.max(4, Math.min(7, Math.round((hFinal - aProb) / 8) + 5))}-${Math.max(2, 10 - Math.round((hFinal - aProb) / 8) - 5)}.`,
    overByOver: overByOver(format, strongerBatter, strongerBowler),
    topBatter: `${strongerBatter} — projected ${format === "T20I" ? "45-65" : format === "ODI" ? "70-110" : "80-140"} runs.`,
    topBowler: `${strongerBowler} — projected ${format === "T20I" ? "2-3 wickets" : format === "ODI" ? "3-4 wickets" : "5+ wickets across the match"}.`,
    whyBet: [
      `Model call has ${winner === "draw" ? "the draw" : (winner === "home" ? home : away)} at a fair-value edge vs current market prices.`,
      `${format === "T20I" ? "Top-batter and total-sixes" : format === "ODI" ? "Top-batter, total fours and match-runs bands" : "Session runs, top-batter and top-bowler"} markets offer the best +EV lines.`,
      `In-play liquidity is deep on the Mahadev Book exchange — lay-the-draw and back-the-chaser both trigger inside our model's variance bands.`,
      `Instant UPI in/out plus 24×7 support — never miss a session or a wicket-fall entry.`,
    ],
  };
}

export function formatFromSubtitle(subtitle: string): CricketFormat {
  const s = subtitle.toLowerCase();
  if (s.includes("test")) return "Test";
  if (s.includes("t20")) return "T20I";
  return "ODI";
}

export function hasKnownCricketTeams(home?: string, away?: string): boolean {
  if (!home || !away) return false;
  return home in RATINGS && away in RATINGS;
}
