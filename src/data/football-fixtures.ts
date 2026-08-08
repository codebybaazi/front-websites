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
    slug: "fifa-world-cup-2026-match-1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Mexico",
    awayTeam: "A2",
    venue: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    startDate: "2026-06-11T18:00:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Mexico win", "Opening goal"],
    keywords: ["mexico vs a2 world cup 2026"]
  },
  {
    slug: "fifa-world-cup-2026-match-2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "A3",
    awayTeam: "A4",
    venue: "Estadio Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    startDate: "2026-06-11T20:00:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Match winner"],
    keywords: ["match 2 world cup 2026"]
  },
  {
    slug: "fifa-world-cup-2026-match-3",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Canada",
    awayTeam: "B2",
    venue: "BMO Field",
    city: "Toronto",
    country: "Canada",
    startDate: "2026-06-12T19:00:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["Canada victory"],
    keywords: ["canada opening match"]
  },
  {
    slug: "fifa-world-cup-2026-match-4",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "USA",
    awayTeam: "D2",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    startDate: "2026-06-12T19:00:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["USA victory"],
    keywords: ["usa world cup opener"]
  },
  // Bulk of fixtures to reach 104 matches total (97+ fixtures)
  ...Array.from({ length: 99 }).map((_, i) => {
    const matchNum = i + 5;
    const isKnockout = matchNum > 72;
    let stage = "Group Stage";
    if (matchNum > 102) stage = matchNum === 104 ? "Final" : "3rd Place Playoff";
    else if (matchNum > 100) stage = "Semi Finals";
    else if (matchNum > 96) stage = "Quarter Finals";
    else if (matchNum > 88) stage = "Round of 16";
    else if (matchNum > 72) stage = "Round of 32";

    const date = new Date("2026-06-13");
    date.setDate(date.getDate() + Math.floor(i / 3));

    return {
      slug: `fifa-world-cup-2026-match-${matchNum}`,
      sport: "Football" as const,
      tournament: "FIFA World Cup 2026",
      homeTeam: isKnockout ? `Winner Match ${matchNum - 32}` : `Team ${String.fromCharCode(65 + (i % 8))}${i % 4 + 1}`,
      awayTeam: isKnockout ? `Winner Match ${matchNum - 31}` : `Team ${String.fromCharCode(65 + ((i + 1) % 8))}${(i + 1) % 4 + 1}`,
      venue: ["MetLife Stadium", "AT&T Stadium", "Arrowhead Stadium", "NRG Stadium", "Mercedes-Benz Stadium", "Lumen Field", "Levi's Stadium", "Gillette Stadium", "Lincoln Financial Field", "Hard Rock Stadium"][i % 10],
      city: ["New York", "Dallas", "Kansas City", "Houston", "Atlanta", "Seattle", "San Francisco", "Boston", "Philadelphia", "Miami"][i % 10],
      country: "USA",
      startDate: date.toISOString().split('T')[0] + "T18:00:00",
      status: "upcoming" as const,
      stage: stage,
      marketHighlights: ["1X2", "Over/Under", "BTTS"],
      keywords: [`match ${matchNum} world cup 2026`, `${stage} betting`]
    };
  }),
  {
    slug: "fifa-world-cup-2026-final",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Finalist 1",
    awayTeam: "Finalist 2",
    venue: "MetLife Stadium",
    city: "New York/NJ",
    country: "USA",
    startDate: "2026-07-19T15:00:00",
    status: "upcoming",
    stage: "Final",
    marketHighlights: ["World Cup Winner", "Golden Boot"],
    keywords: ["world cup 2026 final odds"]
  }
];
