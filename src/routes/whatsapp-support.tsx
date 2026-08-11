import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/whatsapp-support.json";

export const Route = createFileRoute("/whatsapp-support")({
  head: () => ({
    meta: [
      { title: "Cricbet99 WhatsApp Support — Cricbet99" },
      { name: "description", content: "Cricbet99 WhatsApp Support on Cricbet99: direct 24/7 WhatsApp support for deposits, withdrawals and markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 WhatsApp Support — Cricbet99" },
      { property: "og:description", content: "Cricbet99 WhatsApp Support on Cricbet99: direct 24/7 WhatsApp support for deposits, withdrawals and markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/whatsapp-support" }],
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
            { "@type": "ListItem", "position": 2, "name": "WhatsApp Support", "item": "https://cricbet99.co.in/whatsapp-support" }
          ]
        })
      }
    ],
  }),
  component: Page_whatsapp_support,
});

function Page_whatsapp_support() {
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
