import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/betting-guides.json";

export const Route = createFileRoute("/betting-guides")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Betting Guides — Cricbet99" },
      { name: "description", content: "Cricbet99 Betting Guides on Cricbet99: expert guides to help you bet smarter on cricket and more. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Betting Guides — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Betting Guides on Cricbet99: expert guides to help you bet smarter on cricket and more. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/betting-guides" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_betting_guides,
});

function Page_betting_guides() {
  return <LongFormPage content={content} />;
}
