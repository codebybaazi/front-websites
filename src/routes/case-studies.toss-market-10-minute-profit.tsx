import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies__toss-market-10-minute-profit.json";

export const Route = createFileRoute("/case-studies/toss-market-10-minute-profit")({
  head: () => ({
    meta: [
      { title: "Toss Market: 10-Minute Profit Case Study — Cricbet99" },
      { name: "description", content: "Toss Market: 10-Minute Profit Case Study on Cricbet99: a real case study on toss-market profits in under 10 minutes. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Toss Market: 10-Minute Profit Case Study — Cricbet99" },
      { property: "og:description", content: "Toss Market: 10-Minute Profit Case Study on Cricbet99: a real case study on toss-market profits in under 10 minutes. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/toss-market-10-minute-profit" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies_toss_market_10_minute_profit,
});

function Page_case_studies_toss_market_10_minute_profit() {
  return <LongFormPage content={content} />;
}
