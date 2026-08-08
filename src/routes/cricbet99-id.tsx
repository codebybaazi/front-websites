import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-id.json";

export const Route = createFileRoute("/cricbet99-id")({
  head: () => ({
    meta: [
      { title: "Get Your Cricbet99 ID — Cricbet99" },
      { name: "description", content: "Get Your Cricbet99 ID on Cricbet99: instant, verified betting IDs on WhatsApp in 2 minutes. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Get Your Cricbet99 ID — Cricbet99" },
      { property: "og:description", content: "Get Your Cricbet99 ID on Cricbet99: instant, verified betting IDs on WhatsApp in 2 minutes. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-id" }],
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
            { "@type": "ListItem", "position": 2, "name": "Cricbet99 ID", "item": "https://cricbet99.co.in/cricbet99-id" }
          ]
        })
      }
    ],
  }),
  component: Page_cricbet99_id,
});

function Page_cricbet99_id() {
  return <LongFormPage content={content} />;
}
