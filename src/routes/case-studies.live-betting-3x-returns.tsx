import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies__live-betting-3x-returns.json";

export const Route = createFileRoute("/case-studies/live-betting-3x-returns")({
  head: () => ({
    meta: [
      { title: "Live Betting: 3x Returns Case Study — Cricbet99" },
      { name: "description", content: "Live Betting: 3x Returns Case Study on Cricbet99: how a live in-play bettor tripled their stake on Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Live Betting: 3x Returns Case Study — Cricbet99" },
      { property: "og:description", content: "Live Betting: 3x Returns Case Study on Cricbet99: how a live in-play bettor tripled their stake on Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/live-betting-3x-returns" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies_live_betting_3x_returns,
});

function Page_case_studies_live_betting_3x_returns() {
  return <LongFormPage content={content} />;
}
