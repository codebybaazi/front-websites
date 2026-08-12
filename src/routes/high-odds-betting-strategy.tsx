import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/high-odds-betting-strategy.json";

export const Route = createFileRoute("/high-odds-betting-strategy")({
  head: () => ({
    meta: [
      { title: "High Odds Betting Strategy — Cricbet99" },
      { name: "description", content: "High Odds Betting Strategy on Cricbet99: how to find value in high-odds markets responsibly. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "High Odds Betting Strategy — Cricbet99" },
      { property: "og:description", content: "High Odds Betting Strategy on Cricbet99: how to find value in high-odds markets responsibly. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/high-odds-betting-strategy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/high-odds-betting-strategy", "High Odds Betting Strategy")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/high-odds-betting-strategy", "High Odds Betting Strategy")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_high_odds_betting_strategy,
});

function Page_high_odds_betting_strategy() {
  return (
    <LongFormPage 
      content={content} 
      extra={
        <AiOverview 
          summary={content.subtitle} 
          highlights={content.features.slice(0, 4).map(f => f.desc)} 
        />
      } 
    />
  );
}
