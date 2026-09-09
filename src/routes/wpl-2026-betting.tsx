import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/wpl-2026-betting.json";

export const Route = createFileRoute("/wpl-2026-betting")({
  head: () => ({
    meta: [
      { title: "WPL 2026 Betting — Cricbet99" },
      { name: "description", content: "WPL 2026 Betting on Cricbet99: Women's Premier League 2026 odds, teams and markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "WPL 2026 Betting — Cricbet99" },
      { property: "og:description", content: "WPL 2026 Betting on Cricbet99: Women's Premier League 2026 odds, teams and markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/wpl-2026-betting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/wpl-2026-betting", "WPL 2026 Betting")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_wpl_2026_betting,
});

function Page_wpl_2026_betting() {
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
