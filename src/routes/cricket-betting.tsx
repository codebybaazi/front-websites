import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { abs } from "@/lib/site-url";

const FAQS = [
  {
    q: "How do I get an online cricket betting ID in India?",
    a: "Message the Sprinters support desk on WhatsApp, share your name and mobile number, complete OTP verification and load your wallet via UPI. Your cricket ID is delivered on WhatsApp the moment your first deposit is confirmed — usually inside 5 minutes.",
  },
  {
    q: "Which cricket tournaments can I bet on?",
    a: "IPL 2027, T20 World Cup, ODI World Cup, Champions Trophy, every India bilateral series, The Ashes, PSL, Big Bash League, CPL, The Hundred, Ranji Trophy and women's cricket including WPL — all under one Sprinters cricket ID.",
  },
  {
    q: "What cricket betting markets does Sprinters offer?",
    a: "Match winner, series winner, top batter, top bowler, player of the match, over/under runs, session runs, fall of wicket, method of dismissal, powerplay totals and live fancy markets — with cash-out on most in-play matches.",
  },
  {
    q: "How fast are cricket betting withdrawals?",
    a: "Withdrawal requests are processed within 24 hours, straight to your UPI, GPay, PhonePe, Paytm or bank account. No hidden fees and no minimum lock-in.",
  },
  {
    q: "Is online cricket betting safe with Sprinters?",
    a: "Yes. Every Sprinters ID is OTP-verified with encrypted login, and account details are never shared. Support runs 24/7 on WhatsApp and Telegram in Hindi and English.",
  },
];

export const Route = createFileRoute("/cricket-betting")({
  head: () => ({
    meta: [
      { title: "Cricket Betting ID India — IPL, T20 & ODI | Sprinters" },
      { name: "description", content: "Verified ID for IPL, ICC events and international matches. Live odds, fancy markets and 24-hour UPI payouts." },
      { property: "og:title", content: "Cricket Betting ID in India | Sprinters" },
      { property: "og:description", content: "Sharpest odds across IPL, T20, ODI and Test formats — with one verified Sprinters account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/cricket-betting" },
    ],
    links: [{ rel: "canonical", href: "/cricket-betting" }],
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
          ],
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Online Cricket Betting"
      title="India's Trusted Online Cricket Betting ID"
      intro="Online cricket betting on IPL blockbusters, ICC finals, international bilaterals and women's cricket — one verified Sprinters cricket ID covers every ball, every session, every market."
      sections={[
        {
          heading: "Every tournament, one ID",
          bullets: [
            "IPL 2027 — match, series and player-specific markets",
            "ICC events — T20 World Cup, ODI World Cup, Champions Trophy",
            "International bilaterals across all formats",
            "Domestic — Ranji Trophy, Vijay Hazare, SMAT, PSL, BBL, CPL",
            "Women's cricket — WPL, ICC women's events",
          ],
        },
        {
          heading: "Markets that matter",
          body: "Match winner, top batter, top bowler, over/under, session runs, fall of wicket, method of dismissal, fancy markets — all live, with fast cash-out.",
        },
        {
          heading: "Why Sprinters for cricket",
          bullets: [
            "Live streaming on select matches",
            "Real-time odds refreshed every ball",
            "24-hour withdrawals to UPI or bank",
            "Dedicated cricket support desk in Hindi and English",
          ],
        },
        ...FAQS.map((f) => ({ heading: f.q, body: f.a })),
      ]}
    />
  ),
});
