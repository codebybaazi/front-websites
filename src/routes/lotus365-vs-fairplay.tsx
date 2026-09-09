import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-fairplay",
  rival: "Fairplay",
  intro: "Fairplay's welcome bonus looks solid on day one, but there's no ongoing loyalty tier after that. Here's how the rest of the platform holds up next to Lotus365.",
  aiOverview: {
    summary: "Fairplay front-loads its value into a single welcome bonus and reviews withdrawals manually for up to 6 hours. Lotus365 pairs faster payouts with an ongoing rewards tier. This overview compares payout speed, loyalty and app coverage.",
    points: [
      "UPI payouts averaging under 4 minutes versus 1-6 hour manual review on Fairplay",
      "Weekly Lotus Club cashback versus a one-off welcome bonus with no ongoing tiers",
      "Native iOS PWA and Android APK versus Android-only on Fairplay",
      "40+ IPL fancy markets versus a smaller, book-first fancy line",
    ],
  },
  rows: [
    { feature: "Account setup", lotus: "60-second WhatsApp onboarding, human concierge", rival: "Web signup + email KYC" },
    { feature: "Minimum deposit", lotus: "₹100 via UPI / IMPS / Net-banking", rival: "₹300 minimum on UPI" },
    { feature: "Withdrawal speed", lotus: "Instant UPI, avg. under 4 minutes", rival: "1–6 hour manual review" },
    { feature: "Cricket odds", lotus: "40+ fancy per IPL match, exchange + book", rival: "Book + limited fancy" },
    { feature: "Live casino studios", lotus: "Evolution, Ezugi, Pragmatic, Amazing Gaming", rival: "Evolution + Pragmatic" },
    { feature: "Support", lotus: "24/7 WhatsApp + Telegram, sub-2-min reply", rival: "Live chat with queue" },
    { feature: "Multi-language", lotus: "Hindi, English, Tamil, Telugu, Bengali", rival: "English + Hindi" },
    { feature: "Loyalty programme", lotus: "Lotus Club tiers, cashback + free bets", rival: "Welcome bonus only, no ongoing tiers" },
    { feature: "Mobile app", lotus: "Native Android APK + iOS PWA", rival: "Android APK, no iOS PWA" },
    { feature: "Responsible-play tools", lotus: "Deposit caps, session timers, self-exclude", rival: "Deposit caps only" },
  ],
  narratives: [
    { title: "Faster money movement", body: "Lotus365 UPI withdrawals settle in under four minutes on dedicated bank rails. Fairplay routes through a single processor with 1–6 hour review windows." },
    { title: "Deeper cricket book", body: "Lotus365 opens 40+ fancy lines per IPL match. Fairplay leans on a book-first model with a smaller fancy market count." },
    { title: "Ongoing loyalty, not just a welcome", body: "Lotus Club keeps rewarding you every week with cashback and free bets. Fairplay's headline bonus is a one-off welcome offer." },
    { title: "Real humans on WhatsApp", body: "The Lotus365 concierge answers on WhatsApp and Telegram 24/7 in under two minutes. Fairplay's chat routes through a queue." },
  ],
  faq: [
    { q: "Which is better for IPL — Lotus365 or Fairplay?", a: "Lotus365 opens 40+ fancy markets per IPL match and holds them open deeper into the death overs, while Fairplay stays closer to the book with fewer fancy lines." },
    { q: "Is Lotus365 payout faster than Fairplay?", a: "Yes — Lotus365 averages under 4 minutes on UPI, Fairplay lists 1–6 hour manual review windows." },
    { q: "Do both support UPI?", a: "Both support UPI, but Lotus365 accepts a wider set of apps and starts at ₹100 vs Fairplay's ₹300 minimum." },
    { q: "Can I move from Fairplay to Lotus365?", a: "Withdraw from Fairplay, then WhatsApp the Lotus365 concierge — we'll match your last-tier benefits on first deposit." },
  ],
  reviews: [
    {
      name: "Meena Iyengar",
      location: "Bhopal",
      rating: 5,
      date: "2026-02-12",
      title: "The welcome bonus was nice, then Fairplay had nothing else",
      body: "Fairplay's sign-up offer got me in the door, but after that first week there was no ongoing reward for actually sticking around. Lotus365's Lotus Club gives me cashback every week instead of one bonus that never comes back. Small amounts each time, but it adds up over a season.",
    },
    {
      name: "Deepak Nair",
      location: "Guwahati",
      rating: 5,
      date: "2026-01-28",
      title: "₹300 minimum on Fairplay kept me from testing it properly",
      body: "I wanted to try a few small bets before committing real money, and Fairplay's ₹300 floor made that annoying. Lotus365 let me start with ₹100 on UPI, so I played a couple of low matches first and only moved more in once I trusted the platform.",
    },
    {
      name: "Yash Trivedi",
      location: "Vadodara",
      rating: 4,
      date: "2026-02-20",
      title: "No more waiting hours for a withdrawal to clear",
      body: "Fairplay's manual review could take anywhere up to six hours, and one time it landed right when I needed the cash for something else. Lotus365 pushed my last three withdrawals through in under four minutes each. Only reason it's not five stars is I still occasionally miss Fairplay's simpler app layout.",
    },
    {
      name: "Ritika Sen",
      location: "Ranchi",
      rating: 5,
      date: "2026-03-02",
      title: "Finally an iOS option that isn't a workaround",
      body: "Fairplay is Android-only, so I was stuck using my brother's phone whenever I wanted to check my account. Lotus365 has a proper iOS PWA I installed straight from Safari, and it works just like an app. Between that and the deeper fancy markets during IPL, I've fully switched over.",
    },
  ],
};

export const Route = createFileRoute("/lotus365-vs-fairplay")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});