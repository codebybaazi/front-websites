// Derives genuinely page-specific FAQs directly from a page's own written
// content (its intro + section bodies) instead of a shared, topic-substituted
// template bank. Every answer is that page's real prose, so no two pages can
// produce the same FAQ text.

import type { PageContent } from "@/data/pages";

export type Faq = { q: string; a: string };

function shortName(title: string): string {
  return title.split(" — ")[0].split(" | ")[0].trim();
}

function toQuestion(heading: string): string {
  const h = heading.trim();
  if (/\?$/.test(h)) return h;
  if (/^how to /i.test(h)) return `${h.replace(/^how to /i, "How do I ")}?`;
  if (/^(why|what|how|when|where|can|is|are|do|does|should|will)\b/i.test(h)) return `${h}?`;
  return `What is "${h}" on Lotus365?`;
}

export function deriveFaqsFromPage(page: PageContent): Faq[] {
  const faqs: Faq[] = [];
  if (page.intro && page.intro.trim().length > 20) {
    faqs.push({ q: `What is ${shortName(page.title)}?`, a: page.intro.trim() });
  }
  for (const section of page.sections) {
    if (faqs.length >= 5) break;
    if (!section.body || section.body.trim().length < 20) continue;
    faqs.push({ q: toQuestion(section.heading), a: section.body.trim() });
  }
  return faqs;
}

/**
 * Single canonical FAQ -> FAQPage JSON-LD builder, shared by every FAQ
 * source (hand-authored, page-derived, or post-derived) so the schema shape
 * can't drift between call sites.
 */
export function toFaqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
