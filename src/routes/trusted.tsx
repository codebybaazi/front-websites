import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, BadgeCheck, ShieldCheck, Lock, Dice5 } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const trustedFaqs: FAQItem[] = [
  { q: "What makes Mahadev Book a trusted provider?", a: "Mandatory KYC on every ID, SSL and PCI-DSS aligned payment handling, independently audited casino RNG, and continuous operation since 2010." },
  { q: "Is Mahadev Book licensed?", a: "The platform runs on licensed backend gaming software from established providers, the same infrastructure used across the regulated online betting industry." },
  { q: "How do I know casino games aren't rigged?", a: "Live tables run through independently audited studios like Evolution and Ezugi, and RNG-based games go through regular fairness audits rather than running on in-house, unverifiable code." },
  { q: "Are my payment details safe with Mahadev Book?", a: "Yes. Payment data is handled under SSL encryption and PCI-DSS aligned practices, the same standard used by banks and major payment processors." },
  { q: "Does Mahadev Book verify every account?", a: "Yes. Full KYC is required before withdrawals are released, which keeps accounts tied to one real person and cuts down on fraud." },
];

export const Route = createFileRoute("/trusted")({
  head: () => ({
    meta: [
      { title: "Mahadev Book — A Trusted, Verified Betting ID Provider" },
      { name: "description", content: "What makes Mahadev Book a trusted cricket ID provider — mandatory KYC, licensed backend software, audited casino games, and SSL/PCI-DSS aligned payments." },
      { property: "og:title", content: "Mahadev Book — A Trusted, Verified Betting ID Provider" },
        { name: "twitter:title", content: "Mahadev Book — A Trusted, Verified Betting ID Provider" },
      { property: "og:description", content: "KYC-verified IDs, audited casino games and secure payments — the trust signals behind Mahadev Book." },
      { property: "og:url", content: "https://mahadevbookss.com/trusted" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book — a trusted, verified betting ID provider" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/trusted" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(trustedFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://mahadevbookss.com/about" },
            { "@type": "ListItem", position: 3, name: "Trusted Provider", item: "https://mahadevbookss.com/trusted" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/trusted",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: TrustedPage,
});

const signals = [
  { icon: BadgeCheck, t: "Mandatory KYC", d: "Every ID is tied to one verified person before withdrawals unlock. No shared or anonymous accounts." },
  { icon: Lock, t: "SSL & PCI-DSS aligned payments", d: "The same class of encryption and payment-handling standards used by banks and major processors." },
  { icon: Dice5, t: "Audited casino games", d: "Live tables run through independently audited studios, and RNG titles go through regular fairness checks." },
  { icon: ShieldCheck, t: "15+ years running", d: "Continuous operation since 2010. Payouts go out on the same WhatsApp desk that issued the ID." },
];

function TrustedPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Trusted Provider
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          A <span className="text-gradient-gold">verified, regulated</span> cricket ID provider
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Trust isn't a tagline here — it's KYC on every account, audited games, and payment
          security that matches banking standards. Here's what backs that up.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get a Verified ID</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Trust Signals"
        summary="Mahadev Book's trust signals rest on four things: mandatory KYC on every account before withdrawals unlock, SSL and PCI-DSS aligned payment handling, independently audited casino games through established studios, and continuous operation since 2010 with payouts on UPI, IMPS and bank transfer."
        points={[
          "Mandatory KYC before withdrawals unlock",
          "SSL and PCI-DSS aligned payment handling",
          "Casino games run through audited, established studios",
          "Regular fairness audits on RNG-based games",
          "Running continuously since 2010",
          "Payouts on the same desk that issued the ID",
        ]}
        keywords={["mahadev book trusted", "mahadev book verified", "mahadev book licensed", "is mahadev book legit"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What makes Mahadev Book a trusted provider?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {signals.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book Trusted Provider — FAQs" items={trustedFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Judge it by your own experience</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and see the KYC and payout process for yourself.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get My ID</span>
          </a>
          <Link to="/safety" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            How we keep accounts safe
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Company"
        excludePath="/trusted"
        title="More about Mahadev Book"
        subtitle="Our story, safety practices, reviews and why players choose us."
      />
    </>
  );
}
