import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/betting-guides__how-to-bet-on-session-betting.json";

export const Route = createFileRoute("/betting-guides/how-to-bet-on-session-betting")({
  head: () => ({
    meta: [
      { title: "Cricket Session & Fancy Betting Guide | Cricbet99 Strategy" },
      { name: "description", content: "Master over-based session betting and fancy markets on Cricbet99. Learn to predict run-rates and analyze bowling pressure for consistent IPL 2026 results." },
      { property: "og:title", content: "Session Betting Masterclass: How to Trade Over-Based Markets" },
      { property: "og:description", content: "Expert breakdown of cricket fancy bets and session markets. Learn to identify value in real-time match data with a Cricbet99 premium ID." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.win/betting-guides/how-to-bet-on-session-betting" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_betting_guides_how_to_bet_on_session_betting,
});

function Page_betting_guides_how_to_bet_on_session_betting() {
  return <LongFormPage content={content} />;
}
