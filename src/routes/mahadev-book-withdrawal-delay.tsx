import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Clock, Wallet, ShieldCheck, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const delayFaqs: FAQItem[] = [
  { q: "Why is my Mahadev Book withdrawal taking longer than usual?", a: "The usual causes are bank processing hours on IMPS/NEFT, a pending KYC check, or an unusually large amount that needs manual review before release. UPI withdrawals rarely take more than 30 minutes unless one of these applies." },
  { q: "My withdrawal has been pending for over an hour. What should I do?", a: "Message support on WhatsApp with your withdrawal amount and the time you requested it. The team checks the payout status and pushes it through, or tells you exactly what's holding it up." },
  { q: "Do withdrawal times change during IPL or big match nights?", a: "Payout volume is higher during major matches, which can add a few extra minutes to UPI withdrawals. The team still processes requests 24/7, including during live matches." },
  { q: "Why did my withdrawal require extra verification?", a: "Large withdrawals or payouts to a new UPI ID or bank account are checked more closely to protect your funds from unauthorized withdrawal attempts. It's a one-time check, not a recurring delay." },
  { q: "Can bank holidays delay my withdrawal?", a: "UPI withdrawals aren't affected by bank holidays. IMPS and NEFT transfers can be, since they depend on your bank's own processing window." },
  { q: "Is there a daily withdrawal limit?", a: "Limits scale with your KYC tier rather than being fixed for everyone. If you're planning a large cash-out, mention it on WhatsApp so the team can process it without a hold." },
  { q: "How do I know if my withdrawal actually went through?", a: "Support confirms the payout reference on WhatsApp once it's sent. If your bank or UPI app hasn't shown it after that, it's worth checking your bank statement or messaging your bank directly." },
];

export const Route = createFileRoute("/mahadev-book-withdrawal-delay")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Withdrawal Delay — What to Check on WhatsApp" },
      { name: "description", content: "Withdrawal taking longer than expected? See the common reasons for a Mahadev Book withdrawal delay and get your payout pushed through on the official WhatsApp support line." },
      { property: "og:title", content: "Mahadev Book Withdrawal Delay — What to Check on WhatsApp" },
      { property: "og:description", content: "Payout pending longer than usual? Get your Mahadev Book withdrawal delay resolved on the official WhatsApp support line." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-withdrawal-delay" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book withdrawal delay — what to check on WhatsApp" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-withdrawal-delay" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(delayFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Withdrawal Delay", item: "https://mahadevbookss.com/mahadev-book-withdrawal-delay" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-withdrawal-delay",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: WithdrawalDelayPage,
});

const causes = [
  { icon: Clock, t: "Bank processing hours", d: "IMPS and NEFT transfers depend on your bank's own processing window, which can add time outside normal banking hours." },
  { icon: ShieldCheck, t: "Manual review on large amounts", d: "Bigger withdrawals get an extra look before release, purely to confirm the payout is going to the right person." },
  { icon: Wallet, t: "New UPI ID or bank account", d: "The first payout to a new account is checked more closely than repeat withdrawals to an account you've used before." },
  { icon: AlertTriangle, t: "Incomplete KYC", d: "A payout can be held if KYC details are missing or don't fully match your account, until it's verified on WhatsApp." },
];

const fixSteps = [
  { n: "01", t: "Note the details", d: "Have your withdrawal amount, method and the time you requested it ready." },
  { n: "02", t: "Message WhatsApp support", d: "Tap the WhatsApp button below and share those details with the team." },
  { n: "03", t: "Team checks the payout", d: "Support looks up the withdrawal status and either releases it or explains what's pending." },
  { n: "04", t: "Payout is pushed", d: "Once cleared, the amount is sent and confirmed on the same chat." },
];

function WithdrawalDelayPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Wallet Support
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Withdrawal Delay</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Withdrawal taking longer than the usual 5 to 30 minutes? Here's what typically causes a
          Mahadev Book withdrawal delay and how to get it moving through the official WhatsApp
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
              <MessageCircle className="h-4 w-4" /> Check My Withdrawal on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Withdrawal Delay"
        summary="A Mahadev Book withdrawal delay usually comes down to one of four things: bank processing hours on IMPS/NEFT, manual review triggered by a large amount, a first-time payout to a new UPI ID or bank account, or incomplete KYC. UPI withdrawals normally settle in 5 to 30 minutes; anything past that is worth flagging on the official WhatsApp support line."
        points={[
          "UPI withdrawals normally settle in 5–30 minutes",
          "Bank transfers depend on your bank's processing hours",
          "Large amounts and new accounts get extra verification",
          "Incomplete KYC can hold a payout until resolved",
          "Match-night volume can add a few extra minutes",
          "Support confirms a payout reference once it's sent",
        ]}
        keywords={["mahadev book withdrawal delay", "mahadev book withdrawal pending", "mahadev book payout delay", "mahadev book withdrawal problem"]}
      />

      {/* Common causes */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Common causes</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four things account for nearly every withdrawal delay we see.</p>
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
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What to do about it</h2>
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
            <h2 className="text-xl font-bold text-foreground">Only track your withdrawal through the official WhatsApp line</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Support can only check payout status for requests made through the official Mahadev
            Book WhatsApp line. If someone else offers to "speed up" a withdrawal for a fee, that's
            not how Mahadev Book operates, and it's worth reporting on the chat below.
          </p>
        </div>
      </section>

      <FAQSection title="Mahadev Book Withdrawal Delay — FAQs" items={delayFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Payout running late?</h2>
        <p className="mt-3 text-muted-foreground">Message support and most delayed withdrawals are cleared within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Chat Now</span>
          </a>
          <Link to="/mahadev-book-withdrawal-number" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            About the withdrawal line
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-withdrawal-delay"
        title="Keep exploring"
        subtitle="Deposits, KYC, login help and everything else on the support desk."
      />
    </>
  );
}
