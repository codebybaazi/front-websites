import { getBlogSeo } from "@/utils/blog-seo";
import { PAGE_SEO, SITE_ORIGIN } from "@/utils/page-seo";
import { parseMatchTeams } from "@/utils/match-projections";
import { findMatchBySlug } from "@/utils/slugify";
import { getAuthorBySlug } from "@/lib/authors";

export type BreadcrumbCrumb = {
  name: string;
  path: string;
};

const PARENT_PATH: Record<string, string> = {
  "/login-guide": "/fairplay-id",
  "/register-guide": "/fairplay-id",
  "/deposit-guide": "/fairplay-id",
  "/withdrawal-guide": "/fairplay-id",
  "/login-issues": "/support",
  "/deposit-issues": "/support",
  "/withdrawal-issues": "/support",
  "/account-issues": "/support",
  "/whatsapp-support": "/support",
  "/contact-us": "/support",
  "/telegram-channel": "/support",
  "/bonus-issues": "/bonus",
  "/ipl-betting": "/betting",
  "/t20-world-cup": "/betting",
  "/wpl-betting": "/betting",
  "/champions-trophy": "/betting",
  "/kabaddi-betting": "/betting",
  "/horse-racing": "/betting",
  "/basketball-betting": "/betting",
  "/esports-betting": "/betting",
  "/gold365": "/platforms",
  "/11xplay": "/platforms",
  "/laser247": "/platforms",
  "/cricbet99": "/platforms",
  "/fairdeal": "/platforms",
  "/privacy-policy": "/legal-status",
  "/terms-conditions": "/legal-status",
  "/responsible-gaming": "/legal-status",
  "/security-safety": "/legal-status",
  "/kyc-verification-policy": "/legal-status",
  "/refund-policy": "/legal-status",
  "/rules-regulations": "/legal-status",
  "/disclaimer": "/legal-status",
};

for (const path of Object.keys(PAGE_SEO)) {
  if (path.startsWith("/fairplay-vs-")) PARENT_PATH[path] = "/platforms";
}

function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function breadcrumbLabelForPath(path: string): string {
  if (path === "/") return "Home";
  const seo = PAGE_SEO[path];
  if (seo) return (seo.title.split("|")[0] ?? seo.title).trim();
  return titleCaseSlug(path.replace(/^\//, ""));
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${clean}`;
}

export function crumbsForPathname(pathname: string): BreadcrumbCrumb[] {
  const path = (pathname.split("?")[0] ?? pathname).replace(/\/+$/, "") || "/";
  if (path === "/") return [];

  const trail: BreadcrumbCrumb[] = [{ name: "Home", path: "/" }];

  if (path.startsWith("/posts/")) {
    const slug = path.slice("/posts/".length);
    trail.push({ name: breadcrumbLabelForPath("/blog"), path: "/blog" });
    trail.push({ name: slug ? getBlogSeo(slug).h1 : "Article", path });
    return trail;
  }

  if (path.startsWith("/authors/")) {
    const slug = path.slice("/authors/".length);
    trail.push({ name: "Authors", path: "/authors" });
    const author = getAuthorBySlug(slug);
    trail.push({ name: author ? author.name : titleCaseSlug(slug), path });
    return trail;
  }

  if (path.startsWith("/match/")) {
    const slug = decodeURIComponent(path.slice("/match/".length));
    trail.push({ name: breadcrumbLabelForPath("/schedule"), path: "/schedule" });
    const match = findMatchBySlug(slug);
    if (match) {
      const { teamA, teamB } = parseMatchTeams(match.event);
      const away = teamB.replace(/\s+[—\-].*$/, "").trim();
      const fixture =
        teamA !== "Team A" && away && away !== "Team B" ? `${teamA} vs ${away}` : match.event;
      trail.push({ name: fixture, path });
    } else {
      trail.push({ name: titleCaseSlug(slug).slice(0, 80), path });
    }
    return trail;
  }

  const parent = PARENT_PATH[path];
  if (parent && parent !== path) {
    trail.push({ name: breadcrumbLabelForPath(parent), path: parent });
  }
  trail.push({ name: breadcrumbLabelForPath(path), path });
  return trail;
}

export function breadcrumbListNode(crumbs: BreadcrumbCrumb[]) {
  if (crumbs.length < 2) return null;
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function breadcrumbJsonLd(pathname: string) {
  const node = breadcrumbListNode(crumbsForPathname(pathname));
  if (!node) return null;
  return {
    "@context": "https://schema.org",
    ...node,
  };
}
