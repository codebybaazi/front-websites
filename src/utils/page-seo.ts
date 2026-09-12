/** Origin every canonical, og:url, sitemap <loc> and absolute schema URL is built from. */
export const SITE_ORIGIN = "https://mfairplay.com";

/**
 * Locale decision: this site has exactly one language/regional version — English
 * for the Indian market (og:locale "en_IN", <html lang="en-IN"> in __root.tsx).
 * hreflang tags are intentionally omitted: Google's own guidance is that hreflang
 * is for signalling alternate versions of a page in other languages/regions, and
 * adding it when only one version exists has no benefit and is a common source of
 * self-referencing/x-default misconfiguration. If a second locale (e.g. a
 * dedicated en-GB or regional-language version) ships later, add hreflang pairs
 * per URL at that point rather than sitewide now.
 */

/** Shared link-preview image: the homepage hero banner. */
export const OG_IMAGE = `${SITE_ORIGIN}/og-banner.jpg`;

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
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
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Fairplay" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: OG_IMAGE },
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
      description: "Fairplay cricket ID, sports betting exchange and live casino. UPI deposits and WhatsApp help for new players.",
      keywords: "Fairplay, cricket ID, sports exchange",
    }, path);
  }
  return pageHead(seo, path);
}

/** Unique, keyword-aware titles and descriptions for static pages. */
export const PAGE_SEO: Record<string, PageSeo> = {
  "/blog": {
    title: "Fairplay blog | Cricket ID, IPL, UPI and login help",
    description:
      "Cricket-desk notes on Fairplay ID, OTP login, UPI deposits, IPL fancy, football, tennis and live casino — searchable 2026 guides.",
    keywords: "Fairplay blog, cricket ID guide, IPL betting guide, Fairplay login, Fairplay deposit",
  },
  "/matches": {
    title: "All matches 2026–27 | Cricket, football, tennis | Fairplay",
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
    title: "Fairplay Login | Fairplay ID Sign Up, OTP & Password",
    description:
      "Fairplay login guide: sign in with your mobile number and OTP, recover a Fairplay login password, handle 2FA, and open cricket, football and tennis books.",
    keywords:
      "fairplay login, fair play login, fairplay login id sign up, fairplay login password, fairplay login download, fairplay id login",
  },
  "/login-issues": {
    title: "Fairplay Login Not Working | OTP & Locked ID Fixes",
    description:
      "Fairplay login not working? Fix OTP delays, a locked Fairplay ID, wrong password errors and login loops. WhatsApp support can reset access.",
    keywords:
      "fairplay login not working, fairplay login issues, fairplay login password reset, fairplay id locked, otp not received",
  },
  "/register-guide": {
    title: "Fairplay Register | Fairplay Login ID Sign Up India",
    description:
      "Fairplay register and sign up: create a Fairplay login ID from WhatsApp in minutes, then deposit via UPI and bet cricket, football, tennis or live casino.",
    keywords:
      "fairplay register, fairplay login id sign up, fairplay sign up, fairplay registration, get fairplay id",
  },

  "/deposit-guide": {
    title: "Fairplay deposit | UPI wallet top-up guide",
    description:
      "Add money to your Fairplay wallet with UPI, net banking or crypto. Minimums, credit times and what to do if a Fairplay deposit stays pending.",
    keywords: "Fairplay deposit, Fairplay UPI, add money Fairplay wallet, Fairplay wallet top-up",
  },
  "/deposit-issues": {
    title: "Fairplay deposit issues | Pending UPI and failed credits",
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
  "/withdrawal-issues": {
    title: "Fairplay withdrawal issues | Delayed or stuck payouts",
    description:
      "Waiting on a Fairplay withdrawal? See why payouts pause, how KYC affects them, and when to message WhatsApp with your ID and UTR.",
    keywords: "Fairplay withdrawal pending, Fairplay payout delayed, withdrawal not received",
  },
  "/fairplay-id": {
    title: "Fairplay ID | Online Cricket ID & Fairplay Club Login",
    description:
      "Get a Fairplay ID — a verified online cricket ID for IPL, football, tennis and Fairplay club live casino. One login, UPI deposits, WhatsApp help.",
    keywords:
      "fairplay id, fairplay club, fair play online, online cricket id, cricket betting id, get fairplay id",
  },

  "/ipl-betting": {
    title: "IPL 2026 betting | Match winner, live odds | Fairplay",
    description:
      "Bet IPL 2026 on Fairplay: match winner, toss, fancy sessions and in-play. Use a Fairplay ID, fund with UPI, and open the fixture from the schedule.",
    keywords: "IPL betting, IPL 2026 betting, Fairplay IPL, cricket fancy betting, IPL live odds",
  },
  "/betting": {
    title: "Fairplay Bet | Fair Play Exchange & Online Betting India",
    description:
      "Fairplay bet on the fair play exchange: cricket, football and tennis with live odds, IPL and FIFA books, fancy markets and one cricket betting ID.",
    keywords:
      "fairplay bet, fair play betting, fair play exchange, fairplay online, fair play cricket, cricket betting id, sports exchange India",
  },
  "/casino": {
    title: "Fairplay Club Casino | Teen Patti, Andar Bahar & HD Tables",
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
      "Bet the ICC T20 World Cup on Fairplay: match winner, top batter, sixes and live books. Same cricket ID you use for IPL.",
    keywords: "T20 World Cup betting, ICC T20 Fairplay, cricket World Cup odds, Fairplay cricket",
  },
  "/wpl-betting": {
    title: "WPL betting | Women's Premier League on Fairplay",
    description:
      "WPL 2026 markets on Fairplay — match winner, top run-scorer and in-play. Use your existing Fairplay cricket ID.",
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
      "Bet Pro Kabaddi on Fairplay: match winner, raid points, tackles and live odds. Same Fairplay ID as cricket.",
    keywords: "kabaddi betting, PKL betting, Pro Kabaddi Fairplay, raid betting",
  },
  "/horse-racing": {
    title: "Horse racing betting | Win, place and in-running | Fairplay",
    description:
      "Fairplay horse racing: win, place, each-way and in-running books. Fund the same wallet you use for cricket and football.",
    keywords: "horse racing betting, Fairplay horse racing, win place betting India",
  },
  "/basketball-betting": {
    title: "Basketball betting | NBA moneyline and totals | Fairplay",
    description:
      "Basketball on Fairplay: moneyline, spread, totals and player props. One Fairplay ID alongside cricket and tennis.",
    keywords: "basketball betting, NBA betting Fairplay, basketball exchange India",
  },
  "/esports-betting": {
    title: "Esports betting | Match and map markets | Fairplay",
    description:
      "Esports on Fairplay — match winner, maps and live rounds. Use the same Fairplay ID as sports and casino.",
    keywords: "esports betting, Fairplay esports, CS betting, Dota betting",
  },
  "/support": {
    title: "Fairplay support | ID, login, deposit and withdrawal help",
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
  "/contact-us": {
    title: "Contact Fairplay | WhatsApp and support",
    description:
      "Contact Fairplay for ID verification, wallet questions and betting help. WhatsApp is the usual route; email for formal requests.",
    keywords: "contact Fairplay, Fairplay support contact, Fairplay WhatsApp number",
  },
  "/app": {
    title: "Fairplay App Download | Fairplay APK for Android & iOS",
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
    title: "What is Fairplay? | Cricket ID and sports exchange explained",
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
    title: "Is Fairplay legal? | Licensing and play-from-India notes",
    description:
      "Fairplay licensing in plain language, plus what Indian players should know about cricket IDs, deposits and local rules. Not legal advice.",
    keywords: "is Fairplay legal, Fairplay licence, Fairplay India legal, Curaçao Fairplay",
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
    title: "Fairplay site index | ID, IPL, UPI guides and support",
    description:
      "Directory of Fairplay pages: cricket ID, IPL books, schedule, OTP login, UPI deposits, 180-minute payouts, casino and WhatsApp help.",
    keywords: "Fairplay sitemap, Fairplay all links, Fairplay pages, Fairplay guides",
  },
  "/telegram-channel": {
    title: "Fairplay Telegram | Fixture notes — IDs stay on WhatsApp",
    description:
      "Official Fairplay Telegram for schedule pointers. Open an ID, send UPI and chase 180-minute payouts on WhatsApp, not in the channel.",
    keywords: "Fairplay Telegram, Fairplay channel, Fairplay tips Telegram",
  },
  "/privacy-policy": {
    title: "Fairplay privacy policy | Cricket ID, OTP and UPI data",
    description:
      "What Fairplay stores for a cricket ID: mobile login, KYC when asked, and UTR screenshots. OTP stays on your phone — never forward it on WhatsApp.",
    keywords: "Fairplay privacy policy, Fairplay data protection",
  },
  "/terms-conditions": {
    title: "Fairplay terms | One ID, settlement and 180-minute payouts",
    description:
      "House rules for a Fairplay ID: 18+, one person one login, UPI deposits, official-result settlement, then typical 180-minute withdrawals.",
    keywords: "Fairplay terms, Fairplay T&C, Fairplay betting rules",
  },
  "/responsible-gaming": {
    title: "Fairplay responsible gaming | Deposit caps on WhatsApp",
    description:
      "Ask WhatsApp to cap UPI deposits, time-out or freeze a Fairplay ID. Betting should stay recreation — do not open a second ID to skip a limit.",
    keywords: "Fairplay responsible gaming, Fairplay self exclusion, betting limits",
  },
  "/security-safety": {
    title: "Fairplay security | OTP, cloned sites and UPI checks",
    description:
      "Keep a Fairplay cricket ID safe: OTP on your phone, this website only, no random APKs. Withdrawals go to your own UPI after settlement.",
    keywords: "Fairplay security, Fairplay 2FA, Fairplay SSL, account protection",
  },
  "/legal-status": {
    title: "Fairplay legal status | Offshore exchange, local law applies",
    description:
      "Fairplay is an offshore sports exchange plus casino. You must be 18+. This page is not legal advice — follow the rules where you live.",
    keywords: "Fairplay legal, Fairplay licence, Fairplay operator",
  },
  "/kyc-verification-policy": {
    title: "Fairplay KYC | Name match before a large UPI payout",
    description:
      "Fairplay asks for ID proof so a 180-minute withdrawal pays the adult on the cricket ID. Send docs from the registered WhatsApp number.",
    keywords: "Fairplay KYC, Fairplay verification, Fairplay identity check",
  },
  "/refund-policy": {
    title: "Fairplay refunds | Void books, missing UPI and UTR tickets",
    description:
      "Settled bets stay settled. Void markets return the stake. If UPI never credited, WhatsApp Fairplay ID, amount and screenshot — do not pay twice.",
    keywords: "Fairplay refund, Fairplay deposit reversal, void bet Fairplay",
  },
  "/rules-regulations": {
    title: "Fairplay betting rules | Fancy settlement and one cricket ID",
    description:
      "One Fairplay ID per person. Fancy sessions wait on the official scorecard. A void returns the stake. Confirm the slip before you send.",
    keywords: "Fairplay betting rules, market settlement, Fairplay fair play",
  },
  "/disclaimer": {
    title: "Fairplay disclaimer | You can lose the stake",
    description:
      "Fairplay pages are information, not tips. The price that counts is on the slip after login. Check local law before you open a cricket ID or send UPI.",
    keywords: "Fairplay disclaimer, betting risk, Fairplay information",
  },
  "/account-issues": {
    title: "Fairplay account issues | Locked ID, KYC and access",
    description:
      "Fairplay ID locked, KYC pending, or profile errors. Steps to recover access and when WhatsApp support needs a screenshot.",
    keywords: "Fairplay account locked, Fairplay ID issues, Fairplay KYC pending",
  },
  "/gold365": {
    title: "Gold365 via Fairplay | Separate wallet unless linked",
    description:
      "Gold365 is a partner exchange. Ask WhatsApp before you fund it. Fairplay cricket IDs, UPI and 180-minute payouts sit on this site unless the desk linked both.",
    keywords: "Gold365 Fairplay, Gold365 cricket ID, Fairplay vs Gold365",
  },
  "/11xplay": {
    title: "11xplay via Fairplay | Linked only if desk confirms",
    description:
      "11xplay through Fairplay WhatsApp. Do not assume the same password opens 11xplay.com. IPL on this schedule uses the Fairplay cricket ID unless told otherwise.",
    keywords: "11xplay Fairplay, 11xplay cricket ID, Fairplay network",
  },
  "/laser247": {
    title: "Laser247 via Fairplay | Confirm the ID first",
    description:
      "Laser247 is a partner-style book. Same WhatsApp onboarding as a Fairplay ID. Do not mix UTRs. Fairplay payouts usually take about 180 minutes after settlement.",
    keywords: "Laser247 Fairplay, Laser247 cricket, Fairplay Laser247 ID",
  },
  "/cricbet99": {
    title: "Cricbet99 via Fairplay | Cricket partner next to the main ID",
    description:
      "Cricbet99 in the Fairplay partner list. Deposit only after you log into the ID the desk gave you. Fancy markets settle on the official scorecard.",
    keywords: "Cricbet99 Fairplay, Cricbet99 cricket ID",
  },
  "/fairdeal": {
    title: "Fairdeal via Fairplay | Confirm before you fund it",
    description:
      "Fairdeal is a partner book. Most cricket and casino on this site use the main Fairplay ID. WhatsApp before you send UPI to a second login.",
    keywords: "Fairdeal Fairplay, Fairdeal cricket ID",
  },
  "/fairplay-vs-lotus365": {
    title: "Fairplay vs Lotus365 | ID, UPI and 180-min payouts",
    description:
      "Lotus365 is a separate login. Open a Fairplay ID on WhatsApp, fund with UPI, and withdraw about 180 minutes after the official result.",
    keywords: "Fairplay vs Lotus365, Lotus365 cricket ID, Fairplay comparison",
  },
  "/fairplay-vs-reddybook": {
    title: "Fairplay vs Reddybook | Exchange ID vs bookie desk",
    description:
      "Reddybook credentials will not open Fairplay. Get a cricket ID on WhatsApp, deposit with UPI, settle on official results, then the usual 180-minute payout window.",
    keywords: "Fairplay vs Reddybook, Reddybook cricket ID",
  },
  "/fairplay-vs-gold365": {
    title: "Fairplay vs Gold365 | Separate wallets unless linked",
    description:
      "Treat Gold365 and Fairplay as separate IDs unless the desk confirms a linked book. IPL on this schedule uses the Fairplay cricket login.",
    keywords: "Fairplay vs Gold365, Gold365 vs Fairplay",
  },
  "/fairplay-vs-mahavir-book": {
    title: "Fairplay vs Mahavir Book | UPI wallet vs agent credit",
    description:
      "Fairplay uses a UPI wallet on your cricket ID, not informal agent credit. Fancy books wait on the scorecard; payouts usually follow about 180 minutes later.",
    keywords: "Fairplay vs Mahavir Book, Mahavir Book cricket",
  },
  "/fairplay-vs-diamond-exchange": {
    title: "Fairplay vs Diamond Exchange | Cricket ID and UPI wallet",
    description:
      "A Diamond Exchange ID will not log into Fairplay. Request a Fairplay ID on WhatsApp. Only deposit to UPI shown after login or on the published number.",
    keywords: "Fairplay vs Diamond Exchange, Diamond Exchange cricket ID",
  },
  "/fairplay-vs-laser247": {
    title: "Fairplay vs Laser247 | Separate logins for live cricket",
    description:
      "Fairplay and Laser247 are different IDs unless WhatsApp linked them. Confirm in-play prices on the slip. Fairplay payouts usually take about 180 minutes after settlement.",
    keywords: "Fairplay vs Laser247, Laser247 vs Fairplay",
  },
  "/fairplay-vs-11xplay": {
    title: "Fairplay vs 11xplay | One cricket ID or two books",
    description:
      "Ask WhatsApp if a Fairplay ID includes 11xplay. Do not assume the same password works on both. Install Fairplay from this site’s app page.",
    keywords: "Fairplay vs 11xplay, 11xplay vs Fairplay",
  },
  "/fairplay-vs-skyexchange247": {
    title: "Fairplay vs Skyexchange247 | Which desk you message",
    description:
      "Skyexchange247 is another exchange brand. Fairplay IDs, UPI deposits and 180-minute withdrawals are handled on this site’s WhatsApp desk.",
    keywords: "Fairplay vs Skyexchange, Skyexchange247 cricket ID",
  },
  "/fairplay-vs-fairdeal": {
    title: "Fairplay vs Fairdeal | Main cricket ID vs partner book",
    description:
      "Fairdeal is a partner. Most IPL and casino on this site use the main Fairplay ID. Open that login on WhatsApp; do not fund a random Fairdeal link.",
    keywords: "Fairplay vs Fairdeal, Fairdeal cricket ID",
  },
};
