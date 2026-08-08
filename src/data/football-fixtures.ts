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
  // --- GROUP STAGE ---
  // Thursday, 11 June 2026
  {
    slug: "mexico-vs-tbd-opening-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Mexico (A1)",
    awayTeam: "A2",
    venue: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    startDate: "2026-06-11T18:00:00-06:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "Opening goal", "First half goals"],
    keywords: ["mexico world cup 2026", "world cup opening match betting"]
  },
  {
    slug: "match-2-opening-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "A3",
    awayTeam: "A4",
    venue: "Estadio Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    startDate: "2026-06-11T20:00:00-06:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "Total goals"],
    keywords: ["world cup 2026 guadalajara"]
  },
  // Friday, 12 June 2026
  {
    slug: "canada-vs-tbd-opening-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Canada (B1)",
    awayTeam: "B2",
    venue: "BMO Field",
    city: "Toronto",
    country: "Canada",
    startDate: "2026-06-12T19:00:00-04:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "Canada odds"],
    keywords: ["canada world cup 2026"]
  },
  {
    slug: "usa-vs-tbd-opening-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "USA (D1)",
    awayTeam: "D2",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-06-12T19:00:00-07:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "USA odds"],
    keywords: ["usa world cup 2026"]
  },
  // Saturday, 13 June 2026
  {
    slug: "match-5-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "C1",
    awayTeam: "C2",
    venue: "Gillette Stadium",
    city: "Boston",
    country: "USA",
    startDate: "2026-06-13T13:00:00-04:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner"],
    keywords: ["world cup boston"]
  },
  {
    slug: "match-6-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "D3",
    awayTeam: "D4",
    venue: "BC Place",
    city: "Vancouver",
    country: "Canada",
    startDate: "2026-06-13T15:00:00-07:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner"],
    keywords: ["world cup vancouver"]
  },
  // Sunday, 14 June 2026
  {
    slug: "argentina-vs-tbd-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Argentina",
    awayTeam: "E2",
    venue: "MetLife Stadium",
    city: "New York New Jersey",
    country: "USA",
    startDate: "2026-06-14T20:00:00-04:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "Messi props"],
    keywords: ["argentina world cup 2026"]
  },
  // Monday, 15 June 2026
  {
    slug: "brazil-vs-tbd-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Brazil",
    awayTeam: "F2",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-06-15T19:00:00-04:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "Brazil goals"],
    keywords: ["brazil world cup 2026"]
  },
  // Tuesday, 16 June 2026
  {
    slug: "england-vs-tbd-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "England",
    awayTeam: "G2",
    venue: "Arrowhead Stadium",
    city: "Kansas City",
    country: "USA",
    startDate: "2026-06-16T15:00:00-05:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "England odds"],
    keywords: ["england world cup 2026"]
  },
  // Wednesday, 17 June 2026
  {
    slug: "france-vs-tbd-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "France",
    awayTeam: "H2",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-06-17T18:00:00-04:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "France odds"],
    keywords: ["france world cup 2026"]
  },
  // Thursday, 18 June 2026
  {
    slug: "germany-vs-tbd-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Germany",
    awayTeam: "I2",
    venue: "BC Place",
    city: "Vancouver",
    country: "Canada",
    startDate: "2026-06-18T16:00:00-07:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "Germany odds"],
    keywords: ["germany world cup 2026"]
  },
  // Friday, 19 June 2026
  {
    slug: "spain-vs-tbd-2026",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Spain",
    awayTeam: "J2",
    venue: "Levi's Stadium",
    city: "San Francisco",
    country: "USA",
    startDate: "2026-06-19T13:00:00-07:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner", "Spain odds"],
    keywords: ["spain world cup 2026"]
  },

  // --- KNOCKOUT STAGES ---
  // Round of 32: 28 June - 3 July
  {
    slug: "round-of-32-match-1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Group A",
    awayTeam: "Runner-up Group C",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-06-28T18:00:00-07:00",
    status: "upcoming",
    stage: "Round of 32",
    marketHighlights: ["To qualify", "BTTS"],
    keywords: ["world cup round of 32"]
  },
  {
    slug: "round-of-32-match-2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Group B",
    awayTeam: "Runner-up Group F",
    venue: "BMO Field",
    city: "Toronto",
    country: "Canada",
    startDate: "2026-06-29T19:00:00-04:00",
    status: "upcoming",
    stage: "Round of 32",
    marketHighlights: ["To qualify", "Total goals"],
    keywords: ["world cup toronto knockout"]
  },
  {
    slug: "round-of-32-match-3",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Group C",
    awayTeam: "Runner-up Group A",
    venue: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    startDate: "2026-06-30T18:00:00-06:00",
    status: "upcoming",
    stage: "Round of 32",
    marketHighlights: ["To qualify"],
    keywords: ["world cup mexico knockout"]
  },

  // Round of 16: 4 July - 7 July
  {
    slug: "round-of-16-match-1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 73",
    awayTeam: "Winner Match 74",
    venue: "MetLife Stadium",
    city: "New York New Jersey",
    country: "USA",
    startDate: "2026-07-04T20:00:00-04:00",
    status: "upcoming",
    stage: "Round of 16",
    marketHighlights: ["To qualify"],
    keywords: ["world cup round of 16"]
  },
  {
    slug: "round-of-16-match-2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 75",
    awayTeam: "Winner Match 76",
    venue: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    startDate: "2026-07-05T18:00:00-06:00",
    status: "upcoming",
    stage: "Round of 16",
    marketHighlights: ["To qualify"],
    keywords: ["world cup round of 16 mexico"]
  },

  // Quarter Finals: 9 July - 11 July
  {
    slug: "quarter-final-1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 81",
    awayTeam: "Winner Match 82",
    venue: "Gillette Stadium",
    city: "Boston",
    country: "USA",
    startDate: "2026-07-09T18:00:00-04:00",
    status: "upcoming",
    stage: "Quarter Final",
    marketHighlights: ["Match winner", "To qualify"],
    keywords: ["world cup 2026 quarter final"]
  },
  {
    slug: "quarter-final-2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 83",
    awayTeam: "Winner Match 84",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-07-10T19:00:00-07:00",
    status: "upcoming",
    stage: "Quarter Final",
    marketHighlights: ["Match winner", "To qualify"],
    keywords: ["world cup 2026 la quarter final"]
  },
  {
    slug: "quarter-final-3",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 85",
    awayTeam: "Winner Match 86",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-07-11T18:00:00-04:00",
    status: "upcoming",
    stage: "Quarter Final",
    marketHighlights: ["Match winner", "To qualify"],
    keywords: ["world cup 2026 miami quarter final"]
  },
  {
    slug: "quarter-final-4",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 87",
    awayTeam: "Winner Match 88",
    venue: "Arrowhead Stadium",
    city: "Kansas City",
    country: "USA",
    startDate: "2026-07-11T12:00:00-05:00",
    status: "upcoming",
    stage: "Quarter Final",
    marketHighlights: ["Match winner", "To qualify"],
    keywords: ["world cup 2026 kc quarter final"]
  },

  // Semi Finals: 14 July - 15 July
  {
    slug: "semi-final-1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 89",
    awayTeam: "Winner Match 90",
    venue: "AT&T Stadium",
    city: "Dallas",
    country: "USA",
    startDate: "2026-07-14T20:00:00-05:00",
    status: "upcoming",
    stage: "Semi Final",
    marketHighlights: ["To lift trophy", "Method of victory"],
    keywords: ["world cup semi final dallas"]
  },
  {
    slug: "semi-final-2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 91",
    awayTeam: "Winner Match 92",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "USA",
    startDate: "2026-07-15T20:00:00-04:00",
    status: "upcoming",
    stage: "Semi Final",
    marketHighlights: ["Match winner", "To qualify"],
    keywords: ["world cup semi final atlanta"]
  },

  // Third Place: 18 July
  {
    slug: "third-place-match",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Loser Match 93",
    awayTeam: "Loser Match 94",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-07-18T18:00:00-04:00",
    status: "upcoming",
    stage: "3rd Place Playoff",
    marketHighlights: ["Match winner", "Total goals"],
    keywords: ["world cup third place"]
  },

  // Final: 19 July
  {
    slug: "fifa-world-cup-2026-final",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 93",
    awayTeam: "Winner Match 94",
    venue: "MetLife Stadium",
    city: "New York New Jersey",
    country: "USA",
    startDate: "2026-07-19T15:00:00-04:00",
    status: "upcoming",
    stage: "Final",
    marketHighlights: ["World Cup Winner", "Golden Boot", "Penalty Shootout"],
    keywords: ["world cup 2026 final", "metlife stadium final betting"]
  }
];
