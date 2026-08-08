import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/referral-code.json";

export const Route = createFileRoute("/referral-code")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Referral Program | Invite Friends & Earn" },
      { name: "description", content: "Share your Cricbet99 referral code and earn lifetime commissions. Invite your friends to India's most trusted sports betting exchange today." },
      { property: "og:title", content: "Refer & Earn with Cricbet99 | Lifetime Rewards" },
      { property: "og:description", content: "Earn rewards for every friend who joins the Cricbet99 community. Transparent tracking and instant payouts on all referral earnings." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/referral-code" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/referral-code", "Cricbet99 Referral Program | Invite Friends & Earn")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_referral_code,
});

function Page_referral_code() {
  return <LongFormPage content={content} />;
}
