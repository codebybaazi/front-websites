import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/policies.json";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Policies — Cricbet99" },
      { name: "description", content: "Cricbet99 Policies on Cricbet99: all our policies — privacy, KYC, refunds and responsible gaming — in one place. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Policies — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Policies on Cricbet99: all our policies — privacy, KYC, refunds and responsible gaming — in one place. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/policies" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_policies,
});

function Page_policies() {
  return <LongFormPage content={content} />;
}
