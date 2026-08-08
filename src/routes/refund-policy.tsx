import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/refund-policy.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/refund-policy")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/refund-policy`;
    return {
      meta: [
        { title: "Refund & Cancellation Policy — Official Cricbet99 Banking" },
        { name: "description", content: "Understand the Cricbet99 Refund Policy. Learn how we handle transaction errors, market voids, and withdrawal cancellations with total transparency." },
        { name: "keywords", content: "cricbet99 refund policy, betting cancellations, transaction error refund, void bet refund cricket, secure withdrawals" },
        { property: "og:title", content: "Cricbet99 Refund & Cancellation — Fair Financial Rules" },
        { property: "og:description", content: "Fast, human-led resolution for any banking or settlement errors. We prioritize your funds' safety." },
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
          children: JSON.stringify(buildBreadcrumbJsonLd("/refund-policy", "Refund Policy")),
        }
      ],
    };
  },
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return <LongFormPage content={content} />;
}

