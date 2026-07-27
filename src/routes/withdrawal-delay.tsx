import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/withdrawal-delay.json";

export const Route = createFileRoute("/withdrawal-delay")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Withdrawal Delay — Cricbet99" },
      { name: "description", content: "Cricbet99 Withdrawal Delay on Cricbet99: understand and fix delayed withdrawals from your ID. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Withdrawal Delay — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Withdrawal Delay on Cricbet99: understand and fix delayed withdrawals from your ID. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/withdrawal-delay" }],
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
