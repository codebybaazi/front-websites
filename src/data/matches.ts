import { footballFixtures } from "./football-fixtures";
import { tennisFixtures } from "./tennis-fixtures";

export interface MatchFixture {
  slug: string;
  sport: "Cricket" | "Football" | "Tennis";
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  city: string;
  country: string;
  startDate: string; // ISO
  status: "live" | "upcoming";
  stage?: string;
  category?: string;
  marketHighlights: string[];
  keywords: string[];
}

export const matches: MatchFixture[] = [
  {
    slug: "india-vs-australia-3rd-odi-2026",
    sport: "Cricket",
    tournament: "India vs Australia ODI Series 2026",
    homeTeam: "India",
    awayTeam: "Australia",
    venue: "Wankhede Stadium",
    city: "Mumbai",
    country: "India",
    startDate: "2026-02-08T13:30:00+05:30",
    status: "live",
    marketHighlights: ["Match odds", "Session betting", "Fancy markets", "Player runs"],
    keywords: ["india vs australia live odds", "IND vs AUS 3rd ODI betting", "ind vs aus session rate", "india australia live score odds"],
  },
  {
    slug: "csk-vs-mi-ipl-2026",
    sport: "Cricket",
    tournament: "IPL 2026",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Mumbai Indians",
    venue: "MA Chidambaram Stadium",
    city: "Chennai",
    country: "India",
    startDate: "2026-04-12T19:30:00+05:30",
    status: "upcoming",
    marketHighlights: ["Match winner", "Toss market", "Top batter", "6-over line"],
    keywords: ["csk vs mi ipl 2026 odds", "chennai vs mumbai betting", "csk mi live rate", "ipl 2026 csk vs mi prediction"],
  },
  {
    slug: "rcb-vs-kkr-ipl-2026",
    sport: "Cricket",
    tournament: "IPL 2026",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Kolkata Knight Riders",
    venue: "M. Chinnaswamy Stadium",
    city: "Bengaluru",
    country: "India",
    startDate: "2026-04-15T19:30:00+05:30",
    status: "upcoming",
    marketHighlights: ["Match odds", "Powerplay runs", "Total sixes", "Kohli runs line"],
    keywords: ["rcb vs kkr ipl 2026", "rcb kkr live odds", "kohli runs betting", "ipl live rate rcb kkr"],
  },
  {
    slug: "india-vs-pakistan-t20-world-cup-2026",
    sport: "Cricket",
    tournament: "ICC T20 World Cup 2026",
    homeTeam: "India",
    awayTeam: "Pakistan",
    venue: "Eden Gardens",
    city: "Kolkata",
    country: "India",
    startDate: "2026-02-20T19:00:00+05:30",
    status: "upcoming",
    marketHighlights: ["Match winner", "Toss + Match", "Top Indian batter", "Fall of 1st wicket"],
    keywords: ["india vs pakistan t20 world cup odds", "ind vs pak live betting", "ind pak t20 world cup prediction", "india pakistan session rate"],
  },
  {
    slug: "england-vs-south-africa-test-2026",
    sport: "Cricket",
    tournament: "England Test Series 2026",
    homeTeam: "England",
    awayTeam: "South Africa",
    venue: "Lord's",
    city: "London",
    country: "United Kingdom",
    startDate: "2026-07-10T11:00:00+01:00",
    status: "upcoming",
    marketHighlights: ["Match odds", "1st innings runs", "Draw market", "Session lines"],
    keywords: ["england vs south africa test odds", "eng vs sa lord's betting", "eng sa 1st innings runs", "test cricket live rate"],
  },
  {
    slug: "djokovic-vs-alcaraz-wimbledon-2026",
    sport: "Tennis",
    tournament: "Wimbledon 2026",
    homeTeam: "Novak Djokovic",
    awayTeam: "Carlos Alcaraz",
    venue: "All England Club",
    city: "London",
    country: "United Kingdom",
    startDate: "2026-07-12T14:00:00+01:00",
    status: "upcoming",
    marketHighlights: ["Match winner", "Set betting", "Total games", "Tie-break in match"],
    keywords: ["djokovic vs alcaraz wimbledon odds", "wimbledon final betting", "alcaraz djokovic live odds", "tennis set betting"],
  },
  ...footballFixtures,
  ...(tennisFixtures as any),
];

export const matchesBySport = (sport: MatchFixture["sport"]) =>
  matches.filter((m) => m.sport === sport);

export const getMatch = (slug: string) => matches.find((m) => m.slug === slug);
