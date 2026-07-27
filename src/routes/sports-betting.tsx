import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/sports-betting.json";

export const Route = createFileRoute("/sports-betting")({
  head: () => ({
    meta: [
      { title: "Sports Betting on Cricbet99 — Cricbet99" },
      { name: "description", content: "Sports Betting on Cricbet99 on Cricbet99: cricket, football, tennis, kabaddi and more — all in one ID. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Sports Betting on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "Sports Betting on Cricbet99 on Cricbet99: cricket, football, tennis, kabaddi and more — all in one ID. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sports-betting" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_sports_betting,
});

function Page_sports_betting() {
  return <LongFormPage content={content} />;
}
