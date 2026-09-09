import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/community-guidelines.json";

export const Route = createFileRoute("/community-guidelines")({
  head: () => ({
    meta: [
      { title: "Community Guidelines — Join the Elite Cricbet99 Network | Cricbet99 Official" },
      { name: "description", content: "Official Cricbet99 Community Guidelines. Our rules of conduct ensure a safe, respectful, and professional environment for India's premier bettors." },
      { property: "og:title", content: "Community Guidelines — Join the Elite Cricbet99 Network" },
      { property: "og:description", content: "Official Cricbet99 Community Guidelines. Our rules of conduct ensure a safe, respectful, and professional environment for India's premier bettors." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/community-guidelines" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/community-guidelines", "Community Guidelines — Join the Elite Cricbet99 Network")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_community_guidelines,
});

function Page_community_guidelines() {
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
