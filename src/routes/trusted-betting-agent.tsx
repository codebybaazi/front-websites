import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/trusted-betting-agent.json";

export const Route = createFileRoute("/trusted-betting-agent")({
  head: () => ({
    meta: [
      { title: "Official Trusted Cricbet99 Betting Agent — 24/7 WhatsApp Service | Cricbet99 Official" },
      { name: "description", content: "Connect with a verified Cricbet99 betting agent. Get expert guidance on markets, instant ID activation, and secure withdrawal assistance from India's most reliable team." },
      { property: "og:title", content: "Official Trusted Cricbet99 Betting Agent — 24/7 WhatsApp Service" },
      { property: "og:description", content: "Connect with a verified Cricbet99 betting agent. Get expert guidance on markets, instant ID activation, and secure withdrawal assistance from India's most reliable team." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/trusted-betting-agent" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/trusted-betting-agent", "Official Trusted Cricbet99 Betting Agent")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/trusted-betting-agent", "Official Trusted Cricbet99 Betting Agent — 24/7 WhatsApp Service")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_trusted_betting_agent,
});

function Page_trusted_betting_agent() {
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
