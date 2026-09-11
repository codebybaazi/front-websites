/** Origin every canonical, og:url, sitemap <loc> and absolute schema URL is built from. */
export const SITE_ORIGIN = "https://fairplayindia.com";

/** Shared link-preview image: the homepage hero banner (public/og-banner.jpg). */
export const OG_IMAGE = `${SITE_ORIGIN}/og-banner.jpg`;
export const OG_IMAGE_WIDTH = "1376";
export const OG_IMAGE_HEIGHT = "768";
export const TWITTER_SITE = "@FairplayElite";
export const TWITTER_PROFILE_URL = "https://twitter.com/FairplayElite";
/** Square mark used in Organization / publisher JSON-LD (public/logo.png). */
export const SITE_LOGO = `${SITE_ORIGIN}/logo.png`;
export const SUPPORT_EMAIL = "support@fairplayindia.com";

export function organizationNode() {
  return {
    "@type": "Organization" as const,
    "@id": `${SITE_ORIGIN}/#organization`,
    name: "Fairplay",
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject" as const,
      url: SITE_LOGO,
    },
    sameAs: [TWITTER_PROFILE_URL],
    contactPoint: {
      "@type": "ContactPoint" as const,
      contactType: "customer support",
      email: SUPPORT_EMAIL,
      url: `${SITE_ORIGIN}/contact-us`,
      availableLanguage: ["English", "Hindi"],
    },
  };
}

/** Homepage graph: brand entity plus the website that publishes these pages. */
export function speakableSpecification(cssSelector: string[]) {
  return {
    "@type": "SpeakableSpecification" as const,
    cssSelector,
  };
}

export function homeEntityJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        name: "Fairplay",
        url: SITE_ORIGIN,
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: SITE_ORIGIN,
        name: "Fairplay",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        about: { "@id": `${SITE_ORIGIN}/#organization` },
        speakable: speakableSpecification(["#what-is-fairplay-answer", "#faq-heading"]),
      },
    ],
  };
}

/** og:image dimensions plus twitter:site for every document head that shares OG_IMAGE. */
export function socialImageMeta() {
  return [
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: OG_IMAGE_WIDTH },
    { property: "og:image:height", content: OG_IMAGE_HEIGHT },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_SITE },
    { name: "twitter:image", content: OG_IMAGE },
  ];
}

/** Google snippets truncate around 155–160 characters. */
export const META_DESCRIPTION_MAX = 160;

export function clipMetaDescription(text: string, max = META_DESCRIPTION_MAX): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  const cut = trimmed.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  const base = (space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[,:;.–-]+$/u, "").trim();
  return `${base}…`;
}

export interface PageSeo {
  title: string;
  description: string;
  keywords?: string;
}

export function absolutePageUrl(path?: string) {
  if (!path) return SITE_ORIGIN;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${clean}`;
}

export function pageHead(seo: PageSeo, path?: string) {
  const url = absolutePageUrl(path);
  return {
    title: seo.title,
    meta: [
      { title: seo.title },
      { name: "description", content: clipMetaDescription(seo.description) },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: clipMetaDescription(seo.description) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Fairplay" },
      ...socialImageMeta(),
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: clipMetaDescription(seo.description) },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function pageHeadFor(path: string) {
  const seo = PAGE_SEO[path];
  if (!seo) {
    return pageHead({
      title: "Fairplay | Cricket ID and sports exchange",
      description:
        "Fairplay cricket ID and sports exchange for IPL, football, tennis and live casino. UPI deposits, WhatsApp ID help, and payouts after markets settle.",
      keywords: "Fairplay, cricket ID, sports exchange",
    }, path);
  }
  return pageHead(seo, path);
}

/** Unique, keyword-aware titles and descriptions for static pages. */
export const PAGE_SEO: Record<string, PageSeo> = {
  "/blog": {
    title: "Fairplay blog | Cricket ID, IPL betting and login guides",
    description:
      "Fairplay guides written in plain language: Fairplay ID, login, UPI deposits, IPL and cricket betting, football, tennis and live casino.",
    keywords: "Fairplay blog, cricket ID guide, IPL betting guide, Fairplay login, Fairplay deposit",
  },
  "/authors": {
    title: "Fairplay writers | Named authors on the desk",
    description:
      "Meet the Fairplay India writers: one named person per blog category, with a public profile linked from every post they write.",
    keywords: "Fairplay authors, Fairplay writers, Fairplay support desk, Fairplay blog writers",
  },
  "/matches": {
    title: "All matches 2026–27 | Cricket, football, tennis",
    description:
      "Every 2026–27 fixture grouped by tournament: cricket series and IPL, FIFA World Cup 2026, ATP and WTA tennis. Filter by sport or search a team, event or venue.",
    keywords:
      "all matches, match index, cricket fixtures 2026, FIFA World Cup 2026 matches, ATP WTA schedule, Fairplay matches",
  },
  "/schedule": {
    title: "Fairplay schedule 2026 | Cricket, FIFA and tennis fixtures",
    description:
      "2026 Fairplay fixtures: cricket and IPL, FIFA World Cup, ATP and WTA tennis. Open a match for prediction, score context and live markets.",
    keywords: "Fairplay schedule, cricket fixtures 2026, FIFA World Cup 2026, tennis schedule, IPL fixtures",
  },
  "/login-guide": {
    title: "Fairplay login | OTP on your cricket ID",
    description:
      "Fairplay login guide: sign in with your mobile number and OTP, recover a Fairplay login password, handle 2FA, and open cricket, football and tennis books.",
    keywords: "Fairplay login, Fairplay OTP, cricket ID login",
  },
  "/login-issues": {
    title: "Fairplay login not working | OTP and locked ID",
    description:
      "Fairplay login not working? Fix OTP delays, a locked Fairplay ID, wrong password errors and login loops. WhatsApp support can reset access.",
    keywords: "Fairplay login not working, Fairplay OTP, locked Fairplay ID",
  },
  "/register-guide": {
    title: "Fairplay register | Get a cricket ID on WhatsApp",
    description:
      "Fairplay register and sign up: create a Fairplay login ID from WhatsApp in minutes, then deposit via UPI and bet cricket, football, tennis or live casino.",
    keywords: "Fairplay register, Fairplay ID, cricket ID",
  },

  "/deposit-guide": {
    title: "Fairplay deposit | UPI wallet top-up guide",
    description:
      "Add money to your Fairplay wallet with UPI, net banking or crypto. Minimums, credit times and what to do if a Fairplay deposit stays pending.",
    keywords: "Fairplay deposit, Fairplay UPI, add money Fairplay wallet, Fairplay wallet top-up",
  },
  "/fairplay-deposit-number": {
    title: "Fairplay Deposit number | Official WhatsApp for UPI",
    description:
      "Official Fairplay Deposit number on WhatsApp. Open the live deposit number Fairplay uses for UPI wallet help, pending credits and Fairplay ID checks.",
    keywords:
      "Fairplay, Fairplay Deposit number, Deposit number Fairplay, Fairplay WhatsApp deposit, Fairplay deposit WhatsApp",
  },
  "/deposit-issues": {
    title: "Fairplay deposit issues | Pending UPI credits",
    description:
      "Fairplay deposit not showing? Check UTR, pending UPI credits and failed top-ups. Support can match the payment to your Fairplay ID.",
    keywords: "Fairplay deposit pending, Fairplay UPI failed, wallet not credited",
  },
  "/withdrawal-guide": {
    title: "Fairplay withdrawal | UPI payouts in about 180 minutes",
    description:
      "Withdraw from Fairplay to UPI or bank after the market settles. Typical payout window, limits, and how to track a Fairplay withdrawal.",
    keywords: "Fairplay withdrawal, Fairplay payout, Fairplay UPI withdrawal, withdraw Fairplay winnings",
  },
  "/fairplay-withdrawal-number": {
    title: "Fairplay Withdrawal number | Official WhatsApp for payouts",
    description:
      "Official Fairplay Withdrawal number on WhatsApp. Open the live withdrawal number Fairplay uses for UPI and bank payout help, pending credits and Fairplay ID checks.",
    keywords:
      "Fairplay, Fairplay Withdrawal number, Withdrawal number Fairplay, Fairplay WhatsApp withdrawal, Fairplay payout WhatsApp",
  },
  "/withdrawal-issues": {
    title: "Fairplay withdrawal issues | Delayed or stuck payouts",
    description:
      "Waiting on a Fairplay withdrawal? See why payouts pause, how KYC affects them, and when to message WhatsApp with your ID and UTR.",
    keywords: "Fairplay withdrawal pending, Fairplay payout delayed, withdrawal not received",
  },
  "/fairplay-id": {
    title: "Fairplay ID | Cricket ID and one login",
    description:
      "Get a Fairplay ID — a verified online cricket ID for IPL, football, tennis and Fairplay club live casino. One login, UPI deposits, WhatsApp help.",
    keywords: "Fairplay ID, cricket ID, Fairplay login",
  },

  "/ipl-betting": {
    title: "IPL 2026 betting | Winner, fancy and live odds",
    description:
      "Bet IPL 2026 on Fairplay: match winner, toss, fancy sessions and in-play. Use a Fairplay ID, fund with UPI, and open the fixture from the schedule.",
    keywords: "IPL betting, IPL 2026 betting, Fairplay IPL, cricket fancy betting, IPL live odds",
  },
  "/betting": {
    title: "Fairplay betting | Cricket, football and tennis",
    description:
      "Bet cricket, football and tennis on Fairplay: live odds, IPL books, fancy markets and one cricket ID. Fund with UPI; payouts usually in about 180 minutes.",
    keywords:
      "fairplay bet, fair play betting, fair play exchange, fairplay online, fair play cricket, cricket betting id, sports exchange India",
  },
  "/casino": {
    title: "Fairplay casino | Teen Patti and live tables",
    description:
      "Fairplay club live casino with HD dealers: Teen Patti, Andar Bahar, roulette, blackjack and slots — same Fairplay login as your cricket wallet.",
    keywords:
      "fairplay club, fairplay casino, live casino India, teen patti fairplay, andar bahar, HD live dealer",
  },

  "/bonus": {
    title: "Fairplay bonus | Welcome offer and promo codes",
    description:
      "Fairplay bonuses and promo codes after you have a live ID. Welcome offer, wagering, and how to check credit on the bonus page.",
    keywords: "Fairplay bonus, Fairplay promo code, Fairplay welcome bonus",
  },
  "/bonus-issues": {
    title: "Fairplay bonus issues | Wagering and missing credit",
    description:
      "Bonus not showing on Fairplay? Check wagering, qualifying deposits and promo terms. WhatsApp can apply a code to your Fairplay ID.",
    keywords: "Fairplay bonus not credited, bonus wagering, Fairplay promo issues",
  },
  "/t20-world-cup": {
    title: "T20 World Cup betting | ICC cricket on Fairplay",
    description:
      "Bet the ICC T20 World Cup on Fairplay: match winner, top batter, sixes and live books on the same cricket ID you already use for IPL and domestic T20s.",
    keywords: "T20 World Cup betting, ICC T20 Fairplay, cricket World Cup odds, Fairplay cricket",
  },
  "/wpl-betting": {
    title: "WPL betting | Women's Premier League on Fairplay",
    description:
      "WPL 2026 markets on Fairplay: match winner, top run-scorer and in-play women's cricket. Use the same Fairplay cricket ID and UPI wallet as men's IPL.",
    keywords: "WPL betting, Women's Premier League betting, Fairplay WPL, women's cricket betting",
  },
  "/champions-trophy": {
    title: "Champions Trophy betting | ODI cricket on Fairplay",
    description:
      "Champions Trophy and ODI books on Fairplay: tournament winner, top wicket-taker and live match markets on your cricket ID.",
    keywords: "Champions Trophy betting, ODI betting Fairplay, ICC cricket betting",
  },
  "/kabaddi-betting": {
    title: "Kabaddi betting | PKL match and raid markets | Fairplay",
    description:
      "Bet Pro Kabaddi on Fairplay: match winner, raid points, tackles and live odds. Same Fairplay ID and UPI wallet you already use for cricket.",
    keywords: "kabaddi betting, PKL betting, Pro Kabaddi Fairplay, raid betting",
  },
  "/horse-racing": {
    title: "Horse racing | Win, place and in-running",
    description:
      "Fairplay horse racing: win, place, each-way and in-running books. Fund the same wallet you use for cricket and football.",
    keywords: "horse racing betting, Fairplay horse racing, win place betting India",
  },
  "/basketball-betting": {
    title: "Basketball betting | NBA moneyline and totals | Fairplay",
    description:
      "Basketball on Fairplay: moneyline, spread, totals and player props on NBA and other books. One Fairplay ID alongside cricket, football and tennis.",
    keywords: "basketball betting, NBA betting Fairplay, basketball exchange India",
  },
  "/esports-betting": {
    title: "Esports betting | Match and map markets | Fairplay",
    description:
      "Esports on Fairplay — match winner, maps and live rounds. Same Fairplay ID and UPI wallet as cricket, football, tennis and live casino.",
    keywords: "esports betting, Fairplay esports, CS betting, Dota betting",
  },
  "/support": {
    title: "Fairplay support | ID, login and wallet help",
    description:
      "Fairplay customer care for login, Fairplay ID, UPI deposits and withdrawals. WhatsApp is the fastest desk; this hub lists the usual fixes first.",
    keywords: "Fairplay support, Fairplay customer care, Fairplay help, Fairplay WhatsApp",
  },
  "/whatsapp-support": {
    title: "Fairplay WhatsApp support | Get an ID and payment help",
    description:
      "Message Fairplay on WhatsApp for a new ID, OTP login help, deposits and payouts. Have your Fairplay ID and a screenshot ready.",
    keywords: "Fairplay WhatsApp, Fairplay customer care WhatsApp, get Fairplay ID WhatsApp",
  },
  "/fairplay-customer-care-number": {
    title: "Fairplay Customer Care number | Official WhatsApp support",
    description:
      "Official Fairplay Customer Care number on WhatsApp. Open the live customer care number Fairplay uses for ID, login OTP, UPI deposits and payouts.",
    keywords:
      "Fairplay, Fairplay Customer Care number, Customer Care number Fairplay, Fairplay customer care WhatsApp, Fairplay helpline",
  },
  "/contact-us": {
    title: "Contact Fairplay | WhatsApp, email and issue hubs",
    description:
      "Contact Fairplay on official WhatsApp for ID, login and UPI help. Email for a written trail. Open login, deposit or withdrawal issue pages first.",
    keywords: "contact Fairplay, Fairplay support contact, Fairplay WhatsApp number",
  },
  "/app": {
    title: "Fairplay app | Android APK and iOS",
    description:
      "Fairplay app download for Android and iOS: install the Fairplay APK, log in with your Fairplay ID, and bet live cricket, football, tennis and casino on UPI.",
    keywords:
      "fairplay app, fairplay app download, fairplay download, fairplay apk, fair play apk, fairplay betting app, cricket betting app",
  },

  "/about": {
    title: "About Fairplay | Sports exchange since 2017",
    description:
      "Fairplay is a sports exchange and live casino used in India for cricket IDs, football, tennis and UPI wallets. How the platform works and who it is for.",
    keywords: "about Fairplay, Fairplay exchange, Fairplay India, what is Fairplay",
  },
  "/what-is-fairplay": {
    title: "What is Fairplay? | Cricket ID and exchange",
    description:
      "Fairplay is an exchange where you bet cricket, football and tennis, plus live casino, on one ID. How odds, deposits and withdrawals work in India.",
    keywords: "what is Fairplay, Fairplay explained, cricket ID exchange, Fairplay betting",
  },
  "/is-fairplay-safe": {
    title: "Is Fairplay safe? | Login, wallet and KYC basics",
    description:
      "How Fairplay handles login, SSL, KYC and payouts. Practical safety checks before you deposit — official WhatsApp, 2FA and a real Fairplay ID.",
    keywords: "is Fairplay safe, Fairplay security, Fairplay KYC, Fairplay SSL",
  },
  "/is-fairplay-real": {
    title: "Is Fairplay real? | ID, payouts and how to verify",
    description:
      "Fairplay is a live exchange with WhatsApp IDs and tracked withdrawals. How to tell official Fairplay from fake clones before you send UPI.",
    keywords: "is Fairplay real, Fairplay genuine, Fairplay official, Fairplay scam check",
  },
  "/is-fairplay-legal": {
    title: "Is Fairplay legal? | Play-from-India notes",
    description:
      "Fairplay is an offshore exchange. We do not publish a licence number or registered operator name. 18+, local law, not legal advice.",
    keywords: "is Fairplay legal, Fairplay India legal, Fairplay cricket ID rules",
  },
  "/services": {
    title: "Fairplay services | Cricket ID, exchange and live casino",
    description:
      "Fairplay services: cricket and IPL exchange, football and tennis, live casino, Fairplay ID, UPI wallet and partner books such as Gold365 and Laser247.",
    keywords: "Fairplay services, cricket ID services, Fairplay exchange, live casino Fairplay",
  },
  "/platforms": {
    title: "Fairplay platforms | One ID for partner exchanges",
    description:
      "One Fairplay ID can open partner exchanges such as 11xplay, Laser247 and Gold365. How the network fits next to Fairplay cricket and casino.",
    keywords: "Fairplay platforms, 11xplay Fairplay, Laser247 Fairplay, Gold365 Fairplay",
  },
  "/all-links": {
    title: "Fairplay site index | All pages, guides and betting hubs",
    description:
      "Full list of Fairplay pages: Fairplay ID, IPL betting, 2026 schedule, login, deposits, casino, support hubs and 180+ blog guides in one index.",
    keywords: "Fairplay sitemap, Fairplay all links, Fairplay pages, Fairplay guides",
  },
  "/telegram-channel": {
    title: "Fairplay Telegram | Odds updates and ID help",
    description:
      "Fairplay Telegram for fixture notes and support pointers. IDs and deposits still go through WhatsApp and the official Fairplay login.",
    keywords: "Fairplay Telegram, Fairplay channel, Fairplay tips Telegram",
  },
  "/privacy-policy": {
    title: "Fairplay privacy | ID and wallet data",
    description:
      "Fairplay privacy policy: what we collect for a Fairplay ID, login and payouts, and how that data is used. Read this before you register.",
    keywords: "Fairplay privacy policy, Fairplay data protection",
  },
  "/terms-conditions": {
    title: "Fairplay terms and conditions | Betting and bonus rules",
    description:
      "Fairplay terms: account rules, market settlement, bonuses and acceptable use. Applies to cricket, football, tennis and casino on your ID.",
    keywords: "Fairplay terms, Fairplay T&C, Fairplay betting rules",
  },
  "/responsible-gaming": {
    title: "Fairplay responsible gaming | Limits and self-exclusion",
    description:
      "Set deposit limits, take a break, or self-exclude on Fairplay. Betting should stay a game — tools and who to contact if it does not.",
    keywords: "Fairplay responsible gaming, Fairplay self exclusion, betting limits",
  },
  "/security-safety": {
    title: "Fairplay security | 2FA, SSL and account protection",
    description:
      "Fairplay login security: 2FA, SSL, phishing checks and how to keep a cricket ID safe. Never share OTP or passwords on random chats.",
    keywords: "Fairplay security, Fairplay 2FA, Fairplay SSL, account protection",
  },
  "/legal-status": {
    title: "Fairplay legal status | What we publish",
    description:
      "Brand Fairplay, site fairplayindia.com, support email. No licence number or registered company name is published here. 18+, not legal advice.",
    keywords: "Fairplay legal, Fairplay operator, Fairplay cricket ID",
  },
  "/kyc-verification-policy": {
    title: "Fairplay KYC policy | What we ask for and why",
    description:
      "Fairplay KYC: when identity checks happen, what documents may be requested, and how that affects withdrawals from your wallet.",
    keywords: "Fairplay KYC, Fairplay verification, Fairplay identity check",
  },
  "/refund-policy": {
    title: "Fairplay refund policy | Deposits, errors and voids",
    description:
      "When Fairplay can reverse a deposit or void a market. How to raise a refund query with your Fairplay ID and payment proof.",
    keywords: "Fairplay refund, Fairplay deposit reversal, void bet Fairplay",
  },
  "/rules-regulations": {
    title: "Fairplay betting rules | Market settlement and fair play",
    description:
      "How Fairplay settles cricket, football, tennis and casino markets, including abandoned matches, voids and obvious errors on your Fairplay ID.",
    keywords: "Fairplay betting rules, market settlement, Fairplay fair play",
  },
  "/disclaimer": {
    title: "Fairplay disclaimer | Betting risk and information use",
    description:
      "Fairplay pages are for information. Betting involves risk of loss. Check local laws before you open a Fairplay ID, deposit with UPI, or play casino.",
    keywords: "Fairplay disclaimer, betting risk, Fairplay information",
  },
  "/account-issues": {
    title: "Fairplay account issues | Locked ID, KYC and access",
    description:
      "Fairplay ID locked, KYC pending, or profile errors. Steps to recover access and when WhatsApp support needs a screenshot.",
    keywords: "Fairplay account locked, Fairplay ID issues, Fairplay KYC pending",
  },
  "/gold365": {
    title: "Gold365 and Fairplay | Partner exchange on one ID",
    description:
      "Gold365 sits in the Fairplay network. How it compares for cricket books, and how to get an ID through Fairplay WhatsApp.",
    keywords: "Gold365 Fairplay, Gold365 cricket ID, Fairplay vs Gold365",
  },
  "/11xplay": {
    title: "11xplay and Fairplay | Partner cricket exchange",
    description:
      "11xplay through Fairplay: cricket and casino on a related ID. When to use 11xplay versus the main Fairplay exchange, and how WhatsApp issues access.",
    keywords: "11xplay Fairplay, 11xplay cricket ID, Fairplay network",
  },
  "/laser247": {
    title: "Laser247 and Fairplay | Live cricket exchange partner",
    description:
      "Laser247 on the Fairplay network for live cricket and football. Same WhatsApp onboarding as a Fairplay ID, with UPI on the linked wallet.",
    keywords: "Laser247 Fairplay, Laser247 cricket, Fairplay Laser247 ID",
  },
  "/cricbet99": {
    title: "Cricbet99 and Fairplay | Cricket-focused partner book",
    description:
      "Cricbet99 in the Fairplay partner list. Cricket markets, ID help, and how it sits next to Fairplay IPL books on the same WhatsApp desk.",
    keywords: "Cricbet99 Fairplay, Cricbet99 cricket ID",
  },
  "/fairdeal": {
    title: "Fairdeal and Fairplay | Partner exchange overview",
    description:
      "Fairdeal as a Fairplay network partner. Cricket ID access, wallet notes, and when to stay on the main Fairplay exchange.",
    keywords: "Fairdeal Fairplay, Fairdeal cricket ID",
  },
  "/fairplay-vs-lotus365": {
    title: "Fairplay vs Lotus365 | Cricket ID and exchange compared",
    description:
      "Fairplay vs Lotus365 for Indian players: cricket books, Fairplay ID, UPI, live casino, and player reviews on OTP login and withdrawals.",
    keywords: "Fairplay vs Lotus365, Lotus365 cricket ID, Fairplay comparison, Fairplay vs Lotus365 reviews",
  },
  "/fairplay-vs-reddybook": {
    title: "Fairplay vs Reddybook | Exchange and ID comparison",
    description:
      "Fairplay vs Reddybook for cricket ID, UPI deposits, OTP login, and player reviews on withdrawals after settlement.",
    keywords: "Fairplay vs Reddybook, Reddybook cricket ID, Fairplay vs Reddybook reviews",
  },
  "/fairplay-vs-gold365": {
    title: "Fairplay vs Gold365 | Which cricket ID to use",
    description:
      "Fairplay vs Gold365: separate IDs, IPL on Fairplay, UPI UTRs, and player reviews on KYC withdrawals after settlement.",
    keywords: "Fairplay vs Gold365, Gold365 vs Fairplay, Fairplay vs Gold365 reviews",
  },
  "/fairplay-vs-mahavir-book": {
    title: "Fairplay vs Mahavir Book | Cricket exchange comparison",
    description:
      "Fairplay vs Mahavir Book: exchange login vs a traditional desk, UPI vs agent credit, and player reviews on OTP and payouts after settlement.",
    keywords: "Fairplay vs Mahavir Book, Mahavir Book cricket, Fairplay vs Mahavir Book reviews",
  },
  "/fairplay-vs-diamond-exchange": {
    title: "Fairplay vs Diamond Exchange | Liquidity and ID",
    description:
      "Fairplay vs Diamond Exchange: separate IDs, IPL on Fairplay, UPI UTRs, and player reviews on migrate scams and payouts after settlement.",
    keywords: "Fairplay vs Diamond Exchange, Diamond Exchange cricket ID, Fairplay vs Diamond Exchange reviews",
  },
  "/fairplay-vs-laser247": {
    title: "Fairplay vs Laser247 | Live cricket books compared",
    description:
      "Fairplay vs Laser247: separate IDs, in-play slips, IPL on Fairplay, and player reviews on OTP login and payouts after settlement.",
    keywords: "Fairplay vs Laser247, Laser247 vs Fairplay, Fairplay vs Laser247 reviews",
  },
  "/fairplay-vs-11xplay": {
    title: "Fairplay vs 11xplay | Cricket ID comparison",
    description:
      "Fairplay vs 11xplay: partner book vs main Fairplay login, IPL, app installs, and player reviews on wallets, UTRs and payouts after settlement.",
    keywords: "Fairplay vs 11xplay, 11xplay vs Fairplay, Fairplay vs 11xplay reviews",
  },
  "/fairplay-vs-skyexchange247": {
    title: "Fairplay vs Skyexchange247 | Exchange comparison",
    description:
      "Fairplay vs Skyexchange247: separate exchanges, clone UPI warnings, no in-app transfer, and player reviews on OTP login and payouts after settlement.",
    keywords: "Fairplay vs Skyexchange, Skyexchange247 cricket ID, Fairplay vs Skyexchange247 reviews",
  },
  "/fairplay-vs-fairdeal": {
    title: "Fairplay vs Fairdeal | Partner vs main exchange",
    description:
      "Fairplay vs Fairdeal: partner book vs main Fairplay ID, IPL, second-wallet warnings, and player reviews on OTP login and payouts after settlement.",
    keywords: "Fairplay vs Fairdeal, Fairdeal cricket ID, Fairplay vs Fairdeal reviews",
  },
};
