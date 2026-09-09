import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-betbook247",
  rival: "Betbook247",
  intro: "Betbook247 runs on an agent network, so your deposits, withdrawals and even sign-up wait on someone else's availability. Lotus365 cuts the agent out entirely.",
  aiOverview: {
    summary: "Betbook247 is agent-mediated end to end, from KYC to withdrawals. Lotus365 replaces that chain with a direct wallet and a WhatsApp concierge you can reach any hour. This overview covers onboarding, payout speed and loyalty.",
    points: [
      "Direct self-serve wallet versus agent-held balances on Betbook247",
      "UPI payouts averaging under 4 minutes versus 4-12 hour agent settlement",
      "Lotus Club cashback and free bets versus rakeback negotiated per agent",
      "One persistent WhatsApp concierge instead of relying on agent availability",
    ],
  },
  rows: [
    { feature: "Account setup", lotus: "60-second WhatsApp onboarding, human concierge", rival: "Agent signup, manual KYC" },
    { feature: "Minimum deposit", lotus: "₹100 via UPI / IMPS / Net-banking", rival: "₹500+ via agent" },
    { feature: "Withdrawal speed", lotus: "Instant UPI, avg. under 4 minutes", rival: "Agent settlement, 4–12 hours" },
    { feature: "Cricket odds", lotus: "40+ fancy per IPL, exchange + bookmaker", rival: "Exchange + basic fancy" },
    { feature: "Live casino studios", lotus: "Evolution, Ezugi, Pragmatic, Amazing Gaming", rival: "Evolution + Ezugi" },
    { feature: "Support", lotus: "24/7 WhatsApp + Telegram, sub-2-min reply", rival: "Agent + basic web chat" },
    { feature: "Transparency", lotus: "Direct wallet you own", rival: "Agent-held balance" },
    { feature: "Mobile app", lotus: "Native Android APK + iOS PWA", rival: "Web wrapper" },
    { feature: "Loyalty programme", lotus: "Lotus Club tiers, cashback + free bets", rival: "Agent-negotiated rakeback" },
    { feature: "Responsible-play tools", lotus: "Deposit caps, session timers, self-exclude", rival: "Minimal" },
  ],
  narratives: [
    { title: "Skip the agent line", body: "Lotus365 gives you a direct self-serve wallet with instant UPI in and out. Betbook247 is agent-driven, so deposits and cashouts wait on your line to a super-agent." },
    { title: "Deeper cricket book", body: "Lotus365 opens 40+ fancy markets per IPL match. Betbook247 rides the raw exchange feed with fewer session and lambi options." },
    { title: "Persistent concierge", body: "Lotus365 concierge is one WhatsApp handle available 24/7. On Betbook247, agent availability drives your support experience." },
    { title: "Loyalty without negotiation", body: "Lotus Club tiers unlock weekly cashback, free bets and birthday bonuses that don't require haggling with an agent." },
  ],
  faq: [
    { q: "Is Lotus365 safer than Betbook247?", a: "Yes — Lotus365 holds your balance directly with 256-bit TLS and human-signed withdrawals. Betbook247 balances sit with an agent." },
    { q: "Which pays out faster?", a: "Lotus365 averages under 4 minutes on UPI. Betbook247 relies on agent settlement, typically 4–12 hours." },
    { q: "Do I need an agent for Lotus365?", a: "No — the concierge onboards you on WhatsApp in 60 seconds with no intermediary." },
    { q: "How do I switch from Betbook247?", a: "Settle with your agent, then WhatsApp the Lotus365 concierge — we'll match your last-tier benefits on first deposit." },
  ],
  reviews: [
    {
      name: "Tanvi Rathore",
      location: "Udaipur",
      rating: 5,
      date: "2026-02-11",
      title: "Signing up without an agent felt like a relief",
      body: "Every step on Betbook247 went through my agent, even the KYC, which meant sending my documents to someone I'd only spoken to on the phone. Lotus365's WhatsApp onboarding took under a minute and I never had to hand anything to a third party. That alone was worth the switch.",
    },
    {
      name: "Imran Qureshi",
      location: "Bhubaneswar",
      rating: 5,
      date: "2026-01-27",
      title: "₹100 to start instead of ₹500 through an agent",
      body: "Betbook247's agent wanted ₹500 minimum routed through his own UPI ID, which never sat right with me. On Lotus365 I deposit ₹100 straight from my bank account whenever I feel like testing a match, no agent involved at any point.",
    },
    {
      name: "Lakshmi Venkatesh",
      location: "Mysuru",
      rating: 4,
      date: "2026-02-23",
      title: "Withdrawals in minutes, not half a day",
      body: "My Betbook247 agent settled withdrawals whenever he got around to it, usually somewhere between four and twelve hours later. Lotus365's UPI payouts have cleared in under four minutes every time I've tried it. Four stars only because I'm still getting used to not having someone to call directly.",
    },
    {
      name: "Abhishek Joshi",
      location: "Dehradun",
      rating: 5,
      date: "2026-03-05",
      title: "Cashback that doesn't depend on how well I know my agent",
      body: "Rakeback on Betbook247 came down to how much my agent liked me that week, which is a strange way to run a loyalty program. Lotus Club gives everyone the same weekly cashback and free bets on a fixed tier system. Feels a lot fairer, and I know exactly what I'm getting before the week starts.",
    },
  ],
};

export const Route = createFileRoute("/lotus365-vs-betbook247")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});