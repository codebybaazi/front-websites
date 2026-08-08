import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/policies.json";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Official Policies — Privacy, KYC & Fairness | Cricbet99 Official" },
      { name: "description", content: "Complete directory of Cricbet99 policies. Learn about our data protection standards, KYC requirements, and commitment to fair play and transparent betting." },
      { property: "og:title", content: "Cricbet99 Official Policies — Privacy, KYC & Fairness" },
      { property: "og:description", content: "Complete directory of Cricbet99 policies. Learn about our data protection standards, KYC requirements, and commitment to fair play and transparent betting." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/policies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/policies", "Cricbet99 Official Policies — Privacy, KYC & Fairness")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_policies,
});

function Page_policies() {
  return <LongFormPage content={content} />;
}
