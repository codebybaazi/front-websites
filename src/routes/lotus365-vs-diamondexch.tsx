import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-diamondexch",
  rival: "Diamondexch9",
  intro: "There's no self-serve signup on Diamondexch9. Every deposit and withdrawal routes through a super-agent. Lotus365 skips that step.",
  aiOverview: {
    summary: "Diamondexch9 requires an agent for everything from onboarding to cashouts, with settlement typically taking 6 to 24 hours. Lotus365 gives you a direct wallet and instant UPI payouts instead. This overview covers account access, payout speed and casino depth.",
    points: [
      "Self-serve WhatsApp onboarding versus agent-only sign-up on Diamondexch9",
      "UPI payouts averaging under 4 minutes versus 6-24 hour agent settlement",
      "Four live casino studios versus Evolution alone",
      "A direct wallet you control instead of an agent-held balance",
    ],
  },
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
  reviews: [
    {
      name: "Rajesh Malhotra",
      location: "Mumbai",
      rating: 5,
      date: "2026-02-18",
      title: "No more waiting on my agent to come online",
      body: "My Diamondexch9 agent worked evenings, so any withdrawal I placed after midnight sat there till the next afternoon. That's fine until you're chasing a Champions League payout at 1am. Lotus365 gave me a wallet I control myself, and the UPI transfer landed in about four minutes when I tested it.",
    },
    {
      name: "Sneha Iyer",
      location: "Pune",
      rating: 5,
      date: "2026-01-25",
      title: "Casino selection is a lot wider here",
      body: "Diamondexch9 only ran Evolution tables, which got repetitive fast. Lotus365 has Evolution plus Ezugi, Pragmatic and Amazing Gaming, so there's actual variety on a Friday night. Switched over about a month ago and haven't looked back.",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 4,
      date: "2026-02-05",
      title: "Finally have support that doesn't disappear",
      body: "My agent went silent for almost two days once and I had no other way to reach anyone about my balance. On Lotus365 the WhatsApp concierge is there around the clock, so if something's off I get an actual answer instead of radio silence. Docking one star only because I still miss the informal rakeback deals I used to negotiate directly.",
    },
    {
      name: "Farhan Sheikh",
      location: "Chennai",
      rating: 5,
      date: "2026-02-27",
      title: "Direct UPI deposits without going through anyone",
      body: "Every top-up on Diamondexch9 meant messaging my agent, waiting for a UPI ID, and hoping the ₹500 minimum wasn't an issue that week. With Lotus365 I deposit ₹100 straight through my own UPI app, no middleman, no waiting for someone else's confirmation.",
    },
  ],
};

export const Route = createFileRoute("/lotus365-vs-diamondexch")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});