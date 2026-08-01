import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-vs-laser247.json";

export const Route = createFileRoute("/cricbet99-vs-laser247")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Laser247 — Cricbet99" },
      { name: "description", content: "Compare Cricbet99 vs laser247: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:title", content: "Cricbet99 vs Laser247 — Cricbet99" },
      { property: "og:description", content: "Compare Cricbet99 vs laser247: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricbet99-vs-laser247" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-laser247" }],
    scripts: [
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "/compare" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs Laser247", item: "/cricbet99-vs-laser247" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cricbet99 vs Laser247 Comparison",
          description: "Compare Cricbet99 vs laser247: features, odds, payouts and support.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-08-01",
        }),
      },
    ],
  }),
  component: Page_cricbet99_vs_laser247,
});

function Page_cricbet99_vs_laser247() {
  return <LongFormPage content={content} />;
}
