import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
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
    links: [{ rel: "canonical", href: "/transaction-limits" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_transaction_limits,
});

function Page_transaction_limits() {
  return <LongFormPage content={content} />;
}
