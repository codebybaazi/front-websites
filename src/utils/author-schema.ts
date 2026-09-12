import type { Author } from "@/lib/authors";
import { absolutePageUrl, SITE_ORIGIN } from "@/utils/page-seo";

export function authorPageUrl(slug: string): string {
  return absolutePageUrl(`/authors/${slug}`);
}

/** Reference used inside Article JSON-LD: a Person tied back to the author's own page. */
export function authorRefNode(author: Author) {
  return {
    "@type": "Person" as const,
    name: author.name,
    url: authorPageUrl(author.slug),
    jobTitle: author.role,
  };
}

/** Full Person entity for the author's own profile page. */
export function authorPersonJsonLd(author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: authorPageUrl(author.slug),
    jobTitle: author.role,
    description: author.shortBio,
    knowsAbout: author.focus,
    worksFor: {
      "@type": "Organization",
      name: "Fairplay",
      url: SITE_ORIGIN,
    },
  };
}

export function authorsCollectionJsonLd(authors: Author[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fairplay authors",
    url: absolutePageUrl("/authors"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: authors.map((author, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: authorPersonJsonLd(author),
      })),
    },
  };
}
