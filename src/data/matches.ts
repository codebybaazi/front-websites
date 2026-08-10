import { CricketSeries, CricketMatch, cricketFixtures } from "./cricket-fixtures";
import { footballFixtures } from "./football-fixtures";
import { tennisFixtures } from "./tennis-fixtures";

export interface Match {
  id: string;
  slug: string;
  sport: "Cricket" | "Football" | "Tennis";
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  startDate: string;
  venue: string;
  city: string;
  country: string;
  status: "live" | "upcoming" | "finished";
  marketHighlights: string[];
  keywords: string[];
}

// Transform cricket fixtures into generic Match interface
const transformedCricket = cricketFixtures.flatMap(series => 
  series.matches.map(m => ({
    id: m.slug,
    slug: m.slug,
    sport: "Cricket" as const,
    tournament: m.tournament || series.name,
    homeTeam: m.homeTeam || m.teams.split(" vs ")[0] || "Team A",
    awayTeam: m.awayTeam || m.teams.split(" vs ")[1] || "Team B",
    startDate: m.date,
    venue: m.venue.split(",")[0] || m.venue,
    city: m.venue.split(",")[1]?.trim() || "TBA",
    country: "Various",
    status: "upcoming" as const,
    marketHighlights: ["Match Winner", "Top Batsman", "Total Sixes", "Session Runs"],
    keywords: ["cricket betting", m.slug, "live odds"]
  }))
);

export const matches: Match[] = [
  ...transformedCricket,
  ...footballFixtures.map(f => ({ ...f, sport: "Football" as const })),
  ...tennisFixtures.map(t => ({ ...t, sport: "Tennis" as const })),
];

export const getMatch = (slug: string) => matches.find(m => m.slug === slug);
