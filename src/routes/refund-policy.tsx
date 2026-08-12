import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/refund-policy.json";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Official Cricbet99 Banking | Cricbet99 Official" },
      { name: "description", content: "Understand the Cricbet99 Refund Policy. Learn how we handle transaction errors, market voids, and withdrawal cancellations with total transparency." },
      { property: "og:title", content: "Refund & Cancellation Policy — Official Cricbet99 Banking" },
      { property: "og:description", content: "Understand the Cricbet99 Refund Policy. Learn how we handle transaction errors, market voids, and withdrawal cancellations with total transparency." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/refund-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/refund-policy", "Refund & Cancellation Policy")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/refund-policy", "Refund & Cancellation Policy — Official Cricbet99 Banking")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_refund_policy,
});

function Page_refund_policy() {
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
