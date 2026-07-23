import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

const rows: { feature: string; sprinters: string; lotus: string }[] = [
  { feature: "Established brand", sprinters: "Long-running, trusted with Indian punters", lotus: "Newer entrant, aggressive marketing" },
  { feature: "Sports coverage", sprinters: "Cricket-first, plus football, tennis, kabaddi", lotus: "Broad multi-sport with heavy football focus" },
  { feature: "Live casino", sprinters: "Evolution, Ezugi, Indian card games", lotus: "Evolution, Pragmatic, Betgames" },
  { feature: "Odds & margins", sprinters: "Sharp cricket odds, exchange-style pricing", lotus: "Competitive but tighter on niche markets" },
  { feature: "Deposits", sprinters: "UPI, IMPS, NEFT — 1 min average", lotus: "UPI, cards, crypto — variable speed" },
  { feature: "Withdrawals", sprinters: "Same-day payouts via Sprinters concierge", lotus: "24–48 hr typical processing" },
  { feature: "Support", sprinters: "Dedicated WhatsApp manager, 24/7", lotus: "In-app chat, email tickets" },
  { feature: "Minimum deposit", sprinters: "₹100", lotus: "₹500" },
  { feature: "Bonus style", sprinters: "Loss-back & cashback via manager", lotus: "Public welcome + reload bonuses" },
];

export const Route = createFileRoute("/sprinters-vs-lotus365")({
  head: () => ({
    meta: [
      { title: "Sprinters vs Lotus 365 — Head-to-Head Comparison (2026)" },
      { name: "description", content: "Sprinters vs Lotus 365 compared: odds, deposits, withdrawals, casino, support and bonuses. See which betting ID fits your play style." },
      { property: "og:title", content: "Sprinters vs Lotus 365 — Full Comparison" },
      { property: "og:description", content: "Side-by-side comparison of Sprinters and Lotus 365 across odds, payouts, casino, support and bonuses." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/sprinters-vs-lotus365" },
    ],
    links: [{ rel: "canonical", href: "/sprinters-vs-lotus365" }],
  }),
  component: ComparisonPage,
});

function ComparisonPage() {
  return (
    <ContentPage
      kicker="Comparison Guide"
      title="Sprinters vs Lotus 365"
      intro="Both are popular betting IDs in India, but they suit very different players. Here's an honest side-by-side to help you pick."
      sections={[
        {
          heading: "Quick verdict",
          body: "Choose Sprinters if you want sharp cricket odds, fast personal support and same-day withdrawals through a concierge. Choose Lotus 365 if you prefer a self-serve app-first experience with broader football markets and public promo bonuses.",
        },
        {
          heading: "Who should pick Sprinters",
          bullets: [
            "Serious cricket punters who value exchange-style odds",
            "Players who want a WhatsApp manager, not a support ticket",
            "Anyone needing same-day withdrawals via UPI",
            "New users who want to start small (₹100 minimum)",
          ],
        },
        {
          heading: "Who should pick Lotus 365",
          bullets: [
            "Multi-sport bettors focused on football and tennis",
            "Users comfortable with self-serve apps",
            "Players chasing public welcome and reload bonuses",
            "Bettors okay with 24–48 hour withdrawal windows",
          ],
        },
      ]}
      extra={
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-left">
                  <th className="p-4 font-semibold text-card-foreground">Feature</th>
                  <th className="p-4 font-semibold text-primary">Sprinters</th>
                  <th className="p-4 font-semibold text-card-foreground">Lotus 365</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.feature} className="border-b border-border/60 last:border-0">
                    <td className="p-4 font-medium text-card-foreground">{r.feature}</td>
                    <td className="p-4 text-muted-foreground">{r.sprinters}</td>
                    <td className="p-4 text-muted-foreground">{r.lotus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
    />
  );
}
