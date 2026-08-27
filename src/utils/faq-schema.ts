export type FaqItem = {
  q: string;
  a: string;
};

function cleanText(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

/** Drop empty, too-short, or duplicate questions so FAQPage JSON-LD stays valid. */
export function normalizeFaqs(faqs: Array<{ q?: string; a?: string } | null | undefined>): FaqItem[] {
  const seen = new Set<string>();
  const out: FaqItem[] = [];

  for (const faq of faqs) {
    const q = cleanText(faq?.q ?? "");
    const a = cleanText(faq?.a ?? "");
    if (q.length < 8 || a.length < 12) continue;
    const key = q.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ q, a });
  }

  return out;
}

export function faqPageNode(faqs: Array<{ q?: string; a?: string } | null | undefined>) {
  const items = normalizeFaqs(faqs);
  if (items.length === 0) return null;

  return {
    "@type": "FAQPage" as const,
    mainEntity: items.map((faq) => ({
      "@type": "Question" as const,
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.a,
      },
    })),
  };
}

export function faqPageJsonLd(faqs: Array<{ q?: string; a?: string } | null | undefined>) {
  const node = faqPageNode(faqs);
  if (!node) return null;
  return {
    "@context": "https://schema.org",
    ...node,
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
