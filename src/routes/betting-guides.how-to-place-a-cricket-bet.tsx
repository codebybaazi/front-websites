import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/betting-guides__how-to-place-a-cricket-bet.json";

export const Route = createFileRoute("/betting-guides/how-to-place-a-cricket-bet")({
  head: () => ({
    meta: [
      { title: "How to Place a Cricket Bet — Cricbet99" },
      { name: "description", content: "How to Place a Cricket Bet on Cricbet99: a beginner-friendly guide to placing your first cricket bet. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "How to Place a Cricket Bet — Cricbet99" },
      { property: "og:description", content: "How to Place a Cricket Bet on Cricbet99: a beginner-friendly guide to placing your first cricket bet. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/betting-guides/how-to-place-a-cricket-bet" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_betting_guides_how_to_place_a_cricket_bet,
});

function Page_betting_guides_how_to_place_a_cricket_bet() {
  return <LongFormPage content={content} />;
}
