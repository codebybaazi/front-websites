import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Wallet, Clock, AlertTriangle } from "lucide-react";
import { fetchWhatsAppNumber, formatWhatsAppDisplay } from "@/lib/whatsapp";
import { ogImageMeta } from "@/lib/seo";
import { OfficialNumberCard } from "@/components/OfficialNumberCard";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const withdrawalFaqs: FAQItem[] = [
  { q: "What is the Mahadev Book withdrawal number?", a: "It is the live WhatsApp and phone line used to request UPI, IMPS or e-wallet payouts. The current digits are printed on this page with a chat link and a call link." },
  { q: "How do I withdraw using the Mahadev Book withdrawal number?", a: "Open WhatsApp from the number on this page, send the amount and your UPI ID or bank account. The desk checks KYC and pushes the payout, usually within minutes on UPI." },
  { q: "Is the withdrawal number the same as the deposit number?", a: "Yes. One desk handles deposits, withdrawals, KYC and general support." },
  { q: "How long does a Mahadev Book withdrawal take?", a: "UPI usually lands in 5 to 30 minutes, any hour of the day. IMPS and NEFT follow the bank clock." },
  { q: "Is there a minimum or maximum withdrawal amount?", a: "Most accounts have no fixed UPI minimum. Daily caps follow your KYC tier. Ask on the same chat before a large cash-out." },
  { q: "What if I message the wrong number?", a: "Payouts are only processed from the number listed here. An old screenshot or a forwarded chat will not be actioned." },
  { q: "Why might the number change?", a: "The line can rotate. When it does, this page shows the current one." },
  { q: "Do I need KYC before withdrawing?", a: "Yes. The payout account name has to match KYC. If KYC is incomplete, the desk will finish it before releasing funds." },
];

export const Route = createFileRoute("/mahadev-book-withdrawal-number")({
  loader: async () => ({ waNumber: await fetchWhatsAppNumber() }),
  head: ({ loaderData }) => {
    const title = "Mahadev Book Withdrawal Number — Official WhatsApp Payout Line";
    const display = loaderData?.waNumber ? formatWhatsAppDisplay(loaderData.waNumber) : "";
    return {
    meta: [
      { title },
      { name: "description", content: `Official Mahadev Book withdrawal number${display ? ` ${display}` : ""} on WhatsApp for UPI, IMPS and e-wallet payouts. Chat or call the live line on this page.` },
      { property: "og:title", content: title },
        { name: "twitter:title", content: title },
      { property: "og:description", content: "Chat or call the official Mahadev Book withdrawal line. Request a UPI, IMPS or e-wallet payout." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-withdrawal-number" },
      ...ogImageMeta("Mahadev Book Withdrawal Number — official WhatsApp payout line"),
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-withdrawal-number" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(withdrawalFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Mahadev Book Withdrawal Number", item: "https://mahadevbookss.com/mahadev-book-withdrawal-number" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-withdrawal-number",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
      ...(loaderData?.waNumber
        ? [{
            type: "application/ld+json" as const,
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              contactType: "customer support",
              name: "Mahadev Book withdrawal desk",
              telephone: `+${loaderData.waNumber}`,
              url: `https://wa.me/${loaderData.waNumber}`,
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            }),
          }]
        : []),
    ],
  };
  },
  component: WithdrawalNumberPage,
});

const withdrawalSteps = [
  { n: "01", t: "Open WhatsApp", d: "Tap the WhatsApp button on this page to start a chat with the official Mahadev Book withdrawal line." },
  { n: "02", t: "Share your payout details", d: "Send the amount you want to withdraw and your UPI ID, bank account or e-wallet — whichever you prefer." },
  { n: "03", t: "KYC gets checked", d: "The team matches your request against your verified account so the payout goes to you, not anyone else." },
  { n: "04", t: "Money hits your account", d: "Once confirmed, the payout is pushed. UPI usually lands in 5 to 30 minutes." },
];

const withdrawalMethods: [string, string, string][] = [
  ["UPI (any app)", "No fixed minimum", "5–30 minutes, 24/7"],
  ["IMPS / NEFT bank transfer", "₹500", "30 minutes – a few hours"],
  ["Paytm Wallet", "No fixed minimum", "Instant to 30 minutes"],
  ["USDT / Crypto", "On request", "Confirmed on WhatsApp"],
];

function WithdrawalNumberPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Withdrawal Support
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Withdrawal Number</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          The Mahadev Book withdrawal number is the live WhatsApp and phone line used to verify
          payouts to UPI, IMPS or e-wallet. The digits below come from our official number list.
        </p>
        <OfficialNumberCard
          heading="Official withdrawal number"
          blurb="Share your amount and payout account on this chat. KYC has to match the account name before funds leave."
        />
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Withdrawal Number"
        summary="The Mahadev Book withdrawal number is printed on this page as a live WhatsApp and phone line. Use it to request UPI, IMPS/NEFT or e-wallet payouts. UPI usually settles in 5 to 30 minutes after KYC matches the payout account."
        points={[
          "Live number plus WhatsApp and call links",
          "UPI, IMPS/NEFT and e-wallet payouts supported",
          "UPI typically 5–30 minutes",
          "KYC name must match the payout account",
          "Same desk as deposits and customer care",
          "Ignore numbers from forwarded chats",
        ]}
        keywords={["mahadev book withdrawal number", "withdrawal number mahadev book", "mahadev book", "mahadev book payout number"]}
      />

      {/* How to withdraw */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to withdraw using this number</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {withdrawalSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Withdrawal methods table */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Withdrawal methods on this number</h2>
        <p className="mt-2 text-muted-foreground">Every payout below is confirmed through the same Mahadev Book withdrawal line.</p>
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
              {withdrawalMethods.map(([m, min, speed]) => (
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

      {/* Safety */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Only request withdrawals through the WhatsApp button on this page</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Mahadev Book rotates its withdrawal line from time to time to keep accounts and payout
            rails secure. That's why we never print it as a number anywhere on this site.
            Screenshots of old numbers circulate on social media and forwarded messages, and some
            of them are no longer active or, worse, belong to someone else entirely. Always start
            your withdrawal request from the WhatsApp button above rather than a number saved from
            an old chat. We can only verify and pay out requests confirmed through that official chat.
          </p>
          <div className="mt-5 flex flex-wrap gap-6 text-sm text-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> KYC-checked before every payout</div>
            <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" /> Paid to your own verified account</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Requests handled 24/7</div>
          </div>
        </div>
      </section>

      <FAQSection title="Mahadev Book Withdrawal Number — FAQs" items={withdrawalFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to cash out?</h2>
        <p className="mt-3 text-muted-foreground">Chat with the withdrawal line above and your payout is usually processed within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Withdraw Now</span>
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Other ways to reach us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-withdrawal-number"
        title="Keep exploring"
        subtitle="Deposits, KYC, bonuses and everything else on the support desk."
      />
    </>
  );
}
