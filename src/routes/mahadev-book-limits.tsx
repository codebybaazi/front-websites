import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, TrendingUp, Wallet, Clock } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const limitsFaqs: FAQItem[] = [
  { q: "What are Mahadev Book's deposit and withdrawal limits?", a: "There's no single fixed number for everyone. Limits scale with your KYC tier and account history — a new account starts smaller, and verified, active accounts see higher caps over time." },
  { q: "Why do new accounts have lower limits?", a: "It's a standard fraud-prevention step. A fresh account without a payment or withdrawal history is capped lower until it's built up some track record." },
  { q: "How do I increase my withdrawal limit?", a: "Complete full KYC and keep a consistent deposit and withdrawal pattern. Message support on WhatsApp if you're planning a larger cash-out — they can review and raise the limit case by case." },
  { q: "Is there a daily limit on deposits?", a: "Deposits aren't capped as tightly as withdrawals, but very large one-off deposits may trigger a quick manual confirmation before they're credited." },
  { q: "Do limits reset every day?", a: "Withdrawal caps are generally tracked on a rolling daily basis. If you hit a limit, the remaining amount can usually be withdrawn the next day, or sooner with a quick check from support." },
  { q: "Can I request a higher limit for a specific big win?", a: "Yes. Message support ahead of time with the amount you're expecting to withdraw so the team can prepare the payout instead of it triggering an unexpected hold." },
  { q: "Do limits apply to Set Limits for responsible gambling too?", a: "Those are separate. Account limits are about fraud prevention and payout tiers; responsible-gambling limits are ones you set yourself on deposits or losses. Ask support to set the latter if you want them." },
];

export const Route = createFileRoute("/mahadev-book-limits")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Limits — Deposit & Withdrawal Caps Explained" },
      { name: "description", content: "How Mahadev Book deposit and withdrawal limits work, why new accounts start lower, and how to raise your withdrawal cap through the official WhatsApp support line." },
      { property: "og:title", content: "Mahadev Book Limits — Deposit & Withdrawal Caps Explained" },
        { name: "twitter:title", content: "Mahadev Book Limits — Deposit & Withdrawal Caps Explained" },
      { property: "og:description", content: "Mahadev Book deposit and withdrawal limits explained — how they scale with KYC and account history." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-limits" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book deposit and withdrawal limits explained" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-limits" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(limitsFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Limits", item: "https://mahadevbookss.com/mahadev-book-limits" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-limits",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: LimitsPage,
});

const points = [
  { icon: ShieldCheck, t: "Tied to KYC tier", d: "Fully verified accounts see higher withdrawal caps than accounts with basic KYC only." },
  { icon: TrendingUp, t: "Grows with history", d: "A consistent pattern of deposits and clean withdrawals naturally raises what you can cash out." },
  { icon: Clock, t: "Rolling daily caps", d: "Withdrawal limits are tracked per day rather than a lifetime ceiling, so tomorrow resets the count." },
  { icon: Wallet, t: "Case-by-case increases", d: "Planning a bigger withdrawal? A heads-up on WhatsApp lets the team prepare it instead of holding it." },
];

function LimitsPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Wallet
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Deposit & Withdrawal Limits</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          There's no single number posted anywhere, because limits on Mahadev Book scale with your
          KYC tier and account history rather than being fixed for everyone. Here's how that
          actually works, and how to raise yours.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Ask About My Limit
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Limits"
        summary="Mahadev Book deposit and withdrawal limits aren't a single fixed number. They scale with KYC tier and account history: new accounts start with lower withdrawal caps, and a consistent pattern of deposits and clean payouts raises the limit over time. Withdrawal caps are tracked on a rolling daily basis, and players planning a larger cash-out can message the official WhatsApp support line ahead of time to have it prepared rather than held for review."
        points={[
          "Limits scale with KYC tier, not a fixed number for everyone",
          "New accounts start with lower withdrawal caps",
          "Consistent activity raises limits over time",
          "Withdrawal caps track on a rolling daily basis",
          "Large withdrawals can be arranged in advance on WhatsApp",
          "Deposit limits are looser than withdrawal limits",
        ]}
        keywords={["mahadev book limits", "mahadev book withdrawal limit", "mahadev book deposit limit", "mahadev book maximum withdrawal"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How limits work</h2>
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

      <FAQSection title="Mahadev Book Limits — FAQs" items={limitsFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Planning a bigger withdrawal?</h2>
        <p className="mt-3 text-muted-foreground">Give the team a heads-up on WhatsApp so it's ready when you request it.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Chat Now</span>
          </a>
          <Link to="/mahadev-book-kyc" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Complete your KYC
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-limits"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, bonuses and everything else on the support desk."
      />
    </>
  );
}
