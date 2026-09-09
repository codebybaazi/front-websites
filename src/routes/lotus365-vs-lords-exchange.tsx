import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-lords-exchange",
  rival: "Lords Exchange",
  intro: "Lords Exchange has no self-serve path at all: sign-up, deposits and withdrawals all go through an agent. Lotus365 hands you the wallet directly.",
  aiOverview: {
    summary: "Lords Exchange is fully agent-driven, so your experience depends on how responsive your agent is. Lotus365 replaces that with a direct wallet and a concierge that's always reachable. This overview covers onboarding, payout speed and support.",
    points: [
      "Self-serve WhatsApp onboarding versus agent-driven sign-up on Lords Exchange",
      "UPI payouts averaging under 4 minutes versus 4-24 hour agent settlement",
      "A persistent WhatsApp concierge instead of depending on one agent's availability",
      "Lotus Club cashback and free bets versus agent-negotiated rakeback",
    ],
  },
  rows: [
    { feature: "Account setup", lotus: "60-second WhatsApp onboarding with concierge", rival: "Agent-driven signup, no self-serve" },
    { feature: "Minimum deposit", lotus: "₹100 via UPI / IMPS / Net-banking", rival: "₹500+ typical, agent-mediated" },
    { feature: "Withdrawal speed", lotus: "Instant UPI, avg. under 4 minutes", rival: "Agent settlement, 4–24 hours" },
    { feature: "Cricket odds", lotus: "Fancy, session, lambi, bookmaker + exchange", rival: "Exchange + basic fancy" },
    { feature: "Live casino studios", lotus: "Evolution, Ezugi, Pragmatic, Amazing Gaming", rival: "Evolution + Ezugi" },
    { feature: "Support", lotus: "24/7 WhatsApp + Telegram, sub-2-min", rival: "Depends on agent availability" },
    { feature: "Transparency", lotus: "Direct wallet you own", rival: "Agent-held balance" },
    { feature: "Mobile app", lotus: "Native Android APK + iOS PWA", rival: "Web wrapper" },
    { feature: "Loyalty programme", lotus: "Lotus Club tiers, cashback + free bets", rival: "Agent-negotiated rakeback" },
    { feature: "Responsible-play tools", lotus: "Deposit caps, session timers, self-exclude", rival: "Minimal" },
  ],
  narratives: [
    { title: "Own your wallet", body: "Lotus365 keeps your balance in a direct segregated wallet with instant UPI in and out. Lords Exchange balances sit with an agent — recovery depends on that agent." },
    { title: "Deeper cricket book", body: "Lotus365 opens 40+ fancy markets per IPL match versus Lords Exchange's thinner book that closes earlier at the death." },
    { title: "Persistent support", body: "Lotus365 concierge is one WhatsApp handle available 24/7. On Lords Exchange, if your agent is offline your only fallback is another agent." },
    { title: "Loyalty that carries over", body: "Lotus Club tiers unlock weekly cashback and birthday bonuses that don't require agent negotiation." },
  ],
  faq: [
    { q: "Is Lotus365 safer than Lords Exchange?", a: "Lotus365 uses a direct segregated wallet with 256-bit TLS and human-signed withdrawals. Lords Exchange keeps your balance with an agent, so safety depends on that agent's reliability." },
    { q: "How fast are Lotus365 payouts vs Lords Exchange?", a: "Lotus365 averages under 4 minutes on UPI. Lords Exchange payouts run on agent settlement, typically 4–24 hours." },
    { q: "Can I sign up without an agent?", a: "Yes on Lotus365 — message the concierge on WhatsApp and you're onboarded in 60 seconds. Lords Exchange needs an agent." },
    { q: "How do I switch from Lords Exchange?", a: "Settle with your agent, then WhatsApp the Lotus365 concierge — we'll match your last-tier benefits on first deposit." },
  ],
  reviews: [
    {
      name: "Pooja Desai",
      location: "Surat",
      rating: 5,
      date: "2026-02-08",
      title: "Tired of asking my agent for permission to withdraw",
      body: "Every cashout on Lords Exchange meant texting my agent and then waiting, sometimes close to a full day if it was a busy weekend. Lotus365 gave me a wallet I actually control. First withdrawal I tried came through in under four minutes and I didn't need to message anyone first.",
    },
    {
      name: "Karan Bhatt",
      location: "Indore",
      rating: 5,
      date: "2026-01-22",
      title: "My old agent went quiet for two days",
      body: "There was a stretch where my Lords Exchange agent just stopped replying, and I had no idea if my balance was even safe. That's what pushed me to Lotus365. The WhatsApp concierge is a fixed number, not a person who can disappear, and someone's answered every time I've messaged.",
    },
    {
      name: "Anita Menon",
      location: "Thiruvananthapuram",
      rating: 4,
      date: "2026-02-19",
      title: "₹100 deposits instead of negotiating with an agent",
      body: "Lords Exchange wanted ₹500 minimum and I had to route it through my agent's UPI ID, which never felt fully comfortable. On Lotus365 I deposit ₹100 directly from my own account whenever I want. Taking one star off only because I still miss having someone to haggle rakeback with directly.",
    },
    {
      name: "Rohan Kulkarni",
      location: "Nashik",
      rating: 5,
      date: "2026-03-04",
      title: "Fancy markets stay open a lot longer here",
      body: "Lords Exchange closed most fancy and session lines well before the death overs, which is exactly when I want to be betting. Lotus365 keeps 40-plus fancy markets running per IPL match and they stay open much later into the innings. Made the switch permanent after one weekend of testing it.",
    },
  ],
};

export const Route = createFileRoute("/lotus365-vs-lords-exchange")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});