import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/kyc-policy.json";

export const Route = createFileRoute("/kyc-policy")({
  head: () => ({
    meta: [
      { title: "Cricbet99 KYC Verification Policy — Cricbet99" },
      { name: "description", content: "Cricbet99 KYC Verification Policy on Cricbet99: secure, private KYC verification for your Cricbet99 ID. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 KYC Verification Policy — Cricbet99" },
      { property: "og:description", content: "Cricbet99 KYC Verification Policy on Cricbet99: secure, private KYC verification for your Cricbet99 ID. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/kyc-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/kyc-policy", "Cricbet99 KYC Verification Policy")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/kyc-policy", "Cricbet99 KYC Verification Policy")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_kyc_policy,
});

function Page_kyc_policy() {
  return (
    <LongFormPage 
      content={content} 
      extra={
        <AiOverview 
          summary={content.subtitle} 
          highlights={content.features.slice(0, 4).map(f => f.desc)} 
        />
      } 
    />
  );
}
