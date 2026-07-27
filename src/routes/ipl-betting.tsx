import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/ipl-betting.json";

export const Route = createFileRoute("/ipl-betting")({
  head: () => ({
    meta: [
      { title: "IPL Betting on Cricbet99 — Cricbet99" },
      { name: "description", content: "IPL Betting on Cricbet99 on Cricbet99: live IPL 2026 markets, odds and prediction tools. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "IPL Betting on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "IPL Betting on Cricbet99 on Cricbet99: live IPL 2026 markets, odds and prediction tools. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ipl-betting" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_ipl_betting,
});

function Page_ipl_betting() {
  return <LongFormPage content={content} />;
}
