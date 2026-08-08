import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/deposit-issues.json";

export const Route = createFileRoute("/deposit-issues")({
  head: () => ({
    meta: [
      { title: "Fix Cricbet99 Deposit Issues | Instant Balance Updates" },
      { name: "description", content: "Resolve pending UPI deposits or bank transfer delays on Cricbet99. Get your trading wallet updated in under 60 seconds via official WhatsApp support." },
      { property: "og:title", content: "Deposit Not Reflecting? | Official Cricbet99 Resolution Guide" },
      { property: "og:description", content: "Track your stuck payments and verify your UTR for instant account credit. Reliable 24/7 human assistance for all Cricbet99 financial queries." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.win/deposit-issues" }],
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
