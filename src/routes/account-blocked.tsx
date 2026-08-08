import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/account-blocked.json";

export const Route = createFileRoute("/account-blocked")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Account Restricted? | Restore Access Now" },
      { name: "description", content: "Is your Cricbet99 ID blocked or restricted? Learn why security blocks happen and how to unblock your account instantly via official WhatsApp verification." },
      { property: "og:title", content: "Account Recovery Guide: Unblocking Your Cricbet99 ID" },
      { property: "og:description", content: "Secure account restoration for Cricbet99 members. Update your KYC and restore your balance with India's most secure cricket betting platform." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.win/account-blocked" }],
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
