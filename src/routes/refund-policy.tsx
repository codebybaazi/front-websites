import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/refund-policy.json";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Refund Policy — Cricbet99" },
      { name: "description", content: "Cricbet99 Refund Policy on Cricbet99: how refunds, voids and cashbacks are processed. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Refund Policy — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Refund Policy on Cricbet99: how refunds, voids and cashbacks are processed. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_refund_policy,
});

function Page_refund_policy() {
  return <LongFormPage content={content} />;
}
