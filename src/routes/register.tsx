import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/register.json";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Signup — Create Verified Betting ID Online" },
      { name: "description", content: "Create your verified Cricbet99 ID in under 2 minutes. Get official signup access via WhatsApp for instant UPI deposits and withdrawals. Join 1 Lakh+ trusted players." },
      { name: "keywords", content: "cricbet99 signup, cricbet99 register, create cricbet99 id, cricbet99 new account, cricbet99 official signup, online betting id registration, get cricbet99 whatsapp id" },
      { property: "og:title", content: "Cricbet99 Signup — Official Registration & ID Creation" },
      { property: "og:description", content: "Join Cricbet99 today. Get your verified betting ID via WhatsApp in 2 minutes. Trusted human support and instant payouts." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/register" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/register" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Cricbet99 Signup",
          "description": "Official registration and ID creation guide for Cricbet99.",
          "url": "https://cricbet99.co.in/register",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cricbet99.co.in/" },
              { "@type": "ListItem", "position": 2, "name": "Signup", "item": "https://cricbet99.co.in/register" }
            ]
          }
        })
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_register,
});

function Page_register() {
  return <LongFormPage content={content} />;
}
