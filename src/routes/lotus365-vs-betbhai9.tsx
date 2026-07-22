import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-betbhai9",
  rival: "Betbhai9",
  rows: [
    { feature: "Account setup", lotus: "60-second WhatsApp onboarding, human concierge", rival: "Web signup + manual KYC review" },
    { feature: "Minimum deposit", lotus: "₹100 via UPI / IMPS / Net-banking", rival: "₹300 minimum, limited UPI apps" },
    { feature: "Withdrawal speed", lotus: "Instant UPI, avg. under 4 minutes", rival: "2–12 hour manual review windows" },
    { feature: "Cricket odds", lotus: "40+ fancy per IPL match, exchange + book", rival: "Exchange-first, thinner fancy book" },
    { feature: "Live casino studios", lotus: "Evolution, Ezugi, Pragmatic, Amazing Gaming", rival: "Evolution + Ezugi" },
    { feature: "Support", lotus: "24/7 WhatsApp + Telegram, sub-2-min reply", rival: "Live chat with queue, no WhatsApp handle" },
    { feature: "Multi-language", lotus: "Hindi, English, Tamil, Telugu, Bengali", rival: "English + Hindi only" },
    { feature: "Loyalty programme", lotus: "Tiered Lotus Club with cashback + free bets", rival: "Flat turnover rakeback" },
    { feature: "Mobile app", lotus: "Native Android APK + iOS PWA", rival: "Web wrapper" },
    { feature: "Responsible-play tools", lotus: "Deposit caps, session timers, self-exclude", rival: "Basic self-exclude" },
  ],
  narratives: [
    { title: "Faster money movement", body: "Lotus365 pushes UPI withdrawals in under four minutes on dedicated HDFC/ICICI/Yes Bank rails. Betbhai9 batches payouts through a shared processor which slows peak-hour cashouts." },
    { title: "Deeper cricket book", body: "On any IPL night Lotus365 opens 40+ fancy markets — session, over, batter, lambi, partnership. Betbhai9 stops closer to 15 and closes the fancy book earlier in the death overs." },
    { title: "Real humans on WhatsApp", body: "Lotus365 concierge answers on WhatsApp and Telegram 24/7 in under two minutes. Betbhai9 sends you to a queued web chat with no persistent handle." },
    { title: "Loyalty that pays back", body: "Lotus Club unlocks weekly cashback, free bets and birthday bonuses. Betbhai9 offers only turnover rakeback that resets if you pause for two weeks." },
  ],
  faq: [
    { q: "Is Lotus365 more trustworthy than Betbhai9?", a: "Lotus365 uses 256-bit TLS, segregated player funds and human-signed withdrawals. Betbhai9 runs on a shared white-label platform with pooled KYC." },
    { q: "Which pays out faster on UPI?", a: "Lotus365 averages under 4 minutes; Betbhai9 lists 2–12 hour windows and batches payouts twice a day." },
    { q: "Do both cover IPL fancy markets?", a: "Yes, but Lotus365 opens 40+ fancy lines per match vs roughly 15 on Betbhai9, and holds them open deeper into the death overs." },
    { q: "Can I migrate my Betbhai9 balance?", a: "Withdraw from Betbhai9 first, then message the Lotus365 concierge on WhatsApp — we'll match your last-tier benefits on first deposit." },
  ],
};

export const Route = createFileRoute("/lotus365-vs-betbhai9")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});