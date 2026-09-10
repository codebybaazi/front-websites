import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Wallet, ShieldCheck, Headphones, Trophy, BadgeCheck } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const whyFaqs: FAQItem[] = [
  { q: "Why should I choose Mahadev Book over another cricket ID?", a: "Faster UPI withdrawals, verified-only accounts with no shared logins, and 24/7 human support are the three things players mention most when asked why they stayed." },
  { q: "Is Mahadev Book faster than other platforms for withdrawals?", a: "UPI withdrawals typically settle in 5 to 30 minutes, 24 hours a day. Many other platforms route payouts through an agent network, which can add hours depending on availability." },
  { q: "What makes Mahadev Book accounts more secure?", a: "Every ID goes through mandatory KYC before withdrawals unlock, and accounts aren't shared or resold. That combination cuts down on the fraud and account-takeover issues that plague less strict platforms." },
  { q: "Does Mahadev Book really offer human support, not a bot?", a: "Yes. WhatsApp and Telegram are staffed by real agents around the clock, including during IPL nights and holidays, not an automated menu you have to fight through." },
  { q: "How many players use Mahadev Book?", a: "We do not publish an audited headcount. IDs have been issued since 2010, each one KYC-checked before withdrawals unlock." },
];

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title: "Why Choose Mahadev Book — Fast Payouts, Real Support" },
      { name: "description", content: "Why players stay with Mahadev Book — faster UPI withdrawals, verified-only accounts, 24/7 human support and no shared logins." },
      { property: "og:title", content: "Why Choose Mahadev Book — Fast Payouts, Real Support" },
        { name: "twitter:title", content: "Why Choose Mahadev Book — Fast Payouts, Real Support" },
      { property: "og:description", content: "The concrete reasons players pick Mahadev Book and stay — payout speed, account security and real support." },
      { property: "og:url", content: "https://mahadevbookss.com/why" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Why choose Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/why" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(whyFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://mahadevbookss.com/about" },
            { "@type": "ListItem", position: 3, name: "Why Choose Us", item: "https://mahadevbookss.com/why" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/why",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  { icon: Wallet, t: "Withdrawals that actually land", d: "5 to 30 minutes over UPI, 24/7. No agent bottleneck, no waiting for bank hours to open." },
  { icon: BadgeCheck, t: "Verified IDs only", d: "Every account is tied to one real, KYC-checked person. No shared logins, no proxy accounts to worry about." },
  { icon: Headphones, t: "Real people on support", d: "WhatsApp and Telegram staffed by humans around the clock, not a bot menu you have to work around." },
  { icon: Trophy, t: "Deep market coverage", d: "200+ markets per IPL match, plus football, tennis, kabaddi and a full live casino floor under one login." },
  { icon: ShieldCheck, t: "Security that doesn't get in the way", d: "SSL encryption and fraud monitoring run in the background, not as extra steps that slow down your bet." },
  { icon: MessageCircle, t: "Setup in minutes, not forms", d: "A new ID is issued over a WhatsApp chat, typically in under five minutes, no paperwork to upload." },
];

function WhyPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Why Choose Us
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Why <span className="text-gradient-gold">players since 2010</span> stick with Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Not the marketing version — the actual reasons players give when asked why they didn't
          switch to another cricket ID.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get Your ID on WhatsApp</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Why Choose Mahadev Book"
        summary="Players choose Mahadev Book mainly for three reasons: withdrawals that settle in minutes over UPI rather than hours, verified-only IDs with no shared or proxy accounts, and 24/7 human support instead of a bot menu. Add deep cricket market coverage and a fast WhatsApp-based setup, and it covers most of what decides a player's choice of cricket ID."
        points={[
          "UPI withdrawals in 5–30 minutes, 24/7",
          "Verified-only IDs, no shared or proxy accounts",
          "24/7 human support on WhatsApp and Telegram",
          "200+ markets per IPL match plus casino, football, tennis",
          "New ID issued in under 5 minutes on WhatsApp",
          "KYC-verified players over 15+ years",
        ]}
        keywords={["why choose mahadev book", "mahadev book benefits", "best cricket id india", "mahadev book"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div key={r.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Why Choose Mahadev Book — FAQs" items={whyFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">See it for yourself</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID in minutes and judge the difference on your own withdrawal.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get My ID</span>
          </a>
          <Link to="/about" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Read our story
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Company"
        excludePath="/why"
        title="More about Mahadev Book"
        subtitle="Our story, safety practices, reviews and what we actually do."
      />
    </>
  );
}
