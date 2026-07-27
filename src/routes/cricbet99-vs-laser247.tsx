import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-vs-laser247.json";

export const Route = createFileRoute("/cricbet99-vs-laser247")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Laser247 — Cricbet99" },
      { name: "description", content: "Cricbet99 vs Laser247 on Cricbet99: how Cricbet99 compares to Laser247 for Indian players. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 vs Laser247 — Cricbet99" },
      { property: "og:description", content: "Cricbet99 vs Laser247 on Cricbet99: how Cricbet99 compares to Laser247 for Indian players. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-laser247" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_cricbet99_vs_laser247,
});

function Page_cricbet99_vs_laser247() {
  return <LongFormPage content={content} />;
}
