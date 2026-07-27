import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies__ipl-5000-to-25000-profit.json";

export const Route = createFileRoute("/case-studies/ipl-5000-to-25000-profit")({
  head: () => ({
    meta: [
      { title: "IPL Case Study: ₹5,000 to ₹25,000 — Cricbet99" },
      { name: "description", content: "IPL Case Study: ₹5,000 to ₹25,000 on Cricbet99: how a Cricbet99 member turned ₹5,000 into ₹25,000 over IPL. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "IPL Case Study: ₹5,000 to ₹25,000 — Cricbet99" },
      { property: "og:description", content: "IPL Case Study: ₹5,000 to ₹25,000 on Cricbet99: how a Cricbet99 member turned ₹5,000 into ₹25,000 over IPL. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/ipl-5000-to-25000-profit" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies_ipl_5000_to_25000_profit,
});

function Page_case_studies_ipl_5000_to_25000_profit() {
  return <LongFormPage content={content} />;
}
