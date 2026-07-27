import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies__small-budget-betting-strategy.json";

export const Route = createFileRoute("/case-studies/small-budget-betting-strategy")({
  head: () => ({
    meta: [
      { title: "Small Budget Betting Strategy — Cricbet99" },
      { name: "description", content: "Small Budget Betting Strategy on Cricbet99: how to grow a small bankroll with discipline and value. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Small Budget Betting Strategy — Cricbet99" },
      { property: "og:description", content: "Small Budget Betting Strategy on Cricbet99: how to grow a small bankroll with discipline and value. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/small-budget-betting-strategy" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies_small_budget_betting_strategy,
});

function Page_case_studies_small_budget_betting_strategy() {
  return <LongFormPage content={content} />;
}
