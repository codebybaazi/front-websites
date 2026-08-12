import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/reviews.json";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Reviews — Cricbet99" },
      { name: "description", content: "Real Cricbet99 reviews and ratings from verified Indian players. See what users say about payouts, support and odds." },
      { property: "og:title", content: "Cricbet99 Reviews — Cricbet99" },
      { property: "og:description", content: "Real Cricbet99 reviews and ratings from verified Indian players. See what users say about payouts, support and odds." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/reviews", "Cricbet99 Reviews")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/reviews", "Cricbet99 Reviews")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_reviews,
});

function Page_reviews() {
  return (
    <LongFormPage 
      content={content} 
      extra={
        <AiOverview 
          summary={content.subtitle} 
          highlights={content.features.slice(0, 4).map(f => f.desc)} 
        />
      } 
    />
  );
}
