import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/contact.json";
import { getRequestOrigin } from "@/lib/origin.functions";
import { getWhatsAppContact } from "@/lib/whatsapp.functions";

const POSTAL_ADDRESS = "CricketBet99 Editorial (Virtual office — India). Correspondence via email is preferred.";

export const Route = createFileRoute("/contact")({
  loader: async () => ({
    origin: await getRequestOrigin(),
    whatsapp: await getWhatsAppContact(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `https://cricbet99.co.in/contact`;
    const telephone = loaderData?.whatsapp?.tel?.replace("tel:", "");
    return {
      meta: [
        { title: "Contact Cricbet99 Official — 24/7 WhatsApp Human Support" },
        { name: "description", content: "Reach the official Cricbet99 customer care team 24/7. Get instant help with ID activation, deposits, and withdrawals via WhatsApp, phone, or email." },
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
            hoursAvailable: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
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
