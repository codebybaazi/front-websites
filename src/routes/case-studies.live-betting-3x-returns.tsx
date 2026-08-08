import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies__live-betting-3x-returns.json";

export const Route = createFileRoute("/case-studies/live-betting-3x-returns")({
  head: () => ({
    meta: [
      { title: "In-Play Trading Case Study | 3x Live Betting Returns" },
      { name: "description", content: "Witness momentum trading in action. How identifying a single bowling change led to a 3x return on stake during a live T20 match on Cricbet99." },
      { property: "og:title", content: "Mastering In-Play Momentum: A Live Betting Case Study" },
      { property: "og:description", content: "Step-by-play breakdown of a successful live cricket trade. Learn to use the Cricbet99 dashboard to stay ahead of the game." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/case-studies/live-betting-3x-returns" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/case-studies/live-betting-3x-returns", "In-Play Trading Case Study | 3x Live Betting Returns")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_case_studies_live_betting_3x_returns,
});

function Page_case_studies_live_betting_3x_returns() {
  return <LongFormPage content={content} />;
}
