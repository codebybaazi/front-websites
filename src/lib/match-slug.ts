import { cricketSeries, footballMatches, tennisEvents } from "@/data/schedule";
import type { CricketMatch, CricketSeries, FootballMatch, TennisEvent } from "@/data/schedule";

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* --- Cricket --- */
export function cricketSeriesSlug(s: CricketSeries): string {
  return slugify(s.name);
}
export function findCricketMatch(seriesSlug: string, matchId: string):
  | { series: CricketSeries; match: CricketMatch; index: number }
  | null {
  const series = cricketSeries.find((s) => cricketSeriesSlug(s) === seriesSlug);
  if (!series) return null;
  const idx = parseInt(matchId, 10);
  if (isNaN(idx) || idx < 1 || idx > series.matches.length) return null;
  return { series, match: series.matches[idx - 1], index: idx };
}

/* --- Football --- */
export function footballMatchSlug(m: FootballMatch): string {
  const stageBit = m.stage.split("·")[0].trim();
  return slugify(`${m.match}-${stageBit}`);
}
export function findFootballMatch(slug: string): FootballMatch | null {
  return footballMatches.find((m) => footballMatchSlug(m) === slug) ?? null;
}

/* --- Tennis --- */
export function tennisEventSlug(e: TennisEvent): string {
  return slugify(e.name);
}
export const tennisRounds = [
  { id: "1", label: "Round of 128", short: "R128" },
  { id: "2", label: "Round of 64", short: "R64" },
  { id: "3", label: "Round of 32", short: "R32" },
  { id: "4", label: "Round of 16", short: "R16" },
  { id: "5", label: "Quarter-finals", short: "QF" },
  { id: "6", label: "Semi-finals", short: "SF" },
  { id: "7", label: "Final", short: "Final" },
];
export function findTennisRound(
  eventSlug: string,
  roundId: string,
): { event: TennisEvent; round: (typeof tennisRounds)[number] } | null {
  const event = tennisEvents.find((e) => tennisEventSlug(e) === eventSlug);
  const round = tennisRounds.find((r) => r.id === roundId);
  if (!event || !round) return null;
  return { event, round };
}

/* --- Parse teams string like "India vs England" --- */
export function splitTeams(teamsOrMatch: string): [string, string] {
  const parts = teamsOrMatch.split(/\s+vs\s+/i);
  if (parts.length >= 2) return [parts[0].trim(), parts[1].trim()];
  return [teamsOrMatch, ""];
}
