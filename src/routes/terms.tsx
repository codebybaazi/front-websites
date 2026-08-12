import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/terms.json";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Official Cricbet99 Membership Rules | Cricbet99 Official" },
      { name: "description", content: "Review the official Cricbet99 Terms & Conditions. Understand our fair play policies, withdrawal guidelines, and membership rules for a secure betting experience." },
      { property: "og:title", content: "Terms & Conditions — Official Cricbet99 Membership Rules" },
      { property: "og:description", content: "Review the official Cricbet99 Terms & Conditions. Understand our fair play policies, withdrawal guidelines, and membership rules for a secure betting experience." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/terms" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/terms", "Terms & Conditions")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/terms", "Terms & Conditions — Official Cricbet99 Membership Rules")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_terms,
});

function Page_terms() {
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
