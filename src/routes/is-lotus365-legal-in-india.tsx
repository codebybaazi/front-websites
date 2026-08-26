import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { useWhatsAppUrl } from "@/components/WhatsAppProvider";
import { Scale, ShieldCheck, MessageCircle } from "lucide-react";

const URL = "https://lotus365id.com/is-lotus365-legal-in-india";

const FAQ = [
  { q: "Is Lotus365 legal in India?", a: "Lotus365 operates under an offshore gaming licence and is accessible to Indian adults from states where online skill-gaming and sports wagering are not expressly prohibited. Games of skill are protected under the Public Gambling Act, 1867 and state-level jurisprudence such as State of Andhra Pradesh v. K. Satyanarayana (1968)." },
  { q: "Which Indian states restrict online gaming?", a: "Andhra Pradesh, Telangana, Assam, Odisha, Nagaland, Sikkim and Tamil Nadu have specific restrictions on real-money online gaming. Lotus365 asks users to confirm they are in a permitted jurisdiction before signing up." },
  { q: "Is Lotus365 safe to use?", a: "Yes — Lotus365 uses 256-bit TLS, segregated player funds, human-verified KYC and a licensed payment gateway. Every withdrawal is signed off by a risk officer before the UPI push." },
  { q: "Do I need to pay tax on Lotus365 winnings?", a: "Yes. Under Section 194BA of the Income Tax Act, net winnings from online games are subject to 30% TDS. Lotus365 issues a Form 26AS-ready statement on request." },
  { q: "What is the minimum age for Lotus365?", a: "18 years for casino and 21+ where local law requires it. KYC is mandatory before your first withdrawal." },
];

export const Route = createFileRoute("/is-lotus365-legal-in-india")({
  head: () => ({
    meta: [
      { title: "Is Lotus365 Legal in India? 2026 Licensing & Tax Guide" },
      {
        name: "description",
        content:
          "Is Lotus365 legal in India? A clear 2026 guide to Lotus365's offshore licence, state-by-state rules, KYC, 30% TDS on winnings and responsible-play protections.",
      },
      { property: "og:title", content: "Is Lotus365 Legal in India? 2026 Guide" },
      {
        property: "og:description",
        content:
          "Lotus365 legality, state rules, KYC and TDS on winnings — a plain-English 2026 explainer for Indian players.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Is Lotus365 Legal in India? 2026 Guide",
          url: URL,
          author: { "@type": "Organization", name: "Lotus365" },
          publisher: { "@type": "Organization", name: "Lotus365" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Is Lotus365 Legal in India", item: URL },
          ],
        }),
      },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const whatsappUrl = useWhatsAppUrl();
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Scale className="h-3.5 w-3.5" /> Legality
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Is Lotus365 <span className="gold-text">Legal in India</span>?
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          A plain-English 2026 guide to Lotus365's offshore gaming licence,
          state-by-state rules, KYC obligations and how TDS applies to online
          gaming winnings under Section 194BA.
        </p>
      </section>

      <AiOverview
        summary="Lotus365 operates under international licensing and Indian skill-gaming precedents — this overview explains the legal position, state-wise nuances and player safeguards."
        points={[
          "Licensed offshore, accessed legally by Indian adults 18+",
          "State-wise notes on Karnataka, Andhra, Telangana, TN",
          "KYC-backed wallets and RBI-compliant UPI rails",
          "Responsible-gaming tools and dispute resolution",
        ]}
        sources={[{ label: "Is Lotus365 safe", to: "/is-lotus365-safe" }, { label: "Terms", to: "/terms-conditions" }, { label: "Responsible gaming", to: "/responsible-gaming" }]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 space-y-6">
        <div className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl mb-3">Licensing status</h2>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Lotus365 operates under an offshore gaming licence and is
            accessible to Indian adults from states where online skill-gaming
            and sports wagering are not expressly prohibited. Games of skill
            enjoy constitutional protection under the Public Gambling Act,
            1867 and Supreme Court jurisprudence including <em>State of
            Andhra Pradesh v. K. Satyanarayana (1968)</em> and <em>Dr. K.R.
            Lakshmanan v. State of Tamil Nadu (1996)</em>.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl mb-3">Restricted states</h2>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Andhra Pradesh, Telangana, Assam, Odisha, Nagaland, Sikkim and
            Tamil Nadu currently restrict real-money online gaming. Players
            in these states are asked to confirm their jurisdiction during
            sign-up; Lotus365 declines onboarding where local law prohibits
            participation.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl mb-3">KYC &amp; safeguards</h2>
          <p className="text-sm text-foreground/90 leading-relaxed">
            KYC (Aadhaar, PAN and a bank statement) is mandatory before your
            first withdrawal. Lotus365 uses 256-bit TLS, segregated player
            funds and a licensed payment gateway, with human sign-off on
            every withdrawal.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl mb-3">Tax on winnings</h2>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Section 194BA of the Income Tax Act applies 30% TDS on net winnings
            from online games. Lotus365 issues a Form 26AS-ready statement
            on request so you can reconcile it during ITR filing.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6 flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
          <p className="text-xs text-foreground/95 leading-relaxed">
            This page is a general information summary and is not legal advice.
            For advice on your circumstances, consult a licensed advocate.
            Lotus365 is intended for adults 18+; where local law requires 21+,
            that limit applies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">FAQ</h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="glass-card rounded-2xl p-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {f.q}
                <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Ready to <span className="gold-text">play responsibly</span>?
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <MessageCircle className="h-4 w-4" /> Get your Lotus365 ID
          </a>
        </div>
      </section>

      <QuickLinks currentPath={URL} heading="More Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}
