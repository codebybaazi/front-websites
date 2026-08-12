import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/rules.json";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Official Rules & Regulations — Official Cricbet99 Rulebook | Cricbet99 Official" },
      { name: "description", content: "Read the official Cricbet99 Rules & Regulations. Transparent market settlement, fair play standards, and professional gaming rules for all sports and casino." },
      { property: "og:title", content: "Official Rules & Regulations — Official Cricbet99 Rulebook" },
      { property: "og:description", content: "Read the official Cricbet99 Rules & Regulations. Transparent market settlement, fair play standards, and professional gaming rules for all sports and casino." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/rules" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/rules", "Official Rules & Regulations")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/rules", "Official Rules & Regulations — Official Cricbet99 Rulebook")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_rules,
});

function Page_rules() {
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
