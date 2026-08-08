import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies__toss-market-10-minute-profit.json";

export const Route = createFileRoute("/case-studies/toss-market-10-minute-profit")({
  head: () => ({
    meta: [
      { title: "10-Minute Profit Case Study | Toss Market Strategy" },
      { name: "description", content: "How one Cricbet99 member generated consistent returns in under 10 minutes per match. A data-driven look at stadium-specific toss market trading." },
      { property: "og:title", content: "Toss Market Speed Trading: Real Profits in Real-Time" },
      { property: "og:description", content: "Case study on high-velocity toss market betting. Learn how instant settlement on Cricbet99 enables rapid bankroll turnover." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.win/case-studies/toss-market-10-minute-profit" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies_toss_market_10_minute_profit,
});

function Page_case_studies_toss_market_10_minute_profit() {
  return <LongFormPage content={content} />;
}
