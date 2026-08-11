import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-place-a-live-bet.json";

export const Route = createFileRoute("/betting-guides/how-to-place-a-live-bet")({
  head: () => ({
    meta: [
      { title: "Master Live In-Play Betting on Cricbet99 | 2026 Guide" },
      { name: "description", content: "Learn how to place live bets during IPL 2026 matches. Master in-play momentum trading, fluctuating odds, and fast execution on India's premier cricket exchange." },
      { property: "og:title", content: "Live Cricket Betting Guide: How to Trade In-Play on Cricbet99" },
      { property: "og:description", content: "Technical guide on using the Cricbet99 live dashboard to spot momentum shifts and secure profits during live cricket matches." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-place-a-live-bet" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-place-a-live-bet", "Master Live In-Play Betting on Cricbet99 | 2026 Guide")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_betting_guides_how_to_place_a_live_bet,
});

function Page_betting_guides_how_to_place_a_live_bet() {
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
