import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Wallet, Smartphone, Landmark, Bitcoin, ShieldCheck } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { howToJsonLd } from "@/lib/seo";

const depositFaqs: FAQItem[] = [
  { q: "What deposit methods does Mahadev Book accept?", a: "UPI (any app), PhonePe, Google Pay, Paytm, IMPS and NEFT bank transfer, plus USDT and crypto on request. UPI is the fastest and most commonly used." },
  { q: "What is the minimum deposit on Mahadev Book?", a: "₹100 over UPI or e-wallet, and ₹500 over IMPS or NEFT bank transfer. There's no fixed maximum — larger deposits just go through a quick manual confirmation." },
  { q: "How do I make a deposit?", a: "Message the official WhatsApp line with your amount and preferred method. The team shares the correct payment detail, and your wallet is credited once the payment is confirmed." },
  { q: "How long does a deposit take to reflect?", a: "UPI and e-wallet deposits usually reflect within a few minutes. Bank transfers can take a little longer depending on your bank." },
  { q: "Can I deposit using a friend's UPI or bank account?", a: "Deposits should come from your own account. A third-party payment can trigger an extra verification step before it's credited." },
  { q: "Are there any deposit fees?", a: "No deposit fees on standard UPI, wallet or bank transfers. Crypto deposits may involve network fees outside Mahadev Book's control." },
  { q: "Is it safe to deposit on Mahadev Book?", a: "Deposits are confirmed through the official WhatsApp line only, with KYC-verified accounts and no shared IDs. Payments sent to any other number can't be traced or credited." },
];

export const Route = createFileRoute("/mahadev-book-deposit-methods")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Deposit Methods — UPI, Bank & Wallet Guide" },
      { name: "description", content: "How to deposit on Mahadev Book — UPI, PhonePe, Google Pay, Paytm, IMPS, NEFT and crypto. Minimum amounts, processing time and how to get started on WhatsApp." },
      { property: "og:title", content: "Mahadev Book Deposit Methods — UPI, Bank & Wallet Guide" },
        { name: "twitter:title", content: "Mahadev Book Deposit Methods — UPI, Bank & Wallet Guide" },
      { property: "og:description", content: "Every way to deposit on Mahadev Book — UPI, e-wallets, bank transfer and crypto — with minimums and processing time." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-deposit-methods" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book deposit methods guide" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-deposit-methods" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(depositFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          howToJsonLd("How to deposit on Mahadev Book", "Fund a Mahadev Book ID over UPI, e-wallet, bank transfer or crypto via WhatsApp.", [
            { name: "Message the official WhatsApp line", text: "Send the amount you want to deposit and the method you prefer (UPI, PhonePe, Google Pay, Paytm, IMPS/NEFT or crypto)." },
            { name: "Use the payment detail support shares", text: "The desk sends the correct UPI ID or account for that request. Payments sent to any other number cannot be traced or credited." },
            { name: "Pay from your own account", text: "The deposit should come from the UPI or bank account that matches your KYC. Third-party payments can trigger an extra check." },
            { name: "Wait for the wallet credit", text: "UPI and e-wallet deposits usually reflect within a few minutes. Bank transfers can take longer depending on the bank." },
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
            { "@type": "ListItem", position: 3, name: "Deposit Methods", item: "https://mahadevbookss.com/mahadev-book-deposit-methods" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-deposit-methods",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: DepositMethodsPage,
});

const methods: [string, string, string][] = [
  ["UPI (any app)", "₹100", "Instant, 24/7"],
  ["PhonePe / Google Pay", "₹100", "Instant"],
  ["Paytm Wallet", "₹100", "Instant"],
  ["IMPS / NEFT bank transfer", "₹500", "5–30 minutes"],
  ["USDT / Crypto", "On request", "Confirmed on WhatsApp"],
];

const icons = [
  { icon: Smartphone, t: "UPI & e-wallets", d: "PhonePe, Google Pay, Paytm and any UPI app — the fastest way in, usually done in seconds." },
  { icon: Landmark, t: "Bank transfer", d: "IMPS or NEFT straight from your bank account, useful for larger or planned deposits." },
  { icon: Bitcoin, t: "Crypto", d: "USDT and other crypto accepted on request for players who prefer it." },
  { icon: ShieldCheck, t: "KYC-matched", d: "Deposits are matched to your verified account, which is also what keeps withdrawals safe later." },
];

function DepositMethodsPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Wallet
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Deposit Methods</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          UPI, e-wallets, bank transfer or crypto — here's every way to fund a Mahadev Book ID,
          along with minimum amounts and how long each one usually takes.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Deposit on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Deposit Methods"
        summary="Mahadev Book accepts UPI, PhonePe, Google Pay, Paytm, IMPS/NEFT bank transfer and crypto for deposits. UPI and e-wallet deposits start at ₹100 and usually reflect within minutes; bank transfers start at ₹500 and can take slightly longer. Every deposit is arranged through the official WhatsApp support line and matched to the account holder's own KYC details."
        points={[
          "UPI, PhonePe, Google Pay, Paytm, IMPS/NEFT and crypto accepted",
          "₹100 minimum over UPI or e-wallet",
          "₹500 minimum over bank transfer",
          "Most UPI deposits reflect within minutes",
          "Deposits arranged on the official WhatsApp line",
          "Payments should come from your own verified account",
        ]}
        keywords={["mahadev book deposit", "mahadev book deposit methods", "mahadev book upi deposit", "mahadev book minimum deposit"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Ways to deposit</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {icons.map((c) => (
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
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Minimums and speed</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold">Minimum deposit</th>
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

      <FAQSection title="Mahadev Book Deposit Methods — FAQs" items={depositFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to fund your ID?</h2>
        <p className="mt-3 text-muted-foreground">Message support and your wallet is usually credited within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><Wallet className="h-4 w-4" /> Deposit Now</span>
          </a>
          <Link to="/mahadev-book-deposit-number" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            About the deposit line
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-deposit-methods"
        title="Keep exploring"
        subtitle="Withdrawals, limits, bonuses and everything else on the support desk."
      />
    </>
  );
}
