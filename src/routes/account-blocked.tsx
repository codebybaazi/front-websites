import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/account-blocked.json";

export const Route = createFileRoute("/account-blocked")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Account Blocked? — Cricbet99" },
      { name: "description", content: "Cricbet99 Account Blocked? on Cricbet99: unblock your account and restore full access quickly. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Account Blocked? — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Account Blocked? on Cricbet99: unblock your account and restore full access quickly. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/account-blocked" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_account_blocked,
});

function Page_account_blocked() {
  return <LongFormPage content={content} />;
}
