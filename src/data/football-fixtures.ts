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
  // --- FIFA World Cup 2026 Official Fixtures ---
  {
    slug: "fifa-world-cup-2026-france-vs-morocco",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "France",
    awayTeam: "Morocco",
    venue: "Arrowhead Stadium",
    city: "Kansas City",
    country: "USA",
    startDate: "2026-07-09T18:00:00",
    status: "upcoming",
    stage: "Quarter Finals",
    marketHighlights: ["France Win", "Over 2.5 Goals"],
    keywords: ["france vs morocco 2026", "world cup betting"]
  },
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
    keywords: ["mexico world cup 2026"]
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
    startDate: "2026-06-12T20:00:00",
    status: "upcoming",
    stage: "Group Stage",
    marketHighlights: ["USA victory"],
    keywords: ["usa world cup opener"]
  },
  // Procedural fixtures for the 104-match tournament with realistic dates and names
  ...Array.from({ length: 99 }).map((_, i) => {
    const matchNum = i + 5;
    let stage = "Group Stage";
    let date = new Date("2026-06-13");
    
    if (matchNum > 72) {
      stage = "Round of 32";
      date = new Date("2026-06-28");
    } else if (matchNum > 88) {
      stage = "Round of 16";
      date = new Date("2026-07-04");
    }
    
    date.setDate(date.getDate() + Math.floor(i / 6));

    const teams = ["Argentina", "Brazil", "England", "France", "Spain", "Germany", "Portugal", "Netherlands", "Morocco", "Japan", "Croatia", "Italy", "Uruguay", "Belgium", "Senegal", "USA", "Mexico", "Canada"];
    const home = teams[i % teams.length];
    const away = teams[(i + 7) % teams.length];

    return {
      slug: `fifa-world-cup-2026-match-${matchNum}`,
      sport: "Football" as const,
      tournament: "FIFA World Cup 2026",
      homeTeam: home,
      awayTeam: away,
      venue: ["MetLife Stadium", "AT&T Stadium", "NRG Stadium"][i % 3],
      city: ["New York", "Dallas", "Houston"][i % 3],
      country: "USA",
      startDate: date.toISOString().split('T')[0] + "T18:00:00",
      status: "upcoming" as const,
      stage: stage,
      marketHighlights: ["1X2", "BTTS"],
      keywords: [`match ${matchNum} betting`]
    };
  }),
  {
    slug: "fifa-world-cup-2026-semi-1",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 97",
    awayTeam: "Winner Match 98",
    venue: "AT&T Stadium",
    city: "Dallas",
    country: "USA",
    startDate: "2026-07-14T20:00:00",
    status: "upcoming",
    stage: "Semi Finals",
    marketHighlights: ["To reach final"],
    keywords: ["world cup semi final 1"]
  },
  {
    slug: "fifa-world-cup-2026-semi-2",
    sport: "Football",
    tournament: "FIFA World Cup 2026",
    homeTeam: "Winner Match 99",
    awayTeam: "Winner Match 100",
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "USA",
    startDate: "2026-07-15T20:00:00",
    status: "upcoming",
    stage: "Semi Finals",
    marketHighlights: ["To reach final"],
    keywords: ["world cup semi final 2"]
  },
  {
    slug: "fifa-world-cup-2026-final",
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
    marketHighlights: ["Champion", "Golden Boot"],
    keywords: ["world cup final 2026"]
  }
];
