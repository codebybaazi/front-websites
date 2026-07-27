import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/trusted-betting-agent.json";

export const Route = createFileRoute("/trusted-betting-agent")({
  head: () => ({
    meta: [
      { title: "Trusted Cricbet99 Betting Agent — Cricbet99" },
      { name: "description", content: "Trusted Cricbet99 Betting Agent on Cricbet99: dedicated human agents who guide every bet you place. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Trusted Cricbet99 Betting Agent — Cricbet99" },
      { property: "og:description", content: "Trusted Cricbet99 Betting Agent on Cricbet99: dedicated human agents who guide every bet you place. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/trusted-betting-agent" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_trusted_betting_agent,
});

function Page_trusted_betting_agent() {
  return <LongFormPage content={content} />;
}
