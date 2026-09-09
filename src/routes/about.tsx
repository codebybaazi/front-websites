import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/about.json";
import { getRequestOrigin } from "@/lib/origin.functions";
import { getWhatsAppContact } from "@/lib/whatsapp.functions";

const POSTAL_ADDRESS = "CricketBet99 Editorial (Virtual office — India). Correspondence via email is preferred.";

export const Route = createFileRoute("/about")({
  loader: async () => ({
    origin: await getRequestOrigin(),
    whatsapp: await getWhatsAppContact(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `https://cricbet99.co.in/about`;
    const telephone = loaderData?.whatsapp?.tel?.replace("tel:", "");
    return {
      meta: [
        { title: "About Cricbet99 — India's Trusted Official Betting ID Platform" },
        { name: "description", content: "Learn about Cricbet99, India's premier cricket ID provider since 2020. 1.2 Lakh+ users trust us for verified IDs, 24/7 human support, and instant payouts." },
        { property: "og:title", content: "About Cricbet99 — The Gold Standard for Betting IDs" },
        { property: "og:description", content: "Discover how we built India's most reliable gaming access platform. 24/7 support and secure settlements." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/about", "About Cricbet99")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cricbet99",
          url: "https://cricbet99.co.in/",
          address: POSTAL_ADDRESS,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: "https://cricbet99.co.in/whatsapp-support",
            ...(telephone ? { telephone } : {}),
            availableLanguage: ["English", "Hindi"],
          },
        }),
      },
        ...(content.faqs && content.faqs.length ? [{
          type: "application/ld+json",
          children: JSON.stringify(buildFaqJsonLd(content.faqs)),
        }] : [])
      ],
    };
  },
  component: AboutPage,
});

function AboutPage() {
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
