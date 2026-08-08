import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/what-is-cricbet99.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/what-is-cricbet99")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/what-is-cricbet99`;
    return {
      meta: [
        { title: "What is Cricbet99? Official Guide & Platform Overview 2026" },
        { name: "description", content: "Discover what Cricbet99 is: India's premier cricket ID provider since 2020. Explore our secure betting markets, live casino games, and 24/7 human support system." },
        { name: "keywords", content: "what is cricbet99, cricbet99 overview, online betting india guide, cricket id provider, trusted gaming platform" },
        { property: "og:title", content: "What is Cricbet99? — The Complete User Guide" },
        { property: "og:description", content: "Everything you need to know about India's most trusted sports betting access platform. Sharp odds, fast payouts, and expert support." },
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
          children: JSON.stringify(buildBreadcrumbJsonLd("/what-is-cricbet99", "What is Cricbet99?")),
        }
      ],
    };
  },
  component: WhatIsCricbet99Page,
});

function WhatIsCricbet99Page() {
  return <LongFormPage content={content} />;
}

