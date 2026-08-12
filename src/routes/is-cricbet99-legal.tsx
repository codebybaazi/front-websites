import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/is-cricbet99-legal.json";

export const Route = createFileRoute("/is-cricbet99-legal")({
  head: () => ({
    meta: [
      { title: "Is Cricbet99 Legal in India? — Law, Regulations & Facts" },
      { name: "description", content: "Is Cricbet99 legal? Expert analysis of Indian online betting laws and how Cricbet99 operates as a skill-based platform." },
      { property: "og:title", content: "Is Cricbet99 Legal in India? — Legal Review" },
      { property: "og:description", content: "Clear look at the legal position of online cricket betting in India and how Cricbet99 operates." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://cricbet99.co.in/is-cricbet99-legal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/is-cricbet99-legal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-legal", "Is Cricbet99 Legal in India?")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-legal", "Is Cricbet99 Legal in India? — Law, Regulations & Facts")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_is_cricbet99_legal,
});

function Page_is_cricbet99_legal() {
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
