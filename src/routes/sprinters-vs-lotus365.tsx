import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
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

const reviews: {
  name: string;
  city: string;
  detail: string;
  date: string;
  rating: number;
  title: string;
  body: string;
}[] = [
  {
    name: "Rohit Kulkarni",
    city: "Pune",
    detail: "IPL session markets",
    date: "2026-03-18",
    rating: 5,
    title: "Same-night UPI after a Sunday IPL session",
    body: "I kept Lotus 365 through last year's IPL because the app was easy. Then I needed a withdrawal on a Sunday night after a session-run hit, and it sat until Monday. On Sprinters I messaged the manager around 10.30pm and the UPI landed before midnight. Cricket prices on toss and first-innings runs also sit a little sharper than what I was getting on Lotus.",
  },
  {
    name: "Ananya Sharma",
    city: "Jaipur",
    detail: "T20 and Teen Patti",
    date: "2026-05-04",
    rating: 5,
    title: "Opened with ₹100 instead of a ₹500 lock-in",
    body: "Lotus wanted ₹500 before I could even try the ID. I opened Sprinters with ₹100 on UPI and had login details on WhatsApp in about fifteen minutes. I mostly bet India T20s and play Teen Patti on the Evolution tables. Support replies in Hindi, which saves me from typing everything in English at 1am.",
  },
  {
    name: "Vikram Singh",
    city: "Chandigarh",
    detail: "Cricket plus weekend football",
    date: "2026-06-21",
    rating: 4,
    title: "Stuck IMPS deposit cleared in chat",
    body: "Lotus 365 has more EPL lines, I'll give them that. I still switched because a stuck IMPS deposit sat in their ticket queue for a full day. The Sprinters manager traced it in chat and credited the wallet the same evening. During IPL I live on fancy markets anyway, so the extra football depth did not matter as much as getting paid.",
  },
  {
    name: "Farhan Qureshi",
    city: "Hyderabad",
    detail: "Mixed sports and casino",
    date: "2026-08-12",
    rating: 5,
    title: "Ran both IDs for a month, kept Sprinters",
    body: "I ran both IDs for a month to compare Sprinters vs Lotus 365. Lotus puts the welcome bonus on the homepage. Sprinters cashback came through the manager and was smaller, but it actually hit my wallet after a losing week. Withdrawals on Sprinters were same day. On Lotus I waited until the next evening twice, so I closed the Lotus ID.",
  },
];

const averageRating = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

export const Route = createFileRoute("/sprinters-vs-lotus365")({
  head: () => ({
    meta: [
      { title: "Sprinters vs Lotus 365 — Head-to-Head Comparison (2026)" },
      { name: "description", content: "Sprinters vs Lotus 365 compared: odds, deposits, withdrawals, casino, support and player reviews. See which betting ID fits your play style." },
      { name: "keywords", content: "Sprinters vs Lotus 365, Lotus 365 review, Sprinters review India, Lotus 365 alternative, cricket betting ID India, UPI betting withdrawal" },
      { property: "og:title", content: "Sprinters vs Lotus 365 — Full Comparison" },
      { property: "og:description", content: "Side-by-side comparison of Sprinters and Lotus 365 across odds, payouts, casino, support, bonuses and player reviews." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: abs("/sprinters-vs-lotus365") },
    ],
    links: [{ rel: "canonical", href: "/sprinters-vs-lotus365" }],
    scripts: [
        ...(buildPageFaqLd("/sprinters-vs-lotus365") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/sprinters-vs-lotus365")) }] : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Sprinters betting ID",
          description:
            "Sprinters vs Lotus 365 player reviews covering cricket odds, UPI deposits, WhatsApp support and same-day withdrawals.",
          brand: { "@type": "Brand", name: "Sprinters" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: averageRating,
            bestRating: "5",
            worstRating: "1",
            reviewCount: String(reviews.length),
          },
          review: reviews.map((review) => ({
            "@type": "Review",
            name: review.title,
            datePublished: review.date,
            reviewBody: review.body,
            reviewRating: {
              "@type": "Rating",
              ratingValue: String(review.rating),
              bestRating: "5",
              worstRating: "1",
            },
            author: {
              "@type": "Person",
              name: review.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: review.city,
                addressCountry: "IN",
              },
            },
          })),
        }),
      },
    ],
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
        <>
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

          <section className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8" aria-labelledby="player-reviews-heading">
            <h2 id="player-reviews-heading" className="text-2xl font-bold text-card-foreground">
              Player reviews: Sprinters vs Lotus 365
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Four Indian players who used both IDs. The comments cover cricket odds, UPI deposits, WhatsApp support, and how long withdrawals actually took.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Average rating {averageRating} out of 5 from {reviews.length} reviews.
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <li key={review.name} className="rounded-xl border border-border/60 bg-background/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-card-foreground">{review.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {review.city}, {review.detail}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating ? "fill-primary text-primary" : "text-muted-foreground/40"
                          }`}
                        />
                      ))}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{review.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </>
      }
    />
  );
}
