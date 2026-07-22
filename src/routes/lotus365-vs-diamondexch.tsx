import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-diamondexch",
  rival: "Diamondexch9",
  rows: [
    { feature: "Account setup", lotus: "60-second WhatsApp onboarding with a concierge", rival: "Agent-only sign-up, no direct web signup" },
    { feature: "Minimum deposit", lotus: "₹100 via UPI / IMPS / Net-banking", rival: "₹500+ typical, agent-mediated top-ups" },
    { feature: "Withdrawal speed", lotus: "Instant UPI payouts, avg. under 4 minutes", rival: "Agent settlement window, often 6–24 hours" },
    { feature: "Cricket odds", lotus: "Fancy, session, lambi, bookmaker + exchange", rival: "Exchange + limited fancy lines" },
    { feature: "Live casino studios", lotus: "Evolution, Ezugi, Pragmatic, Amazing Gaming", rival: "Evolution only" },
    { feature: "Support", lotus: "24/7 WhatsApp + Telegram, sub-2-min reply", rival: "Depends on your agent's availability" },
    { feature: "Transparency", lotus: "Direct wallet you control", rival: "Agent-held balance, manual reconciliation" },
    { feature: "Mobile app", lotus: "Native Android APK + iOS PWA", rival: "Web wrapper only" },
    { feature: "Loyalty programme", lotus: "Tiered Lotus Club, cashback + free bets", rival: "Rakeback negotiated per agent" },
    { feature: "Responsible-play tools", lotus: "Deposit caps, session timers, self-exclude", rival: "Not surfaced" },
  ],
  narratives: [
    { title: "No middle-agent bottleneck", body: "Lotus365 gives you a direct wallet with instant UPI in and out. Diamondexch9 is agent-driven, so deposits and withdrawals wait on your line to a super-agent — great when they're online, painful at 2am." },
    { title: "Deeper cricket book", body: "Lotus365 opens 40+ fancy lines per IPL match. Diamondexch9 stays closer to the raw exchange feed with fewer session and lambi options." },
    { title: "Human support you own", body: "The Lotus365 concierge is a persistent WhatsApp handle you can message back anytime. On Diamondexch9, if your agent goes offline you have no fallback." },
    { title: "Loyalty that pays back", body: "Lotus Club unlocks weekly cashback, free bets and birthday bonuses that don't reset if you take a break — no agent negotiation required." },
  ],
  faq: [
    { q: "Is Lotus365 safer than Diamondexch9?", a: "Yes — Lotus365 holds your balance in a direct, segregated wallet with 256-bit TLS and human-signed withdrawals. Diamondexch9 balances sit with an agent, so recovery depends on that agent's honesty." },
    { q: "Which platform pays out faster?", a: "Lotus365 averages under 4 minutes on UPI up to ₹1 lakh. Diamondexch9 payouts wait on agent settlement, typically 6–24 hours." },
    { q: "Can I self-serve on Diamondexch9?", a: "No — Diamondexch9 requires an agent for onboarding, deposits and withdrawals. Lotus365 gives you a self-serve dashboard with concierge support on demand." },
    { q: "Can I switch from Diamondexch9 to Lotus365?", a: "Settle with your agent first, then message the Lotus365 concierge on WhatsApp — we'll match your last-tier benefits on first deposit." },
  ],
};

export const Route = createFileRoute("/lotus365-vs-diamondexch")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});