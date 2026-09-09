import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/betting-guides__how-bookmakers-make-money.json";

export const Route = createFileRoute("/betting-guides/how-bookmakers-make-money")({
  head: () => ({
    meta: [
      { title: "How Bookmakers Make Money — Cricbet99" },
      { name: "description", content: "How Bookmakers Make Money on Cricbet99: the maths behind margins, vig and odds — explained simply. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "How Bookmakers Make Money — Cricbet99" },
      { property: "og:description", content: "How Bookmakers Make Money on Cricbet99: the maths behind margins, vig and odds — explained simply. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/betting-guides/how-bookmakers-make-money" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/betting-guides/how-bookmakers-make-money", "How Bookmakers Make Money")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_betting_guides_how_bookmakers_make_money,
});

function Page_betting_guides_how_bookmakers_make_money() {
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
        { to: "/exchange", label: "How the Cricbet99 Exchange Works", desc: "See how commission-based exchange pricing compares to a fixed-odds bookmaker." },
        { to: "/todays-best-odds", label: "Today's Best Odds", desc: "Check live market pricing across cricket, football and tennis right now." },
      ]}
    />
  );
}
