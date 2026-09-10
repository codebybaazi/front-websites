import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Users, Calendar, Wallet, Activity } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const awardsFaqs: FAQItem[] = [
  { q: "Has Mahadev Book won any industry awards?", a: "We don't claim third-party awards we haven't earned. What we can show is continuous operation since 2010, KYC-only IDs, and UPI payouts handled on the same WhatsApp desk as support." },
  { q: "How many players use Mahadev Book?", a: "We do not publish an audited user count. Accounts have been issued since 2010, each one KYC-checked before withdrawals unlock." },
  { q: "How long has Mahadev Book been running?", a: "Since 2010, first as an agent network and then as the full platform." },
  { q: "Does Mahadev Book stay up during IPL nights?", a: "The desk and wallet stay open through high-traffic events. We do not quote an unaudited uptime percentage." },
  { q: "Why doesn't this page list specific awards?", a: "Because we haven't been formally recognized by an independent industry body, and we'd rather describe how the ID actually works than invent a trophy list." },
];

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Milestones — Real Growth, Not Empty Claims" },
      { name: "description", content: "Mahadev Book since 2010: KYC-only IDs, UPI payouts and 24/7 WhatsApp support. No invented awards or unaudited volume stats." },
      { property: "og:title", content: "Mahadev Book Milestones — Real Growth, Not Empty Claims" },
        { name: "twitter:title", content: "Mahadev Book Milestones — Real Growth, Not Empty Claims" },
      { property: "og:description", content: "How Mahadev Book has operated since 2010, without a fake trophy list." },
      { property: "og:url", content: "https://mahadevbookss.com/awards" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book milestones and growth" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/awards" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(awardsFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://mahadevbookss.com/about" },
            { "@type": "ListItem", position: 3, name: "Awards", item: "https://mahadevbookss.com/awards" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/awards",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: AwardsPage,
});

const milestones = [
  { icon: Users, t: "KYC-only IDs since 2010", d: "Every cash-out waits on a name match. Accounts are built one KYC check at a time, not through shared or proxy logins." },
  { icon: Calendar, t: "15+ years running", d: "Continuous operation since 2010, starting as a small agent network before growing into the full platform." },
  { icon: Wallet, t: "UPI, IMPS and bank payouts", d: "Winnings leave through the same desk that takes deposits. We do not publish an unaudited yearly rupee total." },
  { icon: Activity, t: "Open through IPL nights", d: "Wallet and support stay staffed when traffic spikes. We do not quote a made-up uptime percentage." },
];

function AwardsPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Milestones
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Real growth, <span className="text-gradient-gold">not empty claims</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          We haven't picked up a shelf of industry trophies, and we're not going to pretend we
          have. What we can show instead is real, verifiable growth over 15+ years.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Milestones"
        summary="Mahadev Book does not claim third-party industry awards it has not earned. What it can show is continuous operation since 2010, KYC before every withdrawal, UPI and IMPS payouts on the same WhatsApp desk, and an office listed at 1012, South Delhi, India."
        points={[
          "No claimed third-party awards or certifications",
          "KYC-verified IDs since 2010",
          "15+ years of continuous operation",
          "Payouts over UPI, IMPS and bank transfer",
          "Desk stays open through IPL and cup nights",
          "Growth through KYC-verified accounts, not paid campaigns",
        ]}
        keywords={["mahadev book awards", "mahadev book milestones", "mahadev book track record", "mahadev book history"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What has Mahadev Book actually achieved?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {milestones.map((m) => (
            <div key={m.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{m.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book Milestones — FAQs" items={awardsFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Be part of the next milestone</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and see what the numbers are actually built on.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get My ID</span>
          </a>
          <Link to="/reviews" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Read player reviews
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Company"
        excludePath="/awards"
        title="More about Mahadev Book"
        subtitle="Our story, trust signals and why players choose us."
      />
    </>
  );
}
