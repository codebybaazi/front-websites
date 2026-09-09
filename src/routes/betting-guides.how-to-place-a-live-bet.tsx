import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd, buildHowToJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-place-a-live-bet.json";
import { getRequestOrigin } from "@/lib/origin.functions";
import guideImage from "@/assets/launch/andar-bahar.jpg";

export const Route = createFileRoute("/betting-guides/how-to-place-a-live-bet")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const howToImage = `${origin}${guideImage}`;
    return {
    meta: [
      { title: "Master Live In-Play Betting on Cricbet99 | 2026 Guide" },
      { name: "description", content: "Learn how to place live bets during IPL 2026 matches. Master in-play momentum trading, fluctuating odds, and fast execution on India's premier cricket exchange." },
      { property: "og:title", content: "Live Cricket Betting Guide: How to Trade In-Play on Cricbet99" },
      { property: "og:description", content: "Technical guide on using the Cricbet99 live dashboard to spot momentum shifts and secure profits during live cricket matches." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: howToImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: howToImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-place-a-live-bet" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-place-a-live-bet", "Master Live In-Play Betting on Cricbet99 | 2026 Guide")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildHowToJsonLd(
          content,
          "https://cricbet99.co.in/betting-guides/how-to-place-a-live-bet",
          { totalTime: "PT7M", image: howToImage }
        )),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
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
      relatedLinks={[
        { to: "/matches", label: "Live Match Predictions", desc: "Follow live momentum shifts and in-play markets as they happen." },
        { to: "/todays-best-odds", label: "Today's Best Odds", desc: "Compare live pricing before you trade in-play." },
      ]}
    />
  );
}
