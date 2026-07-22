import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { whatsappUrl } from "@/data/site";
import { Trophy, Zap, MessageCircle } from "lucide-react";

const URL = "https://lotus365id.com/lotus365-win";

const FAQ = [
  { q: "How do withdrawals from Lotus365 wins work?", a: "Once you win, tap Withdraw, pick your UPI ID and submit. A risk officer signs off and the money hits your bank in under 4 minutes on average, 24/7." },
  { q: "Is there a maximum Lotus365 win limit?", a: "Single-transaction UPI withdrawals go up to ₹1 lakh. For bigger wins, our concierge splits payouts across your registered bank accounts the same day." },
  { q: "Do I pay tax on Lotus365 winnings?", a: "Yes — under Section 194BA of the Income Tax Act, 30% TDS applies to net winnings from online games. Lotus365 issues a Form 26AS-ready statement on request." },
  { q: "How do I improve my Lotus365 win rate?", a: "Read our free betting guides on bankroll discipline, cricket session markets and live in-play strategy — linked below." },
];

export const Route = createFileRoute("/lotus365-win")({
  head: () => ({
    meta: [
      { title: "Lotus365 Win — Instant UPI Payouts, Withdrawal Limits & Tax Guide" },
      {
        name: "description",
        content:
          "Withdraw Lotus365 wins in under 4 minutes over UPI. Limits, tax (Section 194BA TDS), payout process and tips to improve your Lotus365 win rate.",
      },
      { property: "og:title", content: "Lotus365 Win — Instant UPI Payouts & Withdrawal Guide" },
      {
        property: "og:description",
        content:
          "How to withdraw your Lotus365 winnings — UPI in 4 minutes, limits, tax and payout tips.",
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
          headline: "Lotus365 Win — Instant UPI Payouts & Withdrawal Guide",
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
            { "@type": "ListItem", position: 2, name: "Lotus365 Win", item: URL },
          ],
        }),
      },
    ],
  }),
  component: WinPage,
});

function WinPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Trophy className="h-3.5 w-3.5" /> Payouts
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 <span className="gold-text">Win</span> — instant UPI payouts
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          Cash out your Lotus365 winnings in under 4 minutes over UPI, IMPS or
          net-banking — 24/7, with a human risk officer signing off every
          withdrawal.
        </p>
      </section>

      <AiOverview
        summary="Lotus365 Win highlights India's biggest recent Lotus365 payouts — cricket accumulators, casino jackpots and exchange trades, with proof, stake and market breakdowns."
        points={[
          "Verified winner stories with stake and odds",
          "IPL, T20 World Cup and cricket fancy jackpots",
          "Casino Teen Patti and Baccarat big hands",
          "How to claim and withdraw big wins on UPI",
        ]}
        sources={[{ label: "Big win stories", to: "/lotus365-big-win-stories" }, { label: "Case studies", to: "/case-study" }]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 grid sm:grid-cols-3 gap-4">
        {[
          { t: "Under 4 min avg.", d: "UPI payouts, day or night." },
          { t: "₹1 lakh per txn", d: "Bigger wins split same-day." },
          { t: "30% TDS handled", d: "Statement ready for ITR filing." },
        ].map((x) => (
          <div key={x.t} className="glass-card rounded-2xl p-5">
            <Zap className="h-5 w-5 text-primary mb-3" />
            <div className="font-display text-lg mb-1">{x.t}</div>
            <p className="text-sm text-foreground/90">{x.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Winning &amp; withdrawing on Lotus365</h2>
        <ol className="space-y-3">
          {[
            { t: "Complete KYC once", d: "Aadhaar + PAN + a bank statement — one-time, takes 3 minutes." },
            { t: "Tap Withdraw after a win", d: "Enter the amount and pick your registered UPI ID or bank account." },
            { t: "Risk officer signs off", d: "A human verifies the payout — that's why Lotus365 refunds fraud, not just files a ticket." },
            { t: "Money in your bank", d: "UPI settles in under 4 minutes on average, 24/7." },
          ].map((s, i) => (
            <li key={s.t} className="glass-card rounded-2xl p-5 flex gap-4">
              <span className="font-display text-2xl text-primary shrink-0">{i + 1}</span>
              <div>
                <div className="font-semibold mb-1">{s.t}</div>
                <p className="text-sm text-foreground/90">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Winnings FAQ</h2>
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
            Get your <span className="gold-text">Lotus365 ID</span> in 60 seconds
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Start on WhatsApp
          </a>
        </div>
      </section>

      <QuickLinks currentPath={URL} heading="More Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}
