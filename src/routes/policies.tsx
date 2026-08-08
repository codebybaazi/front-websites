import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/policies.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/policies")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/policies`;
    return {
      meta: [
        { title: "Cricbet99 Official Policies — Privacy, KYC & Fairness" },
        { name: "description", content: "Complete directory of Cricbet99 policies. Learn about our data protection standards, KYC requirements, and commitment to fair play and transparent betting." },
        { name: "keywords", content: "cricbet99 policies, betting platform rules, kyc requirements india, fair play betting, secure gaming directory" },
        { property: "og:title", content: "Cricbet99 Policy Hub — Transparency You Can Trust" },
        { property: "og:description", content: "Explore our comprehensive policies designed to protect every Cricbet99 member and ensure a professional gaming environment." },
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
          children: JSON.stringify(buildBreadcrumbJsonLd("/policies", "Policies")),
        }
      ],
    };
  },
  component: PolicyHubPage,
});

function PolicyHubPage() {
  return <LongFormPage content={content} />;
}

