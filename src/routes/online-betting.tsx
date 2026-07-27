import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/online-betting.json";

export const Route = createFileRoute("/online-betting")({
  head: () => ({
    meta: [
      { title: "Online Betting on Cricbet99 — Cricbet99" },
      { name: "description", content: "Online Betting on Cricbet99 on Cricbet99: the complete guide to safe online betting in India. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Online Betting on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "Online Betting on Cricbet99 on Cricbet99: the complete guide to safe online betting in India. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/online-betting" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_online_betting,
});

function Page_online_betting() {
  return <LongFormPage content={content} />;
}
