import { AUTHOR_PATHS } from "@/lib/authors";
import { BLOG_POST_SLUGS, blogPostIsoDate } from "@/utils/blog-post-dates";
import { hasUniqueBlogBody } from "@/utils/blog-seo";
import { CRICKET_SCHEDULE_DATA } from "@/lib/cricket-schedule";
import { FOOTBALL_SCHEDULE_DATA } from "@/lib/sports-data";
import { TENNIS_SCHEDULE_DATA } from "@/lib/tennis-schedule";
import { MATCH_INDEX } from "@/utils/match-index";
import type { PageSeo } from "@/utils/page-seo";
import { OG_IMAGE, PAGE_SEO, SITE_ORIGIN, socialImageMeta } from "@/utils/page-seo";
import { getMatchSlug } from "@/utils/slugify";

function pageUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${clean}`;
}

export type ScheduleSport = "cricket" | "football" | "tennis";

export type ScheduleFixture = {
  slug: string;
  event: string;
  date: string;
  time: string;
  venue: string;
  series: string;
  sport: ScheduleSport;
};

type ScheduleSeriesSource = {
  series: string;
  matches: ReadonlyArray<{ event: string; date: string; time: string; venue: string }>;
};

function flattenSport(
  rows: ReadonlyArray<ScheduleSeriesSource>,
  sport: ScheduleSport,
): ScheduleFixture[] {
  const out: ScheduleFixture[] = [];
  for (const series of rows) {
    for (const match of series.matches) {
      out.push({
        slug: getMatchSlug(series.series, match),
        event: match.event,
        date: match.date,
        time: match.time,
        venue: match.venue,
        series: series.series,
        sport,
      });
    }
  }
  return out;
}

export function listAllScheduleFixtures(): ScheduleFixture[] {
  return [
    ...flattenSport(CRICKET_SCHEDULE_DATA, "cricket"),
    ...flattenSport(FOOTBALL_SCHEDULE_DATA, "football"),
    ...flattenSport(TENNIS_SCHEDULE_DATA, "tennis"),
  ];
}

/** CollectionPage ItemList cap — full calendars are too large for rich results. */
export const SCHEDULE_ITEMLIST_CAP = 30;

/** Next fixtures by date (today onward). If none remain, the latest dated rows. */
export function upcomingScheduleFixtures(limit = SCHEDULE_ITEMLIST_CAP): ScheduleFixture[] {
  const today = new Date().toISOString().slice(0, 10);
  const ranked = listAllScheduleFixtures()
    .map((fixture) => ({
      fixture,
      iso: fixtureStartDate(fixture.date) ?? "9999-12-31",
    }))
    .sort((a, b) => a.iso.localeCompare(b.iso) || a.fixture.event.localeCompare(b.fixture.event));

  const upcoming = ranked.filter((row) => row.iso >= today);
  const source = upcoming.length > 0 ? upcoming : ranked.slice(-limit);
  return source.slice(0, limit).map((row) => row.fixture);
}

/** ISO date (YYYY-MM-DD) when the fixture string is parseable; otherwise omitted. */
const MONTH_INDEX: Record<string, number> = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  sept: 9,
  oct: 10,
  nov: 11,
  dec: 12,
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

function isoFromParts(year: number, month: number, day: number): string | undefined {
  if (year < 2020 || year > 2035 || month < 1 || month > 12 || day < 1 || day > 31) return undefined;
  const utc = Date.UTC(year, month - 1, day);
  const check = new Date(utc);
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) {
    return undefined;
  }
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Parse schedule copy such as "Wed, 01 Jul 2026", "Tue, 15 Sept 2026", or "June 11, 2026". */
export function fixtureStartDate(date?: string): string | undefined {
  if (!date?.trim() || /^tbd$/i.test(date.trim())) return undefined;
  const text = date.replace(/\u2013|\u2014/g, "-").trim();

  const dayMonthYear = text.match(/(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})/);
  if (dayMonthYear) {
    const month = MONTH_INDEX[dayMonthYear[2].toLowerCase()];
    if (month) return isoFromParts(Number(dayMonthYear[3]), month, Number(dayMonthYear[1]));
  }

  const monthDayYear = text.match(/([A-Za-z]{3,9})\s+(\d{1,2}),?\s+(\d{4})/);
  if (monthDayYear) {
    const month = MONTH_INDEX[monthDayYear[1].toLowerCase()];
    if (month) return isoFromParts(Number(monthDayYear[3]), month, Number(monthDayYear[2]));
  }

  const iso = text.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return isoFromParts(Number(iso[1]), Number(iso[2]), Number(iso[3]));

  return undefined;
}

/** Date-only, or IST kick-off as an offset datetime when the time string includes HH:MM IST. */
export function fixtureStartDateTime(date?: string, time?: string): string | undefined {
  const iso = fixtureStartDate(date);
  if (!iso) return undefined;
  const hm = time?.match(/\b(\d{1,2}):(\d{2})\s*IST\b/i);
  if (!hm) return iso;
  return `${iso}T${String(Number(hm[1])).padStart(2, "0")}:${hm[2]}:00+05:30`;
}

export function matchCanonicalUrl(slug: string): string {
  return pageUrl(`/match/${slug}`);
}

export function matchDocumentHead(seo: PageSeo, slug: string, indexable = true) {
  const url = matchCanonicalUrl(slug);
  return {
    title: seo.title,
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "robots", content: indexable ? "index, follow" : "noindex, follow" },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Fairplay" },
      ...socialImageMeta(),
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function missingMatchHead() {
  return {
    title: "Match not found | Fairplay",
    meta: [
      { title: "Match not found | Fairplay" },
      { name: "robots", content: "noindex, follow" },
    ],
  };
}

type Competitor = {
  type: "SportsTeam" | "Person";
  name: string;
};

export function sportsEventGraph(input: {
  name: string;
  description: string;
  slug: string;
  date?: string;
  time?: string;
  venue: string;
  sport: "Cricket" | "Soccer" | "Tennis";
  competitors: Competitor[];
  faqNode?: object | null;
}) {
  const url = matchCanonicalUrl(input.slug);
  const startDate = fixtureStartDateTime(input.date, input.time);

  // startDate is required for Event rich results. Fixtures whose date is still TBD
  // would emit invalid Event markup, so they ship the FAQ graph alone instead.
  if (!startDate) {
    return input.faqNode
      ? { "@context": "https://schema.org", "@graph": [input.faqNode] }
      : null;
  }

  const teamCompetitors = input.competitors.filter((row) => row.type === "SportsTeam");
  const sportsEvent: Record<string, unknown> = {
    "@type": "SportsEvent",
    name: input.name,
    description: input.description,
    url,
    image: OG_IMAGE,
    mainEntityOfPage: url,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: input.venue },
    competitor: input.competitors.map((row) => ({ "@type": row.type, name: row.name })),
    organizer: { "@type": "Organization", name: "Fairplay", url: SITE_ORIGIN },
    sport: input.sport,
    startDate,
  };
  const [homeTeam, awayTeam] = teamCompetitors;
  if (homeTeam && awayTeam) {
    sportsEvent["homeTeam"] = { "@type": "SportsTeam", name: homeTeam.name };
    sportsEvent["awayTeam"] = { "@type": "SportsTeam", name: awayTeam.name };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [sportsEvent, ...(input.faqNode ? [input.faqNode] : [])],
  };
}

export function scheduleCollectionJsonLd() {
  const fixtures = upcomingScheduleFixtures();
  const pageUrlCanonical = pageUrl("/schedule");
  const seo = PAGE_SEO["/schedule"];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: seo?.title ?? "Fairplay schedule 2026",
        description: seo?.description,
        url: pageUrlCanonical,
        isPartOf: { "@type": "WebSite", name: "Fairplay", url: SITE_ORIGIN },
        mainEntity: {
          "@type": "ItemList",
          name: "Upcoming Fairplay cricket, football and tennis fixtures",
          numberOfItems: fixtures.length,
          itemListElement: fixtures.map((fixture, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: fixture.event,
            url: matchCanonicalUrl(fixture.slug),
          })),
        },
      },
    ],
  };
}

/** Tournament-first index at /matches: ItemList of tournaments, each with its fixtures. */
export function matchesIndexJsonLd() {
  const pageUrlCanonical = pageUrl("/matches");
  const seo = PAGE_SEO["/matches"];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: seo?.title ?? "All matches 2026–27 | Fairplay",
        description: seo?.description,
        url: pageUrlCanonical,
        isPartOf: { "@type": "WebSite", name: "Fairplay", url: SITE_ORIGIN },
        mainEntity: {
          "@type": "ItemList",
          name: "Fairplay 2026–27 tournament index",
          numberOfItems: MATCH_INDEX.length,
          itemListElement: MATCH_INDEX.map((tournament, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tournament.series,
            url: matchCanonicalUrl(tournament.featured.slug),
          })),
        },
      },
    ],
  };
}

/** Fixture indexes change as often as the fixtures themselves. */
const FIXTURE_INDEX_PATHS = ["/schedule", "/matches"];

/** Hub and guide pages share one lastmod when the SEO/content map is updated. */
const STATIC_SITEMAP_LASTMOD = "2026-09-11";

export function buildSitemapXml(): string {
  const fixtures = listAllScheduleFixtures();
  const matchDates = new Map(
    fixtures.map((fixture) => [fixture.slug, fixtureStartDate(fixture.date)]),
  );

  const paths = new Set<string>(["/", ...Object.keys(PAGE_SEO), ...FIXTURE_INDEX_PATHS, ...AUTHOR_PATHS]);
  for (const fixture of fixtures) {
    paths.add(`/match/${fixture.slug}`);
  }
  for (const slug of BLOG_POST_SLUGS) {
    if (hasUniqueBlogBody(slug)) paths.add(`/posts/${slug}`);
  }

  const urls = [...paths]
    .sort()
    .map((path) => {
      const loc = pageUrl(path);
      const isMatch = path.startsWith("/match/");
      const isPost = path.startsWith("/posts/");
      const isFixtureIndex = FIXTURE_INDEX_PATHS.includes(path);
      const changefreq = isFixtureIndex || isMatch ? "daily" : isPost ? "monthly" : "weekly";
      const priority = path === "/" ? "1.0" : isFixtureIndex || isMatch ? "0.8" : "0.6";
      const lastmod = isPost
        ? blogPostIsoDate(path.slice("/posts/".length))
        : isMatch
          ? matchDates.get(path.slice("/match/".length)) ?? STATIC_SITEMAP_LASTMOD
          : STATIC_SITEMAP_LASTMOD;
      const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${loc.replace(/&/g, "&amp;")}</loc>${lastmodLine}\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
