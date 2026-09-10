import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { LongFormPage, buildFaqJsonLd, buildArticleJsonLd } from "@/components/long-form-page";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import content from "@/data/pages/cricbet99-deposit-number.json";

const PATH = "/cricbet99-deposit-number";
const CANONICAL = `https://cricbet99.co.in${PATH}`;
const TITLE = "Cricbet99 Deposit Number | Official WhatsApp Deposit Line";
const DESCRIPTION =
  "Official Cricbet99 deposit number on WhatsApp. Message this verified line for today's UPI details and credit your Cricbet99 ID.";

export const Route = createFileRoute("/cricbet99-deposit-number")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "Cricbet99, Cricbet99 Deposit number, Deposit number Cricbet99, Cricbet99 WhatsApp deposit" },
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
            { "@type": "ListItem", position: 2, name: "Cricbet99 Deposit Number", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: PageCricbet99DepositNumber,
});

function DepositNumberCard() {
  const { wa, display, digits } = useWhatsApp();
  const chatUrl = `${wa}?text=${encodeURIComponent("Hi, I need the Cricbet99 deposit number and today's UPI details.")}`;

  return (
    <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="rounded-2xl border border-primary/30 bg-background/60 p-6 sm:p-8">
        <p className="text-sm font-bold text-primary">Official Cricbet99 deposit number</p>
        <p className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">{display || digits}</p>
        <p className="mt-3 text-sm text-foreground/70">
          This number is loaded from the live Cricbet99 list. Tap below to open WhatsApp and chat about your deposit.
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

function PageCricbet99DepositNumber() {
  return (
    <LongFormPage
      content={content}
      extra={<DepositNumberCard />}
      relatedLinks={[
        { to: "/how-to-deposit", label: "How to deposit", desc: "UPI, bank, and wallet steps after you have the number." },
        { to: "/whatsapp-number", label: "Official WhatsApp number", desc: "The same verified Cricbet99 line for IDs and support." },
        { to: "/deposit-issues", label: "Deposit issues", desc: "UTR not reflecting or a failed UPI payment." },
        { to: "/cricbet99-id", label: "Cricbet99 ID", desc: "Get an ID before you send your first deposit." },
      ]}
    />
  );
}
