import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/trusted-betting-agent.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/trusted-betting-agent")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/trusted-betting-agent`;
    return {
      meta: [
        { title: "Official Trusted Cricbet99 Betting Agent — 24/7 WhatsApp Service" },
        { name: "description", content: "Connect with a verified Cricbet99 betting agent. Get expert guidance on markets, instant ID activation, and secure withdrawal assistance from India's most reliable team." },
        { name: "keywords", content: "trusted cricbet99 agent, official cricket id agent, whatsapp betting agent india, verified bookie agent, cricbet99 support number" },
        { property: "og:title", content: "Trusted Cricbet99 Agents — Professional Human Support" },
        { property: "og:description", content: "Skip the bots. Get a real, verified agent to manage your Cricbet99 ID and help you with every bet." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("      links: [{ rel: "canonical", href: canonical }],", "Official Trusted Cricbet99 Betting Agent — 24/7 WhatsApp Service")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: TrustedAgentPage,
});

function TrustedAgentPage() {
  return <LongFormPage content={content} />;
}

