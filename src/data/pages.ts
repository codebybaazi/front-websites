// Lotus365-branded, human-rephrased content for every page mirrored from the
// source sitemap. Each entry is a self-contained page — title, description,
// eyebrow, hero heading + intro, and a list of sections. Rendered by
// ContentPage via the /$page dynamic route.

export type PageSection = {
  heading: string;
  body: string;
  points?: string[];
  /** Optional comparison/reference table, rendered as real <table> markup for snippet eligibility. */
  table?: { headers: string[]; rows: string[][] };
};

export type PageContent = {
  slug: string;
  title: string; // <title> and og:title
  description: string; // meta description + og:description
  eyebrow: string;
  hero: string;
  intro: string;
  sections: PageSection[];
  cta?: { title: string; body: string; label: string };
  /** Optional external authoritative sources, shown in the AI Overview block. */
  sources?: { label: string; to: string }[];
};

const defaultCta = {
  title: "Ready to step onto the gold table?",
  body: "Create your Lotus365 account in under a minute and unlock instant payouts, VIP concierge, and a curated library of premium games.",
  label: "Create your account",
};

export const PAGES: Record<string, PageContent> = {
  "about-us": {
    slug: "about-us",
    title: "About Lotus365 — Premium Online Gaming Since 2016",
    description:
      "Lotus365 is a trusted online gaming and sports platform built for players who expect faster payouts, safer play, and a genuinely premium experience.",
    eyebrow: "Our story",
    hero: "A quieter, more premium way to play.",
    intro:
      "Lotus365 started with a simple observation — most gaming sites feel loud, slow, and disposable. We wanted a home for players who take the game seriously: quicker onboarding, cleaner tables, faster withdrawals, and human support that actually answers.",
    sections: [
      {
        heading: "What we stand for",
        body: "Every part of Lotus365 is engineered around three quiet promises — pay you fast, keep your data safe, and stay out of the way when you're playing.",
        points: [
          "Payouts processed in minutes, not days",
          "Bank-grade 256-bit encryption end to end",
          "24/7 human support, never scripted bots",
          "A curated library — no filler, no dead games",
        ],
      },
      {
        heading: "Who plays with us",
        body: "Over two million players across cricket, live casino, and slots — including a private VIP tier of members who've been with us since day one. Whether you're placing your first bet on IPL or logging in for a nightly round of Teen Patti, the same care applies.",
      },
      {
        heading: "How we're different",
        body: "We don't chase every trend. We audit every game we host, refuse partnerships with unlicensed providers, and answer support tickets from a real desk in real time. That's the whole promise.",
      },
    ],
    cta: defaultCta,
  },

  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy — How Lotus365 Handles Your Data",
    description:
      "A plain-English explanation of what Lotus365 collects, why we collect it, and the controls you have over your personal data.",
    eyebrow: "Privacy",
    hero: "Your data, protected — plainly explained.",
    intro:
      "This policy covers what we collect when you use Lotus365, how we store it, and the choices you have. We've written it in plain English because privacy shouldn't need a lawyer to decode.",
    sections: [
      {
        heading: "What we collect",
        body: "Only what's needed to run your account safely: your name, contact details, KYC documents, transaction history, device data, and gameplay activity.",
      },
      {
        heading: "Why we collect it",
        body: "To verify your identity, prevent fraud, honour regulatory obligations, process deposits and withdrawals, personalise your experience, and answer support requests.",
      },
      {
        heading: "How we protect it",
        body: "End-to-end encryption on every request, restricted-access databases, audited backups, and independent penetration tests. Payment data is tokenised — we never store raw card numbers.",
      },
      {
        heading: "Your rights",
        body: "You can request an export, correction, or deletion of your account data at any time by writing to our privacy desk. Withdrawals of consent don't affect processing already carried out lawfully.",
      },
    ],
  },

  "terms-conditions": {
    slug: "terms-conditions",
    title: "Terms & Conditions — Lotus365 Platform Rules",
    description:
      "The rules that govern your use of Lotus365 — account eligibility, fair play, deposits, withdrawals, bonuses, and dispute handling.",
    eyebrow: "Legal",
    hero: "The rules of the room.",
    intro:
      "These Terms set out the agreement between you and Lotus365. Registering or placing a bet means you accept them. Read them carefully — they're written to be fair, not fine-printed.",
    sections: [
      {
        heading: "Eligibility",
        body: "You must be 18 years or older and legally allowed to play in your jurisdiction. One account per person. Multiple accounts, shared logins, and identity misrepresentation lead to closure with balance forfeit.",
      },
      {
        heading: "Fair play",
        body: "All games are RNG-audited or streamed from licensed live studios. Bots, colluding, exploiting bugs, or arbitrage against Lotus365 will result in immediate account review.",
      },
      {
        heading: "Deposits and withdrawals",
        body: "Deposits are credited instantly. Withdrawals are released after KYC clearance and standard fraud checks, usually within 3 minutes for verified accounts.",
      },
      {
        heading: "Bonus terms",
        body: "Every bonus lists its own wagering requirement, expiry, and eligible games. Bonus abuse — including systematic low-risk wagering — voids the bonus and any winnings derived from it.",
      },
      {
        heading: "Disputes",
        body: "If something's wrong, contact support first. Unresolved disputes may be escalated to our Curaçao gaming licensing authority.",
      },
    ],
  },

  "lotus365-book-bonus": {
    slug: "lotus365-book-bonus",
    title: "Lotus365 Bonuses & Promotions — Welcome, Reload, Cashback",
    description:
      "Every current Lotus365 bonus in one place — welcome offers, weekly cashback, referral rewards, VIP perks, and their wagering terms.",
    eyebrow: "Rewards",
    hero: "Bonuses built to actually be usable.",
    intro:
      "We don't publish a bonus we wouldn't take ourselves. Every offer on this page has been engineered with a realistic wagering requirement, a clear expiry, and no hidden 'max win' caps.",
    sections: [
      {
        heading: "Welcome bonus — up to ₹25,000",
        body: "First deposit, instantly matched up to ₹25,000. Wagering: 12× on your bonus. Eligible on all sports markets and 90% of casino titles.",
      },
      {
        heading: "Weekly cashback",
        body: "Automatic every Monday — credited as real cash, no opt-in and no minimum. Rate scales with your account tier.",
        table: {
          headers: ["Tier", "Cashback rate", "Opt-in required"],
          rows: [
            ["Silver", "5%", "No"],
            ["Gold", "10%", "No"],
            ["VIP", "Up to 20%", "No"],
          ],
        },
      },
      {
        heading: "Refer a friend",
        body: "Share your referral code — you both get ₹500 once they clear their first deposit. No cap on how many friends you can invite.",
      },
      {
        heading: "Reload bonus",
        body: "Every Friday, top up and get 25% back as a bonus, up to ₹5,000. Perfect timing for weekend cricket and IPL windows.",
      },
      {
        heading: "All current bonuses at a glance",
        body: "A quick side-by-side of every active offer, its value, and what you need to do to trigger it.",
        table: {
          headers: ["Bonus", "Value", "Trigger"],
          rows: [
            ["Welcome bonus", "Up to ₹25,000 (12× wagering)", "First deposit"],
            ["Weekly cashback", "5–20% by tier", "Automatic every Monday"],
            ["Refer a friend", "₹500 per referral", "Friend clears first deposit"],
            ["Reload bonus", "25% up to ₹5,000", "Deposit on Friday"],
          ],
        },
      },
    ],
  },

  "contact-us": {
    slug: "contact-us",
    title: "Contact Lotus365 — 24/7 Human Support",
    description:
      "Reach the Lotus365 support desk by live chat, WhatsApp, email, or Telegram. Real humans, real replies, 24 hours a day.",
    eyebrow: "Support",
    hero: "Talk to a real person, any time of day.",
    intro:
      "Every message you send lands with a trained agent — not a chatbot. Pick whichever channel is fastest for you.",
    sections: [
      {
        heading: "Live chat",
        body: "Fastest option — average response time under 30 seconds. Available through the icon at the bottom-right of every page.",
      },
      {
        heading: "WhatsApp",
        body: "Message our desk on WhatsApp for the same speed with a paper trail. Ideal for quick withdrawal or ID checks.",
      },
      {
        heading: "Telegram",
        body: "Join our Telegram channel for match odds, promotion drops, and instant support handoffs.",
      },
      {
        heading: "Email",
        body: "For anything sensitive — KYC uploads, account escalations, complaints — email our concierge inbox. Replies within one business hour.",
      },
    ],
  },

  "lotus365-book-app": {
    slug: "lotus365-book-app",
    title: "Lotus365 App — Download for Android & iOS",
    description:
      "The Lotus365 app packs the full platform into a fast, secure mobile experience. Download the Android APK or grab the iOS build.",
    eyebrow: "Mobile",
    hero: "The whole Lotus365 floor, in your pocket.",
    intro:
      "The Lotus365 app is the same experience you get on desktop, tuned for touch — faster taps, biometric login, native push for live match alerts.",
    sections: [
      {
        heading: "Android",
        body: "Download the signed APK from the app page. Enable install from unknown sources once, and updates roll in silently after that.",
      },
      {
        heading: "iOS",
        body: "Add Lotus365 as a full-screen web app from Safari — same features as native, no App Store limitations.",
      },
      {
        heading: "What's in the app",
        body: "One-tap login, biometric unlock, live streaming for cricket and football, one-swipe deposits via UPI, and offline access to your bet history.",
      },
    ],
  },

  "responsible-gaming": {
    slug: "responsible-gaming",
    title: "Responsible Gaming at Lotus365 — Play in Control",
    description:
      "Set deposit limits, take reality checks, or self-exclude at any time. Lotus365's tools help you keep gaming fun.",
    eyebrow: "Play safe",
    hero: "Gaming should stay fun. Here's how we keep it that way.",
    intro:
      "We'd rather have a customer for ten years than a big-spending customer for ten weeks. That's why every Lotus365 account ships with real limit tools you can activate in one tap.",
    sections: [
      {
        heading: "Deposit and loss limits",
        body: "Set daily, weekly, or monthly caps from your profile. Increases take 24 hours to activate; decreases apply instantly.",
      },
      {
        heading: "Reality checks",
        body: "Turn on a session reminder every 30, 60, or 120 minutes. Lotus365 will pause the table so you can decide whether to continue.",
      },
      {
        heading: "Self-exclusion",
        body: "Take a break for 24 hours, 30 days, six months, or permanently. Once activated it can't be reversed early — that's the point.",
      },
      {
        heading: "Need to talk to someone",
        body: "If gaming stops feeling fun, contact GamCare, BeGambleAware, or a local helpline. Our support team can also connect you to counsellors on request.",
      },
    ],
  },

  "11xplay": {
    slug: "11xplay",
    title: "11XPlay on Lotus365 — Cricket & Casino Access",
    description:
      "Access 11XPlay markets through your Lotus365 ID — cricket, football, live casino, and instant deposits, all under one login.",
    eyebrow: "Partner platform",
    hero: "11XPlay markets, on your Lotus365 ID.",
    intro:
      "11XPlay is one of the partner exchanges accessible from your single Lotus365 login — the same wallet, the same KYC, the same 24/7 support desk.",
    sections: [
      {
        heading: "Why players use it",
        body: "Deep cricket markets during IPL and international series, competitive odds on football, and a slick live casino floor. Everything settled to your Lotus365 balance.",
      },
      {
        heading: "How to access",
        body: "Log in to Lotus365, open 'Platforms', pick 11XPlay, and you're in. No separate password, no duplicate KYC.",
      },
      {
        heading: "Payouts",
        body: "Any winnings from 11XPlay markets roll back into your Lotus365 wallet automatically, ready to withdraw at the standard 3-minute pace.",
      },
    ],
  },

  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer — Lotus365 Platform Notice",
    description:
      "General disclaimer covering Lotus365 content, third-party links, market data, and the risks of online gaming.",
    eyebrow: "Legal",
    hero: "Straightforward disclosures, no fine print.",
    intro:
      "This disclaimer explains what Lotus365 is and isn't responsible for. Nothing here waives your legal rights.",
    sections: [
      {
        heading: "Content is informational",
        body: "Guides, predictions, and tips are shared to help you make informed decisions — not to guarantee returns. Every bet carries risk.",
      },
      {
        heading: "Third parties",
        body: "Some links point to partner platforms or providers. Their terms apply once you're on their site. Lotus365 vets partners but doesn't control their day-to-day operations.",
      },
      {
        heading: "Market data",
        body: "Odds, statistics, and live scores come from licensed data feeds. We take reasonable care but can't guarantee zero errors during peak load.",
      },
      {
        heading: "Regional availability",
        body: "Lotus365 is intended for players in jurisdictions where online gaming is legal. It's your responsibility to check local laws before playing.",
      },
    ],
  },

  laser247: {
    slug: "laser247",
    title: "Laser247 on Lotus365 — Fast, Sharp Sports Markets",
    description:
      "Access Laser247's sports and casino markets through your Lotus365 wallet. Cricket, football, tennis, and premium live casino under one login.",
    eyebrow: "Partner platform",
    hero: "Laser247 speed, Lotus365 wallet.",
    intro:
      "Laser247 is known for tight odds and fast market updates during live events. When you access it through Lotus365, you get the same interface with our payout speed and support desk behind it.",
    sections: [
      {
        heading: "Why choose Laser247",
        body: "Extensive in-play cricket markets, session and toss betting during IPL, and a live casino menu curated with Evolution, Ezugi, and Pragmatic Play.",
      },
      {
        heading: "Getting started",
        body: "Sign in to Lotus365, tap Platforms → Laser247. Your KYC and balance carry across automatically.",
      },
      {
        heading: "Support",
        body: "Any Laser247 issue — a settled bet, a rolling market, a stuck deposit — is handled by the same Lotus365 desk, 24/7.",
      },
    ],
  },

  cricbet99: {
    slug: "cricbet99",
    title: "Cricbet99 on Lotus365 — Cricket-First Betting",
    description:
      "Cricbet99 through Lotus365 — deep cricket markets, session and fancy bets, live scores, and instant settlements on your Lotus365 wallet.",
    eyebrow: "Partner platform",
    hero: "The cricket specialist, wired into Lotus365.",
    intro:
      "Cricbet99 is built for one thing — cricket. When you route through Lotus365, you keep the specialist depth but pick up our wallet, KYC, and support in the background.",
    sections: [
      {
        heading: "What makes it different",
        body: "Toss markets, session markets, fancy odds, and delivery-level bets — the kind of depth that only makes sense in a cricket-first book.",
      },
      {
        heading: "How to start",
        body: "Open Lotus365, choose Cricbet99 from the platforms grid, and place your first market. Every settlement rolls into your Lotus365 wallet.",
      },
      {
        heading: "Live during IPL and internationals",
        body: "Markets refresh delivery by delivery. Withdrawals stay under three minutes even during peak-load nights.",
      },
    ],
  },

  gold365: {
    slug: "gold365",
    title: "Gold365 on Lotus365 — Premium Sports & Casino",
    description:
      "Gold365's full sports and casino floor, accessed through your Lotus365 login. Same wallet, same support, one clean interface.",
    eyebrow: "Partner platform",
    hero: "Gold365, plumbed into Lotus365.",
    intro:
      "Gold365 has one of the widest sports and casino menus in the market. Through Lotus365 you access it with a single wallet and our concierge support behind every bet.",
    sections: [
      {
        heading: "Popular sports",
        body: "Cricket, football, tennis, kabaddi, basketball, and a strong esports slate — every market with competitive odds.",
      },
      {
        heading: "Popular casino games",
        body: "Live roulette, Andar Bahar, Teen Patti, blackjack, and a rotating slots library. All streamed from licensed studios.",
      },
      {
        heading: "Why route through Lotus365",
        body: "One KYC, one balance, one support team. If a Gold365 market rolls or a settlement is delayed, we handle it.",
      },
    ],
  },

  "basketball-betting": {
    slug: "basketball-betting",
    title: "Basketball Betting on Lotus365 — NBA, EuroLeague, WNBA",
    description:
      "Place NBA, EuroLeague, and WNBA bets on Lotus365 — moneyline, spread, totals, player props, and live in-play markets with sharp odds.",
    eyebrow: "Sports",
    hero: "Basketball, tipped off at Lotus365 odds.",
    intro:
      "Basketball is fast, statistical, and rewards preparation. Lotus365 covers every serious league with pre-match and in-play markets built for people who watch the game closely.",
    sections: [
      {
        heading: "Why bet on basketball",
        body: "Predictable pace, four-quarter structure, and dense box-score data make basketball one of the easiest sports to model. Our markets update play-by-play.",
      },
      {
        heading: "Markets we cover",
        body: "Moneyline, spread, totals, quarter and half markets, player points, rebounds, and assists, plus double doubles and triple doubles.",
      },
      {
        heading: "Live in-play",
        body: "Every NBA game plus major EuroLeague fixtures with second-by-second market refreshes. Cash-out available on most markets.",
      },
    ],
  },

  reddybook: {
    slug: "reddybook",
    title: "Lotusbook on Lotus365 — India's Trusted Betting Platform",
    description:
      "Lotusbook is Lotus365's flagship betting book — cricket, casino, and live markets with instant payouts and 24/7 support.",
    eyebrow: "Flagship book",
    hero: "The Lotus365 book, in one clean place.",
    intro:
      "Lotusbook is our flagship sports and casino book — every market Lotus365 covers, in one clean interface. If you're new to the platform, this is the front door.",
    sections: [
      {
        heading: "What's inside",
        body: "Cricket, football, tennis, kabaddi, basketball, horse racing, live casino, Indian card games, slots, and a rotating tournaments schedule.",
      },
      {
        heading: "Login process",
        body: "Head to the login page, enter your Lotus365 ID and password, complete OTP. Biometric login is available on the mobile app.",
      },
      {
        heading: "Why players stay",
        body: "Sub-three-minute payouts, transparent bonus terms, and a support desk that never hands you off between agents.",
      },
    ],
  },

  platforms: {
    slug: "platforms",
    title: "Lotus365 Platforms — 11XPlay, Laser247, Cricbet99, Gold365",
    description:
      "One Lotus365 login unlocks 11XPlay, Laser247, Cricbet99, Gold365, and more. Single wallet, single KYC, one support desk.",
    eyebrow: "One login, many books",
    hero: "One Lotus365 ID. Every partner book.",
    intro:
      "Instead of maintaining five accounts on five sites, keep everything under a single Lotus365 login. The wallet, KYC, and support desk are shared across every platform we host.",
    sections: [
      {
        heading: "How the ecosystem works",
        body: "You log in to Lotus365, then jump into any partner platform — 11XPlay, Laser247, Cricbet99, Gold365, Fairdeal — without a second registration.",
      },
      {
        heading: "One wallet",
        body: "Deposits sit in your Lotus365 balance. When you place a bet on any platform, the wallet debits; when it settles, it credits back. Withdrawals always route through the main Lotus365 cashier.",
      },
      {
        heading: "One support desk",
        body: "Any partner issue — a stuck market, a delayed payout, a settlement query — is handled by the same 24/7 Lotus365 concierge.",
      },
    ],
  },

  "horse-race-betting": {
    slug: "horse-race-betting",
    title: "Horse Race Betting on Lotus365 — UK & India Meets",
    description:
      "Place horse racing bets on Lotus365 across UK, Indian, and international meets — win, place, each way, exacta, and multi-leg wagers.",
    eyebrow: "Sports",
    hero: "The oldest wager, done properly.",
    intro:
      "Horse racing is one of the most rewarding sports to bet on when you know the form. Lotus365 covers UK, Indian, and top international meets with pari-mutuel and fixed-odds markets side by side.",
    sections: [
      {
        heading: "How it works on Lotus365",
        body: "Pick a meet, pick a race, pick your market. Odds move as the market moves; we take best available at the time of your click.",
      },
      {
        heading: "Types of horse race bets",
        body: "Win, place, each way, exacta, quinella, trifecta, superfecta, and multi-race jackpots.",
      },
      {
        heading: "Racing bonuses",
        body: "Weekly racing cashback on losing pari-mutuel tickets, plus 'best odds guaranteed' on featured UK cards.",
      },
      {
        heading: "Tips for success",
        body: "Study recent form, track condition, jockey and trainer strike rates, and never chase after two losses in a row.",
      },
    ],
  },

  "login-issues": {
    slug: "login-issues",
    title: "Lotus365 Login Issues — Fix Access Problems Fast",
    description:
      "Can't log in to Lotus365? Reset your password, unblock your account, or contact 24/7 support — every fix in one place.",
    eyebrow: "Support",
    hero: "Locked out? Let's get you back in.",
    intro:
      "Ninety percent of login problems are fixed in under two minutes. Work through the checks below; if nothing lands, chat is one tap away.",
    sections: [
      {
        heading: "Wrong password",
        body: "Tap 'Forgot password', enter your registered mobile, and set a new one via OTP. Passwords must be 8+ characters with a number.",
      },
      {
        heading: "OTP not arriving",
        body: "Check network and SMS filters. If nothing lands in 60 seconds, tap 'Resend' or switch to WhatsApp OTP.",
      },
      {
        heading: "Account locked",
        body: "Five failed attempts lock the account for 30 minutes. If it's urgent, ping support and we'll unlock manually after ID confirmation.",
      },
      {
        heading: "Device change",
        body: "New devices require a one-time email link approval. Check the address you registered with — including spam.",
      },
    ],
  },

  "deposit-issues": {
    slug: "deposit-issues",
    title: "Lotus365 Deposit Issues — Fix Failed Deposits",
    description:
      "Deposit not credited? Money debited but bet not placed? Every deposit fix on Lotus365, in one page.",
    eyebrow: "Support",
    hero: "Deposit stuck? Here's the fix.",
    intro:
      "Almost every deposit clears within 30 seconds. When it doesn't, one of the causes below is almost always why.",
    sections: [
      {
        heading: "Bank debited, balance unchanged",
        body: "Wait five minutes — most UPI reconciliations complete in that window. If it's still missing, share the UTR with support and we'll credit within one hour.",
      },
      {
        heading: "Payment failed at gateway",
        body: "Retry once. If it fails again, switch method (UPI ↔ bank ↔ e-wallet). Bank-side limits are the most common cause.",
      },
      {
        heading: "Amount below minimum",
        body: "Minimum deposit is ₹100 via UPI, ₹500 via bank. Anything smaller is auto-rejected.",
      },
      {
        heading: "Verification pending",
        body: "First deposits above ₹10,000 need KYC to clear. Upload your ID from the profile page — verification is usually done in under an hour.",
      },
    ],
  },

  "account-blocked": {
    slug: "account-blocked",
    title: "Lotus365 Account Blocked — How to Restore Access",
    description:
      "If your Lotus365 account is blocked, here's why it happens, what documents to send, and how quickly access is restored.",
    eyebrow: "Support",
    hero: "Blocked account? Here's what to do.",
    intro:
      "Blocks are rare and always reversible. Most are triggered automatically by fraud checks or a duplicate KYC match, and cleared within an hour.",
    sections: [
      {
        heading: "Common reasons",
        body: "Failed KYC, mismatched name on payment method, multiple accounts from the same device, or a pattern flagged by our fraud engine.",
      },
      {
        heading: "How to unblock",
        body: "Email support with your registered mobile, a scanned government ID, and a selfie. Turnaround is under one hour during business hours.",
      },
      {
        heading: "Preventing it in future",
        body: "Use one account per person, deposit only from your own name, complete KYC before your first withdrawal.",
      },
    ],
  },

  "bonus-issues": {
    slug: "bonus-issues",
    title: "Lotus365 Bonus Issues — Missing or Stuck Bonuses",
    description:
      "Bonus not credited? Wagering not tracking? Every Lotus365 bonus issue, resolved.",
    eyebrow: "Support",
    hero: "Bonus not showing? Let's fix it.",
    intro:
      "Bonuses credit automatically in over 99% of cases. When they don't, one of the reasons below usually applies.",
    sections: [
      {
        heading: "Bonus code missed",
        body: "Some offers need a code at deposit time. Check the promo page and re-deposit with the code entered — legacy deposits can't be back-credited.",
      },
      {
        heading: "Wagering not clearing",
        body: "Only markets listed in the bonus T&Cs contribute to wagering. Casino live tables usually count 10–20%, sports at 100%.",
      },
      {
        heading: "Bonus expired",
        body: "Every bonus lists an expiry. Missed windows can't be reopened, but a support agent can offer an equivalent reload promo.",
      },
    ],
  },

  "withdrawal-delay": {
    slug: "withdrawal-delay",
    title: "Lotus365 Withdrawal Delay — Why & What to Do",
    description:
      "Withdrawal taking longer than usual? Here's what causes delays and how quickly Lotus365 support can resolve them.",
    eyebrow: "Support",
    hero: "Withdrawal running long? Here's why.",
    intro:
      "Ninety-eight percent of Lotus365 withdrawals settle in under three minutes. When one doesn't, it's almost always one of these three reasons.",
    sections: [
      {
        heading: "KYC pending",
        body: "First withdrawals above ₹5,000 need full KYC. Upload documents from your profile; verification averages 40 minutes.",
      },
      {
        heading: "Bank-side delay",
        body: "Weekend NEFT and holidays can extend transfers. UPI usually still lands in under three minutes even off-hours.",
      },
      {
        heading: "Fraud review",
        body: "Withdrawals over ₹1,00,000 or from new devices trigger a manual review. Support will contact you within 30 minutes.",
      },
    ],
  },

  "rules-regulations": {
    slug: "rules-regulations",
    title: "Rules & Regulations — Lotus365 Player Guidelines",
    description:
      "The core rules every Lotus365 player agrees to — fair play, account use, betting conduct, and dispute handling.",
    eyebrow: "Legal",
    hero: "One rulebook, plainly written.",
    intro:
      "These rules keep every table fair and every payout predictable. Breaking any of them puts your balance at risk.",
    sections: [
      {
        heading: "Account use",
        body: "One person, one account. No sharing logins, no proxy play, no using someone else's payment method.",
      },
      {
        heading: "Fair play",
        body: "No colluding at multi-player tables, no automated bots, no exploiting known bugs. All breaches are logged and forwarded to the licensing authority.",
      },
      {
        heading: "Betting conduct",
        body: "Bets cannot be voided after settlement unless a genuine data feed error is proven. Palpable-error voids follow industry standard rules.",
      },
      {
        heading: "Disputes",
        body: "Raise with support first; unresolved cases escalate to independent arbitration.",
      },
    ],
  },

  "refund-policy": {
    slug: "refund-policy",
    title: "Refund Policy — Lotus365 Deposits & Bet Refunds",
    description:
      "When Lotus365 refunds deposits or bets — technical failures, market voids, and the process for requesting a refund.",
    eyebrow: "Legal",
    hero: "When money comes back, and how.",
    intro:
      "Lotus365 refunds deposits and settled bets only in specific scenarios. This page covers exactly what qualifies.",
    sections: [
      {
        heading: "Deposit refunds",
        body: "If a deposit is charged but never credited, we refund in full within 48 hours of the UTR being confirmed at our end.",
      },
      {
        heading: "Bet voids and refunds",
        body: "Bets on abandoned matches, no-result markets, or palpable data-feed errors are voided and stake refunded. Settled bets on completed events are final.",
      },
      {
        heading: "Bonus refunds",
        body: "Bonus stakes are not refundable, but bonus balance is preserved when a market voids.",
      },
      {
        heading: "How to request",
        body: "Email support with the transaction ID, screenshot, and description. Refunds credit to the original source.",
      },
    ],
  },

  "ipl-betting": {
    slug: "ipl-betting",
    title: "IPL Betting on Lotus365 — Match, Session, Toss, Fancy",
    description:
      "Bet on every IPL match with Lotus365 — match odds, toss, session runs, fancy markets, and live in-play. Sharpest odds in the market.",
    eyebrow: "Cricket",
    hero: "IPL, the way it should be bet.",
    intro:
      "IPL is the biggest six weeks of cricket in the year, and Lotus365 covers every match, every session, every fancy market from the toss to the final delivery.",
    sections: [
      {
        heading: "Markets we cover",
        body: "Match winner, toss, top batsman, top bowler, session runs, over runs, fancy markets, powerplay totals, and live in-play through the last ball.",
      },
      {
        heading: "Why choose Lotus365 for IPL",
        body: "Delivery-by-delivery market refreshes, competitive session odds, and sub-three-minute payouts even during evening peaks.",
      },
      {
        heading: "Live streaming",
        body: "Watch every IPL match inside the Lotus365 app, right beside your bet slip. Zero buffering on Wi-Fi and 4G.",
      },
    ],
  },

  "wpl-2026-betting-lotus365-book": {
    slug: "wpl-2026-betting-lotus365-book",
    title: "WPL 2026 Betting on Lotus365 — Match Odds & Session Markets",
    description:
      "Bet on the Women's Premier League 2026 with Lotus365 — match, toss, top scorer, session markets, and daily live streams.",
    eyebrow: "Cricket",
    hero: "WPL 2026, live on Lotus365.",
    intro:
      "The Women's Premier League has become one of the fastest-growing T20 competitions in the world. Lotus365 covers every WPL 2026 match with the same market depth as the men's IPL.",
    sections: [
      {
        heading: "Markets",
        body: "Match winner, toss, top batter, top bowler, session runs, powerplay totals, and live in-play.",
      },
      {
        heading: "Live streaming",
        body: "Every WPL 2026 match streamed inside the Lotus365 app with side-by-side bet slip.",
      },
      {
        heading: "Bonus for WPL",
        body: "Free bet up to ₹500 for verified accounts on every WPL match day.",
      },
    ],
  },

  "icc-t20-world-cup-betting": {
    slug: "icc-t20-world-cup-betting",
    title: "ICC T20 World Cup Betting on Lotus365 — Every Match Covered",
    description:
      "Bet on every ICC T20 World Cup match with Lotus365 — match odds, session markets, top scorers, and live in-play with instant payouts.",
    eyebrow: "Cricket",
    hero: "The T20 World Cup, in full.",
    intro:
      "World Cup cricket is where the sport goes global, and Lotus365 covers every game with pre-match and in-play markets, sharp odds, and delivery-level refreshes.",
    sections: [
      {
        heading: "Why choose Lotus365",
        body: "Deep session markets, delivery-by-delivery in-play, and 24/7 concierge support for high-stakes match nights.",
      },
      {
        heading: "Markets",
        body: "Tournament winner, group qualifier, match winner, toss, top scorers, session runs, and live in-play.",
      },
    ],
  },

  "lotus365-id": {
    slug: "lotus365-id",
    title: "Lotus365 ID — Your Universal Betting & Casino Login",
    description:
      "One Lotus365 ID unlocks sports, casino, and every partner platform — with a single wallet, single KYC, and 24/7 concierge.",
    eyebrow: "Your account",
    hero: "One ID. Every game we run.",
    intro:
      "Your Lotus365 ID is the single credential that unlocks sports, casino, and every partner book we host. One KYC covers all of it.",
    sections: [
      {
        heading: "How to get your ID",
        body: "Register with your mobile number, verify OTP, complete KYC when you're ready to withdraw. Total time to a live ID: under 60 seconds.",
      },
      {
        heading: "What your ID gets you",
        body: "Full access to Lotus365, plus one-click entry to 11XPlay, Laser247, Cricbet99, Gold365, and Fairdeal.",
      },
      {
        heading: "Keep it safe",
        body: "Use a strong password, enable biometric login, never share OTPs. Support will never ask for your password.",
      },
    ],
  },

  "lotus365-whatsapp-number": {
    slug: "lotus365-whatsapp-number",
    title: "Lotus365 WhatsApp Number — Get Your ID in Minutes",
    description:
      "Message the Lotus365 WhatsApp desk to get your betting ID, request deposits, or resolve any account issue — 24/7.",
    eyebrow: "Support",
    hero: "Get your Lotus365 ID via WhatsApp.",
    intro:
      "WhatsApp is the fastest path to a live Lotus365 ID — especially useful if you'd rather chat than fill in a web form.",
    sections: [
      {
        heading: "How it works",
        body: "Ping our WhatsApp desk with 'Hi Lotus365'. An agent will verify a few basics, take you through a two-minute KYC, and hand you a live ID.",
      },
      {
        heading: "What else you can do on WhatsApp",
        body: "Deposit and withdrawal requests, bonus claims, market questions, KYC uploads, and escalations.",
      },
      {
        heading: "Availability",
        body: "24 hours a day, 365 days a year. Median first-response time: 40 seconds.",
      },
    ],
  },

  "kyc-verification-policy": {
    slug: "kyc-verification-policy",
    title: "KYC Verification Policy — Lotus365 ID Compliance",
    description:
      "Why Lotus365 requires KYC, what documents you'll need, how long verification takes, and how your data is stored.",
    eyebrow: "Compliance",
    hero: "One quick KYC. Then you're fully unlocked.",
    intro:
      "KYC (Know Your Customer) is a regulatory requirement for every regulated gaming operator. Lotus365 does it once, quickly, and with your data encrypted end-to-end.",
    sections: [
      {
        heading: "What you'll need",
        body: "A government-issued photo ID (Aadhaar, passport, or driver's licence), a selfie holding it, and a recent utility bill or bank statement if the address on your ID doesn't match your registered one.",
      },
      {
        heading: "How long it takes",
        body: "Average verification: 40 minutes. Peak windows during IPL weekends can push to two hours.",
      },
      {
        heading: "How your data is stored",
        body: "AES-256 encryption at rest, access restricted to compliance officers only, purged after seven years of account inactivity.",
      },
    ],
  },

  "lotus365-betting": {
    slug: "lotus365-betting",
    title: "Lotus365 Betting — India's Premium Sports & Casino Platform",
    description:
      "Lotus365 is a premium sports and casino book with sharp odds, sub-three-minute payouts, and 24/7 human support.",
    eyebrow: "The Lotus365 book",
    hero: "Betting, redesigned for how you actually play.",
    intro:
      "Everything about Lotus365 is engineered for one thing — a smoother, cleaner, faster betting experience than what's out there.",
    sections: [
      {
        heading: "Sports we cover",
        body: "Cricket, football, tennis, kabaddi, basketball, horse racing, esports, and more — with in-play markets on every major event.",
      },
      {
        heading: "Casino floor",
        body: "Live roulette, blackjack, baccarat, Andar Bahar, Teen Patti, plus a curated library of over 1,500 slots.",
      },
      {
        heading: "What sets us apart",
        body: "Sub-three-minute payouts, transparent bonus terms, and a support team that resolves issues in one conversation.",
      },
    ],
  },

  policies: {
    slug: "policies",
    title: "Lotus365 Policies — Every Rulebook in One Place",
    description:
      "Read every Lotus365 policy — privacy, terms, refund, KYC, responsible gaming, and community guidelines — in one page.",
    eyebrow: "Legal hub",
    hero: "Every rulebook in one place.",
    intro:
      "Every policy that governs your Lotus365 account is linked here. If you're unsure whether something is covered, this is where to start.",
    sections: [
      {
        heading: "The essentials",
        body: "Privacy, terms & conditions, refund policy, KYC, and responsible gaming form the core rulebook.",
        points: [
          "Privacy — what we collect and why",
          "Terms — the agreement between you and Lotus365",
          "Refund policy — when and how money comes back",
          "KYC — how identity is verified",
          "Responsible gaming — tools that keep play in control",
        ],
      },
      {
        heading: "How we update policies",
        body: "Any material change is announced 30 days in advance by email and in-app. Your continued use after that constitutes acceptance.",
      },
    ],
  },

  "trusted-online-betting-id-provider": {
    slug: "trusted-online-betting-id-provider",
    title: "Trusted Online Betting ID Provider — Why Lotus365",
    description:
      "Lotus365 is one of India's most trusted online betting ID providers — licensed, audited, and answerable to real regulators.",
    eyebrow: "Trust",
    hero: "The word 'trusted', earned the hard way.",
    intro:
      "Anyone can call themselves trusted. Lotus365 has the audits, licences, and player track record to back it up.",
    sections: [
      {
        heading: "Licensing",
        body: "Operates under regulated gaming licences. Independent auditors verify RNG fairness every quarter.",
      },
      {
        heading: "Payment integrity",
        body: "All deposits and withdrawals pass through licensed rails — no shady off-book transfers.",
      },
      {
        heading: "Track record",
        body: "Two million players since 2016, an average dispute-resolution time under one hour, and independently published reviews.",
      },
    ],
  },

  "kabaddi-betting": {
    slug: "kabaddi-betting",
    title: "Kabaddi Betting on Lotus365 — PKL & Internationals",
    description:
      "Bet on Pro Kabaddi League and international kabaddi with Lotus365 — match, top raider, top defender, and in-play markets.",
    eyebrow: "Sports",
    hero: "Kabaddi, on India's premium book.",
    intro:
      "Pro Kabaddi has grown into one of the biggest domestic leagues in Indian sport. Lotus365 covers every PKL fixture with markets built for people who actually watch the game.",
    sections: [
      {
        heading: "Markets",
        body: "Match winner, total raid points, top raider, top defender, all-out counts, and in-play markets refreshed each raid.",
      },
      {
        heading: "Live in-play",
        body: "Every PKL match with second-by-second market updates and cash-out.",
      },
    ],
  },

  "lotus365-referral-code": {
    slug: "lotus365-referral-code",
    title: "Lotus365 Referral Code — Refer & Earn ₹500",
    description:
      "Share your Lotus365 referral code — you and your friend each get ₹500 once they clear their first deposit. No cap on invites.",
    eyebrow: "Rewards",
    hero: "Bring a friend, split the bonus.",
    intro:
      "Every Lotus365 account ships with a unique referral code — share it, earn together. No cap, no expiry, no minimum.",
    sections: [
      {
        heading: "How it works",
        body: "Copy your code from the profile page, share it however you want. Your friend enters it at registration.",
      },
      {
        heading: "What you both get",
        body: "₹500 each, credited as real cash once your friend's first deposit clears wagering (a simple 1× turnover).",
      },
      {
        heading: "No cap",
        body: "Invite as many friends as you like. Some VIP members have referred hundreds.",
      },
    ],
  },

  register: {
    slug: "register",
    title: "Register on Lotus365 — Get Your ID in 60 Seconds",
    description:
      "Create your Lotus365 account in under a minute. Mobile number, OTP, and you're in — KYC only when you're ready to withdraw.",
    eyebrow: "Sign up",
    hero: "60 seconds. That's the whole registration.",
    intro:
      "Registration is intentionally minimal. Enter your mobile, verify with an OTP, and you're inside the platform. KYC only becomes relevant when you request your first big withdrawal.",
    sections: [
      {
        heading: "Step 1 — Mobile",
        body: "Enter your registered mobile number and tap 'Send OTP'.",
      },
      {
        heading: "Step 2 — Verify",
        body: "Enter the six-digit OTP. If it doesn't arrive in 60 seconds, choose WhatsApp OTP instead.",
      },
      {
        heading: "Step 3 — Set password",
        body: "Pick a strong password (8+ characters with a number). Enable biometric login for future taps.",
      },
      {
        heading: "Step 4 — Deposit",
        body: "Deposit as little as ₹100 to place your first bet. Welcome bonus credits automatically on your first deposit.",
      },
    ],
  },

  "lotus365-login": {
    slug: "lotus365-login",
    title: "Lotus365 Login — Sign In to Your Account Securely",
    description:
      "Sign in to Lotus365 with your registered mobile and password, biometric, or WhatsApp OTP. Full account help if you get stuck.",
    eyebrow: "Sign in",
    hero: "Log in. Play. Payout in minutes.",
    intro:
      "Signing in to Lotus365 is one tap on a trusted device. Below is every login method plus quick fixes for anything that trips you up.",
    sections: [
      {
        heading: "Login methods",
        body: "Mobile + password, biometric (fingerprint/face) on the app, or WhatsApp OTP if you'd rather not remember a password.",
      },
      {
        heading: "Trouble logging in",
        body: "Use 'Forgot password' with your registered mobile. If you're locked out, chat support can unlock within five minutes after ID confirmation.",
      },
      {
        heading: "Keep your login safe",
        body: "Never share OTPs, enable biometric login, and log out of shared devices after each session.",
      },
    ],
  },

  "lotus365-big-win-stories": {
    slug: "lotus365-big-win-stories",
    title: "Lotus365 Big Win Stories — Real Player Payouts",
    description:
      "Read verified big-win stories from Lotus365 players — cricket, casino, and horse racing. Real names, real payouts, real screenshots.",
    eyebrow: "Community",
    hero: "The stories our players actually tell.",
    intro:
      "We only publish verified stories — with the player's permission, and only after the payout has cleared. No fake numbers, no manufactured hype.",
    sections: [
      {
        heading: "Cricket — ₹5,000 to ₹25,000 in one IPL evening",
        body: "A member from Pune parlayed a match-winner into a session bet on the same match and cleared ₹25,000. Payout landed in 3 minutes flat.",
      },
      {
        heading: "Casino — Aviator streak to ₹1,20,000",
        body: "A Bangalore player rode a cold multiplier streak on Aviator with strict cash-out discipline. Full payout to UPI, no hold.",
      },
      {
        heading: "Horse racing — ₹500 exacta pays ₹18,000",
        body: "A trifecta on a UK Saturday card cleared 36× on a modest stake, paid back to bank the same day.",
      },
    ],
  },

  "how-to-deposit": {
    slug: "how-to-deposit",
    title: "How to Deposit on Lotus365 — UPI, Bank, Wallets",
    description:
      "Step-by-step guide to depositing on Lotus365 — UPI, bank transfer, e-wallets, and minimum/maximum limits.",
    eyebrow: "Cashier",
    hero: "Deposit in under 30 seconds.",
    intro:
      "Every method Lotus365 supports credits within 30 seconds during business hours. Here's exactly how each one works.",
    sections: [
      {
        heading: "UPI",
        body: "Fastest, cheapest, most reliable. Minimum ₹100, no maximum, zero fees. Credits in under 15 seconds most of the time.",
      },
      {
        heading: "Bank transfer",
        body: "IMPS and NEFT accepted. Minimum ₹500. IMPS credits in under two minutes; NEFT respects bank cut-off windows.",
      },
      {
        heading: "E-wallets",
        body: "PayTM, PhonePe, Google Pay — all supported. Same limits as UPI.",
      },
      {
        heading: "If it doesn't credit",
        body: "See our deposit issues page for the fixes — 90% of cases resolve in under five minutes.",
      },
    ],
    sources: [
      { label: "NPCI — UPI overview", to: "https://www.npci.org.in/what-we-do/upi/product-overview" },
      { label: "RBI — payment systems in India", to: "https://www.rbi.org.in/Scripts/PaymentSystems_UM.aspx" },
    ],
  },

  "how-to-withdraw-safely": {
    slug: "how-to-withdraw-safely",
    title: "How to Withdraw Safely on Lotus365",
    description:
      "How to withdraw money from Lotus365 — verification steps, timing, limits, and what to do if a withdrawal is delayed.",
    eyebrow: "Cashier",
    hero: "Money out, safely, in minutes.",
    intro:
      "Lotus365's withdrawal flow is designed for speed and safety at the same time. Follow the checklist and you'll usually see funds in under three minutes.",
    sections: [
      {
        heading: "Before your first withdrawal",
        body: "Complete KYC (once). Add a bank account or UPI ID in your name. Both are one-time steps.",
      },
      {
        heading: "Placing a withdrawal",
        body: "Go to cashier → withdraw → pick method → enter amount → confirm via OTP. Done.",
      },
      {
        heading: "Timing",
        body: "UPI: under 3 minutes for 98% of withdrawals. Bank transfers: under 30 minutes on business days.",
      },
      {
        heading: "Withdrawal safety",
        body: "Withdrawals only go to accounts in your name. Anything else is auto-rejected — a feature, not a bug.",
      },
    ],
    sources: [
      { label: "NPCI — UPI overview", to: "https://www.npci.org.in/what-we-do/upi/product-overview" },
      { label: "RBI — IMPS/NEFT settlement timings", to: "https://www.rbi.org.in/Scripts/FAQView.aspx?Id=76" },
    ],
  },

  support: {
    slug: "support",
    title: "Lotus365 Support — 24/7 Help Desk",
    description:
      "Every Lotus365 support option in one place — live chat, WhatsApp, Telegram, email, and self-serve fixes for common issues.",
    eyebrow: "Help",
    hero: "Real humans, every hour.",
    intro:
      "Lotus365 support is staffed 24/7 by trained agents — never chatbots. Pick the channel that suits you.",
    sections: [
      {
        heading: "Fastest channels",
        body: "Live chat (under 30 seconds) and WhatsApp (under 40 seconds) are the fastest for anything account-related.",
      },
      {
        heading: "Self-serve",
        body: "For login, deposit, withdrawal, and bonus issues, our dedicated support pages resolve most cases in under five minutes.",
      },
      {
        heading: "Escalations",
        body: "Anything not resolved on chat is auto-escalated to a senior agent within 30 minutes.",
      },
    ],
  },

  "lotus365-whatsapp-support": {
    slug: "lotus365-whatsapp-support",
    title: "Lotus365 WhatsApp Support — 24/7 Chat Help",
    description:
      "Reach Lotus365 support on WhatsApp for instant help with your account, deposits, withdrawals, KYC, and bonuses.",
    eyebrow: "Support",
    hero: "One WhatsApp chat away.",
    intro:
      "WhatsApp is the easiest way to talk to Lotus365 — the same trained agents as live chat, with a message trail you can scroll back through.",
    sections: [
      {
        heading: "What you can do",
        body: "Get a new ID, request deposits and withdrawals, upload KYC, claim bonuses, or ask any market question.",
      },
      {
        heading: "Response times",
        body: "Median first response: 40 seconds. 24/7, every day of the year.",
      },
    ],
  },

  "champions-trophy-betting": {
    slug: "champions-trophy-betting",
    title: "ICC Champions Trophy Betting on Lotus365",
    description:
      "Bet on every Champions Trophy match with Lotus365 — outright winner, group qualifiers, match odds, and live in-play.",
    eyebrow: "Cricket",
    hero: "Champions Trophy, in full flow.",
    intro:
      "The Champions Trophy is compact, high-stakes cricket. Lotus365 covers every match with pre-match and in-play markets built for tournament tempo.",
    sections: [
      {
        heading: "Outrights",
        body: "Tournament winner, group qualifier, top run-scorer, top wicket-taker — with early market prices for value hunters.",
      },
      {
        heading: "Match markets",
        body: "Match winner, toss, session runs, top scorers, and delivery-by-delivery in-play.",
      },
    ],
  },

  "esports-betting": {
    slug: "esports-betting",
    title: "Esports Betting on Lotus365 — CS2, Dota 2, Valorant, LoL",
    description:
      "Bet on CS2, Dota 2, Valorant, League of Legends and more on Lotus365 — match, map, and live in-play markets.",
    eyebrow: "Esports",
    hero: "Esports, at competitive odds.",
    intro:
      "Esports is one of the fastest-growing markets in the world. Lotus365 covers every major title with pre-match and live in-play markets.",
    sections: [
      {
        heading: "Titles we cover",
        body: "CS2, Dota 2, Valorant, League of Legends, PUBG Mobile, Free Fire, FIFA/EAFC, and more during Majors.",
      },
      {
        heading: "Markets",
        body: "Match winner, map winner, handicap, total maps, first blood, first tower, and live in-play.",
      },
    ],
  },

  "lotus365-reviews": {
    slug: "lotus365-reviews",
    title: "Lotus365 Reviews — What Players Really Say",
    description:
      "Read verified Lotus365 player reviews — payout speeds, support experience, market depth, and honest complaints.",
    eyebrow: "Community",
    hero: "The good, the bad, the honest.",
    intro:
      "We publish every review — good, bad, and in between. Filtering only positive ones would be pointless. Here's what real players actually say.",
    sections: [
      {
        heading: "What players praise",
        body: "Sub-three-minute payouts, transparent bonus terms, and support agents who resolve tickets on the first message.",
      },
      {
        heading: "What players criticise",
        body: "Occasional peak-time KYC delays during IPL weekends and small-print on some seasonal reload bonuses.",
      },
      {
        heading: "How to leave one",
        body: "Every completed withdrawal triggers a review invite. Feel free to submit anytime from your profile page.",
      },
    ],
  },

  "lotus365-security": {
    slug: "lotus365-security",
    title: "Lotus365 Security — How Your Account is Protected",
    description:
      "How Lotus365 secures your account and funds — encryption, biometric login, fraud detection, and secure storage.",
    eyebrow: "Security",
    hero: "Security you don't have to think about.",
    intro:
      "Security should be invisible. On Lotus365, encryption, monitoring, and account protection all run silently in the background.",
    sections: [
      {
        heading: "Encryption",
        body: "TLS 1.3 for every request, AES-256 for storage, HSM-backed key management. Nothing sensitive is ever stored in plain text.",
      },
      {
        heading: "Login protection",
        body: "OTP for every new device, biometric login on the app, and automatic session expiry after inactivity.",
      },
      {
        heading: "Fraud detection",
        body: "A real-time engine watches for unusual patterns — new devices, atypical bet sizes, mismatched IP geolocation. Anything suspicious triggers a manual review before funds move.",
      },
    ],
  },

  services: {
    slug: "services",
    title: "Lotus365 Services — Everything We Offer",
    description:
      "A full menu of Lotus365 services — cricket, football, tennis, horse racing, kabaddi, casino, Indian card games, and live streaming.",
    eyebrow: "Menu",
    hero: "Everything Lotus365 offers, in one page.",
    intro:
      "Lotus365 runs a wider menu than most books — sport, casino, live game shows, and a partner platform network. Here's the full list.",
    sections: [
      {
        heading: "Sports",
        body: "Cricket, football, tennis, kabaddi, basketball, horse racing, esports, and select niche markets.",
      },
      {
        heading: "Casino",
        body: "Live roulette, blackjack, baccarat, Andar Bahar, Teen Patti, Sic Bo, and 1,500+ slots.",
      },
      {
        heading: "Indian card games",
        body: "Teen Patti (Classic, Joker, Muflis), Andar Bahar, 32 Cards, and Live Poker.",
      },
      {
        heading: "Extras",
        body: "Live streaming for major cricket and football, daily match predictions, and a private VIP concierge.",
      },
    ],
  },

  "lotus365-transaction-limits": {
    slug: "lotus365-transaction-limits",
    title: "Lotus365 Transaction Limits — Deposits & Withdrawals",
    description:
      "Deposit and withdrawal limits on Lotus365 — daily, weekly, and monthly caps by method and account tier.",
    eyebrow: "Cashier",
    hero: "Clear limits, no fine print.",
    intro:
      "Every deposit and withdrawal method on Lotus365 has a stated limit. Nothing hidden.",
    sections: [
      {
        heading: "Deposits",
        body: "No daily deposit cap applies to verified accounts — limits below are per-transaction.",
        table: {
          headers: ["Method", "Minimum", "Maximum per transaction"],
          rows: [
            ["UPI", "₹100", "₹1,00,000"],
            ["Bank transfer", "₹500", "₹5,00,000"],
          ],
        },
      },
      {
        heading: "Withdrawals",
        body: "Silver, Gold and VIP tiers unlock higher daily withdrawal caps on top of the per-transaction limits below.",
        table: {
          headers: ["Method", "Minimum", "Maximum per transaction"],
          rows: [
            ["UPI", "₹100", "₹1,00,000"],
            ["Bank transfer", "₹500", "₹10,00,000"],
          ],
        },
      },
      {
        heading: "How to request a higher limit",
        body: "VIP members can request bespoke caps by contacting their account manager.",
      },
    ],
    sources: [
      { label: "NPCI — UPI transaction limits", to: "https://www.npci.org.in/what-we-do/upi/faqs" },
      { label: "RBI — payment systems in India", to: "https://www.rbi.org.in/Scripts/PaymentSystems_UM.aspx" },
    ],
  },

  "lotus365-prediction": {
    slug: "lotus365-prediction",
    title: "Lotus365 Predictions — Daily Match Tips & Odds Reads",
    description:
      "Expert daily cricket, football, and kabaddi predictions from the Lotus365 desk — value picks, form analysis, and market reads.",
    eyebrow: "Analysis",
    hero: "Predictions built on data, not hype.",
    intro:
      "Every prediction we publish is written by a real analyst reviewing form, injuries, pitch/track conditions, and market moves. No AI-generated fluff.",
    sections: [
      {
        heading: "Cricket predictions",
        body: "Daily IPL, international, domestic T20, and WPL calls with match-winner and top-scorer picks.",
      },
      {
        heading: "Football predictions",
        body: "EPL, La Liga, UCL, and international windows — match, over/under, and BTTS reads.",
      },
      {
        heading: "How we track accuracy",
        body: "Every published pick is logged publicly on our prediction ledger. We show the misses, not just the wins.",
      },
    ],
  },

  fairdeal: {
    slug: "fairdeal",
    title: "Fairdeal on Lotus365 — Transparent Sports & Casino",
    description:
      "Fairdeal on Lotus365 — transparent odds, live streaming, and instant payouts through your Lotus365 wallet.",
    eyebrow: "Partner platform",
    hero: "Fairdeal, wired into Lotus365.",
    intro:
      "Fairdeal is one of the most transparent books in the network — sharp odds, clear market rules, and full in-play coverage.",
    sections: [
      {
        heading: "What Fairdeal is known for",
        body: "Consistent pricing, minimal roll-back on live markets, and clean session betting during IPL.",
      },
      {
        heading: "How to use it",
        body: "One tap from the Lotus365 platforms page. Wallet, KYC, and support all shared.",
      },
    ],
  },

  "lotus365-sports-betting": {
    slug: "lotus365-sports-betting",
    title: "Lotus365 Sports Betting — India's Trusted Sportsbook",
    description:
      "Bet on cricket, football, tennis, kabaddi, basketball, horse racing, and esports on Lotus365 — sharp odds, deep markets, instant payouts.",
    eyebrow: "Sportsbook",
    hero: "Sports, done properly.",
    intro:
      "Lotus365's sportsbook is one of the widest in India — every serious league, every major tournament, and depth of markets that rewards actually following the game.",
    sections: [
      {
        heading: "The mainstays",
        body: "Cricket, football, tennis, kabaddi, basketball. Full market coverage on every league in each of them.",
      },
      {
        heading: "The specialists",
        body: "Horse racing, esports, motorsports, MMA, and niche international events during their peak windows.",
      },
      {
        heading: "In-play everywhere",
        body: "Delivery-level cricket, minute-by-minute football, and per-map esports refreshes.",
      },
    ],
  },

  "lotus365-telegram-channel": {
    slug: "lotus365-telegram-channel",
    title: "Lotus365 Telegram Channel — Odds Drops & Bonus Alerts",
    description:
      "Join the official Lotus365 Telegram channel for daily odds drops, promotion alerts, match predictions, and instant support handoffs.",
    eyebrow: "Community",
    hero: "The Lotus365 signal, on Telegram.",
    intro:
      "Our Telegram channel is where regulars find odds moves, bonus drops, and match reads before anyone else.",
    sections: [
      {
        heading: "What you get",
        body: "Daily match tips, exclusive promo codes, boosted odds notifications, and priority support handoffs.",
      },
      {
        heading: "How to join",
        body: "Search 'Lotus365 Official' on Telegram and tap join. Free, no cap, no spam.",
      },
    ],
  },

  "lotus365-demo-id": {
    slug: "lotus365-demo-id",
    title: "Lotus365 Demo ID — Try the Platform Risk-Free",
    description:
      "Get a free Lotus365 demo ID to explore markets, try our interface, and practise placing bets without staking real money.",
    eyebrow: "Try it",
    hero: "Test drive Lotus365, risk-free.",
    intro:
      "Not sure yet? A demo ID lets you explore every market, place practice bets, and try our interface end-to-end without funding anything.",
    sections: [
      {
        heading: "How to get one",
        body: "Message our WhatsApp desk asking for a demo — we'll set you up in under a minute.",
      },
      {
        heading: "What you can do",
        body: "Everything real accounts can except cash withdrawals — practice betting, explore live markets, and test the app.",
      },
      {
        heading: "Ready for real",
        body: "When you're ready, convert your demo into a live account in one tap.",
      },
    ],
  },

  "lotus365-exchange": {
    slug: "lotus365-exchange",
    title: "Lotus365 Exchange — Back, Lay, and Trade Odds",
    description:
      "The Lotus365 exchange lets you back or lay any market — trade odds during a live match, hedge positions, and lock in profit.",
    eyebrow: "Advanced",
    hero: "Set your own odds. Trade like a pro.",
    intro:
      "On the Lotus365 exchange, you don't just bet against the book — you can lay bets, back positions, and trade odds during a live match.",
    sections: [
      {
        heading: "Back and lay",
        body: "Back a market you think will win, or lay one you think won't. Every price is set peer-to-peer.",
      },
      {
        heading: "Trading in-play",
        body: "Set positions before the match, hedge during, cash out at a profit before settlement.",
      },
      {
        heading: "Commission",
        body: "A flat commission is charged only on net winnings. Losses cost nothing extra.",
      },
    ],
  },

  "lotus365-todays-best-odds": {
    slug: "lotus365-todays-best-odds",
    title: "Lotus365 Today's Best Odds — Live Value Feed",
    description:
      "The best odds available on Lotus365 today — cricket, football, tennis, and casino promotions, updated live throughout the day.",
    eyebrow: "Today",
    hero: "Today's best value, in one feed.",
    intro:
      "Every morning our trading desk highlights the day's best-value markets — updated live as the odds move.",
    sections: [
      {
        heading: "Cricket picks",
        body: "Match-winner, top-scorer, and session picks with our analyst's read on value.",
      },
      {
        heading: "Football picks",
        body: "European league prices where the market is out of line with the underlying form.",
      },
      {
        heading: "Promo picks",
        body: "Any Lotus365 promotion that offers boosted odds or a risk-free bet is flagged here.",
      },
    ],
  },

  "why-choose-lotus365-book": {
    slug: "why-choose-lotus365-book",
    title: "Why Choose Lotus365 — Six Honest Reasons",
    description:
      "Six honest reasons Lotus365 is India's most trusted premium sportsbook — payout speed, market depth, human support, and more.",
    eyebrow: "Why Lotus365",
    hero: "Six honest reasons to play with us.",
    intro:
      "We're not going to list twenty half-truths. Here are six real reasons regulars stay with Lotus365 for years.",
    sections: [
      {
        heading: "Payout speed",
        body: "Sub-three-minute UPI withdrawals for 98% of transactions. VIP under 60 seconds.",
      },
      {
        heading: "Market depth",
        body: "Cricket session, fancy, delivery, over — every layer you'd expect from a specialist book.",
      },
      {
        heading: "Human support",
        body: "Never a chatbot. Median first response under 30 seconds.",
      },
      {
        heading: "Bonus honesty",
        body: "Transparent wagering, no hidden max-win caps.",
      },
      {
        heading: "Multi-platform access",
        body: "One ID, one wallet, every partner book.",
      },
      {
        heading: "Track record",
        body: "Two million players since 2016, independent reviews, published dispute stats.",
      },
    ],
  },

  "lotus365-book-ipl-2026-calendar": {
    slug: "lotus365-book-ipl-2026-calendar",
    title: "IPL 2026 Calendar on Lotus365 — Every Match, Every Market",
    description:
      "The full IPL 2026 fixture list on Lotus365 — match dates, venues, opening lines, and live in-play coverage on every game.",
    eyebrow: "Cricket",
    hero: "IPL 2026, mapped out.",
    intro:
      "The full IPL 2026 season fixture on one page — every date, every venue, every opening line — plus our analyst's early value picks.",
    sections: [
      {
        heading: "Full fixture",
        body: "All league matches, playoffs, and final. Filter by team, venue, or date.",
      },
      {
        heading: "Opening lines",
        body: "Match-winner opening odds for every fixture, published two weeks before the season.",
      },
      {
        heading: "Live coverage",
        body: "Every match with delivery-by-delivery in-play markets and live streaming inside the app.",
      },
    ],
  },

  "high-odds-betting-strategy": {
    slug: "high-odds-betting-strategy",
    title: "High Odds Betting Strategy — How to Play the Long Odds",
    description:
      "A practical guide to high-odds betting — bankroll management, market selection, and the discipline that separates profit from ruin.",
    eyebrow: "Strategy",
    hero: "Long odds, played properly.",
    intro:
      "High-odds betting is one of the most misunderstood strategies. Done right, it rewards patience. Done wrong, it drains a bankroll in weeks.",
    sections: [
      {
        heading: "Bankroll rules",
        body: "Cap each high-odds stake at 1% of your bankroll. High variance demands strict discipline.",
      },
      {
        heading: "Market selection",
        body: "Prefer markets where price mispricing is likely — small-team upsets, top-scorer specials, session outliers.",
      },
      {
        heading: "When not to",
        body: "Never in tilt. Never as a chase after losses. Never in a market you don't understand.",
      },
    ],
  },

  "become-lotus365-agent": {
    slug: "become-lotus365-agent",
    title: "Become a Lotus365 Agent — Partner Programme",
    description:
      "Apply to become a Lotus365 partner — earn ongoing commission by bringing players to a premium book with instant payouts.",
    eyebrow: "Partners",
    hero: "Partner with a book players actually stay with.",
    intro:
      "Our partner programme is for people who bring quality players to Lotus365 — not spam networks. Applications are reviewed by a real team.",
    sections: [
      {
        heading: "How it works",
        body: "Apply, get a private code, share it with your network. You earn ongoing commission for as long as your players play.",
      },
      {
        heading: "What we look for",
        body: "Genuine reach in cricket, casino, or fantasy sports communities. No spam, no misleading ads, no incentivised registrations.",
      },
      {
        heading: "Payouts",
        body: "Weekly, straight to your registered account. Full ledger visible in your partner dashboard.",
      },
    ],
  },

  "is-lotus365-real-or-fake": {
    slug: "is-lotus365-real-or-fake",
    title: "Is Lotus365 Real or Fake? A Straight Answer",
    description:
      "A frank breakdown of what makes a betting platform real vs fake, and where Lotus365 stands on every check that matters.",
    eyebrow: "Trust",
    hero: "Fair question. Straight answer.",
    intro:
      "There's a lot of noise online. Here's a straightforward check-list of what makes a book real vs fake, and where Lotus365 lands on each.",
    sections: [
      {
        heading: "Real books can pay you",
        body: "The first test. Lotus365 has processed millions of withdrawals with a public dispute resolution rate under 1%.",
      },
      {
        heading: "Real books are licensed",
        body: "We operate under regulated gaming licences with quarterly independent audits.",
      },
      {
        heading: "Real books have real support",
        body: "24/7 desk with under-30-second response times — not a scripted bot.",
      },
      {
        heading: "Real books publish rules",
        body: "Every policy is on the site. Read them; nothing is hidden.",
      },
    ],
  },

  "what-is-lotus365": {
    slug: "what-is-lotus365",
    title: "What is Lotus365? A Beginner's Guide",
    description:
      "A plain-language explanation of what Lotus365 is, what you can do on it, and how it compares to other online gaming platforms.",
    eyebrow: "Beginners",
    hero: "Lotus365, explained plainly.",
    intro:
      "Lotus365 is an online sports and casino platform for players in India and beyond. It's licensed, audited, and built for a genuinely premium experience.",
    sections: [
      {
        heading: "What you can do",
        body: "Bet on cricket, football, kabaddi, tennis, horse racing, and esports. Play live casino, Indian card games, and 1,500+ slots. All from one Lotus365 ID.",
      },
      {
        heading: "How it works",
        body: "Register in 60 seconds, deposit via UPI, place your first bet, withdraw winnings straight back to your bank or UPI.",
      },
      {
        heading: "Why players choose it",
        body: "Speed of payouts, human support, and market depth that rewards actually watching the game.",
      },
    ],
  },

  "is-lotus365-safe": {
    slug: "is-lotus365-safe",
    title: "Is Lotus365 Safe? Security, Payouts, and Data",
    description:
      "How safe is Lotus365 for real money play? A frank walk-through of encryption, licensing, payouts, and dispute handling.",
    eyebrow: "Trust",
    hero: "Safe by design, not by accident.",
    intro:
      "Safety is more than a padlock icon. Here's exactly what Lotus365 does — technically, financially, and operationally — to keep your account and money secure.",
    sections: [
      {
        heading: "Technical safety",
        body: "TLS 1.3, AES-256 storage, HSM-backed keys, tokenised payment data.",
      },
      {
        heading: "Financial safety",
        body: "Player funds segregated from operating capital. Withdrawals only to accounts in your name.",
      },
      {
        heading: "Operational safety",
        body: "24/7 fraud monitoring, licensed data feeds, independently audited RNGs.",
      },
      {
        heading: "Dispute safety",
        body: "Every dispute is logged, timestamped, and — if unresolved — escalated to the licensing authority.",
      },
    ],
  },

  "is-lotus365-legal": {
    slug: "is-lotus365-legal",
    title: "Is Lotus365 Legal? Regulatory Position Explained",
    description:
      "A clear read on Lotus365's regulatory position — jurisdiction, licences, and what's legal for you as a player.",
    eyebrow: "Legal",
    hero: "The legal position, plainly.",
    intro:
      "Online gaming laws differ by state and country. Here's exactly how Lotus365 is regulated and what that means for players.",
    sections: [
      {
        heading: "Our licence",
        body: "Lotus365 operates under regulated gaming licences with quarterly independent audits and public compliance reports.",
      },
      {
        heading: "Your position",
        body: "Legality of online gaming for players varies by jurisdiction. It's your responsibility to check local laws before playing.",
      },
      {
        heading: "Age",
        body: "18+ everywhere Lotus365 operates. Every account is age-verified as part of KYC.",
      },
    ],
  },

  "community-guidelines": {
    slug: "community-guidelines",
    title: "Lotus365 Community Guidelines — Play Fair, Play Kind",
    description:
      "The rules that keep the Lotus365 community fair, safe, and respectful — for players, VIPs, and support alike.",
    eyebrow: "Community",
    hero: "Fair play. Kind chat. Simple as that.",
    intro:
      "Community guidelines aren't legal terms — they're the shared code of conduct that keeps Lotus365 pleasant to play on.",
    sections: [
      {
        heading: "Chat conduct",
        body: "No abuse, no slurs, no doxxing. Any of those results in an instant chat ban, and repeat offences close the account.",
      },
      {
        heading: "Fair play",
        body: "No colluding, no bots, no exploiting bugs. If you spot something suspicious, report it.",
      },
      {
        heading: "Respecting support",
        body: "Our agents are trained to help, not absorb abuse. Escalations follow a clear ladder; shouting doesn't move it faster.",
      },
    ],
  },

  "trusted-betting-agent": {
    slug: "trusted-betting-agent",
    title: "Trusted Betting Agent — Lotus365 Partner Network",
    description:
      "Find a trusted Lotus365 betting agent — verified, licensed partners with full account support and instant deposit/withdrawal assistance.",
    eyebrow: "Partners",
    hero: "Trusted agents, verified by us.",
    intro:
      "A good agent is a human shortcut — someone who helps you deposit, withdraw, and resolve issues without navigating the platform alone. Every Lotus365 agent is vetted and verifiable.",
    sections: [
      {
        heading: "How to verify an agent",
        body: "Every real agent has a unique code you can validate on our WhatsApp desk. If you can't verify them, they aren't one of ours.",
      },
      {
        heading: "What an agent does",
        body: "Onboards you, helps you deposit and withdraw, answers market questions, and escalates issues to Lotus365 support if needed.",
      },
      {
        heading: "Reporting fake agents",
        body: "Send us the number or handle on our WhatsApp desk. Verified fakes are prosecuted.",
      },
    ],
  },
  "lotus365-cricket": {
    slug: "lotus365-cricket",
    title: "Cricket Betting on Lotus365 — IPL, T20, ODI & Test",
    description:
      "Bet on every format of cricket with Lotus365 — IPL, WPL, T20, ODI, Test — with live odds, session markets, and fast settlement.",
    eyebrow: "Cricket",
    hero: "Cricket, the way it should be played online.",
    intro:
      "Cricket is our home game. Lotus365 covers every ball of every format with the sharpest odds in the market and a settlement desk built for the volume of an IPL night.",
    sections: [
      {
        heading: "Every format, every ground",
        body: "IPL, WPL, PSL, BBL, CPL, T20 Internationals, ODIs and Tests. Domestic tournaments included.",
        points: ["Match odds & book", "Session & fancy markets", "Player performance markets", "Live in-play with 3-second refresh"],
      },
      {
        heading: "Why players stay on Lotus365 for cricket",
        body: "Deep liquidity means the odds you see hold up when you place the bet — no last-second shifts. Settlement runs the moment the innings closes.",
      },
      {
        heading: "How to place your first cricket bet",
        body: "Log in, pick your match, choose the market, set your stake, confirm. First-time users get a walkthrough from a real support agent on WhatsApp.",
      },
    ],
    cta: defaultCta,
  },
  "football-betting": {
    slug: "football-betting",
    title: "Football Betting on Lotus365 — EPL, UCL, La Liga",
    description:
      "Bet on top football leagues and tournaments with Lotus365 — deep markets, live odds, and instant in-play betting on every major match.",
    eyebrow: "Football",
    hero: "Every league, every kick-off.",
    intro:
      "From the Premier League to the Champions League to World Cup qualifiers, Lotus365 carries every competition football fans actually care about — with the market depth to back it up.",
    sections: [
      {
        heading: "Leagues we cover",
        body: "EPL, UCL, La Liga, Serie A, Bundesliga, Ligue 1, MLS, ISL, and every international tournament. Women's football and youth internationals included.",
      },
      {
        heading: "Markets that go beyond the winner",
        body: "Match result, over/under, both teams to score, corners, cards, first goalscorer, half-time/full-time — plus live in-play markets that update by the second.",
      },
      {
        heading: "Live in-play",
        body: "Odds move with the match. Cash-out is available on selected markets so you can lock in a return before the final whistle.",
      },
    ],
    cta: defaultCta,
  },
  "tennis-betting": {
    slug: "tennis-betting",
    title: "Tennis Betting on Lotus365 — ATP, WTA, Grand Slams",
    description:
      "Bet on Grand Slams, ATP and WTA tours with Lotus365 — match, set, game and point-by-point markets with live odds.",
    eyebrow: "Tennis",
    hero: "Tennis markets that follow every rally.",
    intro:
      "Tennis rewards patient bettors — and Lotus365 gives them the tools. Set-by-set, game-by-game and point-by-point markets across every major tour.",
    sections: [
      {
        heading: "Tournaments we cover",
        body: "Australian Open, French Open, Wimbledon, US Open, all ATP 1000 and 500 events, WTA tours, Davis Cup and Billie Jean King Cup.",
      },
      {
        heading: "Markets available",
        body: "Match winner, set betting, correct score, total games, over/under, tie-break specials, and live point-by-point in-play.",
      },
      {
        heading: "Live scoring, live odds",
        body: "Our tennis feed refreshes with every point so the market you're watching is the market you're betting.",
      },
    ],
    cta: defaultCta,
  },
  casino: {
    slug: "casino",
    title: "Live Casino on Lotus365 — Roulette, Baccarat & Slots",
    description:
      "Play HD live casino on Lotus365 — Roulette, Baccarat, Blackjack, and premium slots, streamed from regulated studios with audited fair-play.",
    eyebrow: "Casino",
    hero: "The floor is open. The dealers are live.",
    intro:
      "Lotus365 partners with the top live studios in the world to bring you HD tables you'd expect in Macau — with stake levels that work for a casual player or a serious VIP.",
    sections: [
      {
        heading: "Tables",
        body: "Roulette (European, Lightning, Speed), Baccarat, Blackjack (classic, party, free-bet), Dragon Tiger, Andar Bahar, Teen Patti.",
      },
      {
        heading: "Slots",
        body: "1500+ curated titles from Pragmatic Play, Evolution, PG Soft, and Playtech. Progressive jackpots, buy-bonus slots, and classic three-reelers.",
      },
      {
        heading: "Fair play, audited",
        body: "Every table is streamed from a regulated studio. RNG-based games are independently audited so odds match what's advertised.",
      },
    ],
    cta: defaultCta,
  },
  "indian-card-games": {
    slug: "indian-card-games",
    title: "Indian Card Games on Lotus365 — Teen Patti, Andar Bahar",
    description:
      "Play Teen Patti, Andar Bahar, Dragon Tiger and more on Lotus365 with live dealers, HD streams and instant results.",
    eyebrow: "Indian Card Games",
    hero: "The games you grew up with, streamed live.",
    intro:
      "Teen Patti at Diwali. Andar Bahar with the family. Lotus365 brings the games India actually plays — with real dealers, real stakes, and results you can trust.",
    sections: [
      {
        heading: "Games on the table",
        body: "Teen Patti (classic, one-day, 20-20), Andar Bahar, Dragon Tiger, Bollywood Casino, 32 Cards, and Muflis Teen Patti.",
      },
      {
        heading: "Real dealers, Indian studios",
        body: "Hindi and English speaking dealers, streamed in HD, with side-bets and quick round times.",
      },
      {
        heading: "Stake ranges",
        body: "Tables start at ₹50 and run to ₹5,00,000 per hand. VIP-only high-stakes rooms available on request.",
      },
    ],
    cta: defaultCta,
  },
  "lotus365-vs-reddy-anna-comparison": {
    slug: "lotus365-vs-reddy-anna-comparison",
    title: "Lotus365 vs Reddy Anna: Full Comparison Guide | Lotus365",
    description:
      "Lotus365 vs Reddy Anna compared on trust, licensing, markets, odds, payouts, bonuses and support — a straight, desk-level guide for Indian punters.",
    eyebrow: "Comparison guide",
    hero: "Lotus365 vs Reddy Anna: the honest comparison.",
    intro:
      "\"Lotus365 vs Reddy Anna\" is one of the most searched questions in Indian betting. Both names dominate WhatsApp groups, but they operate on very different models. This is the desk-level breakdown we give friends who ask.",
    sections: [
      {
        heading: "At a glance",
        body: "Lotus365 is a licensed exchange-style platform with a real product, a support desk and instant UPI payouts. Reddy Anna is a broker/agent network — you deal with a middleman who books your bets on a shared backend.",
        points: [
          "Model — Lotus365: direct platform · Reddy Anna: agent-brokered ID",
          "Licensing — Lotus365: Curaçao-licensed · Reddy Anna: unregulated agent chain",
          "Deposits — Lotus365: UPI/IMPS in-app · Reddy Anna: pay the agent, manual credit",
          "Withdrawals — Lotus365: 47s median UPI · Reddy Anna: depends on agent liquidity",
          "Support — Lotus365: 24/7 desk · Reddy Anna: your agent's WhatsApp",
        ],
      },
      {
        heading: "Trust and safety",
        body: "On Lotus365 your funds sit in a segregated wallet you control. On Reddy Anna your balance is an entry in an agent's ledger — if the agent disappears or defaults, so does your money. This single difference is why our desk defaults to Lotus365.",
      },
      {
        heading: "Markets and odds",
        body: "Both cover cricket deeply. Lotus365 adds football, tennis, kabaddi, esports, live casino and Aviator on one wallet. Odds are broadly comparable on IPL and international cricket; Lotus365 tends to be tighter on football and tennis.",
      },
      {
        heading: "Payouts and deposits",
        body: "Lotus365 payouts settle in a median 47 seconds over UPI, 24/7, straight to the account on file. Reddy Anna payouts route through the agent — fast when the agent is liquid, slow or capped when they're not.",
      },
      {
        heading: "Bonuses",
        body: "Lotus365 runs a published welcome bonus up to ₹25,000, weekly cashback, and a transparent VIP ladder. Reddy Anna bonuses are agent-negotiated and vary widely — there is no official schedule.",
      },
      {
        heading: "Support",
        body: "Lotus365 has a 24/7 concierge desk on WhatsApp plus in-app chat with tracked tickets. On Reddy Anna, \"support\" is whichever agent onboarded you — quality depends entirely on the individual.",
      },
      {
        heading: "The verdict",
        body: "For anyone who wants a regulated wallet, instant payouts and a real product to use daily, Lotus365 is the straightforward pick. Reddy Anna still has a place for punters who value the agent relationship — just understand you are trusting a person, not a platform.",
      },
    ],
    cta: defaultCta,
  },
};



// Fallback slug aliases — accept minor typos from source URLs.
export const PAGE_ALIASES: Record<string, string> = {
  about: "about-us",
  contact: "contact-us",
  privacy: "privacy-policy",
  terms: "terms-conditions",
  "reddy-anna-id": "lotus365-id",
  "reddy-anna-login": "lotus365-login",
  "reddy-anna-book-bonus": "lotus365-book-bonus",
  "reddy-anna-book-app": "lotus365-book-app",
  "reddy-anna-betting": "lotus365-betting",
  "reddy-anna-whatsapp-number": "lotus365-whatsapp-number",
  "reddy-anna-whatsapp-support": "lotus365-whatsapp-support",
  "reddy-anna-referral-code": "lotus365-referral-code",
  "reddy-anna-big-win-stories": "lotus365-big-win-stories",
  "reddy-anna-reviews": "lotus365-reviews",
  "reddy-anna-security": "lotus365-security",
  "reddy-anna-prediction": "lotus365-prediction",
  "reddy-anna-transaction-limits": "lotus365-transaction-limits",
  "reddy-anna-telegram-channel": "lotus365-telegram-channel",
  "reddy-anna-demo-id": "lotus365-demo-id",
  "reddy-anna-exchange": "lotus365-exchange",
  "reddy-anna-todays-best-odds": "lotus365-todays-best-odds",
  "reddy-anna-sports-betting": "lotus365-sports-betting",
  "reddy-anna-book-ipl-2026-calendar": "lotus365-book-ipl-2026-calendar",
  "wpl-2026-betting-reddy-anna-book": "wpl-2026-betting-lotus365-book",
  "why-choose-reddy-anna-book": "why-choose-lotus365-book",
  "become-reddy-anna-agent": "become-lotus365-agent",
  "is-reddy-anna-real-or-fake": "is-lotus365-real-or-fake",
  "is-reddy-anna-safe": "is-lotus365-safe",
  "is-reddy-anna-legal": "is-lotus365-legal",
  "reddy-anna-cricket": "lotus365-cricket",
  "cricket-betting": "lotus365-cricket",
  "reddy-anna-cricket-betting": "lotus365-cricket",
  "what-is-reddy-anna": "what-is-lotus365",
};

export function resolvePageSlug(slug: string): string {
  const clean = slug.replace(/\/$/, "").toLowerCase();
  return PAGE_ALIASES[clean] ?? clean;
}

export function getPage(slug: string): PageContent | null {
  return PAGES[resolvePageSlug(slug)] ?? null;
}

export const ALL_PAGE_SLUGS = Object.keys(PAGES);
