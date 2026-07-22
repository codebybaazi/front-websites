import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-lords-exchange",
  rival: "Lords Exchange",
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
};

export const Route = createFileRoute("/lotus365-vs-lords-exchange")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});