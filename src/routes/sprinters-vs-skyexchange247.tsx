import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";

const rows: { feature: string; sprinters: string; sky: string }[] = [
  { feature: "Brand focus", sprinters: "Cricket-first Indian ID provider", sky: "Global exchange with wide sportsbook" },
  { feature: "Sports coverage", sprinters: "Cricket, football, tennis, kabaddi, horse racing", sky: "Cricket, football, tennis, greyhounds, e-sports" },
  { feature: "Live casino", sprinters: "Evolution, Ezugi + Indian card games", sky: "Evolution, Ezugi, Supernowa" },
  { feature: "Odds & margins", sprinters: "Sharp cricket odds, exchange-style pricing", sky: "True exchange odds, market-driven" },
  { feature: "Deposits", sprinters: "UPI, IMPS, NEFT — ~1 min", sky: "UPI, NetBanking, cards — 2–5 min" },
  { feature: "Withdrawals", sprinters: "Same-day via concierge", sky: "Usually within 24 hrs" },
  { feature: "Support", sprinters: "Dedicated WhatsApp manager, 24/7", sky: "Live chat & email" },
  { feature: "Minimum deposit", sprinters: "₹100", sky: "₹300" },
  { feature: "Bonus style", sprinters: "Loss-back & cashback via manager", sky: "Standard welcome + referral" },
  { feature: "Onboarding", sprinters: "ID delivered on WhatsApp in minutes", sky: "Self signup on platform" },
  { feature: "Commission on exchange", sprinters: "0–2% on cricket markets", sky: "2–5% based on market" },
  { feature: "Mobile experience", sprinters: "PWA + WhatsApp workflow", sky: "Responsive web + app" },
  { feature: "KYC", sprinters: "Light KYC via WhatsApp", sky: "Standard document upload" },
  { feature: "India target market", sprinters: "Built for Indian punters", sky: "Global platform, India-friendly" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Which is better for cricket betting — Sprinters Book or Skyexchange 247?",
    a: "For IPL, T20 World Cup, Asia Cup and bilateral series, Sprinters Book offers sharper exchange-style cricket odds, ₹100 minimum deposit and same-day UPI withdrawals with a personal WhatsApp manager. Skyexchange 247 is a true exchange with broader global markets but higher deposit thresholds and slower support.",
  },
  {
    q: "Is Skyexchange 247 legal in India?",
    a: "Betting exchanges like Skyexchange 247 and Sprinters Book operate in a grey area under Indian law. Both are offshore platforms accepting Indian users, but you should always check your state's gambling laws before creating an account.",
  },
  {
    q: "What is the minimum deposit on Sprinters Book vs Skyexchange 247?",
    a: "Sprinters Book has a ₹100 minimum deposit via UPI. Skyexchange 247 typically requires ₹300 or more depending on the payment method.",
  },
  {
    q: "How fast are withdrawals on each platform?",
    a: "Sprinters Book processes withdrawals same-day via its concierge team on WhatsApp. Skyexchange 247 usually completes withdrawals within 24 hours through its self-serve dashboard.",
  },
  {
    q: "Which has better bonuses and cashback?",
    a: "Sprinters Book offers loss-back and cashback promotions negotiated through the WhatsApp manager, tailored to your play. Skyexchange 247 runs standard welcome and referral bonuses.",
  },
  {
    q: "Can I get a Sprinters Book ID as a Skyexchange 247 alternative?",
    a: "Yes — Sprinters Book is one of the most popular Skyexchange 247 alternatives in India. Message the WhatsApp team and you'll get a Sprinters ID in minutes with a ₹100 minimum deposit.",
  },
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
    name: "Sandeep Nair",
    city: "Kochi",
    detail: "IPL fancy and session markets",
    date: "2026-02-27",
    rating: 5,
    title: "Lower cricket commission on over-by-over",
    body: "I traded over-by-over and session runs on Skyexchange 247 for two seasons. Commission on those cricket markets sat closer to 4% for me. On Sprinters the same IPL lines came in around 1 to 2%. That gap is what I keep after a week of session bets. At 11pm, if a market hung, I messaged WhatsApp instead of waiting in live chat.",
  },
  {
    name: "Priya Menon",
    city: "Bengaluru",
    detail: "India T20s, new to exchange IDs",
    date: "2026-04-09",
    rating: 5,
    title: "ID on WhatsApp, started at ₹100",
    body: "Skyexchange 247 wanted ₹300 and a document upload before I could place a bet. I sent Sprinters a WhatsApp, paid ₹100 on UPI, and had the login in under twenty minutes. Light KYC in chat was enough to get going. I mostly need India T20 markets, and someone who answers in Kannada or English when a deposit sits.",
  },
  {
    name: "Arjun Patel",
    city: "Ahmedabad",
    detail: "Exchange trader, cricket and tennis",
    date: "2026-06-03",
    rating: 4,
    title: "Kept Sky for tennis, moved cricket to Sprinters",
    body: "Skyexchange 247 is cleaner if you live in the back and lay ladder. Tennis Challenger depth is better there, and I still keep a small balance for that. Cricket is where I spend. Fancy markets on Sprinters fill faster during India matches, and same-day UPI beats waiting on the Sky dashboard overnight. I would not tell a pure tennis trader to leave Sky. For IPL, I use Sprinters.",
  },
  {
    name: "Kabir Hussain",
    city: "Lucknow",
    detail: "Cricket and live casino",
    date: "2026-08-19",
    rating: 5,
    title: "Withdrawal the same afternoon, not the next day",
    body: "I compared Sprinters Book vs Skyexchange 247 over Asia Cup week. A Sky withdrawal I raised after lunch showed as pending until the next morning. On Sprinters I messaged the manager at 3pm and the UPI hit before evening aarti. Cashback was a chat. Sky ran a referral code on a banner. Casino tables are similar, Evolution on both.",
  },
];

const averageRating = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

const title = "Sprinters Book vs Skyexchange 247 — Full Comparison (2026)";
const description =
  "Sprinters Book vs Skyexchange 247 compared: cricket odds, deposits, withdrawals, casino, support and player reviews. Pick the right betting exchange ID.";

export const Route = createFileRoute("/sprinters-vs-skyexchange247")({
  head: () => ({
    meta: [
      { title: title.slice(0, 60) },
      { name: "description", content: description.slice(0, 160) },
      {
        name: "keywords",
        content:
          "sprinters book vs skyexchange 247, skyexchange 247 alternative, skyexchange 247 vs sprinters, skyexchange247 review India, sprinters book review, cricket betting exchange India, IPL betting exchange, skyexchange 247 withdrawal, WhatsApp betting ID India",
      },
      { property: "og:title", content: "Sprinters Book vs Skyexchange 247 — Full Comparison" },
      { property: "og:description", content: description.slice(0, 160) },
      { property: "og:type", content: "article" },
      { property: "og:url", content: abs("/sprinters-vs-skyexchange247") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sprinters-vs-skyexchange247" }],
    scripts: [
        ...(buildPageFaqLd("/sprinters-vs-skyexchange247") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/sprinters-vs-skyexchange247")) }] : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
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
          "@type": "Article",
          headline: title,
          description,
          author: { "@type": "Organization", name: "Sprinters Online Gaming" },
          publisher: { "@type": "Organization", name: "Sprinters Online Gaming" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Sprinters Book betting ID",
          description:
            "Sprinters Book vs Skyexchange 247 player reviews covering cricket commission, UPI deposits, WhatsApp support and same-day withdrawals.",
          brand: { "@type": "Brand", name: "Sprinters Book" },
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
      title="Sprinters Book vs Skyexchange 247"
      intro="Both are popular with Indian punters, but they serve very different players. Here's an honest side-by-side to help you decide which betting exchange fits you best in 2026."
      sections={[
        {
          heading: "Quick verdict",
          body: "Choose Sprinters Book if you want sharp cricket odds, a personal WhatsApp manager and same-day withdrawals starting from a ₹100 deposit. Choose Skyexchange 247 if you prefer a true exchange interface with global market depth, self-serve onboarding and don't mind higher deposit thresholds.",
        },
        {
          heading: "Cricket odds and market depth",
          body: "Both platforms price cricket markets exchange-style, but Sprinters Book is built India-first — sharper lines on IPL, T20 World Cup, Asia Cup and bilateral series, plus fancy markets (over-by-over, wicket, session runs) that Indian punters trade daily. Skyexchange 247 has global depth but treats cricket as one sport among many.",
        },
        {
          heading: "Deposits, withdrawals and payment speed",
          body: "Sprinters Book accepts UPI, IMPS and NEFT with a ₹100 minimum and typically credits within a minute. Withdrawals are same-day via the concierge team on WhatsApp. Skyexchange 247 requires ₹300+ and uses a self-serve dashboard where withdrawals usually clear inside 24 hours.",
        },
        {
          heading: "Support and account management",
          body: "Sprinters gives every user a dedicated WhatsApp manager 24/7 — bonus negotiation, deposit help and withdrawal escalation happen in chat. Skyexchange 247 uses live chat and email; response quality is decent but there's no relationship model.",
        },
        {
          heading: "Who should pick Sprinters Book",
          bullets: [
            "Cricket-first punters who value exchange-style odds",
            "Players who want a WhatsApp manager, not a support ticket",
            "Anyone needing same-day payouts via UPI",
            "New users starting with a ₹100 minimum deposit",
            "Bettors who want negotiated cashback and loss-back deals",
          ],
        },
        {
          heading: "Who should pick Skyexchange 247",
          bullets: [
            "Traders who prefer a pure exchange back-and-lay experience",
            "Users comfortable with self-serve signup and dashboards",
            "Bettors chasing depth in football and tennis markets",
            "Players okay with 24-hour withdrawal windows",
            "Users who don't need concierge-style support",
          ],
        },
        {
          heading: "Frequently asked questions",
          body: faqs.map((f) => `${f.q} — ${f.a}`).join("\n\n"),
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
                    <th className="p-4 font-semibold text-primary">Sprinters Book</th>
                    <th className="p-4 font-semibold text-card-foreground">Skyexchange 247</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.feature} className="border-b border-border/60 last:border-0">
                      <td className="p-4 font-medium text-card-foreground">{r.feature}</td>
                      <td className="p-4 text-muted-foreground">{r.sprinters}</td>
                      <td className="p-4 text-muted-foreground">{r.sky}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <section className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8" aria-labelledby="player-reviews-heading">
            <h2 id="player-reviews-heading" className="text-2xl font-bold text-card-foreground">
              Player reviews: Sprinters Book vs Skyexchange 247
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Four Indian players who used both exchanges. They talk about cricket commission, the ₹100 vs ₹300 deposit, WhatsApp onboarding, and how long a UPI withdrawal took.
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
