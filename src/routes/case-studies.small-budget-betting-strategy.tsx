import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies__small-budget-betting-strategy.json";

export const Route = createFileRoute("/case-studies/small-budget-betting-strategy")({
  head: () => ({
    meta: [
      { title: "Small Budget Betting Strategy | Grow Your Balance from ₹500" },
      { name: "description", content: "Discover how to build a professional bankroll starting with just ₹500. A case study in low-risk session betting and disciplined trading habits on Cricbet99." },
      { property: "og:title", content: "Winning with a Small Budget: The Cricbet99 Blueprint" },
      { property: "og:description", content: "Learn the 'Discipline First' approach that allows small bankrolls to thrive in major cricket markets without excessive risk." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/case-studies/small-budget-betting-strategy" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies_small_budget_betting_strategy,
});

function Page_case_studies_small_budget_betting_strategy() {
  return <LongFormPage content={content} />;
}
