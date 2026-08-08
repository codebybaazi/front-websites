import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/is-cricbet99-safe.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/is-cricbet99-safe")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/is-cricbet99-safe`;
    return {
      meta: [
        { title: "Is Cricbet99 Safe? Official Security & Trust Verification 2026" },
        { name: "description", content: "Is Cricbet99 safe? Read our official 2026 security report covering bank-grade encryption, verified WhatsApp ID system, and instant payout guarantees for 1.2L+ users." },
        { name: "keywords", content: "is cricbet99 safe, cricbet99 security report, trusted betting site india, secure cricket id, betting safety verification" },
        { property: "og:title", content: "Cricbet99 Security Report — Why 1 Lakh+ Players Trust Us" },
        { property: "og:description", content: "Full transparency on our safety protocols. Bank-grade data protection and 24/7 human-led security monitoring." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        ...(content.faqs && content.faqs.length ? [{
          type: "application/ld+json",
          children: JSON.stringify(buildFaqJsonLd(content.faqs)),
        }] : []),
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-safe", "Is it Safe?")),
        }
      ],
    };
  },
  component: SafetyPage,
});

function SafetyPage() {
  return <LongFormPage content={content} />;
}

