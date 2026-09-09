import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/how-to-withdraw.json";

export const Route = createFileRoute("/how-to-withdraw")({
  head: () => ({
    meta: [
      { title: "How to Withdraw Safely on Cricbet99 — Cricbet99" },
      { name: "description", content: "How to Withdraw Safely on Cricbet99 on Cricbet99: step-by-step withdrawal guide — fast, verified, safe. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "How to Withdraw Safely on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "How to Withdraw Safely on Cricbet99 on Cricbet99: step-by-step withdrawal guide — fast, verified, safe. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/how-to-withdraw" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/how-to-withdraw", "How to Withdraw Safely on Cricbet99")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_how_to_withdraw,
});

function Page_how_to_withdraw() {
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
