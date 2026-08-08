import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/community-guidelines.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/community-guidelines")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/community-guidelines`;
    return {
      meta: [
        { title: "Community Guidelines — Join the Elite Cricbet99 Network" },
        { name: "description", content: "Official Cricbet99 Community Guidelines. Our rules of conduct ensure a safe, respectful, and professional environment for India's premier bettors." },
        { name: "keywords", content: "cricbet99 community guidelines, betting conduct rules, safe betting environment, cricbet99 member rules, elite betting network" },
        { property: "og:title", content: "Cricbet99 Community Guidelines — Professional Betting Standards" },
        { property: "og:description", content: "Respect, integrity, and fair play. Learn the principles that make us India's most trusted betting community." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("      links: [{ rel: "canonical", href: canonical }],", "Community Guidelines — Join the Elite Cricbet99 Network")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: CommunityGuidelinesPage,
});

function CommunityGuidelinesPage() {
  return <LongFormPage content={content} />;
}

