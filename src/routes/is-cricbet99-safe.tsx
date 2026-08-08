import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/is-cricbet99-safe.json";

export const Route = createFileRoute("/is-cricbet99-safe")({
  head: () => ({
    meta: [
      { title: "Is Cricbet99 Safe? Official Security & Trust Verification 2026 | Cricbet99 Official" },
      { name: "description", content: "Is Cricbet99 safe? Read our official 2026 security report covering bank-grade encryption, verified WhatsApp ID system, and instant payout guarantees for 1.2L+ users." },
      { property: "og:title", content: "Is Cricbet99 Safe? Official Security & Trust Verification 2026" },
      { property: "og:description", content: "Is Cricbet99 safe? Read our official 2026 security report covering bank-grade encryption, verified WhatsApp ID system, and instant payout guarantees for 1.2L+ users." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/is-cricbet99-safe" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-safe", "Is Cricbet99 Safe? Official Security & Trust Verification 2026")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_is_cricbet99_safe,
});

function Page_is_cricbet99_safe() {
  return <LongFormPage content={content} />;
}
