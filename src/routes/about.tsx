import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/about.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/about")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/about`;
    return {
      meta: [
        { title: "About Cricbet99 — India's Trusted Official Betting ID Platform" },
        { name: "description", content: "Learn about Cricbet99, India's premier cricket ID provider since 2020. 1.2 Lakh+ users trust us for verified IDs, 24/7 human support, and instant payouts." },
        { name: "keywords", content: "about cricbet99, official cricket id provider, trusted betting site india, cricbet99 history, fast withdrawals betting" },
        { property: "og:title", content: "About Cricbet99 — The Gold Standard for Betting IDs" },
        { property: "og:description", content: "Discover how we built India's most reliable gaming access platform. 24/7 support and secure settlements." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("      links: [{ rel: "canonical", href: canonical }],
        children: JSON.stringify(buildBreadcrumbJsonLd("      links: [{ rel: "canonical", href: canonical }],", "About Cricbet99 — India's Trusted Official Betting ID Platform")),", "About Cricbet99 — India's Trusted Official Betting ID Platform")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],", "About Cricbet99 — India's Trusted Official Betting ID Platform")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  return <LongFormPage content={content} />;
}

