import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Crown, Zap, ShieldCheck, Wallet, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const priorityFaqs: FAQItem[] = [
  { q: "What is the Mahadev Book priority desk?", a: "It's a dedicated support track for high-volume players, where requests are picked up ahead of the general queue and handled by a senior agent who already knows your account history." },
  { q: "Who qualifies for priority support?", a: "Players with a consistent deposit and betting history, or anyone processing larger withdrawals regularly. There's no fixed threshold — mention your activity on WhatsApp and the team places you on the right track." },
  { q: "How is the priority desk different from regular support?", a: "Same WhatsApp line, but priority requests jump the queue and go straight to a senior agent instead of waiting behind general questions. Withdrawals from priority accounts also get reviewed faster." },
  { q: "Does the priority desk mean higher withdrawal limits?", a: "Often, yes. A verified history of clean deposits and withdrawals makes it easier for the team to clear larger payouts without an extended manual review." },
  { q: "Do I need to pay for priority support?", a: "No. There's no fee for priority handling. It's based on your account activity, not a paid add-on." },
  { q: "Can I ask to be moved to the priority desk?", a: "Yes. Message support on WhatsApp, mention your betting and withdrawal history, and the team reviews your account and upgrades your handling if it qualifies." },
  { q: "Is the priority desk available 24/7?", a: "Yes, the same as general support. The difference is queue position and agent seniority, not operating hours." },
];

export const Route = createFileRoute("/mahadev-book-priority-support")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Priority Support — Faster Help for High-Volume Players" },
      { name: "description", content: "How the Mahadev Book priority desk works for high-volume players — faster response, senior agents, and quicker withdrawal reviews on the official WhatsApp support line." },
      { property: "og:title", content: "Mahadev Book Priority Support — Faster Help for High-Volume Players" },
      { property: "og:description", content: "Get moved to Mahadev Book's priority support desk for faster responses and quicker withdrawal reviews on WhatsApp." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-priority-support" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book priority support desk for high-volume players" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-priority-support" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(priorityFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Priority Support", item: "https://mahadevbookss.com/mahadev-book-priority-support" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-priority-support",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: PrioritySupportPage,
});

const perks = [
  { icon: Zap, t: "Queue skipped", d: "Priority requests go straight to a senior agent instead of waiting behind the general queue." },
  { icon: Wallet, t: "Faster withdrawal review", d: "A clean deposit and withdrawal history makes larger payouts easier to clear quickly." },
  { icon: ShieldCheck, t: "One agent, full context", d: "Senior agents on this desk already have your account history, so you're not re-explaining things from scratch." },
  { icon: Crown, t: "No extra cost", d: "Priority handling is based on your account activity, not a subscription or paid tier." },
];

const howSteps = [
  { n: "01", t: "Message WhatsApp support", d: "Tap the WhatsApp button below and mention that you'd like to be reviewed for priority support." },
  { n: "02", t: "Share your account history", d: "A quick look at your deposit, betting and withdrawal pattern is enough for the team to assess it." },
  { n: "03", t: "Get moved to the desk", d: "Qualifying accounts are flagged for priority handling on future requests." },
  { n: "04", t: "Enjoy faster turnarounds", d: "From here, your messages and withdrawals get picked up ahead of the general queue." },
];

function PrioritySupportPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Priority Desk
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Priority Support</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          For players who bet often or move larger amounts, the Mahadev Book priority desk skips
          the general queue and puts your request in front of a senior agent who already knows
          your account. Here's how it works and how to get on it.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Ask About Priority Support
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Priority Support"
        summary="The Mahadev Book priority desk is a faster support track for high-volume players, run through the same official WhatsApp line as general support. Priority requests skip the general queue and go to a senior agent, and withdrawal reviews move faster for accounts with a consistent deposit and payout history. There's no fee involved — eligibility is based on account activity, and a player can ask to be reviewed for it on WhatsApp."
        points={[
          "Same WhatsApp line as general support, faster queue position",
          "Senior agents handle priority requests",
          "Withdrawal reviews move faster for consistent accounts",
          "No fee — based on account activity, not a paid tier",
          "Available 24/7, same as general support",
          "Ask to be reviewed for it directly on WhatsApp",
        ]}
        keywords={["mahadev book priority support", "mahadev book vip support", "mahadev book priority desk", "mahadev book"]}
      />

      {/* Perks */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What the priority desk changes</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Same support line, faster handling.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {perks.map((c) => (
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

      {/* How to get on it */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to get on the priority desk</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {howSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Priority support runs through the same official WhatsApp line</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            There's no separate "VIP" number to pay for or a third party offering faster service.
            Priority handling is arranged directly with our own team on the official WhatsApp
            chat, based on your genuine account history.
          </p>
        </div>
      </section>

      <FAQSection title="Mahadev Book Priority Support — FAQs" items={priorityFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Bet often? Ask about priority support.</h2>
        <p className="mt-3 text-muted-foreground">Message the team and find out if your account qualifies.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Chat Now</span>
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Other ways to reach us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-priority-support"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, KYC and everything else on the support desk."
      />
    </>
  );
}
