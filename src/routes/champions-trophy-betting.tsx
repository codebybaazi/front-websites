import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/champions-trophy-betting.json";

export const Route = createFileRoute("/champions-trophy-betting")({
  head: () => ({
    meta: [
      { title: "ICC Champions Trophy Betting — Cricbet99" },
      { name: "description", content: "ICC Champions Trophy Betting on Cricbet99: Champions Trophy odds, teams and live markets on Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "ICC Champions Trophy Betting — Cricbet99" },
      { property: "og:description", content: "ICC Champions Trophy Betting on Cricbet99: Champions Trophy odds, teams and live markets on Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/champions-trophy-betting" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_champions_trophy_betting,
});

function Page_champions_trophy_betting() {
  return <LongFormPage content={content} />;
}
