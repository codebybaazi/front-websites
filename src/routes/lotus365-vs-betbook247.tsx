import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-betbook247",
  rival: "Betbook247",
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
};

export const Route = createFileRoute("/lotus365-vs-betbook247")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});