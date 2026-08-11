import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/trusted-betting-id-provider.json";

export const Route = createFileRoute("/trusted-betting-id-provider")({
  head: () => ({
    meta: [
      { title: "Trusted Online Betting ID Provider — Cricbet99" },
      { name: "description", content: "Trusted Online Betting ID Provider on Cricbet99: why Cricbet99 is India's most trusted betting ID provider. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Trusted Online Betting ID Provider — Cricbet99" },
      { property: "og:description", content: "Trusted Online Betting ID Provider on Cricbet99: why Cricbet99 is India's most trusted betting ID provider. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/trusted-betting-id-provider" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/trusted-betting-id-provider", "Trusted Online Betting ID Provider")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_trusted_betting_id_provider,
});

function Page_trusted_betting_id_provider() {
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
