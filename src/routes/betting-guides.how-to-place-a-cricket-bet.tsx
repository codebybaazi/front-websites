import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd, buildHowToJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-place-a-cricket-bet.json";
import { getRequestOrigin } from "@/lib/origin.functions";
import guideImage from "@/assets/launch/teen-patti.jpg";

export const Route = createFileRoute("/betting-guides/how-to-place-a-cricket-bet")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const howToImage = `${origin}${guideImage}`;
    return {
    meta: [
      { title: "How to Place a Cricket Bet on Cricbet99 | 2026 Tutorial" },
      { name: "description", content: "A beginner's guide to placing your first cricket bet on Cricbet99. Learn how to read odds, use the bet slip, and trade on IPL 2026 matches with a verified ID." },
      { property: "og:title", content: "Cricket Betting 101: How to Place Your First Bet on Cricbet99" },
      { property: "og:description", content: "Step-by-step tutorial on navigating the Cricbet99 cricket exchange, understanding back/lay odds, and executing your first trade safely." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: howToImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: howToImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-place-a-cricket-bet" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-place-a-cricket-bet", "How to Place a Cricket Bet on Cricbet99 | 2026 Tutorial")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildHowToJsonLd(
          content,
          "https://cricbet99.co.in/betting-guides/how-to-place-a-cricket-bet",
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
      relatedLinks={[
        { to: "/matches", label: "Live Match Predictions", desc: "See today's fixtures and market highlights to place your first trade." },
        { to: "/cricket", label: "Cricket Betting Hub", desc: "Full market coverage for IPL, T20 and international cricket." },
      ]}
    />
  );
}
