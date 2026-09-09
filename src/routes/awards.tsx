import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Users, Calendar, Wallet, Activity } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const awardsFaqs: FAQItem[] = [
  { q: "Has Mahadev Book won any industry awards?", a: "We don't claim third-party awards or certifications we haven't actually earned. What we can show is real, verifiable growth — a million-plus verified players, 15+ years of continuous operation, and consistent uptime." },
  { q: "How many players use Mahadev Book?", a: "Over a million verified players, built up gradually since the platform started in 2010." },
  { q: "How long has Mahadev Book been running?", a: "15+ years, starting as a small agent network before growing into the full platform it is today." },
  { q: "What does 99.98% uptime actually mean?", a: "It means the platform is available and taking bets essentially all the time, including through major events like IPL finals when traffic spikes hardest." },
  { q: "Why doesn't this page list specific awards?", a: "Because we haven't been formally recognized by an independent industry body, and we'd rather show real numbers than claim something that isn't true." },
];

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Milestones — Real Growth, Not Empty Claims" },
      { name: "description", content: "Mahadev Book's real growth over 15+ years — a million-plus verified players, consistent uptime and yearly payout volume, shown honestly rather than as claimed awards." },
      { property: "og:title", content: "Mahadev Book Milestones — Real Growth, Not Empty Claims" },
      { property: "og:description", content: "The real numbers behind Mahadev Book's growth since 2010." },
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
  { icon: Users, t: "1M+ verified players", d: "Built up gradually over 15+ years, one KYC-checked account at a time, not through paid growth campaigns." },
  { icon: Calendar, t: "15+ years running", d: "Continuous operation since 2010, starting as a small agent network before growing into the full platform." },
  { icon: Wallet, t: "₹500Cr+ paid out yearly", d: "Real payout volume processed through UPI, IMPS and bank transfer, without public disputes over unpaid winnings." },
  { icon: Activity, t: "99.98% uptime", d: "The platform stays live through the traffic spikes that matter most, including IPL finals and major tournament nights." },
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
        summary="Mahadev Book doesn't claim third-party industry awards or certifications it hasn't earned. Its track record instead shows in verifiable numbers: over a million verified players built up since 2010, more than 15 years of continuous operation, roughly ₹500 crore paid out yearly across UPI, IMPS and bank transfer, and 99.98% platform uptime, including through high-traffic events like IPL finals."
        points={[
          "No claimed third-party awards or certifications",
          "1M+ verified players since 2010",
          "15+ years of continuous operation",
          "₹500Cr+ paid out yearly",
          "99.98% uptime, including major event nights",
          "Growth built through KYC-verified accounts, not paid campaigns",
        ]}
        keywords={["mahadev book awards", "mahadev book milestones", "mahadev book track record", "mahadev book history"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
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
