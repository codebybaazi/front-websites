import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/contact.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/contact")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `https://cricbet99.co.in/contact`;
    return {
      meta: [
        { title: "Contact Cricbet99 Official — 24/7 WhatsApp Human Support" },
        { name: "description", content: "Reach the official Cricbet99 customer care team 24/7. Get instant help with ID activation, deposits, and withdrawals via WhatsApp, phone, or email." },
        { name: "keywords", content: "contact cricbet99, cricbet99 whatsapp number, cricbet99 support team, betting customer care india, official cricbet99 help" },
        { property: "og:title", content: "Contact Cricbet99 — Real Human Help, 24/7" },
        { property: "og:description", content: "Skip the bots. Message our official support number on WhatsApp for instant assistance from India's #1 team." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd("/contact", "Contact Us")),
        },
        ...(content.faqs && content.faqs.length ? [{
          type: "application/ld+json",
          children: JSON.stringify(buildFaqJsonLd(content.faqs)),
        }] : [])
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
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
