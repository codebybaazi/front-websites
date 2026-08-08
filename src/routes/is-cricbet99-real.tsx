import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/is-cricbet99-real.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/is-cricbet99-real")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/is-cricbet99-real`;
    return {
      meta: [
        { title: "Is Cricbet99 Real or Fake? 100% Legitimacy & Trust Verification" },
        { name: "description", content: "Is Cricbet99 real? We provide full transparency into our 6-year operating history, verified payout receipts, and human-led support that serves 1.2 Lakh+ Indian players." },
        { name: "keywords", content: "is cricbet99 real, cricbet99 fake check, trusted cricket id, cricbet99 reviews india, legal betting site verification" },
        { property: "og:title", content: "Is Cricbet99 Real? — The Honest Truth About India's #1 ID" },
        { property: "og:description", content: "Verified since 2020. Read our legitimacy report and see why 1 lakh+ players trust us for secure cricket betting." },
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
          children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-real", "Is Cricbet99 Real?")),
        }
      ],
    };
  },
  component: IsRealPage,
});

function IsRealPage() {
  return <LongFormPage content={content} />;
}

