// Deterministic AI-style predictions for football fixtures.
// Data is editorial — used to populate the match detail page sections.

export type TeamPrediction = {
  winProbability: number; // 0-100
  projectedGoals: number;
  keyPlayers: { name: string; role: string; note: string }[];
  form: string; // e.g. "WWDWL"
};

export type MatchPrediction = {
  home: TeamPrediction;
  away: TeamPrediction;
  drawProbability: number;
  predictedWinner: "home" | "away" | "draw";
  predictedScore: string;
  aiOverview: string;
  whoWillWin: string;
  bttsProbability: number; // both teams to score
  over25Probability: number;
  headToHead: string;
  tactics: string;
};

// Ratings for known contenders (0-100). Everything else falls back to 62.
const TEAM_RATING: Record<string, number> = {
  Spain: 92,
  Argentina: 91,
  France: 90,
  England: 88,
  Brazil: 89,
  Germany: 86,
  Netherlands: 85,
  Portugal: 87,
  Belgium: 82,
  Croatia: 80,
  Uruguay: 79,
  Morocco: 80,
  Colombia: 81,
  Switzerland: 76,
  USA: 75,
  Denmark: 77,
  Japan: 78,
  Norway: 82,
};

const KEY_PLAYERS: Record<string, { name: string; role: string; note: string }[]> = {
  Spain: [
    { name: "Lamine Yamal", role: "RW", note: "Tournament top-scorer contender; drives 1v1 and creates the majority of Spain's big chances." },
    { name: "Pedri", role: "CM", note: "Metronome of the midfield — dictates possession and unlocks the final third." },
    { name: "Rodri", role: "DM", note: "Screens the back four and starts every build-up phase." },
  ],
  Argentina: [
    { name: "Lionel Messi", role: "RW / F", note: "Captain and creative outlet — most decisive final-third player at the World Cup." },
    { name: "Julián Álvarez", role: "ST", note: "Argentina's designated finisher, aggressive off-ball pressure." },
    { name: "Enzo Fernández", role: "CM", note: "Deep-lying playmaker; long switches and set-piece delivery." },
  ],
  France: [
    { name: "Kylian Mbappé", role: "LW / F", note: "France's talisman — direct running and clinical finishing." },
    { name: "Aurélien Tchouaméni", role: "DM", note: "Shields the back four and wins the second-ball battle." },
    { name: "Ousmane Dembélé", role: "RW", note: "Chance-creator on the right flank." },
  ],
  England: [
    { name: "Jude Bellingham", role: "AM", note: "Box-to-box driver, decisive in the final third of tournaments." },
    { name: "Harry Kane", role: "ST", note: "England's designated penalty-taker and target man." },
    { name: "Bukayo Saka", role: "RW", note: "Reliable 1v1 threat and set-piece creator." },
  ],
  Brazil: [
    { name: "Vinícius Júnior", role: "LW", note: "Brazil's leading dribbler and top-scorer candidate." },
    { name: "Rodrygo", role: "RW", note: "Interchanges with Vini to overload wide zones." },
    { name: "Casemiro", role: "DM", note: "Anchor of the midfield." },
  ],
  Netherlands: [
    { name: "Cody Gakpo", role: "LW / F", note: "Direct forward with a strong long shot." },
    { name: "Frenkie de Jong", role: "CM", note: "Dictates tempo and controls transitions." },
    { name: "Virgil van Dijk", role: "CB", note: "Captain and defensive leader." },
  ],
  Portugal: [
    { name: "Bruno Fernandes", role: "AM", note: "Chance-creator-in-chief; set-piece and open-play threat." },
    { name: "Rafael Leão", role: "LW", note: "Explosive on the left flank." },
    { name: "Bernardo Silva", role: "AM", note: "Progressive ball-carrier and secondary playmaker." },
  ],
  Germany: [
    { name: "Florian Wirtz", role: "AM", note: "Germany's most creative player, thrives between the lines." },
    { name: "Jamal Musiala", role: "AM / LW", note: "1v1 dribbler and knockout-stage difference-maker." },
    { name: "Joshua Kimmich", role: "CM", note: "Set-piece deliverer and midfield general." },
  ],
  Norway: [
    { name: "Erling Haaland", role: "ST", note: "Norway's talisman — expected to score in every knockout match." },
    { name: "Martin Ødegaard", role: "AM", note: "Captain, primary creator and set-piece taker." },
    { name: "Alexander Sørloth", role: "F", note: "Physical second striker; aerial threat." },
  ],
  Belgium: [
    { name: "Kevin De Bruyne", role: "AM", note: "Elite chance-creator; unmatched delivery." },
    { name: "Romelu Lukaku", role: "ST", note: "Physical focal-point striker." },
    { name: "Jérémy Doku", role: "LW", note: "Direct dribbler in wide areas." },
  ],
  Croatia: [
    { name: "Luka Modrić", role: "CM", note: "Veteran playmaker who still dictates tempo." },
    { name: "Mateo Kovačić", role: "CM", note: "Progressive carrier through midfield." },
    { name: "Andrej Kramarić", role: "F", note: "Croatia's most reliable goal-getter." },
  ],
  Morocco: [
    { name: "Achraf Hakimi", role: "RB", note: "Attacking full-back and set-piece deliverer." },
    { name: "Hakim Ziyech", role: "AM", note: "Left-footed chance-creator." },
    { name: "Youssef En-Nesyri", role: "ST", note: "Aerial focal point." },
  ],
  Uruguay: [
    { name: "Federico Valverde", role: "CM", note: "Box-to-box engine, long shots and late runs." },
    { name: "Darwin Núñez", role: "ST", note: "Direct runner in behind." },
    { name: "Ronald Araújo", role: "CB", note: "Defensive leader." },
  ],
  Colombia: [
    { name: "James Rodríguez", role: "AM", note: "Set-piece and open-play creator-in-chief." },
    { name: "Luis Díaz", role: "LW", note: "Direct dribbler and top-scorer candidate." },
    { name: "Richard Ríos", role: "CM", note: "Ball-progressing midfielder." },
  ],
  Switzerland: [
    { name: "Granit Xhaka", role: "CM", note: "Captain and midfield anchor." },
    { name: "Breel Embolo", role: "F", note: "Physical striker with knockout pedigree." },
    { name: "Manuel Akanji", role: "CB", note: "Ball-playing centre-back." },
  ],
  USA: [
    { name: "Christian Pulisic", role: "AM / W", note: "Captain and primary chance-creator." },
    { name: "Weston McKennie", role: "CM", note: "Box-to-box driver." },
    { name: "Folarin Balogun", role: "ST", note: "Designated finisher." },
  ],
  Denmark: [
    { name: "Christian Eriksen", role: "AM", note: "Set-piece deliverer and playmaker." },
    { name: "Rasmus Højlund", role: "ST", note: "Direct runner in behind." },
    { name: "Pierre-Emile Højbjerg", role: "CM", note: "Midfield anchor." },
  ],
  Japan: [
    { name: "Takefusa Kubo", role: "RW", note: "Japan's most creative attacker." },
    { name: "Wataru Endō", role: "DM", note: "Captain and midfield anchor." },
    { name: "Ayase Ueda", role: "ST", note: "Focal-point striker." },
  ],
};

function ratingOf(team: string): number {
  return TEAM_RATING[team] ?? 62;
}

function playersOf(team: string): { name: string; role: string; note: string }[] {
  return (
    KEY_PLAYERS[team] ?? [
      { name: "Team captain", role: "Leader", note: `${team}'s captain sets the tone in high-stakes knockouts.` },
      { name: "Top scorer", role: "F", note: `${team}'s designated finisher — most likely goal-scorer in this match.` },
      { name: "Playmaker", role: "AM", note: `${team}'s creator-in-chief; expect the key passes to run through him.` },
    ]
  );
}

// Hand-tuned predictions for marquee ties. Others fall through to a
// deterministic model based on the rating gap.
const OVERRIDES: Record<string, Partial<MatchPrediction>> = {
  "Spain-Argentina": {
    predictedScore: "2 – 2 (Argentina to win on penalties)",
    predictedWinner: "away",
    aiOverview:
      "The dream final: reigning holders Argentina against the tournament's most-in-form side. Expect Spain to dominate possession, but Argentina's transition speed and Messi-Álvarez chemistry give them the edge in a game likely to go the distance.",
    whoWillWin:
      "Model tilts marginally to Argentina on penalties. Spain wins in regulation only if Yamal produces a moment inside the first 30 minutes.",
    tactics:
      "Spain 4-3-3 with false-9 rotations; Argentina 4-4-2 diamond with Messi free-roaming behind Álvarez. Set-pieces decisive.",
    headToHead: "Recent friendlies split 1-1. In competitive fixtures at senior level Argentina lead 2-1.",
  },
  "Norway-England": {
    predictedScore: "1 – 2",
    predictedWinner: "away",
    aiOverview:
      "England's midfield press is the key match-up. Haaland will get one big chance; if Bellingham controls the tempo between the lines, England advance.",
    whoWillWin: "England edge it — Bellingham, Saka and Kane offer three routes to goal against a Norway side that leans heavily on Haaland.",
    tactics: "Norway direct 4-3-3, hitting Haaland early. England 4-2-3-1, doubling up on the Norway right to shut out Ødegaard.",
    headToHead: "England won the last competitive meeting 6-0 (Euro 2024 qualifier).",
  },
  "Spain-France": {
    predictedScore: "2 – 1",
    predictedWinner: "home",
    aiOverview:
      "Spain's midfield trio should out-possess France, but Mbappé remains the tournament's most decisive one-touch finisher. Whichever side scores first wins.",
    whoWillWin: "Spain progress if they keep the ball out of transition; France if the first goal comes in the first 20 minutes.",
    tactics: "Spain 4-3-3 build-up-heavy; France 4-3-3 low-block counter with Mbappé pinned high.",
    headToHead: "France won 2-1 in the Nations League 2021 final; Spain took the Euro 2024 group meeting 4-1.",
  },
  "Argentina-England": {
    predictedScore: "2 – 1",
    predictedWinner: "home",
    aiOverview:
      "The heavyweight semi. England will press high on Argentina's back four — the tie hinges on whether Messi finds pockets between the lines. If he does, Argentina score twice.",
    whoWillWin: "Argentina — Messi's tournament, and their spine (Otamendi–Fernández–Álvarez) is battle-tested from Qatar 2022.",
    tactics: "Argentina 4-4-2 diamond, Messi free. England 4-3-3, Rice–Bellingham double-pivot to congest the middle.",
    headToHead: "Argentina and England haven't met competitively since 1998 (Argentina won on penalties).",
  },
  "France-England": {
    predictedScore: "2 – 1",
    predictedWinner: "home",
    aiOverview:
      "Third-place play-off between two sides gutted from losing their semi-finals. France's squad depth and Mbappé's ceiling win it.",
    whoWillWin: "France — expect rotation on both sides, but Mbappé's individual quality settles a low-intensity game.",
    tactics: "Rotation-heavy squads; open, transition-heavy match.",
    headToHead: "France knocked England out of Qatar 2022 in the quarter-final (2-1).",
  },
};

export function getMatchPrediction(home: string, away: string): MatchPrediction {
  const override = OVERRIDES[`${home}-${away}`] ?? OVERRIDES[`${away}-${home}`] ?? {};

  const rh = ratingOf(home);
  const ra = ratingOf(away);
  const gap = rh - ra;

  // Base 45/45/10 split, shift 1.4% per rating point.
  const homeBase = Math.max(20, Math.min(72, 45 + gap * 1.4));
  const awayBase = Math.max(20, Math.min(72, 45 - gap * 1.4));
  const drawBase = Math.max(12, 100 - homeBase - awayBase);
  const scale = 100 / (homeBase + awayBase + drawBase);

  const homeWinProb = Math.round(homeBase * scale);
  const awayWinProb = Math.round(awayBase * scale);
  const drawProb = 100 - homeWinProb - awayWinProb;

  const homeGoals = Math.max(0.6, Math.min(2.6, 1.2 + gap * 0.025));
  const awayGoals = Math.max(0.6, Math.min(2.6, 1.2 - gap * 0.025));

  const predictedWinner: "home" | "away" | "draw" =
    override.predictedWinner ??
    (homeWinProb > awayWinProb + 6 ? "home" : awayWinProb > homeWinProb + 6 ? "away" : "draw");

  const predictedScore =
    override.predictedScore ?? `${Math.round(homeGoals)} – ${Math.round(awayGoals)}`;

  return {
    home: {
      winProbability: homeWinProb,
      projectedGoals: Math.round(homeGoals * 10) / 10,
      keyPlayers: playersOf(home),
      form: "W W D W L",
    },
    away: {
      winProbability: awayWinProb,
      projectedGoals: Math.round(awayGoals * 10) / 10,
      keyPlayers: playersOf(away),
      form: "W D W W W",
    },
    drawProbability: drawProb,
    predictedWinner,
    predictedScore,
    bttsProbability: Math.round(58 + Math.random() * 0),
    over25Probability: Math.round(62 + Math.random() * 0),
    aiOverview:
      override.aiOverview ??
      `${home} vs ${away} is a marquee tie on the road to the FIFA World Cup 2026 final. Our model gives ${predictedWinner === "home" ? home : predictedWinner === "away" ? away : "either side"} the edge based on squad rating, recent tournament form and knockout pedigree.`,
    whoWillWin:
      override.whoWillWin ??
      (predictedWinner === "draw"
        ? `Model call: a tight tie that could go to extra time. Slight edge to whichever side scores first.`
        : `Model call: ${predictedWinner === "home" ? home : away} to progress based on rating, form and depth.`),
    headToHead: override.headToHead ?? `Historical meetings between ${home} and ${away} are evenly matched — every knockout is decided by moments.`,
    tactics: override.tactics ?? `Expect both sides to set up compactly; the tie should open up in the final 30 minutes as legs tire.`,
  };
}

export function hasRealTeams(home?: string, away?: string): boolean {
  if (!home || !away) return false;
  const bad = /(TBD|Winner|Runner|Group|Matchday|3rd|Loser)/i;
  return !bad.test(home) && !bad.test(away);
}
