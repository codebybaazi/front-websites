import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/rules.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/rules")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/rules`;
    return {
      meta: [
        { title: "Official Rules & Regulations — Official Cricbet99 Rulebook" },
        { name: "description", content: "Read the official Cricbet99 Rules & Regulations. Transparent market settlement, fair play standards, and professional gaming rules for all sports and casino." },
        { name: "keywords", content: "cricbet99 rules, betting regulations, market settlement rules, cricket betting laws, fair play standards betting" },
        { property: "og:title", content: "Cricbet99 Rules & Regulations — The Official Rulebook" },
        { property: "og:description", content: "How we settle bets, handle abandoned matches, and ensure platform integrity for 1.2 Lakh+ users." },
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
          children: JSON.stringify(buildBreadcrumbJsonLd("/rules", "Rules & Regulations")),
        }
      ],
    };
  },
  component: RulesPage,
});

function RulesPage() {
  return <LongFormPage content={content} />;
}

