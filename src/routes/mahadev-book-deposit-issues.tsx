import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Wallet, Clock, ShieldCheck, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const depositIssueFaqs: FAQItem[] = [
  { q: "I paid but my Mahadev Book wallet wasn't credited. What now?", a: "Message support on WhatsApp with your payment screenshot and the time you paid. Most of these are a confirmation delay on our end, not a lost payment, and get sorted once the transaction is matched." },
  { q: "Why is my UPI deposit stuck as pending?", a: "UPI deposits usually settle within minutes. A pending status past that is often a bank-side delay or a payment app that hasn't pushed the confirmation through yet. Send the screenshot on WhatsApp and the team checks it manually." },
  { q: "I sent money to the wrong number. Can it be recovered?", a: "Mahadev Book can only confirm and credit deposits sent through the official WhatsApp deposit line. A payment to any other number, including an old saved contact, can't be traced or refunded by us." },
  { q: "My deposit shows as failed but the money left my account. What do I do?", a: "This usually means the payment didn't reach the correct account, often due to a wrong UPI ID or a bank-side reversal. Share the transaction reference on WhatsApp so the team can trace it." },
  { q: "Is there a minimum amount for deposits to go through smoothly?", a: "UPI deposits start at ₹100 and IMPS/NEFT transfers at ₹500. Amounts below these thresholds are sometimes rejected by the payment gateway itself, which can look like a stuck deposit." },
  { q: "How long should I wait before contacting support about a deposit?", a: "If a UPI deposit hasn't reflected after 15 to 20 minutes, or a bank transfer after an hour, it's worth messaging support with your screenshot rather than waiting longer." },
  { q: "Can I deposit using someone else's UPI or bank account?", a: "No. Deposits should come from your own verified payment method. Third-party payments can trigger a KYC mismatch and delay your credit while the team confirms the source." },
];

export const Route = createFileRoute("/mahadev-book-deposit-issues")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Deposit Issues — Fix a Stuck Deposit on WhatsApp" },
      { name: "description", content: "Paid but not credited? Deposit stuck as pending? See the common causes of Mahadev Book deposit issues and get them resolved on the official WhatsApp support line." },
      { property: "og:title", content: "Mahadev Book Deposit Issues — Fix a Stuck Deposit on WhatsApp" },
        { name: "twitter:title", content: "Mahadev Book Deposit Issues — Fix a Stuck Deposit on WhatsApp" },
      { property: "og:description", content: "UPI deposit not showing up, or payment stuck as pending? Get Mahadev Book deposit issues resolved on the official WhatsApp support line." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-deposit-issues" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book deposit issues — fix a stuck deposit on WhatsApp" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-deposit-issues" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(depositIssueFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Deposit Issues", item: "https://mahadevbookss.com/mahadev-book-deposit-issues" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-deposit-issues",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: DepositIssuesPage,
});

const causes = [
  { icon: Clock, t: "Confirmation delay", d: "The payment went through, but the automated match against your account hasn't caught up yet. This is the most common cause." },
  { icon: Wallet, t: "Wrong UPI ID or account", d: "A digit off in the UPI ID or account number sends the payment somewhere it can't be matched to your wallet." },
  { icon: ShieldCheck, t: "Third-party payment", d: "Deposits from an account that isn't yours can trigger a manual KYC check before the credit is released." },
  { icon: AlertTriangle, t: "Bank-side hiccup", d: "Some banks and UPI apps report a payment as pending or failed even after it's actually gone through." },
];

const fixSteps = [
  { n: "01", t: "Grab your screenshot", d: "Take a screenshot of the payment confirmation, including the amount, time and transaction reference." },
  { n: "02", t: "Message WhatsApp support", d: "Tap the WhatsApp button below and send the screenshot along with your registered mobile number." },
  { n: "03", t: "Team matches the payment", d: "Support checks the transaction against incoming payments and confirms whether it's a delay or a mismatch." },
  { n: "04", t: "Wallet gets credited", d: "Once matched, the amount is added to your Mahadev Book wallet, usually within minutes." },
];

function DepositIssuesPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Wallet Support
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Deposit Issues</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Paid but your Mahadev Book wallet hasn't updated, or a deposit is stuck on pending?
          Here's what usually causes it and how to get it sorted through the official WhatsApp
          support line.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Fix My Deposit on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Deposit Issues"
        summary="Most Mahadev Book deposit issues come down to one of four things: a confirmation delay between the payment and the wallet update, a wrong UPI ID or account number, a deposit made from a third-party account, or a bank-side reporting hiccup. Sending a payment screenshot and registered mobile number on the official WhatsApp support line usually resolves the issue within minutes."
        points={[
          "Most stuck deposits are confirmation delays, not lost money",
          "A payment screenshot speeds up manual matching",
          "Deposits should come from your own verified payment method",
          "UPI deposits start at ₹100, bank transfers at ₹500",
          "Wait 15–20 minutes on UPI before contacting support",
          "Money sent to the wrong number can't be traced or refunded",
        ]}
        keywords={["mahadev book deposit issues", "mahadev book deposit not credited", "mahadev book deposit pending", "mahadev book payment problem"]}
      />

      {/* Common causes */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Common causes</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four things account for nearly every deposit issue we see.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {causes.map((c) => (
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

      {/* Fix steps */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to fix it</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {fixSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety note */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Only pay through the official deposit line</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Deposits sent anywhere other than the number behind the official WhatsApp deposit chat
            can't be confirmed or credited. If a message asking for a deposit didn't come from that
            chat, treat it as suspicious and check with support before paying.
          </p>
        </div>
      </section>

      <FAQSection title="Mahadev Book Deposit Issues — FAQs" items={depositIssueFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Deposit not showing up?</h2>
        <p className="mt-3 text-muted-foreground">Send your screenshot on WhatsApp and most deposits are matched within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Chat Now</span>
          </a>
          <Link to="/mahadev-book-deposit-number" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            About the deposit line
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-deposit-issues"
        title="Keep exploring"
        subtitle="Withdrawals, KYC, login help and everything else on the support desk."
      />
    </>
  );
}
