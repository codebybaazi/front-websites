import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { LongFormPage, buildFaqJsonLd, buildArticleJsonLd } from "@/components/long-form-page";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import content from "@/data/pages/cricbet99-withdrawl-number.json";

const PATH = "/cricbet99-withdrawl-number";
const CANONICAL = `https://cricbet99.co.in${PATH}`;
const TITLE = "Cricbet99 Withdrawl Number | Official WhatsApp Payout Line";
const DESCRIPTION =
  "Official Cricbet99 withdrawl number on WhatsApp. Message this verified line to request a UPI payout and track your Cricbet99 withdrawal.";

export const Route = createFileRoute("/cricbet99-withdrawl-number")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "Cricbet99, Cricbet99 Withdrawl number, Withdrawl number Cricbet99, Cricbet99 WhatsApp withdrawal" },
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
            { "@type": "ListItem", position: 2, name: "Cricbet99 Withdrawl Number", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: PageCricbet99WithdrawlNumber,
});

function WithdrawlNumberCard() {
  const { wa, display, digits } = useWhatsApp();
  const chatUrl = `${wa}?text=${encodeURIComponent("Hi, I need the Cricbet99 withdrawl number. I want to withdraw to UPI.")}`;

  return (
    <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="rounded-2xl border border-primary/30 bg-background/60 p-6 sm:p-8">
        <p className="text-sm font-bold text-primary">Official Cricbet99 withdrawl number</p>
        <p className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">{display || digits}</p>
        <p className="mt-3 text-sm text-foreground/70">
          This number is loaded from the live Cricbet99 list. Tap below to open WhatsApp and chat about your withdrawal.
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

function PageCricbet99WithdrawlNumber() {
  return (
    <LongFormPage
      content={content}
      extra={<WithdrawlNumberCard />}
      relatedLinks={[
        { to: "/how-to-withdraw", label: "How to withdraw", desc: "UPI payout steps after you message the number." },
        { to: "/cricbet99-deposit-number", label: "Cricbet99 deposit number", desc: "Same verified line for funding your ID." },
        { to: "/withdrawal-delay", label: "Withdrawal delay", desc: "When a payout is still pending after you chat." },
        { to: "/whatsapp-number", label: "Official WhatsApp number", desc: "The Cricbet99 line for IDs and support." },
      ]}
    />
  );
}
