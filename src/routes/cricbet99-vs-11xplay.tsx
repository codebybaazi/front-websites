import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-vs-11xplay.json";

export const Route = createFileRoute("/cricbet99-vs-11xplay")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs 11xplay — Cricbet99" },
      { name: "description", content: "Cricbet99 vs 11xplay on Cricbet99: a side-by-side comparison of features, odds and payouts. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 vs 11xplay — Cricbet99" },
      { property: "og:description", content: "Cricbet99 vs 11xplay on Cricbet99: a side-by-side comparison of features, odds and payouts. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-11xplay" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_cricbet99_vs_11xplay,
});

function Page_cricbet99_vs_11xplay() {
  return <LongFormPage content={content} />;
}
