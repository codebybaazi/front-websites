import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { whatsappUrl } from "@/data/site";
import { ShieldCheck, AlertTriangle, MessageCircle } from "lucide-react";

const URL = "https://lotus365id.com/lotus365-blue";

const FAQ = [
  { q: "Is 'Lotus365 Blue' the same as Lotus365?", a: "No. 'Lotus365 Blue' is a nickname players use for third-party mirror domains such as lotus365.blue. The official platform is Lotus365, accessible via lotus365id.com and the WhatsApp concierge." },
  { q: "Is Lotus365 Blue safe to use?", a: "Unofficial mirrors are outside our control — we cannot guarantee payouts, KYC handling or app authenticity for balances held on them. For safety, we recommend playing only on official Lotus365." },
  { q: "How do I move to the official Lotus365 from a mirror?", a: "Withdraw whatever you can from the mirror first, then message the Lotus365 concierge on WhatsApp — we will set up your official Lotus ID and match your last-tier loyalty benefits." },
  { q: "Why do mirror sites like Lotus365 Blue exist?", a: "Copycats piggyback on the Lotus365 brand. They typically offer worse odds, delayed payouts and no human support — the fastest way to lose money on the Lotus365 brand is to trust the wrong domain." },
];

export const Route = createFileRoute("/lotus365-blue")({
  head: () => ({
    meta: [
      { title: "Lotus365 Blue — Official Lotus365 vs Mirror Sites Explained" },
      {
        name: "description",
        content:
          "Confused between Lotus365 Blue and the official Lotus365? Learn which domains are genuine, how to spot mirrors and how to move your balance safely.",
      },
      { property: "og:title", content: "Lotus365 Blue vs Official Lotus365 — What's Real" },
      {
        property: "og:description",
        content:
          "How to tell the official Lotus365 from Lotus365 Blue mirrors, and how to switch safely.",
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
          headline: "Lotus365 Blue vs Official Lotus365 — What's Real",
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
            { "@type": "ListItem", position: 2, name: "Lotus365 Blue", item: URL },
          ],
        }),
      },
    ],
  }),
  component: BluePage,
});

function BluePage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5" /> Official vs mirrors
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 <span className="gold-text">Blue</span> — what it really is
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          "Lotus365 Blue" is a nickname players use for third-party mirror
          domains. Here is how to tell them apart from the official Lotus365
          and switch safely if you have a balance on the wrong site.
        </p>
      </section>

      <AiOverview
        summary="Lotus365 Blue is the exchange-forward experience — deeper cricket books, tighter football spreads and lay/back liquidity, with the same instant UPI as classic Lotus365."
        points={[
          "Exchange lay/back on cricket, football, tennis",
          "Tighter spreads on IPL, EPL and Grand Slams",
          "Same wallet, KYC and UPI as classic Lotus365",
          "Best for pros comfortable with pre-match and in-play trading",
        ]}
        sources={[{ label: "Exchange", to: "/lotus365-exchange" }, { label: "Sports book", to: "/lotus365-betting" }]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="glass-card rounded-2xl p-6 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-1" />
          <p className="text-sm text-foreground/90 leading-relaxed">
            The <strong>only</strong> official Lotus365 destinations are{" "}
            <strong>lotus365id.com</strong> and our verified WhatsApp
            concierge. Any other domain — including "lotus365.blue" or
            similar — is a third-party mirror we do not control.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Official vs mirror at a glance</h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary/10 text-left">
                <tr>
                  <th className="p-4 font-semibold">Signal</th>
                  <th className="p-4 font-semibold text-primary">Official Lotus365</th>
                  <th className="p-4 font-semibold text-foreground/90">"Lotus365 Blue" mirrors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Domain", "lotus365id.com", "Random suffixes (.blue, .win, .club)"],
                  ["Support", "Verified WhatsApp concierge, 24/7", "Web chat or none"],
                  ["Payouts", "UPI in under 4 min, human sign-off", "Delayed or missing"],
                  ["KYC", "Aadhaar + PAN, encrypted", "Unclear or none"],
                  ["App", "Signed Lotus365 APK", "Unsigned or repackaged"],
                ].map(([sig, off, mir]) => (
                  <tr key={sig} className="border-t border-border/40 align-top">
                    <td className="p-4 font-medium">{sig}</td>
                    <td className="p-4">{off}</td>
                    <td className="p-4 text-foreground/90">{mir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Lotus365 Blue FAQ</h2>
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
            Play on the <span className="gold-text">official Lotus365</span>
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <MessageCircle className="h-4 w-4" /> Get official Lotus ID
          </a>
        </div>
      </section>

      <QuickLinks currentPath={URL} heading="More Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}
