import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, BadgeCheck, ThumbsUp, Trophy, Zap, Headphones } from "lucide-react";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const aboutFaqs: FAQItem[] = [
  { q: "Who is behind Mahadev Book?", a: "Mahadev Book is an India-based online cricket ID and betting platform running since 2010. A licensed operator team handles ID issuance, payments and 24/7 support from 1012, South Delhi, India." },
  { q: "Is Mahadev Book safe and legit?", a: "Every account is KYC-verified, payments run on SSL and PCI-DSS-aligned rails, and casino games are RNG-audited. Payouts go out over UPI, IMPS and bank transfer. We do not publish an unaudited yearly payout total." },
  { q: "Since when has Mahadev Book been operating?", a: "Since 2010 — 15+ years serving Indian cricket bettors, starting as a small agent network and growing into a full online betting platform." },
  { q: "How is Mahadev Book different from other cricket ID sites?", a: "Three things: verified-only IDs (no shared or proxy accounts), minute-scale UPI withdrawals, and real human support 24/7 — not a chatbot maze." },
  { q: "Does Mahadev Book support responsible gaming?", a: "Yes. Deposit caps, cooling-off periods and self-exclusion are one WhatsApp message away, and enabled instantly." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mahadev Book — India's Trusted Cricket ID Provider" },
      { name: "description", content: "Mahadev Book is India's cricket ID provider since 2010 — KYC-verified IDs, UPI payouts and 24/7 WhatsApp support from 1012, South Delhi." },
      { property: "og:title", content: "About Mahadev Book — India's Trusted Cricket ID Provider" },
        { name: "twitter:title", content: "About Mahadev Book — India's Trusted Cricket ID Provider" },
      { property: "og:description", content: "15 years of verified cricket IDs, honest payouts and real human support — this is how Mahadev Book earned India's trust." },
      { property: "og:url", content: "https://mahadevbookss.com/about" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "About Mahadev Book — India's Trusted Online Cricket ID Provider" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/about" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(aboutFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://mahadevbookss.com/about" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/about",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
      // Real testimonials already shown on this page (see `testimonials` below),
      // marked up as Review structured data. No rating value is included since
      // none exists in the source content — only what's genuinely published.
      ...testimonials.map((t) => ({
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          reviewBody: t.q,
          author: { "@type": "Person", name: t.n },
          itemReviewed: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadevbookss.com/" },
        }),
      })),
    ],
  }),

  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, t: "Safety First", d: "SSL encryption, PCI-DSS aligned payments and strict internal controls guard every account." },
  { icon: BadgeCheck, t: "Verified Only", d: "Every ID is tied to a real, verified person. No proxies, no shared accounts." },
  { icon: Zap, t: "Speed Everywhere", d: "Sub-second odds refresh, minute-scale ID setup and same-day payouts." },
  { icon: Trophy, t: "Fair Play", d: "Independent RNG audits and neutral live streams for casino tables." },
  { icon: Headphones, t: "Real People", d: "24/7 human support on WhatsApp and Telegram — never a chatbot maze." },
  { icon: ThumbsUp, t: "Responsible By Default", d: "Deposit caps, self-exclusion and cooling-off periods are one message away." },
];

const testimonials = [
  { n: "Rohit S.", city: "Mumbai", q: "Got my ID during the IPL final. Deposited, played, withdrew ₹42,000 to UPI in under an hour. Genuinely impressed." },
  { n: "Karan V.", city: "Delhi", q: "I've tried three platforms before Mahadev. Only one where withdrawals just… work. Every time." },
  { n: "Anjali P.", city: "Bangalore", q: "Support answered me on WhatsApp at 2AM before a Champions League match. That's why I stay." },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> About Us
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          15 years as India's <span className="text-gradient-gold">trusted cricket ID provider</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Mahadev Book started in 2010 with one simple promise — give Indian bettors an online cricket ID they can actually rely on. That promise has not changed. The platform around it has.
        </p>
      </section>

      <AIOverview
        title="AI Overview — About Mahadev Book"
        summary="Mahadev Book is an India-based online cricket ID and betting ID provider operating since 2010. One login covers cricket, football, live casino, Aviator and Teen Patti. Accounts are KYC-verified, UPI payouts run through the same WhatsApp desk, and the office is listed at 1012, South Delhi, India."
        points={[
          "Founded 2010 · 15+ years of operation in India",
          "KYC-verified IDs, no proxy or shared accounts",
          "Instant UPI deposits and same-day withdrawals",
          "24/7 human support (English & Hindi) on WhatsApp",
          "Independent RNG audits for casino games",
          "Responsible-gaming tools built in by default",
        ]}
        keywords={["mahadev book", "online cricket id provider", "trusted betting id India", "cricket id company"]}
      />

      <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">How did Mahadev Book get started?</h2>
            <p className="mt-4 text-muted-foreground">
              We began as a small agent network handing out cricket IDs to a few hundred fans in our own cities. Then the IPL happened. Casual viewers turned into serious bettors overnight, and suddenly people needed a place where their money, their ID and their payouts were safe. So we built one.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today Mahadev Book still issues KYC-checked IDs the same way it did at the start. Cricket is still the heart of what we do — every IPL, T20 World Cup and India series lives on our exchange — but the same betting ID now opens football, tennis, live casino, Aviator, Teen Patti and slots too.
            </p>
            <p className="mt-4 text-muted-foreground">
              What we're proudest of isn't what we built. It's what we refused to do. No fake bonuses. No mystery delays on withdrawals. No shady anonymous IDs. In this industry, trust IS the product — and we work hard every day to keep earning yours.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { k: "2010", v: "Operating since" },
                { k: "15", v: "Years Running" },
                { k: "24/7", v: "Live Support" },
                { k: "UPI", v: "Payouts" },
                { k: "KYC", v: "Before cash-out" },
                { k: "IN", v: "South Delhi office" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-display text-2xl font-bold text-primary">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Our values</h2>
          <p className="text-muted-foreground mt-3">Six principles that quietly guide every product decision.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <div className="h-11 w-11 rounded-lg bg-primary/15 text-primary grid place-items-center"><f.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">What do players say about Mahadev Book?</h2>
          <p className="text-muted-foreground mt-3">Unfiltered feedback from real Mahadev Book users.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.n} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-foreground/90">"{t.q}"</p>
              <div className="mt-4 text-sm font-semibold">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.city}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="responsible" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-3xl border border-warning/40 bg-warning/5 p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Play responsibly</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Betting should stay entertainment. Set limits, take breaks, and ask for help if it stops feeling that way. Message us anytime for self-exclusion or deposit caps.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">
            Talk to support
          </Link>
        </div>
      </section>
      <FAQSection title="About Mahadev Book — FAQs" items={aboutFaqs} />
      <QuickLinks
        pageCategory="Company"
        excludePath="/about"
        title="More about Mahadev Book"
        subtitle="Company story, safety, reviews and the platforms we support."
      />
    </>
  );
}
