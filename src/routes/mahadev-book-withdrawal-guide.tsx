import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Wallet, Landmark, ShieldCheck, Clock } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { howToJsonLd } from "@/lib/seo";

const withdrawFaqs: FAQItem[] = [
  { q: "How do I withdraw money from Mahadev Book?", a: "Message the official WhatsApp line with your withdrawal amount and UPI ID or bank account. The team checks your KYC and pushes the payout, usually within minutes for UPI." },
  { q: "How long does a Mahadev Book withdrawal take?", a: "UPI withdrawals typically settle in 5 to 30 minutes, 24 hours a day. IMPS and NEFT bank transfers can take a bit longer depending on your bank." },
  { q: "Is there a minimum withdrawal amount?", a: "There's no fixed minimum on most accounts. Larger withdrawals may take slightly longer as they go through a quick manual review." },
  { q: "Do I need KYC to withdraw?", a: "Yes. Every withdrawal is checked against your verified KYC details before the payout is released, which protects your funds from going to the wrong account." },
  { q: "Can I withdraw to a different UPI ID or bank account than I deposited from?", a: "Withdrawals generally go to the account matching your KYC details. If you need to update your payout account, mention it on WhatsApp and the team will verify the change first." },
  { q: "Are there withdrawal fees?", a: "No fees on standard UPI or bank transfer withdrawals up to normal daily limits." },
  { q: "What if my withdrawal is taking longer than expected?", a: "Message support with your withdrawal amount and request time. Most delays are bank processing hours or a review on a larger amount, and the team can usually clear it quickly." },
];

export const Route = createFileRoute("/mahadev-book-withdrawal-guide")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Withdrawal Guide — How Payouts Work" },
      { name: "description", content: "How to withdraw from Mahadev Book — UPI and bank transfer payouts, processing times, KYC requirements and what to do if a withdrawal is delayed." },
      { property: "og:title", content: "Mahadev Book Withdrawal Guide — How Payouts Work" },
        { name: "twitter:title", content: "Mahadev Book Withdrawal Guide — How Payouts Work" },
      { property: "og:description", content: "Everything about withdrawing from Mahadev Book — payout methods, processing time and KYC requirements." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-withdrawal-guide" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book withdrawal guide" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-withdrawal-guide" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(withdrawFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          howToJsonLd("How to withdraw from Mahadev Book", "Request a UPI or bank payout on WhatsApp after KYC is complete.", [
            { name: "Message the official WhatsApp line", text: "Send the withdrawal amount and the UPI ID or bank account you want paid." },
            { name: "Pass the KYC check", text: "The desk matches the request to your verified identity before any money moves." },
            { name: "Wait for settlement", text: "UPI payouts usually land in 5 to 30 minutes, any hour of the day. IMPS and NEFT follow your bank's hours." },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Withdraw", item: "https://mahadevbookss.com/mahadev-book-withdrawal-guide" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-withdrawal-guide",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: WithdrawalGuidePage,
});

const methods: [string, string, string][] = [
  ["UPI (any app)", "No fixed minimum", "5–30 minutes, 24/7"],
  ["IMPS / NEFT bank transfer", "₹500", "30 minutes – a few hours"],
  ["Paytm Wallet", "No fixed minimum", "Instant to 30 minutes"],
  ["USDT / Crypto", "On request", "Confirmed on WhatsApp"],
];

const points = [
  { icon: Wallet, t: "Request on WhatsApp", d: "Send your amount and payout details directly to the official support line, no app menu to navigate." },
  { icon: ShieldCheck, t: "KYC-checked payouts", d: "Every withdrawal is matched against your verified identity before it's released." },
  { icon: Clock, t: "Minutes, not days", d: "UPI withdrawals are usually the fastest way to cash out, day or night." },
  { icon: Landmark, t: "Bank transfer option", d: "IMPS and NEFT work too, useful if UPI isn't your preferred method." },
];

function WithdrawalGuidePage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Wallet
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Withdrawal Guide</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          How withdrawals actually work on Mahadev Book — payout methods, typical processing time
          and the KYC check every request goes through before money moves.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Withdraw on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Withdrawal Guide"
        summary="Withdrawing from Mahadev Book means messaging the official WhatsApp line with an amount and payout account. UPI withdrawals settle in 5 to 30 minutes, 24 hours a day; IMPS and NEFT bank transfers can take longer depending on the bank. Every payout is checked against verified KYC details before release, and there's no fixed minimum on most accounts."
        points={[
          "Request payouts directly on the official WhatsApp line",
          "UPI withdrawals settle in 5–30 minutes, 24/7",
          "Bank transfers take a bit longer depending on the bank",
          "Every payout is checked against verified KYC",
          "No fixed minimum on most accounts",
          "No fees on standard withdrawals",
        ]}
        keywords={["mahadev book withdrawal", "mahadev book withdraw money", "mahadev book payout", "mahadev book withdrawal guide"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {points.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Payout methods and speed</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold">Minimum withdrawal</th>
                <th className="px-4 py-3 font-semibold">Speed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {methods.map(([m, min, speed]) => (
                <tr key={m} className="bg-background">
                  <td className="px-4 py-3 font-medium text-foreground">{m}</td>
                  <td className="px-4 py-3 text-muted-foreground">{min}</td>
                  <td className="px-4 py-3 text-muted-foreground">{speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FAQSection title="Mahadev Book Withdrawal Guide — FAQs" items={withdrawFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to cash out?</h2>
        <p className="mt-3 text-muted-foreground">Message support and most payouts are processed within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><Wallet className="h-4 w-4" /> Withdraw Now</span>
          </a>
          <Link to="/mahadev-book-withdrawal-number" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            About the withdrawal line
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-withdrawal-guide"
        title="Keep exploring"
        subtitle="Deposits, limits, bonuses and everything else on the support desk."
      />
    </>
  );
}
