import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd, buildHowToJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-bet-on-toss-market.json";
import { getRequestOrigin } from "@/lib/origin.functions";
import guideImage from "@/assets/launch/crash.jpg";

export const Route = createFileRoute("/betting-guides/how-to-bet-on-toss-market")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const howToImage = `${origin}${guideImage}`;
    return {
    meta: [
      { title: "Cricket Toss Market Betting Strategy | Cricbet99 Official" },
      { name: "description", content: "Learn how to profit from cricket toss markets in under 10 minutes. Analyze stadium trends and captain decisions to master this high-velocity betting market." },
      { property: "og:title", content: "The Ultimate Guide to Toss Market Betting on Cricbet99" },
      { property: "og:description", content: "Data-driven strategies for toss markets in T20 and IPL matches. Learn how to turnover capital quickly with India's most trusted exchange." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: howToImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: howToImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-bet-on-toss-market" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-bet-on-toss-market", "Cricket Toss Market Betting Strategy Official")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildHowToJsonLd(
          content,
          "https://cricbet99.co.in/betting-guides/how-to-bet-on-toss-market",
          { totalTime: "PT5M", image: howToImage }
        )),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: Page_betting_guides_how_to_bet_on_toss_market,
});

function Page_betting_guides_how_to_bet_on_toss_market() {
  return (
    <LongFormPage
      content={content}
      extra={
        <AiOverview
          summary={content.subtitle}
          highlights={content.features.slice(0, 4).map(f => f.desc)}
        />
      }
      relatedLinks={[
        { to: "/schedule", label: "Full 2026 Match Schedule", desc: "Plan ahead for toss markets across every major cricket fixture this year." },
        { to: "/matches", label: "Today's Live Matches", desc: "Check today's toss timing and market openings before the coin is tossed." },
      ]}
    />
  );
}
