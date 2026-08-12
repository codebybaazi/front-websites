import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/what-is-cricbet99.json";

export const Route = createFileRoute("/what-is-cricbet99")({
  head: () => ({
    meta: [
      { title: "What is Cricbet99? Official Guide & Platform Overview 2026 | Cricbet99 Official" },
      { name: "description", content: "Discover what Cricbet99 is: India's premier cricket ID provider since 2020. Explore our secure betting markets, live casino games, and 24/7 human support system." },
      { property: "og:title", content: "What is Cricbet99? Official Guide & Platform Overview 2026" },
      { property: "og:description", content: "Discover what Cricbet99 is: India's premier cricket ID provider since 2020. Explore our secure betting markets, live casino games, and 24/7 human support system." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/what-is-cricbet99" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/what-is-cricbet99", "What is Cricbet99? Official Guide & Platform Overview 2026")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/what-is-cricbet99", "What is Cricbet99? Official Guide & Platform Overview 2026")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_what_is_cricbet99,
});

function Page_what_is_cricbet99() {
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
