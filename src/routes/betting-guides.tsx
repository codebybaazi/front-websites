import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides.json";

export const Route = createFileRoute("/betting-guides")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Betting Guides | Official 2026 Strategy Center" },
      { name: "description", content: "Master IPL 2026 and cricket trading with the official Cricbet99 Betting Guides. Learn session analysis, toss markets, and bankroll management from professional traders." },
      { property: "og:title", content: "Cricbet99 Betting Guides | Expert Cricket Trading Strategies" },
      { property: "og:description", content: "Deep-dive tutorials on cricket session betting, toss markets, and risk management for the 2026 season. Get India's sharpest odds with a verified Cricbet99 ID." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides", "Cricbet99 Betting Guides")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides", "Cricbet99 Betting Guides | Official 2026 Strategy Center")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_betting_guides,
});

function Page_betting_guides() {
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
