export interface FootballFixture {
  slug: string;
  sport: "Football";
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  city: string;
  country: string;
  startDate: string;
  status: "live" | "upcoming";
  stage: string;
  marketHighlights: string[];
  keywords: string[];
}

export const footballFixtures: FootballFixture[] = [
  // --- FIFA World Cup 2026 Group Stage ---
  {
    slug: "fifa-world-cup-2026-match-1-mexico-opener",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Mexico (A1)",
    awayTeam: "A2",
    venue: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    startDate: "2026-06-11T18:00:00-06:00",
    status: "upcoming",
    stage: "Group Stage (Match 1)",
    marketHighlights: ["Mexico win odds", "Opening goal", "Estadio Azteca atmosphere"],
    keywords: ["mexico vs a2 world cup 2026", "world cup opener mexico city"]
  },
  {
    slug: "fifa-world-cup-2026-match-2-guadalajara",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "A3",
    awayTeam: "A4",
    venue: "Estadio Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    startDate: "2026-06-11T20:00:00-06:00",
    status: "upcoming",
    stage: "Group Stage (Match 2)",
    marketHighlights: ["Total goals", "Asian handicap"],
    keywords: ["guadalajara world cup fixtures", "match 2 fifa world cup 2026"]
  },
  {
    slug: "fifa-world-cup-2026-match-3-canada-opener",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Canada (B1)",
    awayTeam: "B2",
    venue: "BMO Field",
    city: "Toronto",
    country: "Canada",
    startDate: "2026-06-12T19:00:00-04:00",
    status: "upcoming",
    stage: "Group Stage (Match 3)",
    marketHighlights: ["Canada home advantage", "BTTS"],
    keywords: ["canada opening match world cup", "toronto world cup fixtures"]
  },
  {
    slug: "fifa-world-cup-2026-match-4-usa-opener",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "USA (D1)",
    awayTeam: "D2",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-06-12T19:00:00-07:00",
    status: "upcoming",
    stage: "Group Stage (Match 4)",
    marketHighlights: ["USA victory odds", "SoFi Stadium debut"],
    keywords: ["usa vs d2 world cup 2026", "los angeles world cup fixtures"]
  },
  {
    slug: "fifa-world-cup-2026-match-11-miami-debut",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "F1",
    awayTeam: "F2",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-06-15T19:00:00-04:00",
    status: "upcoming",
    stage: "Group Stage (Match 11)",
    marketHighlights: ["Match winner", "Miami world cup odds"],
    keywords: ["miami world cup fixtures", "hard rock stadium soccer odds"]
  },
  {
    slug: "fifa-world-cup-2026-match-22-dallas",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "G1",
    awayTeam: "G2",
    venue: "AT&T Stadium",
    city: "Dallas",
    country: "USA",
    startDate: "2026-06-17T20:00:00-05:00",
    status: "upcoming",
    stage: "Group Stage (Match 22)",
    marketHighlights: ["Dallas betting markets", "Group G odds"],
    keywords: ["dallas world cup schedule", "at&t stadium soccer betting"]
  },

  // --- KNOCKOUT STAGES (Exact FIFA Dates) ---
  {
    slug: "fifa-world-cup-2026-round-of-32-opening",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Group A",
    awayTeam: "Runner-up Group C",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-06-28T18:00:00-07:00",
    status: "upcoming",
    stage: "Round of 32 (Match 73)",
    marketHighlights: ["To qualify", "Penalty shootout odds"],
    keywords: ["world cup round of 32 betting", "knockout stage odds 2026"]
  },
  {
    slug: "fifa-world-cup-2026-quarter-final-boston",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 89",
    awayTeam: "Winner Match 90",
    venue: "Gillette Stadium",
    city: "Boston",
    country: "USA",
    startDate: "2026-07-09T18:00:00-04:00",
    status: "upcoming",
    stage: "Quarter Final (Match 97)",
    marketHighlights: ["Road to final", "Match winner"],
    keywords: ["boston quarter final world cup", "fifa world cup 2026 quarter final odds"]
  },
  {
    slug: "fifa-world-cup-2026-semi-final-dallas",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 97",
    awayTeam: "Winner Match 98",
    venue: "AT&T Stadium",
    city: "Dallas",
    country: "USA",
    startDate: "2026-07-14T20:00:00-05:00",
    status: "upcoming",
    stage: "Semi Final (Match 101)",
    marketHighlights: ["To reach final", "Dallas semi final odds"],
    keywords: ["dallas semi final world cup", "semi final betting fixtures"]
  },
  {
    slug: "fifa-world-cup-2026-semi-final-atlanta",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 99",
    awayTeam: "Winner Match 100",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "USA",
    startDate: "2026-07-15T20:00:00-04:00",
    status: "upcoming",
    stage: "Semi Final (Match 102)",
    marketHighlights: ["To reach final", "Atlanta semi final odds"],
    keywords: ["atlanta semi final world cup", "atlanta soccer betting"]
  },
  {
    slug: "fifa-world-cup-2026-third-place-miami",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Loser Match 101",
    awayTeam: "Loser Match 102",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-07-18T18:00:00-04:00",
    status: "upcoming",
    stage: "3rd Place Playoff (Match 103)",
    marketHighlights: ["Match winner", "Total goals"],
    keywords: ["miami world cup 3rd place", "fifa world cup bronze match"]
  },
  {
    slug: "fifa-world-cup-2026-final-new-york",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 101",
    awayTeam: "Winner Match 102",
    venue: "MetLife Stadium",
    city: "New York New Jersey",
    country: "USA",
    startDate: "2026-07-19T15:00:00-04:00",
    status: "upcoming",
    stage: "Final (Match 104)",
    marketHighlights: ["World Cup Winner", "Golden Boot", "Man of the match"],
    keywords: ["world cup 2026 final odds", "metlife stadium world cup final"]
  }
];
