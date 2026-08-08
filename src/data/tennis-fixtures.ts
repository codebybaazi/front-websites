export interface TennisFixture {
  slug: string;
  sport: "Tennis";
  tournament: string;
  player1: string;
  player2: string;
  venue: string;
  city: string;
  country: string;
  startDate: string;
  status: "live" | "upcoming";
  stage: string;
  category: "Grand Slam" | "ATP 1000" | "WTA 1000" | "ATP 500" | "Other";
  marketHighlights: string[];
  keywords: string[];
}

export const tennisFixtures: TennisFixture[] = [
  {
    slug: "australian-open-2026-mens-final",
    sport: "Tennis",
    tournament: "Australian Open 2026",
    player1: "Jannik Sinner",
    player2: "Carlos Alcaraz",
    venue: "Rod Laver Arena",
    city: "Melbourne",
    country: "Australia",
    startDate: "2026-01-25T19:30:00+11:00",
    status: "upcoming",
    stage: "Men's Singles Final",
    category: "Grand Slam",
    marketHighlights: ["Match Winner", "Set Betting", "Total Games Over/Under"],
    keywords: ["australian open 2026 final odds", "sinner vs alcaraz melbourne betting"]
  },
  {
    slug: "french-open-2026-womens-final",
    sport: "Tennis",
    tournament: "French Open 2026",
    player1: "Iga Swiatek",
    player2: "Aryna Sabalenka",
    venue: "Stade Roland Garros",
    city: "Paris",
    country: "France",
    startDate: "2026-06-06T15:00:00+02:00",
    status: "upcoming",
    stage: "Women's Singles Final",
    category: "Grand Slam",
    marketHighlights: ["Match Winner", "Handicap Games", "Correct Score"],
    keywords: ["french open women final betting", "swiatek vs sabalenka paris odds"]
  },
  {
    slug: "wimbledon-2026-mens-semi-1",
    sport: "Tennis",
    tournament: "Wimbledon 2026",
    player1: "Novak Djokovic",
    player2: "Carlos Alcaraz",
    venue: "All England Club",
    city: "London",
    country: "United Kingdom",
    startDate: "2026-07-10T14:00:00+01:00",
    status: "upcoming",
    stage: "Men's Singles Semi-final",
    category: "Grand Slam",
    marketHighlights: ["Match Winner", "Total Sets", "1st Set Winner"],
    keywords: ["djokovic vs alcaraz wimbledon semi final", "wimbledon mens betting rates"]
  },
  {
    slug: "us-open-2026-mens-final",
    sport: "Tennis",
    tournament: "US Open 2026",
    player1: "Daniil Medvedev",
    player2: "Jannik Sinner",
    venue: "Arthur Ashe Stadium",
    city: "New York",
    country: "USA",
    startDate: "2026-09-13T16:00:00-04:00",
    status: "upcoming",
    stage: "Men's Singles Final",
    category: "Grand Slam",
    marketHighlights: ["Match Winner", "Most Aces", "Total Tiebreaks"],
    keywords: ["us open final 2026 betting", "medvedev vs sinner nyc odds"]
  },
  {
    slug: "atp-finals-2026-final",
    sport: "Tennis",
    tournament: "ATP Finals 2026",
    player1: "TBD",
    player2: "TBD",
    venue: "Inalpi Arena",
    city: "Turin",
    country: "Italy",
    startDate: "2026-11-22T18:00:00+01:00",
    status: "upcoming",
    stage: "Final",
    category: "ATP 1000",
    marketHighlights: ["Match Winner", "Set Betting"],
    keywords: ["atp finals turin 2026 odds", "tennis betting italy"]
  }
];
