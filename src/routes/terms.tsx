import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/terms.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/terms")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/terms`;
    return {
      meta: [
        { title: "Terms & Conditions — Official Cricbet99 Membership Rules" },
        { name: "description", content: "Review the official Cricbet99 Terms & Conditions. Understand our fair play policies, withdrawal guidelines, and membership rules for a secure betting experience." },
        { name: "keywords", content: "cricbet99 terms and conditions, betting membership rules, cricbet99 fair play, official cricbet99 policies, betting agreement" },
        { property: "og:title", content: "Cricbet99 Terms & Conditions — Transparent Betting Rules" },
        { property: "og:description", content: "Clear, plain-English rules covering account eligibility, transactions, and fair gaming standards for 1.2 Lakh+ users." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("      links: [{ rel: "canonical", href: canonical }],", "Terms & Conditions — Official Cricbet99 Membership Rules")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: TermsPage,
});

function TermsPage() {
  return <LongFormPage content={content} />;
}

