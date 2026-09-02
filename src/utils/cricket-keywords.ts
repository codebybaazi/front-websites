/**
 * Keyword cluster for cricket fixture pages.
 *
 * Cricket fixtures are searched by short team codes far more than full names
 * ("ENG vs IND" over "England vs India"), then narrowed with intent modifiers
 * (prediction, who will win, pitch report, toss, live score). Titles, H1s and
 * body copy are built from this cluster so every fixture targets the same shape
 * of query.
 */

const TEAM_CODES: Record<string, string> = {
  india: "IND",
  england: "ENG",
  australia: "AUS",
  pakistan: "PAK",
  "south africa": "SA",
  "new zealand": "NZ",
  "west indies": "WI",
  "sri lanka": "SL",
  bangladesh: "BAN",
  afghanistan: "AFG",
  ireland: "IRE",
  zimbabwe: "ZIM",
  netherlands: "NED",
  scotland: "SCO",
  nepal: "NEP",
  namibia: "NAM",
  oman: "OMA",
  "united arab emirates": "UAE",
  "hong kong": "HK",
  usa: "USA",
  canada: "CAN",
};

export function cricketTeamCode(name: string): string {
  const key = name.trim().toLowerCase();
  const hit = Object.keys(TEAM_CODES).find((team) => key === team || key.includes(team) || team.includes(key));
  if (hit && TEAM_CODES[hit]) return TEAM_CODES[hit];
  return name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase() || "TBD";
}

/** "1st T20I: England vs India" -> "1st T20I" */
export function cricketStageLabel(event: string): string {
  return event.split(":")[0]?.trim() || event;
}

/** First segment of a venue string, e.g. "Lord's, London" -> "Lord's" */
export function venueShortName(venue: string): string {
  return venue.split(",")[0]?.trim() || venue;
}

/**
 * Venue label for length-capped contexts such as meta descriptions. Several
 * Indian grounds carry 50+ character official names; the city is both shorter
 * and closer to how those venues are searched.
 */
export function venueSeoLabel(venue: string): string {
  const parts = venue.split(",").map((part) => part.trim()).filter(Boolean);
  const ground = parts[0] ?? venue;
  if (ground.length <= 26) return ground;
  const city = parts[parts.length - 1];
  if (city && city !== ground && city.length <= 26) return city;
  const trimmed = ground.slice(0, 26).replace(/\s+\S*$/, "");
  return trimmed || ground.slice(0, 26);
}

function formatWord(formatLabel: string, stage: string): string {
  const text = `${formatLabel} ${stage}`.toLowerCase();
  if (text.includes("test") || text.includes("first-class")) return "Test";
  if (text.includes("odi")) return "ODI";
  if (text.includes("t20i")) return "T20I";
  return "T20";
}

export interface CricketKeywordCluster {
  codeA: string;
  codeB: string;
  /** Head term, e.g. "ENG vs IND" */
  codePair: string;
  /** e.g. "England vs India" */
  namePair: string;
  /** e.g. "1st T20I" */
  stage: string;
  /** e.g. "T20I" */
  format: string;
  venueShort: string;
  /** Primary keyword this page targets. */
  primary: string;
  keywords: string[];
}

export function cricketKeywordCluster(input: {
  teamA: string;
  teamB: string;
  event: string;
  seriesName: string;
  venue: string;
  formatLabel: string;
}): CricketKeywordCluster {
  const codeA = cricketTeamCode(input.teamA);
  const codeB = cricketTeamCode(input.teamB);
  const codePair = `${codeA} vs ${codeB}`;
  const namePair = `${input.teamA} vs ${input.teamB}`;
  const stage = cricketStageLabel(input.event);
  const format = formatWord(input.formatLabel, stage);
  const venueShort = venueShortName(input.venue);

  const keywords = [
    codePair,
    `${codePair} prediction`,
    `${codePair} ${stage} prediction`,
    `${codePair} today match prediction`,
    `${codePair} who will win`,
    `${codePair} pitch report`,
    `${codePair} toss prediction`,
    `${codePair} live score`,
    `${codePair} betting tips`,
    `${codePair} match odds`,
    namePair,
    `${namePair} prediction`,
    `${namePair} ${format} prediction`,
    `${stage} ${namePair}`,
    `${venueShort} pitch report`,
    `${input.seriesName} schedule`,
    `${format} match prediction`,
    "today match prediction",
    "who will win today match",
    `Fairplay ${codePair} odds`,
  ];

  return {
    codeA,
    codeB,
    codePair,
    namePair,
    stage,
    format,
    venueShort,
    primary: `${codePair} ${stage} prediction`,
    keywords,
  };
}
