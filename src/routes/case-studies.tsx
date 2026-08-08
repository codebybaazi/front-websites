import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies.json";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Case Studies | Real Member Success Stories" },
      { name: "description", content: "Discover real-world trading results from the Cricbet99 community. Learn the disciplined strategies and budget management habits of successful Indian bettors." },
      { property: "og:title", content: "Cricbet99 Case Studies: How Our Members Trade & Win" },
      { property: "og:description", content: "Detailed breakdowns of IPL 2026 strategies, small budget growth stories, and high-velocity toss market profits from real Cricbet99 IDs." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/case-studies" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies,
});

function Page_case_studies() {
  return <LongFormPage content={content} />;
}
