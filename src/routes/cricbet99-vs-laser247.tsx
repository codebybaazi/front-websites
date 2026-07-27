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
