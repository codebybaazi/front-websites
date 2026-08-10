import { cricketFixtures } from "./cricket-fixtures";
import { footballFixtures, type FootballFixture } from "./football-fixtures";
import { tennisFixtures, type TennisFixture } from "./tennis-fixtures";

export interface MatchFixture {
  slug: string;
  sport: "Cricket" | "Football" | "Tennis";
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  city: string;
  country: string;
  startDate: string;
  status: "live" | "upcoming";
  marketHighlights: string[];
  keywords: string[];
}

// Transform cricket fixtures
const transformedCricket: MatchFixture[] = cricketFixtures.flatMap(series => 
  series.matches.map(m => ({
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

// Transform football fixtures (ensuring they match the interface)
const transformedFootball: MatchFixture[] = footballFixtures.map(f => ({
  slug: f.slug,
  sport: "Football" as const,
  tournament: f.tournament,
  homeTeam: f.homeTeam,
  awayTeam: f.awayTeam,
  venue: f.venue,
  city: f.city,
  country: f.country,
  startDate: f.startDate,
  status: f.status,
  marketHighlights: f.marketHighlights,
  keywords: f.keywords
}));

// Transform tennis fixtures
const transformedTennis: MatchFixture[] = tennisFixtures.map(t => ({
  slug: t.slug,
  sport: "Tennis" as const,
  tournament: t.tournament,
  homeTeam: t.player1,
  awayTeam: t.player2,
  venue: t.venue,
  city: t.city,
  country: t.country,
  startDate: t.startDate,
  status: t.status,
  marketHighlights: t.marketHighlights,
  keywords: t.keywords
}));

export const matches: MatchFixture[] = [
  ...transformedCricket,
  ...transformedFootball,
  ...transformedTennis,
];

export const getMatch = (slug: string) => matches.find(m => m.slug === slug);

export const matchesBySport = (sport: "Cricket" | "Football" | "Tennis") => 
  matches.filter(m => m.sport === sport);
