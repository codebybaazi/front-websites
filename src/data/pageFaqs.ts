// Unique FAQ sets per page. Keys are pathnames.
// Pages that already render their own FAQ block are intentionally excluded:
// "/", "/casino", "/cricket-betting", "/cricket-betting-app".

export type Faq = { q: string; a: string };

/**
 * Builds the FAQPage JSON-LD for a route's PAGE_FAQS entry, for use in that
 * route's SSR `head()` (so crawlers see it without executing JS). Returns
 * null when the pathname has no FAQ set, so callers can conditionally spread
 * it into their `scripts` array.
 */
export function buildPageFaqLd(pathname: string) {
  const faqs = PAGE_FAQS[pathname];
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-question", ".faq-answer"],
    },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const PAGE_FAQS: Record<string, Faq[]> = {
  "/11xplay": [
    { q: "How do I create an 11xplay ID with Sprinters?", a: "Message Sprinters on WhatsApp with your name and mobile number. After OTP verification and your first UPI deposit, your 11xplay ID is delivered on WhatsApp within minutes." },
    { q: "What sports can I bet on with 11xplay?", a: "Cricket, football, tennis, kabaddi, basketball, horse racing and esports — plus a full live casino, Aviator and Indian card games under one 11xplay login." },
    { q: "Is 11xplay legal to use in India?", a: "11xplay operates from a licensed offshore jurisdiction. Sprinters only offers IDs to users where local law permits online skill and sports gaming; players are responsible for local compliance." },
    { q: "What are the deposit and withdrawal limits on 11xplay?", a: "Deposits start from ₹100 via UPI. Withdrawals up to ₹5,00,000 are processed within 24 hours; higher limits are available for Sprinters Club members." },
  ],
  "/cricbet99": [
    { q: "What makes Cricbet99 different from other cricket IDs?", a: "Cricbet99 focuses on deep in-play cricket markets — fancy, session, over/under, method-of-dismissal — with fast settlement and no fee on withdrawals." },
    { q: "How do I get a Cricbet99 ID?", a: "WhatsApp Sprinters, share your name and phone number, verify with OTP and deposit via UPI. Your Cricbet99 login is sent back on WhatsApp within 5 minutes." },
    { q: "Does Cricbet99 offer live streaming?", a: "Yes. Most international and IPL matches include a live scorecard and a low-latency stream inside the platform, tied to real-time odds." },
    { q: "What is the minimum deposit on Cricbet99?", a: "The minimum first deposit is ₹100 via UPI, GPay, PhonePe or Paytm. There is no minimum on subsequent top-ups." },
  ],
  "/laser247": [
    { q: "What is Laser247?", a: "Laser247 is an all-in-one exchange for cricket, football, tennis, casino and card games with an exchange-style back/lay engine and quick settlement." },
    { q: "How do I get a Laser247 ID?", a: "Message Sprinters on WhatsApp, complete OTP verification and deposit via UPI. Your Laser247 ID is delivered on WhatsApp within minutes." },
    { q: "Can I bet on cricket exchange rates on Laser247?", a: "Yes. Laser247's back/lay exchange gives you live market odds for match winner, session, fancy and premium markets across every major cricket event." },
    { q: "How fast are Laser247 withdrawals?", a: "Withdrawal requests are processed within 24 hours to your UPI or bank account, with no lock-in and no hidden fees." },
  ],
  "/disclaimer": [
    { q: "Does Sprinters accept players from every country?", a: "No. Sprinters only serves users from regions where private online skill and sports gaming is legal. It is your responsibility to verify local rules before playing." },
    { q: "Is Sprinters responsible for third-party platforms?", a: "Sprinters is a verified reseller of gaming IDs from independent platforms. Each platform sets its own terms, odds and settlement rules." },
    { q: "Can Sprinters guarantee winnings?", a: "No. All betting and casino outcomes involve risk. Sprinters does not guarantee returns and encourages responsible play at all times." },
  ],
  "/football-betting": [
    { q: "Which football leagues can I bet on with Sprinters?", a: "Premier League, La Liga, Serie A, Bundesliga, Ligue 1, UEFA Champions League, Europa League, ISL, FIFA World Cup and every major international tournament." },
    { q: "What football markets are available?", a: "1x2, both teams to score, over/under goals, Asian handicap, correct score, first goalscorer, player shots on target, cards, corners and full in-play cash-out." },
    { q: "How fast are football betting withdrawals?", a: "Withdrawals are processed within 24 hours to UPI, GPay, PhonePe, Paytm or bank account. VIP players get priority payouts." },
    { q: "Can I stream live football matches?", a: "Most top-flight fixtures include live scorecards and low-latency streams inside your Sprinters ID, tied to real-time odds." },
  ],
  "/horse-race-betting": [
    { q: "Which racetracks can I bet on?", a: "Mumbai, Bangalore, Kolkata, Hyderabad, Pune and Chennai in India, plus Ascot, Cheltenham, Epsom, Kentucky, Melbourne and every major international meet." },
    { q: "What horse racing markets are available?", a: "Win, place, each-way, forecast, tricast, exacta, Quinella and specials like winning distance and jockey markets." },
    { q: "Is horse race betting legal in India?", a: "Horse racing is recognised as a game of skill by the Supreme Court of India and is legal in most states. Check local rules before placing bets." },
    { q: "How fast are horse racing payouts?", a: "Payouts settle within minutes of the official result and can be withdrawn to UPI or bank within 24 hours." },
  ],
  "/indian-card-games": [
    { q: "Which Indian card games can I play on Sprinters?", a: "Teen Patti, Andar Bahar, Rummy, 3 Card Judgement, 32 Cards, 20-20 Teen Patti, Casino War, Bollywood Casino and Muflis Teen Patti — many with Hindi-speaking dealers." },
    { q: "Are the card game dealers live?", a: "Yes. All headline card games stream 24/7 from real studios with live dealers, chat and side-bet options." },
    { q: "What is the minimum stake on Teen Patti?", a: "Teen Patti tables start from ₹10 per side bet and go up to VIP tables with ₹5,00,000+ limits for Sprinters Club members." },
    { q: "How do I deposit for card games?", a: "Deposits are instant via UPI, GPay, PhonePe or Paytm from ₹100. Balance reflects in your ID within seconds." },
  ],
  "/platforms": [
    { q: "How many gaming platforms does Sprinters support?", a: "Sprinters resells verified IDs across 20+ platforms including Laser247, 11xplay, Cricbet99, Sky Exchange, Lotus365, Diamond Exch, Betbhai and more." },
    { q: "Can I switch between platforms with one login?", a: "Each platform runs on its own login, but Sprinters manages every ID for you on WhatsApp — one contact, one deposit, one withdrawal desk." },
    { q: "Which platform is best for cricket?", a: "Cricbet99 and Laser247 lead for deep cricket markets, while 11xplay is popular for combined sports plus casino play." },
    { q: "Are all platforms verified by Sprinters?", a: "Yes. Sprinters only resells IDs from platforms with a track record of clean settlement and reliable payouts." },
  ],
  "/privacy-policy": [
    { q: "What data does Sprinters collect?", a: "Only what is required to issue and support your gaming ID: name, mobile number, OTP verification and payment reference. No documents are stored unless you explicitly upload them." },
    { q: "Does Sprinters share my data with third parties?", a: "Your details are shared only with the specific gaming platform you request an ID for, and only for account provisioning and support." },
    { q: "How do I request deletion of my data?", a: "Message Sprinters on WhatsApp with a deletion request. Your account details are purged from active systems within 7 days." },
  ],
  "/responsible-gambling": [
    { q: "How do I set a deposit limit?", a: "Message Sprinters on WhatsApp to set daily, weekly or monthly deposit caps. Limits are enforced across every ID linked to your mobile number." },
    { q: "Can I self-exclude from Sprinters?", a: "Yes. Self-exclusion for 1 month, 6 months or permanently can be activated on request. Once active, no new IDs are issued until the exclusion period ends." },
    { q: "Where can I get help for gambling addiction?", a: "The AIIMS Behavioural Addictions Clinic, iCall (9152987821) and BeGambleAware.org offer confidential support for players and families in India." },
  ],
  "/services": [
    { q: "What services does Sprinters offer?", a: "Verified sports and casino IDs, 24-hour UPI deposits and withdrawals, WhatsApp support, VIP concierge and personalised bonus offers across 20+ platforms." },
    { q: "Is Sprinters support available in Hindi?", a: "Yes. WhatsApp and Telegram support runs 24/7 in Hindi, English and Hinglish, with regional-language help available on request." },
    { q: "Do I need a separate ID for casino and sports?", a: "No. A single Sprinters ID unlocks sports betting, live casino, Indian card games and crash games on the same wallet." },
    { q: "Are there any hidden charges on transactions?", a: "No. Sprinters never charges deposit or withdrawal fees. You always receive the exact amount you request." },
  ],
  "/sports-id": [
    { q: "What is a Sports ID?", a: "A Sports ID is a single verified account that gives you access to cricket, football, tennis, kabaddi, basketball, horse racing and esports markets across Sprinters' platform network." },
    { q: "How long does Sports ID verification take?", a: "OTP verification is instant. Your Sports ID is delivered on WhatsApp within 5 minutes of your first UPI deposit." },
    { q: "Can I use one Sports ID on multiple devices?", a: "Yes. Your Sports ID works on mobile web, desktop and installable PWA — up to 3 concurrent sessions per account." },
    { q: "What documents do I need for a Sports ID?", a: "Only a working Indian mobile number is required to start. KYC is only requested for withdrawals above the platform-specific threshold." },
  ],
  "/sprinters-book-deposit-number": [
    { q: "What is the Sprinters Book deposit number?", a: "It is the live UPI or bank detail Sprinters uses to credit your betting ID. The current Sprinters Book deposit number is sent in WhatsApp after you tap Chat on WhatsApp on this page. It is not printed on the site." },
    { q: "How do I get the deposit number Sprinters Book uses?", a: "Open the official WhatsApp chat from this page, send your username or registered mobile, and ask for the deposit number. Pay only the details that arrive in that thread, then share the UTR or screenshot there." },
    { q: "Why is the number not shown on the page?", a: "Payment handles change. Listing them in search results leaves stale QRs in circulation. The chat button loads the current WhatsApp desk for this domain so you receive today's details." },
    { q: "Can I call for the Sprinters Book deposit number?", a: "No. This page does not offer a call button. Deposits are handled in WhatsApp so the payment proof and credit stay in one chat." },
    { q: "What is the minimum deposit on Sprinters Book?", a: "First deposits start at ₹100 via PhonePe, Google Pay, Paytm or bank UPI. There is no deposit fee. Credit usually follows within a few minutes of the screenshot being checked." },
    { q: "How do I spot a fake deposit number Sprinters Book listing?", a: "Ignore any QR, UPI ID or mobile number that did not come from the Chat on WhatsApp button on this page. Sprinters will not ask for your password or send you to a personal call." },
  ],
  "/sprinters-book-withdrawl-number": [
    { q: "What is the Sprinters Book withdrawl number?", a: "It is the live WhatsApp desk Sprinters uses to process cash-outs from your betting ID. The current Sprinters Book withdrawl number is opened by the Chat on WhatsApp button on this page. It is not printed on the site." },
    { q: "How do I get the withdrawl number Sprinters Book uses?", a: "Open the official WhatsApp chat from this page, send your username and the amount you want out, then share your UPI or bank details. Stay in that thread until the payout is confirmed." },
    { q: "How long does a Sprinters Book withdrawal take?", a: "Most payouts land within 24 hours to PhonePe, Google Pay, Paytm or bank UPI. There is no withdrawal fee. Club players are processed first in the same queue." },
    { q: "Can I call for the Sprinters Book withdrawl number?", a: "No. This page does not offer a call button. Withdrawals are handled in WhatsApp so the request, UPI details and confirmation stay in one chat." },
    { q: "Why is the number not shown on the page?", a: "Payout contacts change. Listing them in search results leaves stale numbers in circulation. The chat button loads the current WhatsApp desk for this domain." },
    { q: "How do I spot a fake withdrawl number Sprinters Book listing?", a: "Ignore any payout contact that did not come from the Chat on WhatsApp button on this page. Sprinters will not ask for your password, a remote-access app, or a personal phone call before sending money." },
  ],
  "/sprinters-book-customer-care-number": [
    { q: "What is the Sprinters Book customer care number?", a: "It is the live WhatsApp desk for this website. Tap the number on this page to open chat. Sprinters Book customer care does not use a voice call button here." },
    { q: "How do I use the customer care number Sprinters Book lists?", a: "Tap the number or Chat on WhatsApp, send your username or registered mobile, and describe the issue. Stay in that thread for ID, login, deposit and withdrawal help." },
    { q: "Is Sprinters Book customer care available 24/7?", a: "Yes. The WhatsApp desk replies around the clock in Hindi, English and Hinglish, including IPL nights and public holidays." },
    { q: "Can I call the Sprinters Book customer care number?", a: "No. The digits on this page open WhatsApp. Voice calls are not offered from this page because payout and login work stays in chat." },
    { q: "How do I spot a fake customer care number Sprinters Book listing?", a: "Ignore any helpline that did not open from this page. Sprinters will not ask for your password, OTP to a stranger, or a remote-access app." },
  ],
  "/sprinters-club": [
    { q: "What is the Sprinters Club?", a: "Sprinters Club is our VIP tier for high-volume players — with priority withdrawals, personal account managers, cashback and invite-only tournaments." },
    { q: "How do I qualify for Sprinters Club?", a: "Players who cross the monthly turnover threshold or maintain a minimum wallet balance are invited automatically. You can also request an evaluation on WhatsApp." },
    { q: "What perks do VIP members get?", a: "Higher withdrawal limits, cashback up to 5%, birthday bonuses, exclusive casino tournaments and priority WhatsApp support." },
    { q: "Is there a fee to join Sprinters Club?", a: "No. Membership is complimentary once you qualify. There are no monthly fees or hidden costs." },
  ],
  "/sprinters-login": [
    { q: "How do I log in to my Sprinters ID?", a: "Open your platform link (sent on WhatsApp), enter your username and password, and complete the OTP if prompted. Bookmark the link so you always use the official domain." },
    { q: "I forgot my password — how do I reset it?", a: "Message Sprinters on WhatsApp. A password reset link or temporary password is sent to your registered mobile number within minutes." },
    { q: "Is 2-factor authentication available?", a: "Yes. OTP-based 2FA is enabled by default on every Sprinters-issued ID for withdrawals and security-sensitive actions." },
    { q: "Why is my login not working?", a: "Common causes are wrong domain (always use the link sent by Sprinters), expired session, or a temporary IP block. Message support on WhatsApp for a fast fix." },
  ],
  "/sprinters-vs-lotus365": [
    { q: "How does Sprinters compare to Lotus 365?", a: "Both offer sports and casino access, but Sprinters bundles 20+ platforms under one WhatsApp desk with 24-hour payouts, while Lotus 365 is a single-platform product." },
    { q: "Which has faster withdrawals?", a: "Sprinters consistently processes withdrawals within 24 hours across every partner platform; Lotus 365 withdrawal timings vary by user tier." },
    { q: "Which one is better for cricket betting?", a: "Sprinters lets you pick platforms optimised for cricket (Cricbet99, Laser247) instead of being locked into one book." },
    { q: "Can I move my balance from Lotus 365 to Sprinters?", a: "Direct transfers aren't possible, but you can withdraw from Lotus 365 and top up your Sprinters wallet via UPI — the funds reflect instantly." },
  ],
  "/sprinters-vs-skyexchange247": [
    { q: "Sprinters vs Sky Exchange 247 — what's the difference?", a: "Sky Exchange 247 is one exchange product. Sprinters resells verified IDs across 20+ platforms including Sky Exchange, giving you more choice and better payout consistency." },
    { q: "Are odds better on Sprinters or Sky Exchange 247?", a: "Odds vary by market. Sprinters lets you line-shop across platforms, so you can pick the sharpest price at the moment of the bet." },
    { q: "Which has better customer support?", a: "Sprinters offers dedicated WhatsApp and Telegram support 24/7 in Hindi and English, with a named agent for VIP players." },
    { q: "Can I use both Sprinters and Sky Exchange 247?", a: "Yes. Many players keep a Sprinters-managed Sky Exchange ID for exchange markets and a Cricbet99 or Laser247 ID for extra depth." },
  ],
  "/tennis-betting": [
    { q: "Which tennis tournaments can I bet on?", a: "All four Grand Slams — Australian Open, Roland Garros, Wimbledon, US Open — plus ATP, WTA, Davis Cup, Billie Jean King Cup and every Challenger event." },
    { q: "What tennis betting markets are offered?", a: "Match winner, set winner, correct score, total games, over/under, tiebreak in match, first set winner and player-specific props like aces and double faults." },
    { q: "Can I bet live during a tennis match?", a: "Yes. In-play tennis odds update every point with cash-out available on most matches." },
    { q: "How fast are tennis withdrawals?", a: "Withdrawals are processed within 24 hours to UPI, GPay, PhonePe, Paytm or bank account, with no hidden fees." },
  ],
  "/terms-and-conditions": [
    { q: "Who can open a Sprinters ID?", a: "Only users aged 18 or above (21+ in states with a higher gambling age) who reside where online skill and sports gaming is legal." },
    { q: "Can Sprinters cancel my account?", a: "Yes. Sprinters may suspend or close accounts found using multiple identities, bonus abuse, chargebacks, or breaching partner-platform rules." },
    { q: "How are disputes resolved?", a: "All disputes are first handled by Sprinters support on WhatsApp. Unresolved issues are escalated to the specific platform's official arbitration process." },
  ],
  "/thank-you": [
    { q: "What happens after I submit a request?", a: "Our team reviews it and messages you on WhatsApp within a few minutes with next steps — usually a payment link or account details." },
    { q: "I haven't received a WhatsApp reply — what should I do?", a: "Check WhatsApp for a message from the Sprinters support number. If nothing arrives in 15 minutes, use the WhatsApp button on any page to re-open the chat." },
    { q: "Can I track my request status?", a: "Yes. Just reply to your existing WhatsApp thread with the Sprinters support agent — every request is logged against your mobile number." },
  ],
  "/about": [
    { q: "Who runs Sprinters?", a: "Sprinters is operated by a team of gaming veterans focused exclusively on reselling verified IDs and providing 24-hour concierge support." },
    { q: "How long has Sprinters been in business?", a: "The Sprinters brand has serviced players across India for multiple seasons, with an active base of tens of thousands of verified players." },
    { q: "Is my money safe with Sprinters?", a: "Deposits go directly to the gaming platform's licensed wallet. Sprinters does not hold player funds — every payout comes from the platform itself." },
    { q: "How do I contact Sprinters?", a: "The fastest way is WhatsApp, available on every page. Telegram, phone and email options are listed on the Contact page." },
  ],
  "/contact": [
    { q: "What is the fastest way to reach Sprinters?", a: "WhatsApp is the fastest channel — most messages are answered within 60 seconds by a human agent, 24 hours a day." },
    { q: "Do you offer phone support?", a: "Voice support is available for verified VIP players. For all users, WhatsApp and Telegram provide 24/7 response with call-back on request." },
    { q: "Which languages does support work in?", a: "Support is available in Hindi, English and Hinglish, with regional-language help (Tamil, Telugu, Bengali, Marathi) available by request." },
    { q: "Can I reach Sprinters on holidays?", a: "Yes. Sprinters support runs 24 hours a day, 365 days a year — including IPL final night, Diwali and every festival." },
  ],
  "/blog": [
    { q: "How often is the Sprinters blog updated?", a: "New guides, tips and match previews are published every week, with daily updates during IPL and major ICC events." },
    { q: "Do blog predictions guarantee wins?", a: "No. Predictions are analytical opinions from our editorial team and should be treated as one input, never as guaranteed outcomes." },
    { q: "Can I request a blog topic?", a: "Yes. Message Sprinters on WhatsApp with your topic idea — most reader requests are covered within a few days." },
    { q: "Are blog articles written by humans?", a: "Yes. Every article is written and reviewed by our in-house cricket and casino writers, with AI used only for research assistance." },
  ],
  "/all-links": [
    { q: "Which link should I use to log in?", a: "Always use the exact link Sprinters sends you on WhatsApp. Bookmark it — many phishing sites copy platform branding, so the WhatsApp link is your source of truth." },
    { q: "Why are there multiple platform links?", a: "Because Sprinters supports 20+ different platforms, each with its own login domain. This page keeps every official link in one place." },
    { q: "Are these links safe?", a: "Yes. Every link on this page is verified against Sprinters' official partner list and updated whenever a platform rotates its domain." },
  ],
  "/predictions": [
    { q: "How are Sprinters match predictions made?", a: "Our editorial team combines pitch reports, form guides, head-to-head history, weather and injury news — reviewed daily before publishing." },
    { q: "Are the predictions free?", a: "Yes. All match previews and free tips are open to everyone. Deeper session and fancy tips are shared with active Sprinters ID holders on WhatsApp." },
    { q: "Should I bet based only on predictions?", a: "No. Treat predictions as one data point. Always factor in the latest team news, live odds movement and your own bankroll rules." },
    { q: "Which sports do you cover?", a: "Cricket first (IPL, ICC events, bilaterals), plus football, tennis, kabaddi and horse racing during major seasons." },
  ],
};
