import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/how-to-withdraw.json";

export const Route = createFileRoute("/how-to-withdraw")({
  head: () => ({
    meta: [
      { title: "How to Withdraw Safely on Cricbet99 — Cricbet99" },
      { name: "description", content: "How to Withdraw Safely on Cricbet99 on Cricbet99: step-by-step withdrawal guide — fast, verified, safe. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "How to Withdraw Safely on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "How to Withdraw Safely on Cricbet99 on Cricbet99: step-by-step withdrawal guide — fast, verified, safe. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-to-withdraw" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_how_to_withdraw,
});

function Page_how_to_withdraw() {
  return <LongFormPage content={content} />;
}
