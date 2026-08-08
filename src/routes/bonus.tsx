import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/bonus.json";

export const Route = createFileRoute("/bonus")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Bonuses & Promotions 2026 | New User Offers" },
      { name: "description", content: "Explore the latest Cricbet99 bonuses and promotions. Welcome offers, reload bonuses, and VIP loyalty rewards for Indian cricket and casino players." },
      { property: "og:title", content: "Cricbet99 Promotions | Boost Your Betting Bankroll" },
      { property: "og:description", content: "Get more value with every deposit. From welcome bonuses to weekly cashbacks, discover how Cricbet99 rewards its community." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.win/bonus" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_bonus,
});

function Page_bonus() {
  return <LongFormPage content={content} />;
}
