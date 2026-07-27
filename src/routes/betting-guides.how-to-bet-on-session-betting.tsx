import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/betting-guides__how-to-bet-on-session-betting.json";

export const Route = createFileRoute("/betting-guides/how-to-bet-on-session-betting")({
  head: () => ({
    meta: [
      { title: "How to Bet on Session Betting — Cricbet99" },
      { name: "description", content: "How to Bet on Session Betting on Cricbet99: session and over-based cricket betting explained. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "How to Bet on Session Betting — Cricbet99" },
      { property: "og:description", content: "How to Bet on Session Betting on Cricbet99: session and over-based cricket betting explained. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/betting-guides/how-to-bet-on-session-betting" }],
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
