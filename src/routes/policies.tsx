import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Lock, ShieldCheck, BadgeCheck, MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Policies — Terms, Privacy & Responsible Gaming" },
      { name: "description", content: "All Mahadev Book policies in one place — terms and conditions, privacy policy, responsible gaming tools and account verification requirements." },
      { property: "og:title", content: "Mahadev Book Policies — Terms, Privacy & Responsible Gaming" },
      { property: "og:description", content: "Every Mahadev Book policy, in one place — terms, privacy, responsible gaming and KYC." },
      { property: "og:url", content: "https://mahadevbookss.com/policies" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Policies" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/policies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Policies", item: "https://mahadevbookss.com/policies" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/policies",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: PoliciesPage,
});

const policies = [
  { icon: FileText, t: "Terms & Conditions", d: "Eligibility, account rules, betting settlement, payments and what can lead to a suspension.", to: "/terms" as const },
  { icon: Lock, t: "Privacy Policy", d: "What data is collected, how it's used, and how account and KYC information is protected.", to: "/privacy" as const },
  { icon: ShieldCheck, t: "Responsible Gaming", d: "Deposit limits, cooling-off periods, self-exclusion and the signs worth paying attention to.", to: "/responsible" as const },
  { icon: BadgeCheck, t: "KYC", d: "What documents are needed to verify an account and unlock withdrawals.", to: "/mahadev-book-kyc" as const },
];

function PoliciesPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Policies
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Policies</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Everything that governs how a Mahadev Book ID works, in one place — no need to dig
          through a single long document to find the part that applies to you.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Policies"
        summary="Mahadev Book's policies are split into four pages: terms and conditions covering eligibility and account rules, a privacy policy covering data collection and protection, responsible gaming covering limits and self-exclusion, and a KYC page covering the documents needed to verify an account. Each is written as its own page rather than one long document."
        points={[
          "Terms & Conditions: eligibility, account rules, settlement",
          "Privacy Policy: what's collected, how it's protected",
          "Responsible Gaming: limits, cooling-off, self-exclusion",
          "KYC: documents needed to verify an account",
          "Each policy is its own page, not one long document",
          "Questions on any of them go to the same WhatsApp support line",
        ]}
        keywords={["mahadev book policies", "mahadev book terms", "mahadev book privacy policy", "mahadev book responsible gaming"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {policies.map((p) => (
            <Link
              key={p.t}
              to={p.to}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors">{p.t}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Can't find what you're looking for?</h2>
        <p className="mt-3 text-muted-foreground">Message support on WhatsApp and we'll point you to the right answer directly.</p>
        <div className="mt-6 flex justify-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Ask on WhatsApp</span>
          </a>
        </div>
      </section>

      <QuickLinks
        pageCategory="Policies"
        excludePath="/policies"
        title="Keep exploring"
        subtitle="Support, KYC and everything else that keeps your account safe."
      />
    </>
  );
}
