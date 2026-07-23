export type WcMatch = {
  slug: string;
  matchNo: number;
  stage: "Quarter-final" | "Semi-final" | "Bronze final" | "Final";
  home: string;
  away: string;
  venue: string;
  city: string;
  /** ISO 8601 UTC. ET (EDT, UTC-4) kickoff converted. */
  kickoffUtc: string;
  /** Human ET string for display. */
  kickoffEt: string;
  dateLabel: string;
};

export const wc2026Matches: WcMatch[] = [
  {
    slug: "norway-vs-england-quarter-final",
    matchNo: 99,
    stage: "Quarter-final",
    home: "Norway",
    away: "England",
    venue: "Miami Stadium",
    city: "Miami, USA",
    kickoffUtc: "2026-07-11T21:00:00Z",
    kickoffEt: "17:00 ET",
    dateLabel: "Saturday, 11 July 2026",
  },
  {
    slug: "argentina-vs-switzerland-quarter-final",
    matchNo: 100,
    stage: "Quarter-final",
    home: "Argentina",
    away: "Switzerland",
    venue: "Kansas City Stadium",
    city: "Kansas City, USA",
    kickoffUtc: "2026-07-12T01:00:00Z",
    kickoffEt: "21:00 ET",
    dateLabel: "Saturday, 11 July 2026",
  },
  {
    slug: "france-vs-spain-semi-final",
    matchNo: 101,
    stage: "Semi-final",
    home: "France",
    away: "Spain",
    venue: "Dallas Stadium",
    city: "Dallas, USA",
    kickoffUtc: "2026-07-14T19:00:00Z",
    kickoffEt: "15:00 ET",
    dateLabel: "Tuesday, 14 July 2026",
  },
  {
    slug: "winner-m99-vs-winner-m100-semi-final",
    matchNo: 102,
    stage: "Semi-final",
    home: "Winner Match 99",
    away: "Winner Match 100",
    venue: "Atlanta Stadium",
    city: "Atlanta, USA",
    kickoffUtc: "2026-07-15T19:00:00Z",
    kickoffEt: "15:00 ET",
    dateLabel: "Wednesday, 15 July 2026",
  },
  {
    slug: "bronze-final-third-place-playoff",
    matchNo: 103,
    stage: "Bronze final",
    home: "Runner-up Match 101",
    away: "Runner-up Match 102",
    venue: "Miami Stadium",
    city: "Miami, USA",
    kickoffUtc: "2026-07-18T21:00:00Z",
    kickoffEt: "17:00 ET",
    dateLabel: "Saturday, 18 July 2026",
  },
  {
    slug: "fifa-world-cup-2026-final",
    matchNo: 104,
    stage: "Final",
    home: "Winner Match 101",
    away: "Winner Match 102",
    venue: "New York New Jersey Stadium",
    city: "East Rutherford, USA",
    kickoffUtc: "2026-07-19T19:00:00Z",
    kickoffEt: "15:00 ET",
    dateLabel: "Sunday, 19 July 2026",
  },
];

export const getWc2026Match = (slug: string) =>
  wc2026Matches.find((m) => m.slug === slug);
