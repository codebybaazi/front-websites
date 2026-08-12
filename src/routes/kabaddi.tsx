import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/kabaddi.json";

export const Route = createFileRoute("/kabaddi")({
  head: () => ({
    meta: [
      { title: "Kabaddi Betting on Cricbet99 — Cricbet99" },
      { name: "description", content: "Kabaddi Betting on Cricbet99 on Cricbet99: Pro Kabaddi League and international kabaddi markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Kabaddi Betting on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "Kabaddi Betting on Cricbet99 on Cricbet99: Pro Kabaddi League and international kabaddi markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/kabaddi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/kabaddi", "Kabaddi Betting on Cricbet99")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/kabaddi", "Kabaddi Betting on Cricbet99")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_kabaddi,
});

function Page_kabaddi() {
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
