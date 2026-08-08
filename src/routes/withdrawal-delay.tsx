import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/withdrawal-delay.json";

export const Route = createFileRoute("/withdrawal-delay")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Withdrawal Delay | Tracking Your Payouts" },
      { name: "description", content: "Understand withdrawal processing times and resolve payout delays. Get your funds settled within 24 hours via UPI or bank transfer with human-led assistance." },
      { property: "og:title", content: "Where is my Payout? | Cricbet99 Withdrawal Status Hub" },
      { property: "og:description", content: "Real-time tracking for your Cricbet99 withdrawals. Learn about bank-side delays and how our 2026 payout system ensures your money is safe." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/withdrawal-delay" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_withdrawal_delay,
});

function Page_withdrawal_delay() {
  return <LongFormPage content={content} />;
}
