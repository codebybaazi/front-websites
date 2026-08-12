import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-place-a-cricket-bet.json";

export const Route = createFileRoute("/betting-guides/how-to-place-a-cricket-bet")({
  head: () => ({
    meta: [
      { title: "How to Place a Cricket Bet on Cricbet99 | 2026 Tutorial" },
      { name: "description", content: "A beginner's guide to placing your first cricket bet on Cricbet99. Learn how to read odds, use the bet slip, and trade on IPL 2026 matches with a verified ID." },
      { property: "og:title", content: "Cricket Betting 101: How to Place Your First Bet on Cricbet99" },
      { property: "og:description", content: "Step-by-step tutorial on navigating the Cricbet99 cricket exchange, understanding back/lay odds, and executing your first trade safely." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-place-a-cricket-bet" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-place-a-cricket-bet", "How to Place a Cricket Bet on Cricbet99")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-place-a-cricket-bet", "How to Place a Cricket Bet on Cricbet99 | 2026 Tutorial")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_betting_guides_how_to_place_a_cricket_bet,
});

function Page_betting_guides_how_to_place_a_cricket_bet() {
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
