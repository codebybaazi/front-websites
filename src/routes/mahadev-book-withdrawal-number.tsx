import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Wallet, Clock, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const withdrawalFaqs: FAQItem[] = [
  { q: "What is the Mahadev Book withdrawal number?", a: "It's the official WhatsApp line Mahadev Book uses to process payout requests and confirm your UPI, IMPS or e-wallet details. We only publish it as a click-to-chat link, not a printed digit, since the line can rotate for security." },
  { q: "How do I withdraw using the Mahadev Book withdrawal number?", a: "Tap the WhatsApp button on this page and send your withdrawal amount along with your UPI ID or bank account. Our team verifies the request against your KYC and pushes the payout, usually within minutes." },
  { q: "Is the Mahadev Book withdrawal number the same as the deposit number?", a: "Both run through the same official WhatsApp desk, so one chat handles deposits, withdrawals, KYC and general support. It's not a separate hotline, just the same verified line." },
  { q: "How long does a Mahadev Book withdrawal take?", a: "UPI withdrawals typically land in 5 to 30 minutes, 24 hours a day. IMPS and NEFT bank transfers can take a little longer depending on your bank's processing hours." },
  { q: "Is there a minimum or maximum withdrawal amount?", a: "There's no fixed minimum on most accounts, and daily withdrawal limits scale with your KYC tier. Ask on WhatsApp if you're planning a large cash-out so the team can process it without delay." },
  { q: "What happens if I send my withdrawal request to the wrong number?", a: "Mahadev Book can only verify and process payouts requested through the official WhatsApp chat shown on this page. A request sent to any other number, including one from an old screenshot, won't be recognized or actioned." },
  { q: "Why does the Mahadev Book withdrawal number change sometimes?", a: "The line is rotated periodically as a security measure, the same way deposit numbers are. That's why this page never prints a fixed digit and instead links straight to the current, active chat." },
  { q: "Do I need to complete KYC before withdrawing?", a: "Yes. Every payout is checked against your verified KYC details to prevent fraud and account takeover. If you haven't completed KYC yet, the WhatsApp team will guide you through it before releasing funds." },
];

export const Route = createFileRoute("/mahadev-book-withdrawal-number")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Withdrawal Number — Official WhatsApp Payout Line" },
      { name: "description", content: "Reach the official Mahadev Book withdrawal number on WhatsApp to request payouts over UPI, IMPS or e-wallet. One tap chat link, no numbers to copy, with a safe step-by-step withdrawal guide." },
      { property: "og:title", content: "Mahadev Book Withdrawal Number — Official WhatsApp Payout Line" },
      { property: "og:description", content: "Chat with the official Mahadev Book withdrawal line on WhatsApp. Request a UPI, IMPS or e-wallet payout and get paid in minutes." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-withdrawal-number" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Withdrawal Number — official WhatsApp payout line" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
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
    ],
  }),
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
          The Mahadev Book withdrawal number is the official WhatsApp line our team uses to verify
          payout requests and send your winnings to UPI, IMPS or your e-wallet. We don't print it
          as a digit anywhere on this site, since the line can rotate for security. Use the button
          below to open a chat with the current, verified withdrawal line.
        </p>

        <div className="mt-8 max-w-md rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Official withdrawal line</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tap below to chat directly with the verified Mahadev Book withdrawal number on WhatsApp.
          </p>
          <div className="mt-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <span className="btn-glow-content flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Withdrawal Number"
        summary="The Mahadev Book withdrawal number is the official WhatsApp line used to request payouts from a Mahadev Book cricket ID. It processes UPI, IMPS/NEFT and e-wallet withdrawals, usually settling UPI requests in 5 to 30 minutes, 24 hours a day. Every payout is checked against KYC before release. It's only shared as a click-to-chat WhatsApp link on this page, never printed as a fixed digit, since withdrawal numbers are rotated periodically for account security."
        points={[
          "Click-to-chat WhatsApp link, not a printed digit",
          "UPI, IMPS/NEFT and e-wallet payouts supported",
          "UPI withdrawals usually settle in 5–30 minutes",
          "Every payout checked against verified KYC",
          "Same line also handles deposits and support",
          "Always start from the WhatsApp button on this page",
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
