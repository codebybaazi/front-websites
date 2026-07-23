import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { abs } from "@/lib/site-url";

const FAQS = [
  { q: "Do I need to download an APK?", a: "No. The Sprinters platform runs directly in your Android or iOS browser — log in and start playing in under 5 minutes." },
  { q: "How do I get a Sprinters ID?", a: "Message us on WhatsApp, share your name and mobile number, verify with OTP and deposit via UPI. Your ID is delivered on WhatsApp instantly." },
  { q: "Which markets are available?", a: "IPL 2027, T20 World Cup, ODI World Cup and every bilateral — match winner, top batter, top bowler, session runs, fancy bets and ball-by-ball in-play odds." },
  { q: "Are deposits and withdrawals instant?", a: "Deposits via UPI, GPay, PhonePe and Paytm reflect in seconds. Withdrawals are processed within 24 hours straight to your bank." },
];

export const Route = createFileRoute("/cricket-betting-app")({
  head: () => ({
    meta: [
      { title: "Cricket Betting App in India — Sprinters ID" },
      { name: "description", content: "Bet on IPL, T20 and international cricket from your phone. Verified Sprinters ID, instant UPI deposits and 24-hour withdrawals." },
      { property: "og:title", content: "Cricket Betting App in India | Sprinters" },
      { property: "og:description", content: "Live IPL odds, fancy markets and 24-hour payouts on mobile. Get your Sprinters ID on WhatsApp in minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/cricket-betting-app" },
    ],
    links: [{ rel: "canonical", href: "/cricket-betting-app" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
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
            { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
            { "@type": "ListItem", position: 2, name: "Cricket Betting", item: abs("/cricket-betting") },
            { "@type": "ListItem", position: 3, name: "Cricket Betting App", item: abs("/cricket-betting-app") },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Cricket Betting App"
      title="The Fastest Cricket Betting App in India"
      intro="Sprinters turns your phone into a full sportsbook. Live IPL odds, fancy markets, session bets and 24-hour withdrawals — all through one verified ID delivered on WhatsApp."
      sections={[
        {
          heading: "Why players choose Sprinters on mobile",
          bullets: [
            "Mobile-first live odds refreshed every ball",
            "IPL 2027, T20 World Cup, ODI World Cup and every bilateral",
            "Fancy Bets, session runs, top batter & top bowler markets",
            "One ID works across Laser247, Tiger Exch, Cricbet99, 11xplay",
            "Instant UPI, GPay, PhonePe & Paytm deposits",
            "24-hour withdrawals straight to your bank",
          ],
        },
        {
          heading: "How to get your ID",
          body: "No clunky APK to install. Message us on WhatsApp, share your name and mobile number, verify with OTP, and your ID lands on your phone the moment your first deposit clears. Log in from any Android or iOS browser and you're placing wagers in under 5 minutes.",
        },
        {
          heading: "Markets available on the app",
          bullets: [
            "Match winner, series winner, tournament outright",
            "Top batter, top bowler and player-of-the-match",
            "Over/under runs, session runs, fall-of-wicket",
            "Method of dismissal and next-ball markets",
            "Live in-play cash-out on every match",
          ],
        },
        {
          heading: "Safe, secure and India-ready",
          bullets: [
            "OTP-verified ID with encrypted login",
            "Real human support on WhatsApp & Telegram, 24/7",
            "Hindi and English support desks",
            "Responsible gambling limits available on request",
          ],
        },
        ...FAQS.map((f) => ({ heading: f.q, body: f.a })),
      ]}
    />
  ),
});
