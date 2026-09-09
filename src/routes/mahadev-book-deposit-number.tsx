import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Wallet, Clock, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const depositFaqs: FAQItem[] = [
  { q: "What is the Mahadev Book deposit number?", a: "It's the official WhatsApp line Mahadev Book uses to confirm deposits and issue verified cricket IDs. We only publish it as a click-to-chat link, not a printed digit, since the line can rotate for security." },
  { q: "How do I deposit using the Mahadev Book deposit number?", a: "Tap the WhatsApp button on this page and tell us your preferred payment method — UPI, IMPS or e-wallet. Our team sends a payment link or account detail, confirms the credit, and updates your Mahadev Book wallet within minutes." },
  { q: "Is the Mahadev Book deposit number the same every day?", a: "The number behind the WhatsApp button can rotate for security reasons, which is exactly why this page never prints it as text. Always deposit through the WhatsApp button here, not a number saved from an old screenshot or forwarded message." },
  { q: "What happens if I send money to the wrong number?", a: "Mahadev Book can only confirm and credit deposits made after chatting through the official WhatsApp button. If a payment goes to any other number, including one from an old post or a stranger's message, we have no way to trace or refund it." },
  { q: "Which payment methods work with this deposit number?", a: "UPI, PhonePe, Google Pay, Paytm, IMPS and NEFT bank transfer all route through the same WhatsApp deposit line. Minimum deposit starts at ₹100 over UPI." },
  { q: "How long does a deposit take to reflect in my wallet?", a: "Most UPI deposits reflect within a few minutes of the team confirming your payment screenshot on WhatsApp. IMPS and NEFT transfers can take slightly longer depending on your bank." },
  { q: "Can I use the deposit number for withdrawals too?", a: "Yes. The same WhatsApp line handles withdrawal requests. UPI withdrawals typically settle in 5 to 30 minutes, 24 hours a day." },
  { q: "Is it safe to message a Mahadev Book number saved in my contacts?", a: "The deposit line does get rotated periodically for account security. If a saved contact stops responding, always come back to this page and use the current WhatsApp button rather than guessing at an old number." },
];

export const Route = createFileRoute("/mahadev-book-deposit-number")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Deposit Number — Official WhatsApp Deposit Line" },
      { name: "description", content: "Reach the official Mahadev Book deposit number on WhatsApp for UPI, IMPS and e-wallet deposits. One tap chat link, no numbers to copy, with a safe step-by-step deposit guide." },
      { property: "og:title", content: "Mahadev Book Deposit Number — Official WhatsApp Deposit Line" },
      { property: "og:description", content: "Chat with the official Mahadev Book deposit line on WhatsApp. Deposit via UPI, IMPS or e-wallet and get your cricket ID funded in minutes." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-deposit-number" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Deposit Number — official WhatsApp deposit line" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-deposit-number" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(depositFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Mahadev Book Deposit Number", item: "https://mahadevbookss.com/mahadev-book-deposit-number" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-deposit-number",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: DepositNumberPage,
});

const depositSteps = [
  { n: "01", t: "Open WhatsApp", d: "Tap the WhatsApp button on this page to start a chat with the official Mahadev Book deposit line." },
  { n: "02", t: "Tell us your amount", d: "Say how much you want to deposit and which method you're using — UPI, PhonePe, Google Pay, Paytm or bank transfer." },
  { n: "03", t: "Send the payment", d: "Our team shares the correct payment detail for that deposit. Pay from your own account and send a screenshot on WhatsApp." },
  { n: "04", t: "Wallet gets credited", d: "Once confirmed, your Mahadev Book wallet is credited, usually within minutes for UPI." },
];

const paymentMethods: [string, string, string][] = [
  ["UPI (any app)", "₹100", "Instant, 24/7"],
  ["PhonePe / Google Pay", "₹100", "Instant"],
  ["Paytm Wallet", "₹100", "Instant"],
  ["IMPS / NEFT bank transfer", "₹500", "5–30 minutes"],
  ["USDT / Crypto", "On request", "Confirmed on WhatsApp"],
];

function DepositNumberPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Deposit Support
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Deposit Number</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          The Mahadev Book deposit number is the official WhatsApp line our team uses to confirm
          UPI, IMPS and e-wallet deposits and get your cricket ID funded. We don't print it as a
          digit anywhere on this site, since the line can rotate for security. Use the button
          below to open a chat with the current, verified deposit line.
        </p>

        <div className="mt-8 max-w-md rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Official deposit line</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tap below to chat directly with the verified Mahadev Book deposit number on WhatsApp.
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
        title="AI Overview — Mahadev Book Deposit Number"
        summary="The Mahadev Book deposit number is the official WhatsApp line used to fund a Mahadev Book cricket ID. It accepts UPI, PhonePe, Google Pay, Paytm and IMPS/NEFT bank transfer, starting at a ₹100 minimum deposit. It's only shared as a click-to-chat WhatsApp link on this page, never printed as a fixed digit, since deposit numbers are rotated periodically for account security."
        points={[
          "Click-to-chat WhatsApp link, not a printed digit",
          "Accepts UPI, PhonePe, Google Pay, Paytm, IMPS/NEFT",
          "₹100 minimum deposit over UPI",
          "Deposits usually reflect within minutes",
          "Same line also handles withdrawal requests",
          "Always start from the WhatsApp button on this page",
        ]}
        keywords={["mahadev book deposit number", "deposit number mahadev book", "mahadev book", "mahadev book whatsapp number"]}
      />

      {/* How to deposit */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to deposit using this number</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {depositSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment methods table */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Deposit methods on this number</h2>
        <p className="mt-2 text-muted-foreground">Every method below is confirmed through the same Mahadev Book deposit number.</p>
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
              {paymentMethods.map(([m, min, speed]) => (
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
            <h2 className="text-xl font-bold text-foreground">Only deposit through the WhatsApp button on this page</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Mahadev Book rotates its deposit line from time to time to keep accounts and payment
            rails secure. That's why we never print it as a number anywhere on this site.
            Screenshots of old numbers circulate on social media and forwarded messages, and some
            of them are no longer active or, worse, belong to someone else entirely. Always start
            your deposit from the WhatsApp button above rather than a number saved from an old
            chat. We can only trace and credit deposits confirmed through that official chat.
          </p>
          <div className="mt-5 flex flex-wrap gap-6 text-sm text-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> KYC-verified accounts only</div>
            <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" /> No shared or resold IDs</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Confirmations 24/7</div>
          </div>
        </div>
      </section>

      <FAQSection title="Mahadev Book Deposit Number — FAQs" items={depositFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to fund your Mahadev ID?</h2>
        <p className="mt-3 text-muted-foreground">Chat with the deposit line above and your wallet is usually credited within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Deposit Now</span>
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Other ways to reach us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-deposit-number"
        title="Keep exploring"
        subtitle="Withdrawals, KYC, bonuses and everything else on the support desk."
      />
    </>
  );
}
