import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/become-agent.json";

export const Route = createFileRoute("/become-agent")({
  head: () => ({
    meta: [
      { title: "Become a Cricbet99 Agent — Cricbet99" },
      { name: "description", content: "Become a Cricbet99 Agent on Cricbet99: join our agent program and earn recurring commission. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Become a Cricbet99 Agent — Cricbet99" },
      { property: "og:description", content: "Become a Cricbet99 Agent on Cricbet99: join our agent program and earn recurring commission. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/become-agent" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_become_agent,
});

function Page_become_agent() {
  return <LongFormPage content={content} />;
}
