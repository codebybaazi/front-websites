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

/* --- Title/description length safety (same clamp pattern used for blog posts) --- */
export function clamp(s: string, max: number): string {
  return s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, "").trimEnd() + "…";
}

/* --- Date parsing for SportsEvent schema — always returns ISO 8601 (YYYY-MM-DD), never a Date object,
   to avoid local-timezone off-by-one shifts when the string is date-only. --- */
const MONTHS: Record<string, string> = {
  jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
  jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12",
};
function monthNum(name: string): string | undefined {
  return MONTHS[name.slice(0, 3).toLowerCase()];
}

/** Parses "Sun, 28 Jun 2026" or "28 Jun 2026" → "2026-06-28". Returns undefined if unparseable. */
export function toISODate(raw: string): string | undefined {
  const m = raw.match(/(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})/);
  if (!m) return undefined;
  const month = monthNum(m[2]);
  if (!month) return undefined;
  return `${m[3]}-${month}-${m[1].padStart(2, "0")}`;
}

/** Parses a range like "1 – 11 Jan 2026" or "11 Jan – 1 Feb 2026" into ISO start/end dates. */
export function parseDateRangeToISO(raw: string): { start?: string; end?: string } {
  const parts = raw.split(/\s*[–—-]\s*/);
  if (parts.length < 2) {
    const single = toISODate(raw);
    return { start: single, end: single };
  }
  const partB = parts[parts.length - 1];
  const partA = parts.slice(0, -1).join(" ");

  const mB = partB.match(/(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})/);
  if (!mB) return {};
  const monthB = monthNum(mB[2]);
  if (!monthB) return {};
  const yearB = mB[3];
  const end = `${yearB}-${monthB}-${mB[1].padStart(2, "0")}`;

  const mAFull = partA.match(/(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})/);
  const mAPartial = partA.match(/(\d{1,2})\s+([A-Za-z]{3,})/);
  const mADayOnly = partA.match(/(\d{1,2})/);

  let start: string | undefined;
  if (mAFull) {
    const mo = monthNum(mAFull[2]);
    start = mo ? `${mAFull[3]}-${mo}-${mAFull[1].padStart(2, "0")}` : undefined;
  } else if (mAPartial) {
    const mo = monthNum(mAPartial[2]);
    start = mo ? `${yearB}-${mo}-${mAPartial[1].padStart(2, "0")}` : undefined;
  } else if (mADayOnly) {
    start = `${yearB}-${monthB}-${mADayOnly[1].padStart(2, "0")}`;
  }
  return { start, end };
}
