// Deterministic per-page FAQ generator. Given a pathname, derive a topic
// and a category, then pick 5 stable-but-page-unique Q&A pairs from a
// category-specific bank so no two pages show the exact same set.

export type Faq = { q: string; a: string };

type Category =
  | "wallet"
  | "account"
  | "sports"
  | "casino"
  | "app"
  | "legal"
  | "trust"
  | "support"
  | "rewards"
  | "content"
  | "general";

function titleCase(slug: string): string {
  const raw = slug.replace(/[-_/]+/g, " ").trim();
  if (!raw) return "Lotus365";
  return raw
    .split(" ")
    .map((w) =>
      /^(lotus365|ipl|wpl|t20|apk|kyc|upi|vip|imps|neft|id|faq)$/i.test(w)
        ? w.toUpperCase().replace("LOTUS365", "Lotus365")
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}

function categorize(slug: string): Category {
  const s = slug.toLowerCase();
  if (/(withdraw|deposit|wallet|payout|transaction|bank|upi|imps|neft)/.test(s))
    return "wallet";
  if (/(login|register|sign-up|signup|account|kyc|profile|password|otp|\bid\b|demo-id)/.test(s))
    return "account";
  if (/(cricket|ipl|wpl|t20|football|tennis|kabaddi|basketball|horse|esports|betting|odds|prediction|exchange|sports)/.test(s))
    return "sports";
  if (/(casino|teen-?patti|andar-?bahar|baccarat|roulette|dragon|slot|card-games|dice)/.test(s))
    return "casino";
  if (/(app|apk|download|mobile|android|ios)/.test(s))
    return "app";
  if (/(policy|policies|terms|privacy|disclaimer|refund|kyc-verification|rules|community|fairdeal|responsible)/.test(s))
    return "legal";
  if (/(safe|legal|real|fake|security|verified|trusted)/.test(s))
    return "trust";
  if (/(support|contact|whatsapp|telegram|customer-care|help|issue|blocked|delay)/.test(s))
    return "support";
  if (/(vip|bonus|cashback|reward|referral|promo|gift)/.test(s))
    return "rewards";
  if (/(blog|guide|case|review|story|win|news|article)/.test(s))
    return "content";
  return "general";
}

const BANK: Record<Category, Faq[]> = {
  wallet: [
    { q: "How fast are payouts on {topic}?", a: "Verified withdrawals related to {topic} land via UPI, IMPS or NEFT in under 3 minutes, 24/7. VIP members are prioritised inside 60 seconds." },
    { q: "Which deposit methods work for {topic}?", a: "UPI (GPay, PhonePe, Paytm), IMPS, NEFT and major wallets are all supported. Minimum deposit is just ₹100." },
    { q: "Is there a withdrawal limit on {topic}?", a: "Minimum withdrawal is ₹500 with no hidden fees and no daily caps for KYC-verified members. Higher limits apply to VIP tiers." },
    { q: "Do I need KYC before using {topic}?", a: "One-time KYC — a photo ID plus a live selfie — unlocks unlimited deposits, faster payouts and higher session limits on {topic}." },
    { q: "Why is my {topic} transaction pending?", a: "Most delays are UPI-side. Message our WhatsApp desk with the UTR and we'll trace it end-to-end in minutes, 24/7." },
    { q: "Are there any fees for {topic}?", a: "No — Lotus365 covers gateway costs on both deposits and withdrawals for {topic}. You keep 100% of your winnings." },
    { q: "Can I use multiple payment methods on {topic}?", a: "Yes. Add any number of UPI IDs or bank accounts to your Lotus365 wallet; each is verified once via a ₹1 test transfer." },
  ],
  account: [
    { q: "How do I get started with {topic}?", a: "Message us on WhatsApp with your name and mobile number. Your verified Lotus365 ID for {topic} is live in under 60 seconds — no forms, no waiting." },
    { q: "Is one Lotus365 ID enough for {topic}?", a: "Yes — a single Lotus365 ID unlocks {topic} plus cricket, casino, exchange sports and every partner platform under one wallet." },
    { q: "How do I recover my {topic} login?", a: "Tap 'Forgot password' or WhatsApp our concierge with your registered mobile. We verify via OTP and get you back in within a minute." },
    { q: "Is {topic} secure?", a: "All sessions are protected with 256-bit encryption, device fingerprinting and optional 2FA. We never store your UPI PIN or banking passwords." },
    { q: "Can I have more than one {topic} account?", a: "One account per person, per KYC. Duplicate accounts are auto-flagged and merged to keep bonuses fair and payouts fast." },
    { q: "What if my {topic} account gets blocked?", a: "Blocks are usually KYC- or safety-related. WhatsApp support with your registered number and we'll review and unblock within 30 minutes in most cases." },
    { q: "Do you offer a demo for {topic}?", a: "Yes — request a demo Lotus365 ID on WhatsApp to explore {topic} risk-free before you deposit." },
  ],
  sports: [
    { q: "What markets are available for {topic}?", a: "Match-winner, session and fancy markets, plus live in-play odds. {topic} is fully covered on both the sports book and the exchange." },
    { q: "How are odds set on {topic}?", a: "{topic} odds are sourced from top-tier feeds and continuously updated in real time. The exchange also lets you back or lay against other players." },
    { q: "Can I bet live on {topic}?", a: "Yes. Live in-play markets on {topic} refresh every second, with cash-out available on eligible bets." },
    { q: "What's the minimum stake for {topic}?", a: "Stakes on {topic} start at ₹10, with no upper cap for VIP members. Session and fancy limits are set per market." },
    { q: "Are {topic} winnings paid instantly?", a: "Settled winnings from {topic} reflect in your wallet within seconds of the market closing and can be withdrawn to UPI 24/7." },
    { q: "Do you offer cash-out on {topic}?", a: "Cash-out is enabled on most pre-match and in-play {topic} bets — lock in profit or cut losses before the market settles." },
    { q: "Is there a bonus for {topic} players?", a: "Yes — a 400% welcome bonus up to ₹30,000, weekly cashback on {topic} losses, and refer-and-earn credits, all auto-credited." },
  ],
  casino: [
    { q: "Which games can I play on {topic}?", a: "{topic} covers live Teen Patti, Andar Bahar, Dragon Tiger, Baccarat, Roulette and Blackjack from top studios like Evolution and Ezugi." },
    { q: "Are the tables on {topic} fair?", a: "Every table streamed on {topic} runs certified RNG or live dealers, audited by independent labs. Round histories are stored and auditable." },
    { q: "What's the minimum bet on {topic}?", a: "Most {topic} tables start at ₹50, with high-roller rooms unlocked for VIP members. Session limits are visible before you sit down." },
    { q: "Can I play {topic} on mobile?", a: "Yes — {topic} runs natively on the Lotus365 Android app, iOS web app and desktop browsers, with no extra downloads." },
    { q: "How fast are {topic} payouts?", a: "Wins from {topic} settle instantly to your Lotus365 wallet and can be withdrawn to UPI in under 3 minutes, 24/7." },
    { q: "Is there a bonus for {topic}?", a: "New players get a 400% first-deposit bonus usable on {topic}, plus weekly cashback and festival boosters on live casino." },
    { q: "Can I try {topic} before depositing?", a: "Request a demo ID on WhatsApp — you'll get temporary chips to explore {topic} tables risk-free before you fund your wallet." },
  ],
  app: [
    { q: "How do I install the {topic}?", a: "Grab the latest signed APK from our app page, allow install from unknown sources, and open it — {topic} activates against your Lotus365 ID automatically." },
    { q: "Is the {topic} safe to install?", a: "Yes — every build is code-signed, malware-scanned and served over HTTPS. We never bundle ads, trackers or third-party SDKs in {topic}." },
    { q: "Does {topic} work offline?", a: "You need an internet connection for live odds and payments, but {topic} caches menus and history so it stays snappy on 4G and patchy Wi-Fi." },
    { q: "Which Android version does {topic} need?", a: "{topic} supports Android 7.0 and above, and is optimised for devices with 3 GB RAM or more." },
    { q: "How do I update {topic}?", a: "The app checks for updates on launch. Tap Update and the new build installs in the background — your login and wallet stay intact." },
    { q: "Is {topic} available on iOS?", a: "iOS users can add the Lotus365 web app to their home screen for a full-screen, app-like experience with push-style WhatsApp alerts." },
    { q: "Will {topic} drain my battery?", a: "No — {topic} is under 30 MB, uses hardware-accelerated video for live tables and idles at near-zero CPU when backgrounded." },
  ],
  legal: [
    { q: "What does the {topic} cover?", a: "The {topic} spells out the rules, rights and responsibilities that apply to every Lotus365 member, in plain English." },
    { q: "How often is {topic} updated?", a: "We review {topic} at least twice a year and after any material change. Members are notified by WhatsApp and email before updates take effect." },
    { q: "Where can I read {topic} in full?", a: "The full text of {topic} is always on this page. If anything is unclear, our compliance desk answers on WhatsApp within a business day." },
    { q: "Does {topic} apply to VIP members?", a: "Yes — {topic} applies to every Lotus365 account. VIP perks add to the baseline; they never override the {topic}." },
    { q: "Who enforces {topic}?", a: "Lotus365's internal compliance team enforces {topic}, with independent auditors reviewing our processes annually." },
    { q: "Can I opt out of {topic}?", a: "Some sections (like marketing) are opt-in — the rest of {topic} is a condition of holding a Lotus365 account. Closing the account ends the agreement." },
    { q: "What if I disagree with {topic}?", a: "Raise the issue on WhatsApp or email compliance@lotus365id.com. We review every dispute against {topic} and reply within 48 hours." },
  ],
  trust: [
    { q: "Is Lotus365 genuinely safe for {topic}?", a: "Yes — {topic} runs on 256-bit encryption, KYC-verified rails and audited settlement. We've served 2M+ Indian players since 2016 without a single breach." },
    { q: "How do I know {topic} is real, not fake?", a: "Only trust WhatsApp numbers and URLs listed on lotus365id.com. Every genuine {topic} touchpoint links back here — anything else is a copycat." },
    { q: "Is {topic} legal for Indian players?", a: "Online skill gaming and sports exchanges are legal in most Indian states. Lotus365 blocks access from restricted regions and enforces 18+ verification on {topic}." },
    { q: "How is my data protected on {topic}?", a: "{topic} uses TLS 1.3 in transit, AES-256 at rest, and stores payment credentials on tokenised gateways — never on our own servers." },
    { q: "Are winnings from {topic} guaranteed?", a: "Yes — every settled win on {topic} is honoured. Payouts are automated and prioritised; disputes are reviewed by a human within 30 minutes." },
    { q: "Who audits {topic}?", a: "Independent labs certify our RNGs and settlement logic. {topic} activity is also monitored 24/7 for fraud and match-fixing signals." },
    { q: "What if I spot a scam impersonating {topic}?", a: "WhatsApp our concierge with a screenshot. We work with platforms to take down fake {topic} pages, usually within 24 hours." },
  ],
  support: [
    { q: "How do I reach {topic}?", a: "WhatsApp is fastest — real humans, 24/7, average first reply under 45 seconds. Telegram, email and in-app chat are backups for {topic}." },
    { q: "What can {topic} help me with?", a: "{topic} handles IDs, deposits, withdrawals, KYC, bonuses, technical glitches and responsible-gaming requests — every hour, every day." },
    { q: "Does {topic} charge anything?", a: "No — {topic} is free for every Lotus365 member, including guests exploring a demo ID." },
    { q: "How fast does {topic} respond?", a: "First reply on {topic} averages under a minute on WhatsApp. VIP members are routed to a dedicated relationship manager." },
    { q: "Is {topic} available in Hindi?", a: "Yes — {topic} answers in English and Hindi, with regional-language handoffs for Tamil, Telugu, Bengali, Marathi and Kannada on request." },
    { q: "Can {topic} help if my account is blocked?", a: "Yes — share your registered mobile with {topic} on WhatsApp. Most blocks are resolved within 30 minutes after a quick KYC review." },
    { q: "What details should I keep ready for {topic}?", a: "Registered mobile number, UTR for payment issues, and a screenshot of the error — that's usually all {topic} needs to resolve a ticket." },
  ],
  rewards: [
    { q: "How do I unlock {topic}?", a: "{topic} activates automatically on your first qualifying deposit — no promo codes, no forms, no manual claims." },
    { q: "What's the value of {topic}?", a: "New players get a 400% welcome bonus up to ₹30,000, plus weekly cashback of up to 20% and refer-and-earn credits stackable with {topic}." },
    { q: "Can I withdraw {topic} winnings?", a: "Yes — once the light wagering requirement on {topic} is met, winnings move to your main wallet and can be withdrawn to UPI 24/7." },
    { q: "Is {topic} available for VIP members?", a: "VIP tiers get boosted {topic} rates, private tournaments, birthday gifts and priority payouts on top of the standard offers." },
    { q: "How often does {topic} refresh?", a: "Weekly cashback drops every Monday; festival and IPL boosters on {topic} run in limited windows and are announced on WhatsApp." },
    { q: "Does {topic} apply to casino and sports?", a: "Yes — {topic} covers cricket, football, tennis, exchange sports and every live casino table on Lotus365." },
    { q: "Are there wagering rules on {topic}?", a: "Yes, and they're light — typically 5x on sports and 10x on casino. Full {topic} terms are on the bonus page." },
  ],
  content: [
    { q: "What will I learn from {topic}?", a: "{topic} is written by real Lotus365 players and analysts — expect practical strategy, real numbers and no fluff." },
    { q: "How often is {topic} updated?", a: "New editions of {topic} publish weekly during IPL and every fortnight through the year. Bookmark the page or follow us on Telegram for alerts." },
    { q: "Is {topic} free to read?", a: "Yes — {topic} and every guide, review and case study on Lotus365 is free, with no signup required to browse." },
    { q: "Can I request a topic for {topic}?", a: "Absolutely — WhatsApp the concierge with your suggestion. We prioritise reader requests when planning the next {topic}." },
    { q: "Who writes {topic}?", a: "A small in-house team of ex-traders, cricket analysts and casino veterans. Every {topic} is fact-checked before publishing." },
    { q: "Can I share {topic}?", a: "Yes — every {topic} has share buttons for WhatsApp, Telegram and X. Attribution back to Lotus365 is appreciated." },
    { q: "Do you cover live matches in {topic}?", a: "Yes — {topic} includes previews, in-play notes and post-match breakdowns for every major cricket, football and tennis event." },
  ],
  general: [
    { q: "What is {topic} on Lotus365?", a: "{topic} is part of India's most trusted online gaming hub — cricket, casino, exchange sports and live dealer tables, all under one Lotus365 ID." },
    { q: "How do I get started with {topic}?", a: "WhatsApp the concierge, get a verified Lotus365 ID in 60 seconds, deposit from ₹100, and jump into {topic} straight away." },
    { q: "Is {topic} available 24/7?", a: "Yes — {topic}, deposits, withdrawals and human support run around the clock on Lotus365, every day of the year." },
    { q: "Are payouts from {topic} instant?", a: "Yes — UPI withdrawals tied to {topic} typically clear in under 3 minutes, with VIP members prioritised inside 60 seconds." },
    { q: "Is {topic} safe on Lotus365?", a: "{topic} runs on 256-bit encryption, KYC-verified rails and audited settlement. 2M+ Indian players have trusted us since 2016." },
    { q: "Do I need a separate ID for {topic}?", a: "No — one Lotus365 ID unlocks {topic} plus cricket, casino, exchange sports and every partner platform under a single wallet." },
    { q: "Where can I get help with {topic}?", a: "WhatsApp our concierge any time — real humans, average first reply under 45 seconds. Telegram and email are also on the support page." },
  ],
};

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickFive(bank: Faq[], seed: number): Faq[] {
  const idx = [0, 1, 2, 3, 4, 5, 6].sort((a, b) => {
    // Deterministic per-seed shuffle
    const ha = hash(`${seed}:${a}`);
    const hb = hash(`${seed}:${b}`);
    return ha - hb;
  });
  return idx.slice(0, 5).map((i) => bank[i]);
}

export function getPageFaqs(pathname: string): { topic: string; faqs: Faq[] } {
  // Normalise: strip leading/trailing slash, ignore query/hash
  const clean = (pathname || "/").split("?")[0].split("#")[0].replace(/^\/+|\/+$/g, "");
  const slug = clean || "home";
  const topic = titleCase(slug === "home" ? "Lotus365" : slug.split("/").pop() || slug);
  const category = categorize(slug);
  const seed = hash(slug);
  const faqs = pickFive(BANK[category], seed).map((f) => ({
    q: f.q.replace(/\{topic\}/g, topic),
    a: f.a.replace(/\{topic\}/g, topic),
  }));
  return { topic, faqs };
}
