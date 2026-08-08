import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/become-agent.json";

export const Route = createFileRoute("/become-agent")({
  head: () => ({
    meta: [
      { title: "Become a Cricbet99 Agent | Earn High Commissions" },
      { name: "description", content: "Join the professional Cricbet99 agent program. Manage your own network and earn industry-leading recurring commissions with our secure partnership model." },
      { property: "og:title", content: "Partner with Cricbet99 | Official Agent Program" },
      { property: "og:description", content: "Unlock new revenue streams as an official Cricbet99 agent. Full support, real-time reporting, and instant commission settlements." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/become-agent" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/become-agent", "Become a Cricbet99 Agent | Earn High Commissions")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_become_agent,
});

function Page_become_agent() {
  return <LongFormPage content={content} />;
}
