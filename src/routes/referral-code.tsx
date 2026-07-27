import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/referral-code.json";

export const Route = createFileRoute("/referral-code")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Referral Code — Cricbet99" },
      { name: "description", content: "Cricbet99 Referral Code on Cricbet99: earn commission for every friend you refer to Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Referral Code — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Referral Code on Cricbet99: earn commission for every friend you refer to Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/referral-code" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_referral_code,
});

function Page_referral_code() {
  return <LongFormPage content={content} />;
}
