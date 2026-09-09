import { createFileRoute } from "@tanstack/react-router";
import { ComparePageView, compareHead, type CompareData } from "@/components/ComparePage";

const DATA: CompareData = {
  slug: "lotus365-vs-betbhai9",
  rival: "Betbhai9",
  intro: "Betbhai9 keeps you on a web signup with manual KYC review and a queued live chat. Here's where Lotus365 pulls ahead, and where the two are closer than you'd think.",
  aiOverview: {
    summary: "Betbhai9 runs a self-serve web platform with manual KYC checks. Lotus365 replaces the review queue with a WhatsApp concierge and same-day payouts. This overview compares onboarding speed, fancy-market depth and how each handles peak-hour cashouts.",
    points: [
      "60-second WhatsApp onboarding versus web signup with manual KYC review",
      "40+ IPL fancy markets per match against roughly 15 on Betbhai9",
      "UPI payouts averaging under 4 minutes versus 2-12 hour review windows",
      "A persistent WhatsApp concierge instead of a queued live chat",
    ],
  },
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
  reviews: [
    {
      name: "Neha Kapoor",
      location: "Ahmedabad",
      rating: 5,
      date: "2026-02-10",
      title: "KYC review used to hold up my whole weekend",
      body: "Betbhai9 put my account into manual review twice, once for almost a full day right before a match I wanted to bet on. I gave Lotus365 a try mostly out of frustration, and the WhatsApp onboarding took less than a minute with no document review sitting in a queue.",
    },
    {
      name: "Arvind Pillai",
      location: "Coimbatore",
      rating: 5,
      date: "2026-01-19",
      title: "More fancy markets stay open through the death overs",
      body: "I noticed Betbhai9 would pull session and lambi markets earlier than I liked, usually right when the match got interesting. Lotus365 keeps those lines open longer, and there are more of them to begin with. Been using it through this whole IPL season without going back.",
    },
    {
      name: "Ritu Chawla",
      location: "Chandigarh",
      rating: 4,
      date: "2026-02-24",
      title: "WhatsApp support beats sitting in a chat queue",
      body: "On Betbhai9 I'd open live chat and watch the queue number tick down for ten or fifteen minutes some nights. Lotus365's concierge just replies on WhatsApp, usually inside two minutes, and I can see the whole conversation history later. Only wish they had a proper Android app instead of relying on the APK download.",
    },
    {
      name: "Sameer Khan",
      location: "Nagpur",
      rating: 5,
      date: "2026-03-03",
      title: "Cashback that doesn't vanish if I take a break",
      body: "Betbhai9's rakeback reset every time I stopped playing for a couple of weeks, which felt like a punishment for having a life outside cricket season. Lotus Club's cashback and free bets carried over when I came back from a trip in February, which is the small thing that actually kept me on Lotus365.",
    },
  ],
};

export const Route = createFileRoute("/lotus365-vs-betbhai9")({
  head: () => compareHead(DATA),
  component: () => <ComparePageView data={DATA} />,
});