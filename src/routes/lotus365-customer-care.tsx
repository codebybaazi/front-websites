import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { whatsappUrl } from "@/data/site";
import { Headphones, MessageCircle, Clock, ShieldCheck } from "lucide-react";

const URL = "https://lotus365id.com/lotus365-customer-care";

const FAQ = [
  { q: "What is the Lotus365 customer care number?", a: "Lotus365 does not publish a phone number — for your safety, all support runs through our verified WhatsApp concierge, staffed 24/7 in Hindi and English." },
  { q: "How fast is Lotus365 support?", a: "Median first-reply on WhatsApp is under 2 minutes, 24 hours a day. Withdrawals and login issues are prioritised." },
  { q: "Which issues can Lotus365 concierge help with?", a: "Lotus365 login, ID recovery, deposit / UPI issues, withdrawal status, bonus & rollover queries, KYC, responsible-play controls and account closure." },
  { q: "Is WhatsApp the only Lotus365 support channel?", a: "WhatsApp is primary. Telegram and email are backups — never trust a call claiming to be from Lotus365; we do not cold-call players." },
];

export const Route = createFileRoute("/lotus365-customer-care")({
  head: () => ({
    meta: [
      { title: "Lotus365 Customer Care — 24/7 WhatsApp Support & Help Centre" },
      {
        name: "description",
        content:
          "Lotus365 customer care runs 24/7 on WhatsApp — median 2-minute reply for login, UPI deposits, withdrawals, KYC and bonuses. Verified concierge, no cold calls.",
      },
      { property: "og:title", content: "Lotus365 Customer Care — 24/7 WhatsApp Support" },
      {
        property: "og:description",
        content:
          "24/7 Lotus365 support on WhatsApp for login, deposits, withdrawals and KYC. Under 2-minute reply time.",
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
          "@type": "ContactPage",
          name: "Lotus365 Customer Care",
          url: URL,
          isPartOf: { "@type": "WebSite", name: "Lotus365", url: "https://lotus365id.com/" },
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
            { "@type": "ListItem", position: 2, name: "Customer Care", item: URL },
          ],
        }),
      },
    ],
  }),
  component: CustomerCarePage,
});

function CustomerCarePage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Headphones className="h-3.5 w-3.5" /> Support
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 <span className="gold-text">Customer Care</span>
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          Real humans, 24/7, on WhatsApp — with a median first-reply under 2
          minutes. Lotus365 does not publish a phone number: for your safety,
          all support runs through our verified concierge.
        </p>
        <div className="mt-7">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat with Lotus365 support
          </a>
        </div>
      </section>

      <AiOverview
        summary="Lotus365 customer care runs 24/7 on WhatsApp, Telegram and web chat — real humans, sub-2-minute median reply, escalation to risk officers for payout issues."
        points={[
          "24/7 WhatsApp and Telegram concierge",
          "Sub-2-minute median first-response time",
          "Dedicated tracks for deposit, withdrawal and KYC",
          "VIP tier gets a personal relationship manager",
        ]}
        sources={[{ label: "Support hub", to: "/support" }, { label: "Contact us", to: "/contact-us" }, { label: "WhatsApp", to: "/lotus365-whatsapp-number" }]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 grid sm:grid-cols-3 gap-4">
        {[
          { Icon: Clock, t: "Under 2-minute reply", d: "Median first response, 24/7." },
          { Icon: ShieldCheck, t: "Verified concierge", d: "We never cold-call players." },
          { Icon: Headphones, t: "Hindi + English", d: "Regional language support on request." },
        ].map(({ Icon, t, d }) => (
          <div key={t} className="glass-card rounded-2xl p-5">
            <Icon className="h-5 w-5 text-primary mb-3" />
            <div className="font-display text-lg mb-1">{t}</div>
            <p className="text-sm text-foreground/90">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">
          What Lotus365 support can help with
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {[
            "Lotus365 login & password reset",
            "Lotus ID recovery",
            "UPI, IMPS and net-banking deposits",
            "Withdrawal status & payout escalations",
            "KYC document review",
            "Bonus, cashback & rollover queries",
            "Responsible-play limits & self-exclusion",
            "Account closure and data export",
          ].map((x) => (
            <li key={x} className="glass-card rounded-2xl p-4 text-sm">{x}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Support FAQ</h2>
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

      <QuickLinks currentPath={URL} heading="More Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}
