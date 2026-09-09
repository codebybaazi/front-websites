import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd, buildHowToJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-to-set-betting-limits.json";
import { getRequestOrigin } from "@/lib/origin.functions";
import guideImage from "@/assets/launch/duck-race.jpg";

export const Route = createFileRoute("/betting-guides/how-to-set-betting-limits")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const howToImage = `${origin}${guideImage}`;
    return {
    meta: [
      { title: "How to Set Betting Limits — Cricbet99" },
      { name: "description", content: "How to Set Betting Limits on Cricbet99: protect your bankroll with smart daily and match limits. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "How to Set Betting Limits — Cricbet99" },
      { property: "og:description", content: "How to Set Betting Limits on Cricbet99: protect your bankroll with smart daily and match limits. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: howToImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: howToImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-to-set-betting-limits" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-to-set-betting-limits", "How to Set Betting Limits")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildHowToJsonLd(
          content,
          "https://cricbet99.co.in/betting-guides/how-to-set-betting-limits",
          { totalTime: "PT3M", image: howToImage }
        )),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: Page_betting_guides_how_to_set_betting_limits,
});

function Page_betting_guides_how_to_set_betting_limits() {
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
        { to: "/responsible-gaming", label: "Responsible Gaming Tools", desc: "Deposit caps, self-exclusion and session alerts explained in full." },
        { to: "/faq", label: "Support FAQ", desc: "Common questions on account setup, deposits and withdrawals." },
      ]}
    />
  );
}
