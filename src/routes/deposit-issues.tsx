import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/deposit-issues.json";

export const Route = createFileRoute("/deposit-issues")({
  head: () => ({
    meta: [
      { title: "Fix Cricbet99 Deposit Issues — Cricbet99" },
      { name: "description", content: "Fix Cricbet99 Deposit Issues on Cricbet99: stuck deposits, pending UPI and failed bank transfers. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Fix Cricbet99 Deposit Issues — Cricbet99" },
      { property: "og:description", content: "Fix Cricbet99 Deposit Issues on Cricbet99: stuck deposits, pending UPI and failed bank transfers. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/deposit-issues" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_deposit_issues,
});

function Page_deposit_issues() {
  return <LongFormPage content={content} />;
}
