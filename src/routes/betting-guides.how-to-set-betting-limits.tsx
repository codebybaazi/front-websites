import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-set-betting-limits.json";

export const Route = createFileRoute("/betting-guides/how-to-set-betting-limits")({
  head: () => ({
    meta: [
      { title: "How to Set Betting Limits — Cricbet99" },
      { name: "description", content: "How to Set Betting Limits on Cricbet99: protect your bankroll with smart daily and match limits. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "How to Set Betting Limits — Cricbet99" },
      { property: "og:description", content: "How to Set Betting Limits on Cricbet99: protect your bankroll with smart daily and match limits. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-set-betting-limits" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-set-betting-limits", "How to Set Betting Limits")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-set-betting-limits", "How to Set Betting Limits")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_betting_guides_how_to_set_betting_limits,
});

function Page_betting_guides_how_to_set_betting_limits() {
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
