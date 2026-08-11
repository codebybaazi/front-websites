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
  endDate?: string;
  status: "live" | "upcoming";
  marketHighlights: string[];
  keywords: string[];
  headToHead?: string;
  homeRecentForm?: string;
  awayRecentForm?: string;
  keyPlayersHome?: string[];
  keyPlayersAway?: string[];
  bettingTips?: string[];
  detailedNarrative?: string;
  pitchReport?: string;
  tacticalPreview?: string;
  winProbHome?: number;
  winProbAway?: number;
  predictionInsight?: string;
  projectedScoreHome?: string;
  projectedScoreAway?: string;
  surface?: string;
  category?: string;
  showPlayerMatchup?: boolean;
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
    city: m.city || m.venue.split(",")[1]?.trim() || "TBA",
    country: m.country || "Various",
    status: "upcoming" as const,
    marketHighlights: ["Match Winner", "Top Batsman", "Total Sixes", "Session Runs"],
    keywords: ["cricket betting", m.slug, "live odds"],
    headToHead: m.headToHead,
    homeRecentForm: m.homeRecentForm,
    awayRecentForm: m.awayRecentForm,
    keyPlayersHome: m.keyPlayersHome,
    keyPlayersAway: m.keyPlayersAway,
    bettingTips: m.bettingTips,
    detailedNarrative: m.detailedNarrative,
    pitchReport: m.pitchReport,
    tacticalPreview: m.tacticalPreview,
    winProbHome: m.winProbHome,
    winProbAway: m.winProbAway,
    predictionInsight: m.predictionInsight,
    projectedScoreHome: m.projectedScoreHome,
    projectedScoreAway: m.projectedScoreAway,
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
  keywords: f.keywords,
  headToHead: f.headToHead,
  homeRecentForm: f.homeRecentForm,
  awayRecentForm: f.awayRecentForm,
  keyPlayersHome: f.keyPlayersHome,
  keyPlayersAway: f.keyPlayersAway,
  bettingTips: f.bettingTips,
  detailedNarrative: f.detailedNarrative,
  pitchReport: f.pitchReport,
  tacticalPreview: f.tacticalPreview,
  winProbHome: f.winProbHome,
  winProbAway: f.winProbAway,
  predictionInsight: f.predictionInsight,
  projectedScoreHome: f.projectedScoreHome,
  projectedScoreAway: f.projectedScoreAway,
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
  endDate: t.endDate,
  status: t.status,
  marketHighlights: t.marketHighlights,
  keywords: t.keywords,
  winProbHome: t.prediction?.confidence,
  winProbAway: t.prediction?.confidence ? 100 - t.prediction.confidence : undefined,
  predictionInsight: t.prediction?.analysis,
  projectedScoreHome: t.prediction?.score,
  surface: t.surface,
  category: t.category,
  showPlayerMatchup: t.showPlayerMatchup ?? false,
}));

export const matches: MatchFixture[] = [
  ...transformedCricket,
  ...transformedFootball,
  ...transformedTennis,
];

export const getMatch = (slug: string) => matches.find(m => m.slug === slug);

export const matchesBySport = (sport: "Cricket" | "Football" | "Tennis") => 
  matches.filter(m => m.sport === sport);
