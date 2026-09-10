import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/is-cricbet99-safe.json";

export const Route = createFileRoute("/is-cricbet99-safe")({
  head: () => ({
    meta: [
      { title: "Is Cricbet99 Safe? Security & Trust Guide 2026" },
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
        children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-safe", "Is Cricbet99 Safe?")),
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
  return (
    <LongFormPage
      content={content}
      relatedLinks={[
        { to: "/is-cricbet99-legal", label: "Is Cricbet99 Legal in India?", desc: "Regulations and how Cricbet99 operates as a skill-based platform." },
        { to: "/is-cricbet99-real", label: "Is Cricbet99 Real or Fake?", desc: "Transparency on our operating history and verification." },
      ]}
      extra={
        <AiOverview
          summary={content.subtitle}
          highlights={content.features.slice(0, 4).map(f => f.desc)}
        />
      }
    />
  );
}
