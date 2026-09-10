import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { LongFormPage, buildFaqJsonLd, buildArticleJsonLd } from "@/components/long-form-page";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import content from "@/data/pages/cricbet99-customer-care-number.json";

const PATH = "/cricbet99-customer-care-number";
const CANONICAL = `https://cricbet99.co.in${PATH}`;
const TITLE = "Cricbet99 Customer Care Number | Official WhatsApp Helpline";
const DESCRIPTION =
  "Official Cricbet99 customer care number on WhatsApp. Message this verified line for IDs, deposits, withdrawals, and account help.";

export const Route = createFileRoute("/cricbet99-customer-care-number")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "Cricbet99, Cricbet99 Customer Care number, Customer Care number Cricbet99, Cricbet99 WhatsApp support" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      ...(content.faqs && content.faqs.length
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(buildFaqJsonLd(content.faqs)),
            },
          ]
        : []),
      {
        type: "application/ld+json",
        children: JSON.stringify(buildArticleJsonLd(content, CANONICAL)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Cricbet99 Customer Care Number", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: PageCricbet99CustomerCareNumber,
});

function CustomerCareNumberCard() {
  const { wa, display, digits } = useWhatsApp();
  const chatUrl = `${wa}?text=${encodeURIComponent("Hi, I need the Cricbet99 customer care number. I want help with my account.")}`;

  return (
    <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="rounded-2xl border border-primary/30 bg-background/60 p-6 sm:p-8">
        <p className="text-sm font-bold text-primary">Official Cricbet99 customer care number</p>
        <p className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">{display || digits}</p>
        <p className="mt-3 text-sm text-foreground/70">
          This number is loaded from the live Cricbet99 list. Tap below to open WhatsApp and chat with customer care.
        </p>
        <a
          href={chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          style={{ background: "var(--gradient-gold)" }}
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

function PageCricbet99CustomerCareNumber() {
  return (
    <LongFormPage
      content={content}
      extra={<CustomerCareNumberCard />}
      relatedLinks={[
        { to: "/whatsapp-support", label: "WhatsApp support", desc: "How Cricbet99 managers handle IDs and banking in chat." },
        { to: "/cricbet99-deposit-number", label: "Cricbet99 deposit number", desc: "Same line when you need today's UPI details." },
        { to: "/cricbet99-withdrawl-number", label: "Cricbet99 withdrawl number", desc: "Same line when you want to cash out." },
        { to: "/contact", label: "Contact Cricbet99", desc: "Email and other ways to reach the team." },
      ]}
    />
  );
}
