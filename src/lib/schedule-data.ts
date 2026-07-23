// Unified series + matches data model shared by /schedule and /match/$slug.

export type Sport = "cricket" | "football" | "tennis";

export type ScheduleMatch = {
  slug: string;
  seriesSlug: string;
  sport: Sport;
  title: string;
  subtitle: string; // e.g. "1st ODI", "Round of 16", "Final"
  date: string; // ISO YYYY-MM-DD
  time?: string;
  venue?: string;
  city?: string;
  home?: string;
  away?: string;
};

export type ScheduleSeries = {
  slug: string;
  sport: Sport;
  name: string;
  start: string;
  end: string;
  format: string;
  host: string;
  description: string;
  matches: ScheduleMatch[];
};

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + "T00:00:00Z").getTime();
  const db = new Date(b + "T00:00:00Z").getTime();
  return Math.max(1, Math.round((db - da) / 86_400_000));
}

// ---------------- Football: FIFA World Cup 2026 ----------------

type RawFootball = {
  home: string; away: string; stage: string; date: string; kickoff: string; venue: string; city: string;
};

const wcMatches: RawFootball[] = [
  { home: "Winner Group A", away: "3rd A/B/C/D/E/F", stage: "Round of 32", date: "2026-06-27", kickoff: "12:00 ET", venue: "Estadio Azteca", city: "Mexico City" },
  { home: "Winner Group C", away: "3rd D/E/F", stage: "Round of 32", date: "2026-06-27", kickoff: "16:00 ET", venue: "SoFi Stadium", city: "Los Angeles" },
  { home: "Winner Group B", away: "3rd A/D/E/F", stage: "Round of 32", date: "2026-06-28", kickoff: "12:00 ET", venue: "MetLife Stadium", city: "New York/New Jersey" },
  { home: "Winner Group F", away: "Runner-up Group E", stage: "Round of 32", date: "2026-06-29", kickoff: "18:00 ET", venue: "AT&T Stadium", city: "Dallas" },
  { home: "Winner Group D", away: "3rd B/E/F", stage: "Round of 32", date: "2026-06-30", kickoff: "15:00 ET", venue: "BC Place", city: "Vancouver" },
  { home: "Winner Group E", away: "3rd A/B/C/D", stage: "Round of 32", date: "2026-07-01", kickoff: "17:00 ET", venue: "Arrowhead Stadium", city: "Kansas City" },
  { home: "Winner Group G", away: "Runner-up Group H", stage: "Round of 32", date: "2026-07-02", kickoff: "20:00 ET", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { home: "Winner Group H", away: "Runner-up Group G", stage: "Round of 32", date: "2026-07-03", kickoff: "21:00 ET", venue: "Hard Rock Stadium", city: "Miami" },
  { home: "Netherlands", away: "Portugal", stage: "Round of 16", date: "2026-07-04", kickoff: "15:00 ET", venue: "Levi's Stadium", city: "San Francisco Bay Area" },
  { home: "Brazil", away: "Croatia", stage: "Round of 16", date: "2026-07-04", kickoff: "19:00 ET", venue: "NRG Stadium", city: "Houston" },
  { home: "Germany", away: "Uruguay", stage: "Round of 16", date: "2026-07-05", kickoff: "14:00 ET", venue: "Lincoln Financial Field", city: "Philadelphia" },
  { home: "Belgium", away: "Morocco", stage: "Round of 16", date: "2026-07-05", kickoff: "18:00 ET", venue: "Estadio BBVA", city: "Monterrey" },
  { home: "Argentina", away: "Colombia", stage: "Round of 16", date: "2026-07-06", kickoff: "16:00 ET", venue: "Gillette Stadium", city: "Boston" },
  { home: "Switzerland", away: "USA", stage: "Round of 16", date: "2026-07-06", kickoff: "20:00 ET", venue: "Lumen Field", city: "Seattle" },
  { home: "France", away: "Denmark", stage: "Round of 16", date: "2026-07-07", kickoff: "15:00 ET", venue: "Arrowhead Stadium", city: "Kansas City" },
  { home: "Spain", away: "Japan", stage: "Round of 16", date: "2026-07-07", kickoff: "19:00 ET", venue: "MetLife Stadium", city: "New York/New Jersey" },
  { home: "Netherlands", away: "Brazil", stage: "Quarter-final", date: "2026-07-09", kickoff: "16:00 ET", venue: "AT&T Stadium", city: "Dallas" },
  { home: "Germany", away: "Belgium", stage: "Quarter-final", date: "2026-07-09", kickoff: "20:00 ET", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { home: "Norway", away: "England", stage: "Quarter-final", date: "2026-07-11", kickoff: "17:00 ET", venue: "Hard Rock Stadium", city: "Miami" },
  { home: "Argentina", away: "Switzerland", stage: "Quarter-final", date: "2026-07-11", kickoff: "21:00 ET", venue: "Arrowhead Stadium", city: "Kansas City" },
  { home: "Spain", away: "France", stage: "Semi-final", date: "2026-07-14", kickoff: "15:00 ET", venue: "AT&T Stadium", city: "Dallas" },
  { home: "Argentina", away: "England", stage: "Semi-final", date: "2026-07-15", kickoff: "15:00 ET", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { home: "France", away: "England", stage: "Third-place Play-off", date: "2026-07-18", kickoff: "17:00 ET", venue: "Hard Rock Stadium", city: "Miami" },
  { home: "Spain", away: "Argentina", stage: "Final", date: "2026-07-19", kickoff: "15:00 ET", venue: "MetLife Stadium", city: "New York/New Jersey" },
];

// FIFA WC 2026: 48 teams, 12 groups (A-L), 72 group matches over 11–27 June 2026.
// Exact matchups depend on the FIFA Final Draw — before the draw we list each
// group's three matchdays with their scheduled date so the calendar is complete.
const wcGroupLetters = ["A","B","C","D","E","F","G","H","I","J","K","L"];
const wcGroupHost: Record<string, { venue: string; city: string }> = {
  A: { venue: "Estadio Azteca", city: "Mexico City" },
  B: { venue: "SoFi Stadium", city: "Los Angeles" },
  C: { venue: "BMO Field", city: "Toronto" },
  D: { venue: "Gillette Stadium", city: "Boston" },
  E: { venue: "Arrowhead Stadium", city: "Kansas City" },
  F: { venue: "AT&T Stadium", city: "Dallas" },
  G: { venue: "BC Place", city: "Vancouver" },
  H: { venue: "Estadio Akron", city: "Guadalajara" },
  I: { venue: "MetLife Stadium", city: "New York/New Jersey" },
  J: { venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  K: { venue: "Hard Rock Stadium", city: "Miami" },
  L: { venue: "Estadio BBVA", city: "Monterrey" },
};

// Matchday start dates per FIFA official schedule (June 2026):
// MD1: 11–17 Jun · MD2: 16–22 Jun · MD3: 22–27 Jun. 12 groups spread over 6 days per matchday.
const wcMatchdayStart: Record<1 | 2 | 3, string> = {
  1: "2026-06-11",
  2: "2026-06-16",
  3: "2026-06-22",
};

const wcGroupRaw: RawFootball[] = wcGroupLetters.flatMap((g, gi) => {
  const host = wcGroupHost[g];
  return ([1, 2, 3] as const).map((md) => ({
    home: `Group ${g} · Matchday ${md}`,
    away: "TBD (post-draw)",
    stage: `Group Stage — Matchday ${md}`,
    date: addDays(wcMatchdayStart[md], Math.floor(gi / 2)),
    kickoff: "TBD",
    venue: host.venue,
    city: host.city,
  }));
});

const wcAllMatches: RawFootball[] = [...wcGroupRaw, ...wcMatches];

const footballSeries: ScheduleSeries = (() => {
  const seriesSlug = "fifa-world-cup-2026";
  return {
    slug: seriesSlug,
    sport: "football",
    name: "FIFA World Cup 2026",
    start: "2026-06-11",
    end: "2026-07-19",
    format: "Group stage + Knockouts — 104 matches",
    host: "USA · Canada · Mexico",
    description:
      "FIFA World Cup 2026 schedule — the first 48-team World Cup 2026, co-hosted by USA, Canada and Mexico across 16 host cities. Group stage 11–27 June 2026 (12 groups, 72 matches), Round of 32 through to the FIFA World Cup 2026 final at MetLife Stadium on 19 July 2026 — 104 matches with live score, today match prediction, projected top scorer and world cup 2026 fixtures on every match page.",
    matches: wcAllMatches.map((m, i) => ({
      slug: slugify(`${seriesSlug}-${m.stage}-${m.home}-vs-${m.away}-${m.date}-${i}`),
      seriesSlug,
      sport: "football",
      title: `${m.home} vs ${m.away}`,
      subtitle: m.stage,
      date: m.date,
      time: m.kickoff,
      venue: m.venue,
      city: m.city,
      home: m.home,
      away: m.away,
    })),
  };
})();

// ---------------- Cricket international series ----------------

type CricketFixture = { subtitle: string; date: string; venue?: string; city?: string };
type RawCricket = {
  name: string;
  start: string;
  end: string;
  format: string;
  host: string;
  fixtures?: CricketFixture[]; // when present, used verbatim; otherwise auto-generated
};

const rawCricket: RawCricket[] = [
  // -------- India tour of England, 2026 — VERIFIED from Cricbuzz --------
  {
    name: "India tour of England, 2026",
    start: "2026-07-01",
    end: "2026-07-19",
    format: "5 T20Is · 3 ODIs",
    host: "England",
    fixtures: [
      { subtitle: "1st T20I", date: "2026-07-01", venue: "Riverside Ground", city: "Chester-le-Street" },
      { subtitle: "2nd T20I", date: "2026-07-04", venue: "Emirates Old Trafford", city: "Manchester" },
      { subtitle: "3rd T20I", date: "2026-07-07", venue: "Trent Bridge", city: "Nottingham" },
      { subtitle: "4th T20I", date: "2026-07-09", venue: "County Ground", city: "Bristol" },
      { subtitle: "5th T20I", date: "2026-07-11", venue: "The Rose Bowl", city: "Southampton" },
      { subtitle: "1st ODI", date: "2026-07-14", venue: "Edgbaston", city: "Birmingham" },
      { subtitle: "2nd ODI", date: "2026-07-16", venue: "Sophia Gardens", city: "Cardiff" },
      { subtitle: "3rd ODI", date: "2026-07-19", venue: "Lord's", city: "London" },
    ],
  },

  // -------- England tour of Australia, 2026 (LOI leg) — VERIFIED --------
  {
    name: "England tour of Australia, 2026",
    start: "2026-11-12",
    end: "2026-12-02",
    format: "3 ODIs · 5 T20Is",
    host: "Australia",
    fixtures: [
      { subtitle: "1st ODI", date: "2026-11-12", venue: "Perth Stadium", city: "Perth" },
      { subtitle: "2nd ODI", date: "2026-11-15", venue: "Adelaide Oval", city: "Adelaide" },
      { subtitle: "3rd ODI", date: "2026-11-18", venue: "Bellerive Oval", city: "Hobart" },
      { subtitle: "1st T20I", date: "2026-11-21", venue: "Melbourne Cricket Ground", city: "Melbourne" },
      { subtitle: "2nd T20I", date: "2026-11-24", venue: "Carrara Oval", city: "Queensland" },
      { subtitle: "3rd T20I", date: "2026-11-27", venue: "The Gabba", city: "Brisbane" },
      { subtitle: "4th T20I", date: "2026-11-29", venue: "Sydney Cricket Ground", city: "Sydney" },
      { subtitle: "5th T20I", date: "2026-12-02", venue: "Manuka Oval", city: "Canberra" },
    ],
  },

  // -------- Remaining series — VERIFIED from Cricbuzz --------
  {
    name: "Afghanistan tour of Ireland, 2026",
    start: "2026-08-05", end: "2026-08-14", format: "5 ODIs", host: "Ireland",
    fixtures: [
      { subtitle: "1st ODI", date: "2026-08-05", venue: "Bready Cricket Club", city: "Bready" },
      { subtitle: "2nd ODI", date: "2026-08-07", venue: "Bready Cricket Club", city: "Bready" },
      { subtitle: "3rd ODI", date: "2026-08-10", venue: "Civil Service Cricket Club", city: "Belfast" },
      { subtitle: "4th ODI", date: "2026-08-12", venue: "Civil Service Cricket Club", city: "Belfast" },
      { subtitle: "5th ODI", date: "2026-08-14", venue: "Civil Service Cricket Club", city: "Belfast" },
    ],
  },
  {
    name: "India tour of Zimbabwe, 2026",
    start: "2026-07-23", end: "2026-07-26", format: "3 T20Is", host: "Zimbabwe",
    fixtures: [
      { subtitle: "1st T20I", date: "2026-07-23", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "2nd T20I", date: "2026-07-25", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "3rd T20I", date: "2026-07-26", venue: "Harare Sports Club", city: "Harare" },
    ],
  },
  {
    name: "Pakistan tour of West Indies, 2026",
    start: "2026-07-18", end: "2026-08-06", format: "2 Tests (plus warm-up)", host: "West Indies",
    fixtures: [
      { subtitle: "4-Day Warm-up", date: "2026-07-18", venue: "Brian Lara Stadium", city: "Tarouba" },
      { subtitle: "1st Test", date: "2026-07-25", venue: "Brian Lara Stadium", city: "Tarouba" },
      { subtitle: "2nd Test", date: "2026-08-02", venue: "Queen's Park Oval", city: "Port of Spain" },
    ],
  },
  {
    name: "Bangladesh tour of Zimbabwe, 2026",
    start: "2026-06-28", end: "2026-07-19", format: "1 Test · 3 ODIs · 3 T20Is", host: "Zimbabwe",
    fixtures: [
      { subtitle: "One-off Test", date: "2026-06-28", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "1st ODI", date: "2026-07-06", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "2nd ODI", date: "2026-07-09", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "3rd ODI", date: "2026-07-11", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "1st T20I", date: "2026-07-15", venue: "Queens Sports Club", city: "Bulawayo" },
      { subtitle: "2nd T20I", date: "2026-07-17", venue: "Queens Sports Club", city: "Bulawayo" },
      { subtitle: "3rd T20I", date: "2026-07-19", venue: "Queens Sports Club", city: "Bulawayo" },
    ],
  },
  {
    name: "New Zealand tour of West Indies, 2026",
    start: "2026-07-11", end: "2026-07-21", format: "5 ODIs", host: "West Indies",
    fixtures: [
      { subtitle: "1st ODI", date: "2026-07-11", venue: "Providence Stadium", city: "Guyana" },
      { subtitle: "2nd ODI", date: "2026-07-13", venue: "Providence Stadium", city: "Guyana" },
      { subtitle: "3rd ODI", date: "2026-07-16", venue: "Providence Stadium", city: "Guyana" },
      { subtitle: "4th ODI", date: "2026-07-19", venue: "Kensington Oval", city: "Bridgetown" },
      { subtitle: "5th ODI", date: "2026-07-21", venue: "Kensington Oval", city: "Bridgetown" },
    ],
  },
  {
    name: "Sri Lanka tour of England, 2026",
    start: "2026-09-15", end: "2026-09-27", format: "3 T20Is · 3 ODIs", host: "England",
    fixtures: [
      { subtitle: "1st T20I", date: "2026-09-15", venue: "The Rose Bowl", city: "Southampton" },
      { subtitle: "2nd T20I", date: "2026-09-17", venue: "Sophia Gardens", city: "Cardiff" },
      { subtitle: "3rd T20I", date: "2026-09-19", venue: "Emirates Old Trafford", city: "Manchester" },
      { subtitle: "1st ODI", date: "2026-09-22", venue: "Riverside Ground", city: "Chester-le-Street" },
      { subtitle: "2nd ODI", date: "2026-09-24", venue: "Headingley", city: "Leeds" },
      { subtitle: "3rd ODI", date: "2026-09-27", venue: "Kennington Oval", city: "London" },
    ],
  },
  {
    name: "Pakistan tour of England, 2026",
    start: "2026-08-19", end: "2026-09-13", format: "3 Tests", host: "England",
    fixtures: [
      { subtitle: "1st Test", date: "2026-08-19", venue: "Headingley", city: "Leeds" },
      { subtitle: "2nd Test", date: "2026-08-27", venue: "Lord's", city: "London" },
      { subtitle: "3rd Test", date: "2026-09-09", venue: "Edgbaston", city: "Birmingham" },
    ],
  },
  {
    name: "Australia tour of Zimbabwe, 2026",
    start: "2026-09-15", end: "2026-09-20", format: "3 ODIs", host: "Zimbabwe",
    fixtures: [
      { subtitle: "1st ODI", date: "2026-09-15", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "2nd ODI", date: "2026-09-18", venue: "Harare Sports Club", city: "Harare" },
      { subtitle: "3rd ODI", date: "2026-09-20", venue: "Harare Sports Club", city: "Harare" },
    ],
  },
  {
    name: "Australia tour of South Africa, 2026",
    start: "2026-09-24", end: "2026-10-31", format: "3 ODIs · 3 Tests", host: "South Africa",
    fixtures: [
      { subtitle: "1st ODI", date: "2026-09-24", venue: "Kingsmead", city: "Durban" },
      { subtitle: "2nd ODI", date: "2026-09-27", venue: "The Wanderers Stadium", city: "Johannesburg" },
      { subtitle: "3rd ODI", date: "2026-09-30", venue: "Senwes Park", city: "Potchefstroom" },
      { subtitle: "1st Test", date: "2026-10-09", venue: "Kingsmead", city: "Durban" },
      { subtitle: "2nd Test", date: "2026-10-18", venue: "St George's Park", city: "Gqeberha" },
      { subtitle: "3rd Test", date: "2026-10-27", venue: "Newlands", city: "Cape Town" },
    ],
  },
  {
    name: "India tour of Sri Lanka, 2026",
    start: "2026-08-15", end: "2026-08-27", format: "2 Tests", host: "Sri Lanka",
    fixtures: [
      { subtitle: "1st Test", date: "2026-08-15", venue: "Galle International Stadium", city: "Galle" },
      { subtitle: "2nd Test", date: "2026-08-23", venue: "Sinhalese Sports Club", city: "Colombo" },
    ],
  },
  {
    name: "Bangladesh tour of Australia, 2026",
    start: "2026-08-13", end: "2026-08-26", format: "2 Tests", host: "Australia",
    fixtures: [
      { subtitle: "1st Test", date: "2026-08-13", venue: "Marrara Cricket Ground", city: "Darwin" },
      { subtitle: "2nd Test", date: "2026-08-22", venue: "Great Barrier Reef Arena", city: "Mackay" },
    ],
  },
  {
    name: "West Indies tour of India, 2026",
    start: "2026-09-27", end: "2026-10-17", format: "3 ODIs · 5 T20Is", host: "India",
    fixtures: [
      { subtitle: "1st ODI", date: "2026-09-27", venue: "Greenfield International Stadium", city: "Thiruvananthapuram" },
      { subtitle: "2nd ODI", date: "2026-09-30", venue: "Barsapara Cricket Stadium", city: "Guwahati" },
      { subtitle: "3rd ODI", date: "2026-10-03", venue: "Maharaja Yadavindra Singh International Cricket Stadium", city: "Mullanpur" },
      { subtitle: "1st T20I", date: "2026-10-06", venue: "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium", city: "Lucknow" },
      { subtitle: "2nd T20I", date: "2026-10-09", venue: "JSCA International Stadium Complex", city: "Ranchi" },
      { subtitle: "3rd T20I", date: "2026-10-11", venue: "Holkar Stadium", city: "Indore" },
      { subtitle: "4th T20I", date: "2026-10-14", venue: "Rajiv Gandhi International Stadium", city: "Hyderabad" },
      { subtitle: "5th T20I", date: "2026-10-17", venue: "M. Chinnaswamy Stadium", city: "Bengaluru" },
    ],
  },
  {
    name: "India tour of New Zealand, 2026",
    start: "2026-10-22", end: "2026-11-30", format: "5 T20Is · 5 ODIs · 2 Tests", host: "New Zealand",
    fixtures: [
      { subtitle: "1st T20I", date: "2026-10-22", venue: "Hagley Oval", city: "Christchurch" },
      { subtitle: "2nd T20I", date: "2026-10-24", venue: "Hagley Oval", city: "Christchurch" },
      { subtitle: "3rd T20I", date: "2026-10-27", venue: "Sky Stadium", city: "Wellington" },
      { subtitle: "4th T20I", date: "2026-10-30", venue: "Eden Park", city: "Auckland" },
      { subtitle: "5th T20I", date: "2026-11-01", venue: "Seddon Park", city: "Hamilton" },
      { subtitle: "1st ODI", date: "2026-11-04", venue: "Eden Park", city: "Auckland" },
      { subtitle: "2nd ODI", date: "2026-11-07", venue: "Sky Stadium", city: "Wellington" },
      { subtitle: "3rd ODI", date: "2026-11-10", venue: "Seddon Park", city: "Hamilton" },
      { subtitle: "4th ODI", date: "2026-11-13", venue: "Bay Oval", city: "Mount Maunganui" },
      { subtitle: "5th ODI", date: "2026-11-15", venue: "Bay Oval", city: "Mount Maunganui" },
      { subtitle: "1st Test", date: "2026-11-19", venue: "Basin Reserve", city: "Wellington" },
      { subtitle: "2nd Test", date: "2026-11-27", venue: "Hagley Oval", city: "Christchurch" },
    ],
  },
  {
    name: "Bangladesh tour of South Africa, 2026",
    start: "2026-11-15", end: "2026-12-13", format: "2 Tests · 3 ODIs · 3 T20Is", host: "South Africa",
    fixtures: [
      { subtitle: "1st Test", date: "2026-11-15", venue: "The Wanderers Stadium", city: "Johannesburg" },
      { subtitle: "2nd Test", date: "2026-11-23", venue: "SuperSport Park", city: "Centurion" },
      { subtitle: "1st ODI", date: "2026-12-01", venue: "Buffalo Park", city: "East London" },
      { subtitle: "2nd ODI", date: "2026-12-04", venue: "St George's Park", city: "Gqeberha" },
      { subtitle: "3rd ODI", date: "2026-12-07", venue: "Newlands", city: "Cape Town" },
      { subtitle: "1st T20I", date: "2026-12-10", venue: "Diamond Oval", city: "Kimberley" },
      { subtitle: "2nd T20I", date: "2026-12-12", venue: "Willowmoore Park", city: "Benoni" },
      { subtitle: "3rd T20I", date: "2026-12-13", venue: "SuperSport Park", city: "Centurion" },
    ],
  },
  {
    name: "New Zealand tour of Australia, 2026-27",
    start: "2026-12-09", end: "2027-01-08", format: "4 Tests", host: "Australia",
    fixtures: [
      { subtitle: "1st Test", date: "2026-12-09", venue: "Perth Stadium", city: "Perth" },
      { subtitle: "2nd Test", date: "2026-12-17", venue: "Adelaide Oval", city: "Adelaide" },
      { subtitle: "3rd Test", date: "2026-12-26", venue: "Melbourne Cricket Ground", city: "Melbourne" },
      { subtitle: "4th Test", date: "2027-01-04", venue: "Sydney Cricket Ground", city: "Sydney" },
    ],
  },
  {
    name: "England tour of South Africa, 2026-27",
    start: "2026-12-17", end: "2027-01-15", format: "3 Tests · 3 ODIs", host: "South Africa",
    fixtures: [
      { subtitle: "1st Test", date: "2026-12-17", venue: "The Wanderers Stadium", city: "Johannesburg" },
      { subtitle: "2nd Test", date: "2026-12-26", venue: "SuperSport Park", city: "Centurion" },
      { subtitle: "3rd Test", date: "2027-01-03", venue: "Newlands", city: "Cape Town" },
      { subtitle: "1st ODI", date: "2027-01-10", venue: "Boland Park", city: "Paarl" },
      { subtitle: "2nd ODI", date: "2027-01-13", venue: "Mangaung Oval", city: "Bloemfontein" },
      { subtitle: "3rd ODI", date: "2027-01-15", venue: "Mangaung Oval", city: "Bloemfontein" },
    ],
  },
  {
    name: "Sri Lanka tour of India, 2026",
    start: "2026-12-13", end: "2026-12-27", format: "3 ODIs · 3 T20Is", host: "India",
    fixtures: [
      { subtitle: "1st ODI", date: "2026-12-13", venue: "Arun Jaitley Stadium", city: "Delhi" },
      { subtitle: "2nd ODI", date: "2026-12-16", venue: "M. Chinnaswamy Stadium", city: "Bengaluru" },
      { subtitle: "3rd ODI", date: "2026-12-19", venue: "Narendra Modi Stadium", city: "Ahmedabad" },
      { subtitle: "1st T20I", date: "2026-12-22", venue: "Niranjan Shah Stadium", city: "Rajkot" },
      { subtitle: "2nd T20I", date: "2026-12-24", venue: "Barabati Stadium", city: "Cuttack" },
      { subtitle: "3rd T20I", date: "2026-12-27", venue: "Maharashtra Cricket Association Stadium", city: "Pune" },
    ],
  },
  {
    name: "Zimbabwe tour of India, 2027",
    start: "2027-01-03", end: "2027-01-09", format: "3 ODIs", host: "India",
    fixtures: [
      { subtitle: "1st ODI", date: "2027-01-03", venue: "Eden Gardens", city: "Kolkata" },
      { subtitle: "2nd ODI", date: "2027-01-06", venue: "Rajiv Gandhi International Stadium", city: "Hyderabad" },
      { subtitle: "3rd ODI", date: "2027-01-09", venue: "Wankhede Stadium", city: "Mumbai" },
    ],
  },
  {
    name: "Australia tour of India, 2027",
    start: "2027-01-21", end: "2027-03-03", format: "5 Tests", host: "India",
    fixtures: [
      { subtitle: "1st Test", date: "2027-01-21", venue: "Vidarbha Cricket Association Stadium", city: "Nagpur" },
      { subtitle: "2nd Test", date: "2027-01-29", venue: "MA Chidambaram Stadium", city: "Chennai" },
      { subtitle: "3rd Test", date: "2027-02-11", venue: "Barsapara Cricket Stadium", city: "Guwahati" },
      { subtitle: "4th Test", date: "2027-02-19", venue: "JSCA International Stadium Complex", city: "Ranchi" },
      { subtitle: "5th Test", date: "2027-02-27", venue: "Narendra Modi Stadium", city: "Ahmedabad" },
    ],
  },
  {
    name: "Sri Lanka tour of New Zealand, 2027",
    start: "2027-01-16", end: "2027-02-16", format: "3 ODIs · 3 T20Is · 2 Tests", host: "New Zealand",
    fixtures: [
      { subtitle: "1st ODI", date: "2027-01-16", venue: "McLean Park", city: "Napier" },
      { subtitle: "2nd ODI", date: "2027-01-19", venue: "Sky Stadium", city: "Wellington" },
      { subtitle: "3rd ODI", date: "2027-01-22", venue: "University Oval", city: "Dunedin" },
      { subtitle: "1st T20I", date: "2027-01-26", venue: "Hagley Oval", city: "Christchurch" },
      { subtitle: "2nd T20I", date: "2027-01-29", venue: "Saxton Oval", city: "Nelson" },
      { subtitle: "3rd T20I", date: "2027-01-31", venue: "Saxton Oval", city: "Nelson" },
      { subtitle: "1st Test", date: "2027-02-04", venue: "Bay Oval", city: "Mount Maunganui" },
      { subtitle: "2nd Test", date: "2027-02-12", venue: "Seddon Park", city: "Hamilton" },
    ],
  },
  {
    name: "Australia vs England 150th Anniversary One-off Test, 2027",
    start: "2027-03-11", end: "2027-03-15", format: "1 Test", host: "Australia",
    fixtures: [
      { subtitle: "One-off Test", date: "2027-03-11", venue: "Melbourne Cricket Ground", city: "Melbourne" },
    ],
  },
  { name: "ICC Men's T20 World Cup Europe Sub-Regional Qualifier B, 2026", start: "2026-07-08", end: "2026-07-14", format: "T20I Qualifier", host: "Denmark" },

  // -------- Multi-team events kept from the previous list --------
  { name: "Asia Cup 2026", start: "2026-09-04", end: "2026-09-20", format: "T20I", host: "Sri Lanka / UAE" },
  { name: "ICC Men's T20 World Cup 2026", start: "2026-02-07", end: "2026-03-08", format: "T20I World Cup", host: "India & Sri Lanka" },
];

const ORDINALS = ["1st", "2nd", "3rd", "4th", "5th"];

function parseTeamsFromSeries(name: string): { visitor: string; homeTeam: string } | null {
  const m = /^([A-Za-z ]+?)\s+tour of\s+([A-Za-z ]+?)(?:,|$)/i.exec(name);
  if (m) return { visitor: m[1].trim(), homeTeam: m[2].trim() };
  // "Australia vs England 150th Anniversary ..."
  const vm = /^([A-Za-z ]+?)\s+vs\s+([A-Za-z ]+?)\s+/i.exec(name);
  if (vm) return { visitor: vm[2].trim(), homeTeam: vm[1].trim() };
  return null;
}

function expandCricketMatches(s: RawCricket, seriesSlug: string): ScheduleMatch[] {
  const teams = parseTeamsFromSeries(s.name);
  const title = teams ? `${teams.homeTeam} vs ${teams.visitor}` : s.name;

  // Explicit fixtures win.
  if (s.fixtures && s.fixtures.length > 0 && teams) {
    return s.fixtures.map((f) => ({
      slug: slugify(`${seriesSlug}-${f.subtitle}-${f.date}`),
      seriesSlug,
      sport: "cricket",
      title,
      subtitle: f.subtitle,
      date: f.date,
      venue: f.venue,
      city: f.city,
      home: teams.homeTeam,
      away: teams.visitor,
    }));
  }

  // Non-tour formats (Asia Cup, T20 WC, ICC qualifiers) → represent as one flagship "Tournament" match entry.
  if (!teams) {
    return [
      {
        slug: slugify(`${seriesSlug}-tournament`),
        seriesSlug,
        sport: "cricket",
        title: s.name,
        subtitle: s.format,
        date: s.start,
        venue: s.host,
        home: s.name,
        away: "",
      },
    ];
  }

  // Auto-expand from format string.
  const parts = s.format.split(/·|,/).map((p) => p.trim()).filter(Boolean);
  type Segment = { count: number; label: string };
  const segments: Segment[] = parts
    .map((p) => {
      const mm = /^(\d+)\s+(Tests?|ODIs?|T20Is?)$/i.exec(p);
      if (!mm) return null;
      const label = mm[2].replace(/s$/i, "");
      return { count: parseInt(mm[1], 10), label };
    })
    .filter((v): v is Segment => v !== null);

  if (segments.length === 0) return [];

  const total = segments.reduce((n, seg) => n + seg.count, 0);
  const spanDays = daysBetween(s.start, s.end);
  const step = Math.max(1, Math.floor(spanDays / total));

  const matches: ScheduleMatch[] = [];
  let idx = 0;
  for (const seg of segments) {
    for (let i = 0; i < seg.count; i++) {
      const date = addDays(s.start, idx * step);
      const ord = seg.count === 1 ? "Only" : (ORDINALS[i] ?? `${i + 1}th`);
      const subtitle = `${ord} ${seg.label}`;
      matches.push({
        slug: slugify(`${seriesSlug}-${subtitle}-${date}`),
        seriesSlug,
        sport: "cricket",
        title,
        subtitle,
        date,
        venue: s.host,
        home: teams.homeTeam,
        away: teams.visitor,
      });
      idx++;
    }
  }
  return matches;
}

function seriesSeoBlurb(s: RawCricket): string {
  const n = s.name.toLowerCase();
  if (n.includes("india tour of england")) {
    return `India vs England 2026 (ind vs eng) — full India tour of England 2026 schedule, ${s.format} across nine grounds (Chester-le-Street, Old Trafford, Trent Bridge, Bristol, Southampton, Edgbaston, Lord's, The Oval). Live cricket score, today match prediction, playing XI, ind vs eng head-to-head, session runs and top-batter markets on your Mahadev Book exchange ID.`;
  }
  if (n.includes("india tour of zimbabwe")) {
    return `India tour of Zimbabwe 2026 — ${s.format} in ${s.host}. India vs Zimbabwe 2026 live cricket score, today match prediction, playing XI and full schedule with match odds, session runs and top-batter markets on Mahadev Book.`;
  }
  if (n.includes("india tour of sri lanka")) {
    return `India tour of Sri Lanka 2026 — ${s.format} in ${s.host}. India vs Sri Lanka 2026 live cricket score, today match prediction, playing XI, Colombo/Kandy/Dambulla venues and full schedule on Mahadev Book.`;
  }
  return `Full ${s.format} calendar for ${s.name} — hosted in ${s.host}. Live cricket score, today match prediction, playing XI, match odds, session runs and top-batter markets on your Mahadev Book exchange ID.`;
}

const cricketSeriesList: ScheduleSeries[] = rawCricket.map((s) => {
  const seriesSlug = slugify(s.name);
  return {
    slug: seriesSlug,
    sport: "cricket",
    name: s.name,
    start: s.start,
    end: s.end,
    format: s.format,
    host: s.host,
    description: seriesSeoBlurb(s),
    matches: expandCricketMatches(s, seriesSlug),
  };
});


// ---------------- Tennis (ATP + WTA) ----------------

type RawTennis = {
  name: string; window: string; start: string; end: string; city: string; country: string; category: string; tour: "ATP" | "WTA";
};

const rawTennis: RawTennis[] = [
  // ---------- ATP 2026 (full year) ----------
  { name: "United Cup", window: "2 – 11 Jan", start: "2026-01-02", end: "2026-01-11", city: "Sydney & Perth", country: "Australia", category: "Team Event", tour: "ATP" },
  { name: "Brisbane International", window: "4 – 11 Jan", start: "2026-01-04", end: "2026-01-11", city: "Brisbane", country: "Australia", category: "ATP 250", tour: "ATP" },
  { name: "Adelaide International", window: "11 – 17 Jan", start: "2026-01-11", end: "2026-01-17", city: "Adelaide", country: "Australia", category: "ATP 250", tour: "ATP" },
  { name: "Australian Open (Men's Singles)", window: "19 Jan – 1 Feb", start: "2026-01-19", end: "2026-02-01", city: "Melbourne", country: "Australia", category: "Grand Slam", tour: "ATP" },
  { name: "Open Sud de France", window: "2 – 8 Feb", start: "2026-02-02", end: "2026-02-08", city: "Montpellier", country: "France", category: "ATP 250", tour: "ATP" },
  { name: "Rotterdam Open", window: "9 – 15 Feb", start: "2026-02-09", end: "2026-02-15", city: "Rotterdam", country: "Netherlands", category: "ATP 500", tour: "ATP" },
  { name: "Qatar Open", window: "16 – 21 Feb", start: "2026-02-16", end: "2026-02-21", city: "Doha", country: "Qatar", category: "ATP 500", tour: "ATP" },
  { name: "Dubai Tennis Championships", window: "23 – 28 Feb", start: "2026-02-23", end: "2026-02-28", city: "Dubai", country: "UAE", category: "ATP 500", tour: "ATP" },
  { name: "BNP Paribas Open (Indian Wells)", window: "4 – 22 Mar", start: "2026-03-04", end: "2026-03-22", city: "Indian Wells", country: "USA", category: "ATP 1000", tour: "ATP" },
  { name: "Miami Open", window: "23 Mar – 5 Apr", start: "2026-03-23", end: "2026-04-05", city: "Miami", country: "USA", category: "ATP 1000", tour: "ATP" },
  { name: "Monte-Carlo Masters", window: "5 – 12 Apr", start: "2026-04-05", end: "2026-04-12", city: "Monte-Carlo", country: "Monaco", category: "ATP 1000", tour: "ATP" },
  { name: "Barcelona Open", window: "13 – 19 Apr", start: "2026-04-13", end: "2026-04-19", city: "Barcelona", country: "Spain", category: "ATP 500", tour: "ATP" },
  { name: "Madrid Open", window: "22 Apr – 3 May", start: "2026-04-22", end: "2026-05-03", city: "Madrid", country: "Spain", category: "ATP 1000", tour: "ATP" },
  { name: "Italian Open", window: "6 – 17 May", start: "2026-05-06", end: "2026-05-17", city: "Rome", country: "Italy", category: "ATP 1000", tour: "ATP" },
  { name: "Roland Garros (Men's Singles)", window: "24 May – 7 Jun", start: "2026-05-24", end: "2026-06-07", city: "Paris", country: "France", category: "Grand Slam", tour: "ATP" },
  { name: "Stuttgart Open", window: "8 – 14 Jun", start: "2026-06-08", end: "2026-06-14", city: "Stuttgart", country: "Germany", category: "ATP 250", tour: "ATP" },
  { name: "Halle Open", window: "15 – 21 Jun", start: "2026-06-15", end: "2026-06-21", city: "Halle", country: "Germany", category: "ATP 500", tour: "ATP" },
  { name: "Queen's Club Championships", window: "15 – 21 Jun", start: "2026-06-15", end: "2026-06-21", city: "London", country: "UK", category: "ATP 500", tour: "ATP" },
  { name: "Wimbledon (Men's Singles)", window: "29 Jun – 12 Jul", start: "2026-06-29", end: "2026-07-12", city: "London", country: "UK", category: "Grand Slam", tour: "ATP" },
  { name: "Nordea Open", window: "6 – 19 Jul", start: "2026-07-06", end: "2026-07-19", city: "Båstad", country: "Sweden", category: "ATP 250", tour: "ATP" },
  { name: "EFG Swiss Open Gstaad", window: "11 – 19 Jul", start: "2026-07-11", end: "2026-07-19", city: "Gstaad", country: "Switzerland", category: "ATP 250", tour: "ATP" },
  { name: "Plava Laguna Croatia Open Umag", window: "11 – 18 Jul", start: "2026-07-11", end: "2026-07-18", city: "Umag", country: "Croatia", category: "ATP 250", tour: "ATP" },
  { name: "Generali Open", window: "20 – 25 Jul", start: "2026-07-20", end: "2026-07-25", city: "Kitzbühel", country: "Austria", category: "ATP 250", tour: "ATP" },
  { name: "Mubadala Citi DC Open", window: "27 Jul – 2 Aug", start: "2026-07-27", end: "2026-08-02", city: "Washington", country: "USA", category: "ATP 500", tour: "ATP" },
  { name: "National Bank Open", window: "2 – 13 Aug", start: "2026-08-02", end: "2026-08-13", city: "Montreal", country: "Canada", category: "ATP 1000", tour: "ATP" },
  { name: "Cincinnati Open", window: "13 – 23 Aug", start: "2026-08-13", end: "2026-08-23", city: "Cincinnati", country: "USA", category: "ATP 1000", tour: "ATP" },
  { name: "US Open (Men's Singles)", window: "25 Aug – 13 Sep", start: "2026-08-25", end: "2026-09-13", city: "New York", country: "USA", category: "Grand Slam", tour: "ATP" },
  { name: "Laver Cup", window: "18 – 20 Sep", start: "2026-09-18", end: "2026-09-20", city: "London", country: "UK", category: "Team Event", tour: "ATP" },
  { name: "China Open", window: "28 Sep – 6 Oct", start: "2026-09-28", end: "2026-10-06", city: "Beijing", country: "China", category: "ATP 500", tour: "ATP" },
  { name: "Rolex Shanghai Masters", window: "5 – 18 Oct", start: "2026-10-05", end: "2026-10-18", city: "Shanghai", country: "China", category: "ATP 1000", tour: "ATP" },
  { name: "Swiss Indoors Basel", window: "24 Oct – 1 Nov", start: "2026-10-24", end: "2026-11-01", city: "Basel", country: "Switzerland", category: "ATP 500", tour: "ATP" },
  { name: "Erste Bank Open", window: "24 Oct – 1 Nov", start: "2026-10-24", end: "2026-11-01", city: "Vienna", country: "Austria", category: "ATP 500", tour: "ATP" },
  { name: "Rolex Paris Masters", window: "31 Oct – 8 Nov", start: "2026-10-31", end: "2026-11-08", city: "Paris", country: "France", category: "ATP 1000", tour: "ATP" },
  { name: "Nitto ATP Finals", window: "14 – 22 Nov", start: "2026-11-14", end: "2026-11-22", city: "Turin", country: "Italy", category: "Season Finals", tour: "ATP" },
  { name: "Davis Cup Finals", window: "24 – 29 Nov", start: "2026-11-24", end: "2026-11-29", city: "Bologna", country: "Italy", category: "Team Event", tour: "ATP" },

  // ---------- WTA 2026 (full year) ----------
  { name: "Auckland Open (WTA)", window: "5 – 11 Jan", start: "2026-01-05", end: "2026-01-11", city: "Auckland", country: "New Zealand", category: "WTA 250", tour: "WTA" },
  { name: "Adelaide International (WTA)", window: "11 – 17 Jan", start: "2026-01-11", end: "2026-01-17", city: "Adelaide", country: "Australia", category: "WTA 500", tour: "WTA" },
  { name: "Australian Open (Women's Singles)", window: "19 Jan – 1 Feb", start: "2026-01-19", end: "2026-02-01", city: "Melbourne", country: "Australia", category: "Grand Slam", tour: "WTA" },
  { name: "Abu Dhabi Open", window: "2 – 8 Feb", start: "2026-02-02", end: "2026-02-08", city: "Abu Dhabi", country: "UAE", category: "WTA 500", tour: "WTA" },
  { name: "Qatar Open (WTA)", window: "9 – 15 Feb", start: "2026-02-09", end: "2026-02-15", city: "Doha", country: "Qatar", category: "WTA 1000", tour: "WTA" },
  { name: "Dubai Tennis Championships (WTA)", window: "16 – 22 Feb", start: "2026-02-16", end: "2026-02-22", city: "Dubai", country: "UAE", category: "WTA 1000", tour: "WTA" },
  { name: "Mérida Open", window: "23 Feb – 1 Mar", start: "2026-02-23", end: "2026-03-01", city: "Mérida", country: "Mexico", category: "WTA 500", tour: "WTA" },
  { name: "BNP Paribas Open (Indian Wells, WTA)", window: "4 – 22 Mar", start: "2026-03-04", end: "2026-03-22", city: "Indian Wells", country: "USA", category: "WTA 1000", tour: "WTA" },
  { name: "Miami Open (WTA)", window: "17 – 29 Mar", start: "2026-03-17", end: "2026-03-29", city: "Miami", country: "USA", category: "WTA 1000", tour: "WTA" },
  { name: "Charleston Open", window: "30 Mar – 5 Apr", start: "2026-03-30", end: "2026-04-05", city: "Charleston", country: "USA", category: "WTA 500", tour: "WTA" },
  { name: "Stuttgart Open (WTA)", window: "20 – 26 Apr", start: "2026-04-20", end: "2026-04-26", city: "Stuttgart", country: "Germany", category: "WTA 500", tour: "WTA" },
  { name: "Madrid Open (WTA)", window: "22 Apr – 3 May", start: "2026-04-22", end: "2026-05-03", city: "Madrid", country: "Spain", category: "WTA 1000", tour: "WTA" },
  { name: "Italian Open (WTA)", window: "6 – 17 May", start: "2026-05-06", end: "2026-05-17", city: "Rome", country: "Italy", category: "WTA 1000", tour: "WTA" },
  { name: "Roland Garros (Women's Singles)", window: "24 May – 7 Jun", start: "2026-05-24", end: "2026-06-07", city: "Paris", country: "France", category: "Grand Slam", tour: "WTA" },
  { name: "Berlin Open", window: "15 – 21 Jun", start: "2026-06-15", end: "2026-06-21", city: "Berlin", country: "Germany", category: "WTA 500", tour: "WTA" },
  { name: "Bad Homburg Open", window: "22 – 28 Jun", start: "2026-06-22", end: "2026-06-28", city: "Bad Homburg", country: "Germany", category: "WTA 500", tour: "WTA" },
  { name: "Wimbledon (Women's Singles)", window: "29 Jun – 12 Jul", start: "2026-06-29", end: "2026-07-12", city: "London", country: "UK", category: "Grand Slam", tour: "WTA" },
  { name: "Hamburg Open (WTA)", window: "13 – 19 Jul", start: "2026-07-13", end: "2026-07-19", city: "Hamburg", country: "Germany", category: "WTA 250", tour: "WTA" },
  { name: "Prague Open", window: "20 – 26 Jul", start: "2026-07-20", end: "2026-07-26", city: "Prague", country: "Czechia", category: "WTA 250", tour: "WTA" },
  { name: "Mubadala Citi DC Open (WTA)", window: "27 Jul – 2 Aug", start: "2026-07-27", end: "2026-08-02", city: "Washington", country: "USA", category: "WTA 500", tour: "WTA" },
  { name: "Canadian Open (WTA)", window: "2 – 13 Aug", start: "2026-08-02", end: "2026-08-13", city: "Toronto", country: "Canada", category: "WTA 1000", tour: "WTA" },
  { name: "Cincinnati Open (WTA)", window: "13 – 23 Aug", start: "2026-08-13", end: "2026-08-23", city: "Cincinnati", country: "USA", category: "WTA 1000", tour: "WTA" },
  { name: "US Open (Women's Singles)", window: "25 Aug – 13 Sep", start: "2026-08-25", end: "2026-09-13", city: "New York", country: "USA", category: "Grand Slam", tour: "WTA" },
  { name: "Guadalajara Open", window: "14 – 20 Sep", start: "2026-09-14", end: "2026-09-20", city: "Guadalajara", country: "Mexico", category: "WTA 500", tour: "WTA" },
  { name: "China Open (WTA)", window: "27 Sep – 11 Oct", start: "2026-09-27", end: "2026-10-11", city: "Beijing", country: "China", category: "WTA 1000", tour: "WTA" },
  { name: "Wuhan Open", window: "9 – 18 Oct", start: "2026-10-09", end: "2026-10-18", city: "Wuhan", country: "China", category: "WTA 1000", tour: "WTA" },
  { name: "Ningbo Open", window: "20 – 26 Oct", start: "2026-10-20", end: "2026-10-26", city: "Ningbo", country: "China", category: "WTA 500", tour: "WTA" },
  { name: "Pan Pacific Open", window: "26 Oct – 1 Nov", start: "2026-10-26", end: "2026-11-01", city: "Tokyo", country: "Japan", category: "WTA 500", tour: "WTA" },
  { name: "WTA Finals Riyadh", window: "1 – 8 Nov", start: "2026-11-01", end: "2026-11-08", city: "Riyadh", country: "Saudi Arabia", category: "Season Finals", tour: "WTA" },
  { name: "Billie Jean King Cup Finals", window: "17 – 22 Nov", start: "2026-11-17", end: "2026-11-22", city: "Seville", country: "Spain", category: "Team Event", tour: "WTA" },
];

const tennisSeriesList: ScheduleSeries[] = rawTennis.map((t) => {
  const seriesSlug = slugify(`${t.tour}-${t.name}-2026`);
  const stages = t.category === "Grand Slam"
    ? ["Round of 16", "Quarter-finals", "Semi-finals", "Final"]
    : ["Quarter-finals", "Semi-finals", "Final"];
  const span = daysBetween(t.start, t.end);
  const step = Math.max(1, Math.floor(span / stages.length));
  const matches: ScheduleMatch[] = stages.map((stage, i) => {
    const date = i === stages.length - 1 ? t.end : addDays(t.start, (i + 1) * step);
    return {
      slug: slugify(`${seriesSlug}-${stage}-${date}`),
      seriesSlug,
      sport: "tennis",
      title: `${t.name} — ${stage}`,
      subtitle: `${t.tour} · ${stage}`,
      date,
      venue: `${t.city}, ${t.country}`,
      city: t.city,
      home: t.name,
      away: "",
    };
  });
  return {
    slug: seriesSlug,
    sport: "tennis",
    name: `${t.name} (${t.tour})`,
    start: t.start,
    end: t.end,
    format: `${t.category} · ${t.tour}`,
    host: `${t.city}, ${t.country}`,
    description: `${t.name} 2026 (${t.tour}) tennis schedule — ${t.category} in ${t.city}, ${t.country} (${t.window} 2026). Live tennis scores, today match prediction, draw, ATP/WTA rankings and betting odds on every match page.`,
    matches,
  };
});

// ---------------- Public API ----------------

export const allSeries: ScheduleSeries[] = [...cricketSeriesList, footballSeries, ...tennisSeriesList];

export const allMatches: ScheduleMatch[] = allSeries.flatMap((s) => s.matches);

export function getSeriesBySport(sport: Sport | "all"): ScheduleSeries[] {
  if (sport === "all") return allSeries;
  return allSeries.filter((s) => s.sport === sport);
}

export function getSeriesBySlug(slug: string): ScheduleSeries | undefined {
  return allSeries.find((s) => s.slug === slug);
}

export function getMatchBySlug(slug: string): { match: ScheduleMatch; series: ScheduleSeries } | undefined {
  for (const s of allSeries) {
    const m = s.matches.find((mm) => mm.slug === slug);
    if (m) return { match: m, series: s };
  }
  return undefined;
}

export function formatLongDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
