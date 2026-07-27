import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/cricbet99-vs-skyexchange247")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs SkyExchange 247 — 2026 Honest Comparison" },
      { name: "description", content: "Compare Cricbet99 and SkyExchange 247 on signup, cricket exchange odds, casino, UPI payout speed, support and safety. Find the best Indian betting ID for 2026." },
      { property: "og:title", content: "Cricbet99 vs SkyExchange 247 — 2026" },
      { property: "og:description", content: "Side-by-side comparison of Cricbet99 and SkyExchange 247 for Indian cricket bettors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Compare,
});

const rows = [
  { k: "Onboarding", a: "60-sec WhatsApp signup", b: "Web signup + agent verification" },
  { k: "Cricket exchange", a: "Back/lay + fancy + session", b: "Back/lay + fancy" },
  { k: "Football & tennis", a: "EPL, UCL, Grand Slams live", b: "Major leagues covered" },
  { k: "Casino floor", a: "500+ games, 100+ live tables", b: "400+ games" },
  { k: "UPI deposit", a: "Instant, all UPI apps", b: "Instant" },
  { k: "Withdrawals", a: "UPI in minutes", b: "UPI within 30–90 min" },
  { k: "Support", a: "24/7 WhatsApp + Telegram + phone", b: "24/7 chat" },
  { k: "Welcome bonus", a: "Personalised on first deposit", b: "Fixed % bonus" },
  { k: "Mobile", a: "Lightweight APK + web", b: "Web + APK" },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Comparison"
        title={<>Cricbet99 vs SkyExchange 247 — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>compared honestly.</span></>}
        subtitle="Both platforms are popular in India — but they're built differently. Here's a clean, feature-by-feature comparison of Cricbet99 and SkyExchange 247 to help you pick the right ID."
      />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="overflow-hidden rounded-2xl border border-primary/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">SkyExchange 247</th>
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
          Verdict — SkyExchange 247 is a proven exchange-first brand, but Cricbet99 edges ahead on WhatsApp onboarding speed, casino depth and human-first support. For most Indian bettors chasing fast IDs and quicker payouts, Cricbet99 is the smoother choice in 2026.
        </p>
      </section>
      <CTABand heading="One WhatsApp message. One verified ID." sub="Message Cricbet99 support and start playing in under 5 minutes." />
    </SiteLayout>
  );
}
