import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/t20-world-cup-betting.json";

export const Route = createFileRoute("/t20-world-cup-betting")({
  head: () => ({
    meta: [
      { title: "ICC T20 World Cup Betting — Cricbet99" },
      { name: "description", content: "ICC T20 World Cup Betting on Cricbet99: live T20 World Cup markets on Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "ICC T20 World Cup Betting — Cricbet99" },
      { property: "og:description", content: "ICC T20 World Cup Betting on Cricbet99: live T20 World Cup markets on Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/t20-world-cup-betting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/t20-world-cup-betting", "ICC T20 World Cup Betting")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/t20-world-cup-betting", "ICC T20 World Cup Betting")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_t20_world_cup_betting,
});

function Page_t20_world_cup_betting() {
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
