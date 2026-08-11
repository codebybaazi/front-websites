import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/ipl-betting.json";

export const Route = createFileRoute("/ipl-betting")({
  head: () => ({
    meta: [
      { title: "IPL Betting on Cricbet99 — Cricbet99" },
      { name: "description", content: "IPL Betting on Cricbet99 on Cricbet99: live IPL 2026 markets, odds and prediction tools. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "IPL Betting on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "IPL Betting on Cricbet99 on Cricbet99: live IPL 2026 markets, odds and prediction tools. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/ipl-betting" }],
    scripts: [
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cricbet99.co.in/" },
            { "@type": "ListItem", "position": 2, "name": "IPL Betting", "item": "https://cricbet99.co.in/ipl-betting" }
          ]
        })
      }
    ],
  }),
  component: Page_ipl_betting,
});

function Page_ipl_betting() {
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
