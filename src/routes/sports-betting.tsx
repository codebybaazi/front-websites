import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
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
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/sports-betting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/sports-betting", "Sports Betting on Cricbet99")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_sports_betting,
});

function Page_sports_betting() {
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
