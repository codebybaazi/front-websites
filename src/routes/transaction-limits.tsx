import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/transaction-limits.json";

export const Route = createFileRoute("/transaction-limits")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Transaction Limits — Cricbet99" },
      { name: "description", content: "Cricbet99 Transaction Limits on Cricbet99: deposit, withdrawal and daily transaction limits explained. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Transaction Limits — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Transaction Limits on Cricbet99: deposit, withdrawal and daily transaction limits explained. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/transaction-limits" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/transaction-limits", "Cricbet99 Transaction Limits")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/transaction-limits", "Cricbet99 Transaction Limits")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_transaction_limits,
});

function Page_transaction_limits() {
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
