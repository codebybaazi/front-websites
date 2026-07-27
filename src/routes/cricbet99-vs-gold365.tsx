import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-vs-gold365.json";

export const Route = createFileRoute("/cricbet99-vs-gold365")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Gold365 — Cricbet99" },
      { name: "description", content: "Cricbet99 vs Gold365 on Cricbet99: Cricbet99 vs Gold365 on markets, bonuses and support. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 vs Gold365 — Cricbet99" },
      { property: "og:description", content: "Cricbet99 vs Gold365 on Cricbet99: Cricbet99 vs Gold365 on markets, bonuses and support. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
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
