import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-vs-gold365.json";

export const Route = createFileRoute("/cricbet99-vs-gold365")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Gold365 — Cricbet99" },
      { name: "description", content: "Compare Cricbet99 vs gold365: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:title", content: "Cricbet99 vs Gold365 — Cricbet99" },
      { property: "og:description", content: "Compare Cricbet99 vs gold365: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricbet99-vs-gold365" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-gold365" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_cricbet99_vs_gold365,
});

function Page_cricbet99_vs_gold365() {
  return <LongFormPage content={content} />;
}
