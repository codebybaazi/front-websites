import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/betting-guides__how-to-bet-on-toss-market.json";

export const Route = createFileRoute("/betting-guides/how-to-bet-on-toss-market")({
  head: () => ({
    meta: [
      { title: "Cricket Toss Market Betting Strategy | Cricbet99 Official" },
      { name: "description", content: "Learn how to profit from cricket toss markets in under 10 minutes. Analyze stadium trends and captain decisions to master this high-velocity betting market." },
      { property: "og:title", content: "The Ultimate Guide to Toss Market Betting on Cricbet99" },
      { property: "og:description", content: "Data-driven strategies for toss markets in T20 and IPL matches. Learn how to turnover capital quickly with India's most trusted exchange." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-bet-on-toss-market" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_betting_guides_how_to_bet_on_toss_market,
});

function Page_betting_guides_how_to_bet_on_toss_market() {
  return <LongFormPage content={content} />;
}
