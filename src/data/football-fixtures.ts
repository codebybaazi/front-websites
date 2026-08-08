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
  // --- FIFA World Cup 2026 Opening Matches ---
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

  // Procedural fixtures for the 104-match tournament with proper FIFA-style naming
  ...Array.from({ length: 99 }).map((_, i) => {
    const matchNum = i + 5;
    let stage = "Group Stage";
    let homeTeam = "";
    let awayTeam = "";

    // Group determination
    const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    const groupIdx = Math.floor(i / 6) % 12;
    const groupLetter = groups[groupIdx];

    if (matchNum <= 72) {
      // Group Stage (Matches 5-72)
      stage = "Group Stage";
      const pos1 = (i % 4) + 1;
      const pos2 = ((i + 1) % 4) + 1;
      
      // Specifically ensure we don't just use "Team A1" but also the seeded hosts
      if (groupLetter === "A" && pos1 === 1) homeTeam = "Mexico";
      else if (groupLetter === "B" && pos1 === 1) homeTeam = "Canada";
      else if (groupLetter === "D" && pos1 === 1) homeTeam = "USA";
      else homeTeam = `${groupLetter}${pos1}`;

      awayTeam = `${groupLetter}${pos2}`;
    } else if (matchNum <= 88) {
      stage = "Round of 32";
      // Official FIFA R32 pairings usually involve Group Winners vs Runners-up
      const g1 = groups[(matchNum - 73) % 12];
      const g2 = groups[(matchNum - 72) % 12];
      homeTeam = `Winner Group ${g1}`;
      awayTeam = `Runner-up Group ${g2}`;
    } else if (matchNum <= 96) {
      stage = "Round of 16";
      homeTeam = `Winner Match ${matchNum - 16}`;
      awayTeam = `Winner Match ${matchNum - 15}`;
    } else if (matchNum <= 100) {
      stage = "Quarter Finals";
      homeTeam = `Winner Match ${matchNum - 8}`;
      awayTeam = `Winner Match ${matchNum - 7}`;
    } else if (matchNum <= 102) {
      stage = "Semi Finals";
      homeTeam = `Winner Match ${matchNum - 4}`;
      awayTeam = `Winner Match ${matchNum - 3}`;
    } else if (matchNum === 103) {
      stage = "3rd Place Playoff";
      homeTeam = "Loser Match 101";
      awayTeam = "Loser Match 102";
    } else {
      stage = "Final";
      homeTeam = "Winner Match 101";
      awayTeam = "Winner Match 102";
    }

    const date = new Date("2026-06-13");
    date.setDate(date.getDate() + Math.floor(i / 3));

    return {
      slug: `fifa-world-cup-2026-match-${matchNum}`,
      sport: "Football" as const,
      tournament: "FIFA World Cup 2026",
      homeTeam,
      awayTeam,
      venue: ["MetLife Stadium", "AT&T Stadium", "Arrowhead Stadium", "NRG Stadium", "Mercedes-Benz Stadium", "Lumen Field", "Levi's Stadium", "Gillette Stadium", "Lincoln Financial Field", "Hard Rock Stadium"][i % 10],
      city: ["New York/NJ", "Dallas", "Kansas City", "Houston", "Atlanta", "Seattle", "San Francisco", "Boston", "Philadelphia", "Miami"][i % 10],
      country: "USA",
      startDate: date.toISOString().split('T')[0] + "T18:00:00",
      status: "upcoming" as const,
      stage: stage,
      marketHighlights: ["1X2", "Over/Under", "BTTS"],
      keywords: [`match ${matchNum} world cup 2026`, `${stage} betting`]
    };
  })
];
