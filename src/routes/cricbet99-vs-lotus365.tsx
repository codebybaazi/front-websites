import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/cricbet99-vs-lotus365")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Lotus 365 — Honest 2026 Comparison" },
      { name: "description", content: "Cricbet99 vs Lotus 365 compared side-by-side: onboarding speed, cricket odds, casino depth, UPI payout time, support quality and account safety. Pick the right betting ID for you." },
      { property: "og:title", content: "Cricbet99 vs Lotus 365 — 2026 Comparison" },
      { property: "og:description", content: "A no-hype comparison of Cricbet99 and Lotus 365 across the features Indian bettors actually care about." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Compare,
});

const rows = [
  { k: "Signup", a: "WhatsApp verified in ~60 sec", b: "Form + email verification" },
  { k: "KYC", a: "One-line KYC on WhatsApp", b: "Full document upload" },
  { k: "Cricket odds", a: "Exchange-grade IPL / int'l odds", b: "Bookmaker odds, thinner markets" },
  { k: "Casino games", a: "500+ live + slots", b: "300+ mostly slots" },
  { k: "UPI deposit", a: "Instant, all UPI apps", b: "Instant, limited banks" },
  { k: "Withdrawals", a: "Minutes to UPI", b: "Hours to same day" },
  { k: "Support", a: "24/7 human on WhatsApp / Telegram", b: "Live chat, slower off-peak" },
  { k: "Welcome bonus", a: "Personalised on first deposit", b: "Fixed % match" },
  { k: "App / APK", a: "Lightweight Android APK", b: "Web + heavier APK" },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Comparison"
        title={<>Cricbet99 vs Lotus 365 — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>which betting ID actually wins?</span></>}
        subtitle="We stacked Cricbet99 and Lotus 365 side-by-side on onboarding, cricket odds, casino depth, payout time and support — so you can pick the ID that fits your play style."
      />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="overflow-hidden rounded-2xl border border-primary/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">Lotus 365</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {rows.map((r) => (
                <tr key={r.k} className="bg-background/60">
                  <td className="px-5 py-4 font-semibold">{r.k}</td>
                  <td className="px-5 py-4 text-primary">{r.a}</td>
                  <td className="px-5 py-4 text-foreground/70">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-foreground/75">
          Verdict — Cricbet99 wins on onboarding speed, payout time and support quality; Lotus 365 remains a solid alternative for casino-first users. If you're a cricket-focused Indian bettor who wants instant UPI withdrawals, Cricbet99 is the safer default in 2026.
        </p>
      </section>
      <CTABand heading="Get your Cricbet99 ID in 60 seconds." sub="No forms, no waiting queues — our team activates your ID on WhatsApp right now." />
    </SiteLayout>
  );
}
