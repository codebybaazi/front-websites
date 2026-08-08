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
  category: "Group Stage" | "Round of 32" | "Round of 16" | "Quarter-finals" | "Semi-finals" | "Final";
  marketHighlights: string[];
  keywords: string[];
}


export const footballFixtures: FootballFixture[] = [
  // --- GROUP STAGE ---
  {
    slug: "wc2026-m1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Mexico",
    awayTeam: "A2",
    venue: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    startDate: "2026-06-11T18:00:00",
    status: "upcoming",
    stage: "Group A",
    category: "Group Stage",
    marketHighlights: ["Match odds", "Opening Goal"],
    keywords: ["mexico vs a2 odds", "world cup opener betting"]
  },
  {
    slug: "wc2026-m2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "A3",
    awayTeam: "A4",
    venue: "Estadio Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    startDate: "2026-06-11T20:00:00",
    status: "upcoming",
    stage: "Group A",
    category: "Group Stage",
    marketHighlights: ["Match odds", "Total Goals"],
    keywords: ["a3 vs a4 betting"]
  },
  {
    slug: "wc2026-m3",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Canada",
    awayTeam: "B2",
    venue: "BMO Field",
    city: "Toronto",
    country: "Canada",
    startDate: "2026-06-12T17:00:00",
    status: "upcoming",
    stage: "Group B",
    category: "Group Stage",
    marketHighlights: ["Match odds", "Home victory"],
    keywords: ["canada vs b2 odds"]
  },
  {
    slug: "wc2026-m4",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "USA",
    awayTeam: "D2",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-06-12T19:00:00",
    status: "upcoming",
    stage: "Group D",
    category: "Group Stage",
    marketHighlights: ["Match odds", "Both teams to score"],
    keywords: ["usa vs d2 betting"]
  },
  {
    slug: "wc2026-m5",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "B3",
    awayTeam: "B4",
    venue: "BC Place",
    city: "Vancouver",
    country: "Canada",
    startDate: "2026-06-13T15:00:00",
    status: "upcoming",
    stage: "Group B",
    category: "Group Stage",
    marketHighlights: ["Match odds"],
    keywords: ["b3 vs b4 world cup"]
  },
  {
    slug: "wc2026-m6",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "C1",
    awayTeam: "C2",
    venue: "MetLife Stadium",
    city: "New York/NJ",
    country: "USA",
    startDate: "2026-06-13T18:00:00",
    status: "upcoming",
    stage: "Group C",
    category: "Group Stage",
    marketHighlights: ["Match odds", "Over 2.5 goals"],
    keywords: ["c1 vs c2 betting"]
  },
  {
    slug: "wc2026-m7",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "C3",
    awayTeam: "C4",
    venue: "Gillette Stadium",
    city: "Boston",
    country: "USA",
    startDate: "2026-06-13T21:00:00",
    status: "upcoming",
    stage: "Group C",
    category: "Group Stage",
    marketHighlights: ["Match odds"],
    keywords: ["c3 vs c4 odds"]
  },
  {
    slug: "wc2026-m8",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "D1",
    awayTeam: "D3",
    venue: "Lincoln Financial Field",
    city: "Philadelphia",
    country: "USA",
    startDate: "2026-06-14T15:00:00",
    status: "upcoming",
    stage: "Group D",
    category: "Group Stage",
    marketHighlights: ["Match odds"],
    keywords: ["d1 vs d3 betting"]
  },
  {
    slug: "wc2026-m9",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "E1",
    awayTeam: "E2",
    venue: "NRG Stadium",
    city: "Houston",
    country: "USA",
    startDate: "2026-06-14T18:00:00",
    status: "upcoming",
    stage: "Group E",
    category: "Group Stage",
    marketHighlights: ["Match odds"],
    keywords: ["e1 vs e2 world cup"]
  },
  {
    slug: "wc2026-m10",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "E3",
    awayTeam: "E4",
    venue: "AT&T Stadium",
    city: "Dallas",
    country: "USA",
    startDate: "2026-06-14T21:00:00",
    status: "upcoming",
    stage: "Group E",
    category: "Group Stage",
    marketHighlights: ["Match odds"],
    keywords: ["e3 vs e4 odds"]
  },

  // --- QUARTER FINALS ---
  {
    slug: "wc2026-qf1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 89",
    awayTeam: "Winner Match 90",
    venue: "Gillette Stadium",
    city: "Boston",
    country: "USA",
    startDate: "2026-07-09T18:00:00",
    status: "upcoming",
    stage: "Quarter-final 1",
    category: "Quarter-finals",
    marketHighlights: ["To Qualify", "Extra Time probability"],
    keywords: ["qf1 betting", "world cup quarter final odds"]
  },
  {
    slug: "wc2026-france-vs-morocco",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "France",
    awayTeam: "Morocco",
    venue: "Arrowhead Stadium",
    city: "Kansas City",
    country: "USA",
    startDate: "2026-07-09T21:00:00",
    status: "upcoming",
    stage: "Quarter-final 2",
    category: "Quarter-finals",
    marketHighlights: ["Match odds", "France handicap"],
    keywords: ["france vs morocco odds", "morocco betting prediction"]
  },
  {
    slug: "wc2026-qf3",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 93",
    awayTeam: "Winner Match 94",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-07-10T18:00:00",
    status: "upcoming",
    stage: "Quarter-final 3",
    category: "Quarter-finals",
    marketHighlights: ["To Qualify"],
    keywords: ["qf3 betting odds"]
  },
  {
    slug: "wc2026-qf4",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 95",
    awayTeam: "Winner Match 96",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-07-10T21:00:00",
    status: "upcoming",
    stage: "Quarter-final 4",
    category: "Quarter-finals",
    marketHighlights: ["To Qualify"],
    keywords: ["qf4 betting odds"]
  },

  // --- SEMI FINALS ---
  {
    slug: "wc2026-semi-1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 97",
    awayTeam: "Winner Match 98",
    venue: "AT&T Stadium",
    city: "Dallas",
    country: "USA",
    startDate: "2026-07-14T20:00:00",
    status: "upcoming",
    stage: "Semi-final 1",
    category: "Semi-finals",
    marketHighlights: ["To reach final", "Penalties market"],
    keywords: ["semi final 1 odds", "world cup semi final betting"]
  },
  {
    slug: "wc2026-semi-2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 99",
    awayTeam: "Winner Match 100",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "USA",
    startDate: "2026-07-15T20:00:00",
    status: "upcoming",
    stage: "Semi-final 2",
    category: "Semi-finals",
    marketHighlights: ["To reach final"],
    keywords: ["semi final 2 betting"]
  },

  // --- THIRD PLACE ---
  {
    slug: "wc2026-third",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Loser Match 101",
    awayTeam: "Loser Match 102",
    venue: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    startDate: "2026-07-18T16:00:00",
    status: "upcoming",
    stage: "Third Place Play-off",
    category: "Final",
    marketHighlights: ["Match odds", "Total cards"],
    keywords: ["third place match odds"]
  },

  // --- FINAL ---
  {
    slug: "wc2026-final",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 101",
    awayTeam: "Winner Match 102",
    venue: "MetLife Stadium",
    city: "New York/NJ",
    country: "USA",
    startDate: "2026-07-19T15:00:00",
    status: "upcoming",
    stage: "Final",
    category: "Final",
    marketHighlights: ["Champion", "Golden Boot", "Man of the match"],
    keywords: ["world cup final 2026 betting", "final match odds"]
  }
];
