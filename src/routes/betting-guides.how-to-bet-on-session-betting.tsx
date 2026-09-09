import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd, buildHowToJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-bet-on-session-betting.json";
import { getRequestOrigin } from "@/lib/origin.functions";
import guideImage from "@/assets/launch/mines.jpg";

export const Route = createFileRoute("/betting-guides/how-to-bet-on-session-betting")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const howToImage = `${origin}${guideImage}`;
    return {
    meta: [
      { title: "Cricket Session & Fancy Betting Guide | Cricbet99 Strategy" },
      { name: "description", content: "Master over-based session betting and fancy markets on Cricbet99. Learn to predict run-rates and analyze bowling pressure for consistent IPL 2026 results." },
      { property: "og:title", content: "Session Betting Masterclass: How to Trade Over-Based Markets" },
      { property: "og:description", content: "Expert breakdown of cricket fancy bets and session markets. Learn to identify value in real-time match data with a Cricbet99 premium ID." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: howToImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: howToImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-bet-on-session-betting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-bet-on-session-betting", "Cricket Session & Fancy Betting Guide Strategy")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildHowToJsonLd(
          content,
          "https://cricbet99.co.in/betting-guides/how-to-bet-on-session-betting",
          { totalTime: "PT10M", image: howToImage }
        )),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: Page_betting_guides_how_to_bet_on_session_betting,
});

function Page_betting_guides_how_to_bet_on_session_betting() {
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
        { to: "/matches", label: "Live Match Predictions", desc: "Track live run-rates and session markets on today's fixtures." },
        { to: "/ipl-betting", label: "IPL 2026 Betting Hub", desc: "Session and fancy markets across every IPL 2026 fixture." },
      ]}
    />
  );
}
