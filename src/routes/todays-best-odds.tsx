import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/todays-best-odds.json";

export const Route = createFileRoute("/todays-best-odds")({
  head: () => ({
    meta: [
      { title: "Today's Best Cricbet99 Odds — Cricbet99" },
      { name: "description", content: "Today's Best Cricbet99 Odds on Cricbet99: the sharpest cricket and multi-sport odds today. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Today's Best Cricbet99 Odds — Cricbet99" },
      { property: "og:description", content: "Today's Best Cricbet99 Odds on Cricbet99: the sharpest cricket and multi-sport odds today. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/todays-best-odds" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/todays-best-odds", "Today's Best Cricbet99 Odds")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_todays_best_odds,
});

function Page_todays_best_odds() {
  return <LongFormPage content={content} />;
}
