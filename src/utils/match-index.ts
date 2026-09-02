import { CRICKET_SCHEDULE_DATA } from "@/lib/cricket-schedule";
import { FOOTBALL_SCHEDULE_DATA } from "@/lib/sports-data";
import { TENNIS_SCHEDULE_DATA } from "@/lib/tennis-schedule";
import { venueShortName } from "@/utils/cricket-keywords";
import { getMatchSlug, slugify } from "@/utils/slugify";

export type IndexSport = "cricket" | "football" | "tennis";

export interface IndexMatch {
  slug: string;
  /** Raw event string from the schedule data. */
  event: string;
  /** "England vs India" — the part people search for. */
  fixture: string;
  /** "1st T20I", "Round of 32", "Quarter-finals". */
  stage: string;
  date: string;
  time: string;
  venue: string;
  /** Single line under the fixture: stage, date, kick-off and venue. */
  meta: string;
}

export interface IndexTournament {
  id: string;
  series: string;
  sport: IndexSport;
  /** Formats or tour + date window, e.g. "1 Test, 3 ODIs · Jun – Jul 2026". */
  subtitle: string;
  /** Compact date window, e.g. "Jun – Jul 2026". */
  window: string;
  host?: string | undefined;
  matches: IndexMatch[];
  featured: IndexMatch;
  rest: IndexMatch[];
  /** Lowercased search text for the page filter. */
  haystack: string;
}

type ScheduleMatch = { event: string; date: string; time: string; venue: string };
type ScheduleSeries = { series: string; period: string; matches: ReadonlyArray<ScheduleMatch> };

const MONTH_YEAR = /([A-Za-z]{3,9})\.?\s+(\d{4})\s*$/;

/** "Wed, 01 Jul 2026 - Sun, 19 Jul 2026England5 T20Is | 3 ODIs" -> its three parts. */
function splitPeriod(period: string) {
  const parts = period.match(/^(.*?\d{4})\s*[-–—]\s*(.*?\d{4})(.*)$/);
  if (!parts) return null;
  return {
    start: (parts[1] ?? "").trim(),
    end: (parts[2] ?? "").trim(),
    rest: (parts[3] ?? "").trim(),
  };
}

function monthYear(part: string) {
  const found = part.match(MONTH_YEAR);
  if (!found?.[1] || !found[2]) return null;
  return { month: found[1].slice(0, 3), year: found[2] };
}

/** "Wed, 01 Jul 2026 - Sun, 19 Jul 2026…" -> "Jul 2026"; cross-month -> "Jun – Jul 2026". */
export function seriesWindow(period: string): string {
  const parts = splitPeriod(period);
  if (!parts) return period.trim();
  const from = monthYear(parts.start);
  const to = monthYear(parts.end);
  if (!from || !to) return `${parts.start} – ${parts.end}`;
  if (from.month === to.month && from.year === to.year) return `${from.month} ${from.year}`;
  if (from.year === to.year) return `${from.month} – ${to.month} ${from.year}`;
  return `${from.month} ${from.year} – ${to.month} ${to.year}`;
}

/** Cricket periods append the host and formats to the date range with no separator. */
function cricketHostAndFormats(period: string) {
  const parts = splitPeriod(period);
  const rest = parts?.rest ?? "";
  if (!rest) return { host: undefined, formats: undefined };
  const split = rest.match(/^([A-Za-z\s&'.]*?)\s*(\d.*)$/);
  if (!split) return { host: rest, formats: undefined };
  return {
    host: (split[1] ?? "").trim() || undefined,
    formats: (split[2] ?? "").trim().replace(/\s*\|\s*/g, ", ") || undefined,
  };
}

/** Tennis rows carry the tour in the time field, e.g. "ATP · Quarter-finals". */
function tennisTour(match?: ScheduleMatch): string | undefined {
  const tour = match?.time?.split("·")[0]?.trim();
  return tour || undefined;
}

export function parseEvent(event: string, sport: IndexSport): { fixture: string; stage: string } {
  if (sport === "tennis") {
    const parts = event.split("—");
    if (parts.length > 1) {
      return { fixture: (parts[0] ?? "").trim(), stage: parts.slice(1).join("—").trim() };
    }
    return { fixture: event.trim(), stage: "" };
  }

  if (event.includes(": ")) {
    const [stage, ...rest] = event.split(": ");
    return { fixture: rest.join(": ").trim() || event, stage: (stage ?? "").trim() };
  }
  return { fixture: event.trim(), stage: "" };
}

/** Some source venues repeat the city, e.g. "Brisbane, Australia, Brisbane". */
function cleanVenue(venue: string): string {
  const seen = new Set<string>();
  return venue
    .split(",")
    .map((part) => part.trim())
    .filter((part) => {
      if (!part) return false;
      const key = part.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join(", ");
}

function buildMatch(series: ScheduleSeries, match: ScheduleMatch, sport: IndexSport): IndexMatch {
  const { fixture, stage } = parseEvent(match.event, sport);
  const venue = cleanVenue(match.venue);
  // Tennis stores the round in `time`, so it would repeat the stage in the meta line.
  const kickoff = sport === "tennis" ? "" : match.time;
  const meta = [stage, match.date, kickoff, venue]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(" · ");

  return {
    slug: getMatchSlug(series.series, match),
    event: match.event,
    fixture,
    stage,
    date: match.date,
    time: match.time,
    venue,
    meta,
  };
}

function buildTournament(series: ScheduleSeries, sport: IndexSport): IndexTournament | null {
  const matches = series.matches.map((match) => buildMatch(series, match, sport));
  const featured = matches[0];
  if (!featured) return null;

  const window = seriesWindow(series.period);
  let host: string | undefined;
  let subtitle = series.period.trim();

  if (sport === "cricket") {
    const { host: seriesHost, formats } = cricketHostAndFormats(series.period);
    host = seriesHost;
    subtitle = [formats, window].filter(Boolean).join(" · ");
  } else if (sport === "tennis") {
    const city = venueShortName(featured.venue);
    subtitle = [tennisTour(series.matches[0]), city, window].filter(Boolean).join(" · ");
  }

  const haystack = [
    series.series,
    subtitle,
    host,
    ...matches.map((match) => `${match.fixture} ${match.stage} ${match.venue} ${match.date}`),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return {
    id: `${sport}-${slugify(series.series)}`,
    series: series.series,
    sport,
    subtitle,
    window,
    host,
    matches,
    featured,
    rest: matches.slice(1),
    haystack,
  };
}

function buildSport(rows: ReadonlyArray<ScheduleSeries>, sport: IndexSport): IndexTournament[] {
  return rows
    .map((series) => buildTournament(series, sport))
    .filter((row): row is IndexTournament => row !== null);
}

export const MATCH_INDEX: IndexTournament[] = [
  ...buildSport(CRICKET_SCHEDULE_DATA as ReadonlyArray<ScheduleSeries>, "cricket"),
  ...buildSport(FOOTBALL_SCHEDULE_DATA as ReadonlyArray<ScheduleSeries>, "football"),
  ...buildSport(TENNIS_SCHEDULE_DATA as ReadonlyArray<ScheduleSeries>, "tennis"),
];

export const MATCH_INDEX_TOTALS = {
  tournaments: MATCH_INDEX.length,
  matches: MATCH_INDEX.reduce((sum, row) => sum + row.matches.length, 0),
  bySport: {
    cricket: countSport("cricket"),
    football: countSport("football"),
    tennis: countSport("tennis"),
  },
};

function countSport(sport: IndexSport) {
  const rows = MATCH_INDEX.filter((row) => row.sport === sport);
  return {
    tournaments: rows.length,
    matches: rows.reduce((sum, row) => sum + row.matches.length, 0),
  };
}

/** Tournaments narrowed by sport tab and free-text query, matches trimmed to the query. */
export function filterMatchIndex(sport: IndexSport | "all", query: string): IndexTournament[] {
  const needle = query.trim().toLowerCase();
  const bySport = sport === "all" ? MATCH_INDEX : MATCH_INDEX.filter((row) => row.sport === sport);
  if (!needle) return bySport;

  return bySport
    .filter((row) => row.haystack.includes(needle))
    .map((row) => {
      if (row.series.toLowerCase().includes(needle)) return row;
      const matches = row.matches.filter((match) =>
        `${match.fixture} ${match.stage} ${match.venue} ${match.date}`
          .toLowerCase()
          .includes(needle),
      );
      const featured = matches[0];
      if (!featured || matches.length === row.matches.length) return row;
      return { ...row, matches, featured, rest: matches.slice(1) };
    });
}
