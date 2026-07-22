import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-fairplay",
  rival: "Fairplay",
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
};

export const Route = createFileRoute("/lotus365-vs-fairplay")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});