import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/disclaimer.json";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Important Disclaimer Platform Information | Cricbet99 Official" },
      { name: "description", content: "Important information regarding financial risks, legal responsibilities, and entertainment-only status of Cricbet99 services." },
      { property: "og:title", content: "Important Disclaimer Platform Information" },
      { property: "og:description", content: "Important information regarding financial risks, legal responsibilities, and entertainment-only status of Cricbet99 services." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/disclaimer" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/disclaimer", "Important Disclaimer Platform Information")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/disclaimer", "Important Disclaimer Platform Information")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_disclaimer,
});

function Page_disclaimer() {
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
