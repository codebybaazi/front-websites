import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/disclaimer.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/disclaimer")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/disclaimer`;
    return {
      meta: [
        { title: "Important Disclaimer — Cricbet99 Platform Information" },
        { name: "description", content: "Important information regarding financial risks, legal responsibilities, and entertainment-only status of Cricbet99 services." },
        { name: "keywords", content: "cricbet99 disclaimer, betting risk warning, online betting legality india, entertainment gaming disclaimer" },
        { property: "og:title", content: "Cricbet99 Disclaimer — Know the Risks" },
        { property: "og:description", content: "Understand your responsibilities and the risks associated with online gaming before you place your first bet." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd("/disclaimer", "Disclaimer")),
        }
      ],
    };
  },
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return <LongFormPage content={content} />;
}

