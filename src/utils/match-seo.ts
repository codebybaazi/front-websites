import { BLOG_POST_SLUGS } from "@/utils/blog-post-dates";
import { CRICKET_SCHEDULE_DATA } from "@/lib/cricket-schedule";
import { FOOTBALL_SCHEDULE_DATA } from "@/lib/sports-data";
import { TENNIS_SCHEDULE_DATA } from "@/lib/tennis-schedule";
import { MATCH_INDEX } from "@/utils/match-index";
import type { PageSeo } from "@/utils/page-seo";
import { OG_IMAGE, PAGE_SEO, SITE_ORIGIN } from "@/utils/page-seo";
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

/** ISO date (YYYY-MM-DD) when the fixture string is parseable; otherwise omitted. */
export function fixtureStartDate(date?: string): string | undefined {
  if (!date?.trim() || /^tbd$/i.test(date.trim())) return undefined;
  const ms = Date.parse(date);
  if (Number.isNaN(ms)) return undefined;
  const parsed = new Date(ms);
  const year = parsed.getFullYear();
  if (year < 2020 || year > 2035) return undefined;
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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
      { name: "keywords", content: seo.keywords },
      { name: "robots", content: indexable ? "index, follow" : "noindex, follow" },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Fairplay" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: OG_IMAGE },
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
  venue: string;
  sport: "Cricket" | "Soccer" | "Tennis";
  competitors: Competitor[];
  faqNode?: object | null;
}) {
  const url = matchCanonicalUrl(input.slug);
  const startDate = fixtureStartDate(input.date);

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
  const fixtures = listAllScheduleFixtures();
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
          name: "Fairplay 2026 cricket, football and tennis fixtures",
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

export function buildSitemapXml(): string {
  const paths = new Set<string>(["/", ...Object.keys(PAGE_SEO), ...FIXTURE_INDEX_PATHS]);
  for (const fixture of listAllScheduleFixtures()) {
    paths.add(`/match/${fixture.slug}`);
  }
  for (const slug of BLOG_POST_SLUGS) {
    paths.add(`/posts/${slug}`);
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
      return `  <url>\n    <loc>${loc.replace(/&/g, "&amp;")}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
