import { blogArticles } from "@/lib/blog-data";
import { getBlogSeo } from "@/utils/blog-seo";

export type LinkCluster =
  | "login"
  | "wallet"
  | "cricket"
  | "football"
  | "tennis"
  | "casino"
  | "bonus"
  | "id"
  | "horse"
  | "kabaddi"
  | "support"
  | "general";

export interface HubLink {
  to: string;
  label: string;
  desc: string;
  search?: Record<string, string>;
}

export function clusterFromSlug(slug: string): LinkCluster {
  const s = slug.toLowerCase();
  if (/login|otp|password|2fa/.test(s)) return "login";
  if (/wallet|deposit|withdraw|upi|payout|limit/.test(s)) return "wallet";
  if (/ipl|t20|odi|test|cricket|wpl|world-cup/.test(s)) return "cricket";
  if (/football|fifa|soccer|premier/.test(s)) return "football";
  if (/tennis|atp|wta|slam|wimbledon/.test(s)) return "tennis";
  if (/casino|poker|andar|bahar|teen|roulette|blackjack|baccarat/.test(s)) return "casino";
  if (/bonus|promo|reward|welcome/.test(s)) return "bonus";
  if (/demo-id|fairplay-id|sports-id|get-id|registration|register/.test(s)) return "id";
  if (/horse|racing/.test(s)) return "horse";
  if (/kabaddi/.test(s)) return "kabaddi";
  if (/support|customer|contact|kyc|safe|secure/.test(s)) return "support";
  return "general";
}

const CLUSTER_HUBS: Record<LinkCluster, HubLink[]> = {
  login: [
    { to: "/login-guide", label: "Fairplay login guide", desc: "OTP and 2FA sign-in steps" },
    { to: "/login-issues", label: "Fix login issues", desc: "Locked ID and cache loops" },
    { to: "/fairplay-id", label: "Get a Fairplay ID", desc: "Verified cricket ID in minutes" },
    { to: "/support", label: "Support hub", desc: "WhatsApp and account help" },
    { to: "/app", label: "Fairplay app", desc: "Same ID on mobile" },
    { to: "/register-guide", label: "Register guide", desc: "Create an ID from scratch" },
  ],
  wallet: [
    { to: "/deposit-guide", label: "Deposit guide", desc: "UPI and wallet top-up" },
    { to: "/fairplay-deposit-number", label: "Deposit number", desc: "Official WhatsApp for UPI" },
    { to: "/withdrawal-guide", label: "Withdrawal guide", desc: "180-minute payouts" },
    { to: "/fairplay-withdrawal-number", label: "Withdrawal number", desc: "Official WhatsApp for payouts" },
    { to: "/deposit-issues", label: "Deposit issues", desc: "Failed or pending credits" },
    { to: "/withdrawal-issues", label: "Withdrawal issues", desc: "Payout tracking" },
    { to: "/fairplay-id", label: "Fairplay ID", desc: "Fund a live sports ID" },
    { to: "/bonus", label: "Bonuses", desc: "Welcome and reload offers" },
  ],
  cricket: [
    { to: "/ipl-betting", label: "IPL 2026 betting", desc: "Match-winner and fancy books" },
    { to: "/t20-world-cup", label: "T20 World Cup", desc: "ICC markets on Fairplay" },
    { to: "/matches", label: "Cricket match index", desc: "Every series, one page" },
    { to: "/schedule", label: "Cricket schedule", desc: "2026 fixtures and details" },
    { to: "/betting", label: "Sports exchange", desc: "Live cricket odds", search: { category: "cricket" } },
    { to: "/fairplay-id", label: "Cricket ID", desc: "Verified Fairplay ID" },
  ],
  football: [
    { to: "/betting", label: "Football exchange", desc: "1X2, BTTS and HT/FT", search: { category: "football" } },
    { to: "/matches", label: "Football match index", desc: "World Cup 2026 by group" },
    { to: "/schedule", label: "Football schedule", desc: "WC 2026 and club fixtures" },
    { to: "/fairplay-id", label: "Get a Fairplay ID", desc: "One ID for football books" },
    { to: "/deposit-guide", label: "Deposit before kick-off", desc: "UPI wallet top-up" },
    { to: "/blog", label: "Betting guides", desc: "Fairplay how-to articles" },
  ],
  tennis: [
    { to: "/betting", label: "Tennis exchange", desc: "Sets, games and live", search: { category: "tennis" } },
    { to: "/matches", label: "Tennis match index", desc: "ATP and WTA by tournament" },
    { to: "/schedule", label: "Tennis schedule", desc: "ATP and WTA 2026" },
    { to: "/fairplay-id", label: "Get a Fairplay ID", desc: "Trade Slam markets" },
    { to: "/deposit-guide", label: "Fund your wallet", desc: "UPI before the coin toss" },
    { to: "/blog", label: "Fairplay guides", desc: "Login, ID and markets" },
  ],
  casino: [
    { to: "/casino", label: "Live casino", desc: "HD tables and Indian games" },
    { to: "/bonus", label: "Casino bonus", desc: "Welcome and table offers" },
    { to: "/fairplay-id", label: "Fairplay ID", desc: "One ID for casino + sports" },
    { to: "/deposit-guide", label: "Deposit guide", desc: "UPI to casino wallet" },
    { to: "/responsible-gaming", label: "Responsible gaming", desc: "Limits and self-exclusion" },
    { to: "/support", label: "Support", desc: "Table and cash-out help" },
  ],
  bonus: [
    { to: "/bonus", label: "Fairplay bonuses", desc: "Welcome and promo codes" },
    { to: "/bonus-issues", label: "Bonus issues", desc: "Wagering and credit help" },
    { to: "/fairplay-id", label: "Get an ID first", desc: "Bonuses attach to a live ID" },
    { to: "/deposit-guide", label: "Deposit to unlock", desc: "UPI qualifying deposits" },
    { to: "/terms-conditions", label: "Bonus terms", desc: "Wagering rules" },
    { to: "/whatsapp-support", label: "WhatsApp desk", desc: "Promo applied on request" },
  ],
  id: [
    { to: "/fairplay-id", label: "Get Fairplay ID", desc: "Verified sports ID" },
    { to: "/register-guide", label: "Registration steps", desc: "From WhatsApp to live ID" },
    { to: "/login-guide", label: "Login after activation", desc: "OTP sign-in" },
    { to: "/deposit-guide", label: "First deposit", desc: "UPI wallet top-up" },
    { to: "/betting", label: "Open the exchange", desc: "Cricket, football, tennis" },
    { to: "/whatsapp-support", label: "WhatsApp verification", desc: "ID in ~180 seconds" },
  ],
  horse: [
    { to: "/horse-racing", label: "Horse racing hub", desc: "Win, place and in-running" },
    { to: "/betting", label: "Sports exchange", desc: "Race books on Fairplay" },
    { to: "/schedule", label: "Full schedule", desc: "Other sports the same day" },
    { to: "/fairplay-id", label: "Fairplay ID", desc: "One ID for racing" },
    { to: "/deposit-guide", label: "Deposit guide", desc: "Fund before the off" },
    { to: "/blog", label: "Guides", desc: "Wallet and ID help" },
  ],
  kabaddi: [
    { to: "/kabaddi-betting", label: "Kabaddi betting", desc: "PKL match and raid books" },
    { to: "/betting", label: "Sports exchange", desc: "Live PKL odds" },
    { to: "/schedule", label: "Schedule", desc: "Cricket and more the same week" },
    { to: "/fairplay-id", label: "Fairplay ID", desc: "PKL on the same ID" },
    { to: "/blog", label: "Fairplay blog", desc: "How-to guides" },
    { to: "/whatsapp-support", label: "WhatsApp", desc: "ID and limits help" },
  ],
  support: [
    { to: "/support", label: "Support hub", desc: "ID, payments and betting" },
    { to: "/whatsapp-support", label: "WhatsApp support", desc: "Fastest live desk" },
    { to: "/fairplay-deposit-number", label: "Deposit number", desc: "Official WhatsApp for UPI" },
    { to: "/fairplay-withdrawal-number", label: "Withdrawal number", desc: "Official WhatsApp for payouts" },
    { to: "/fairplay-customer-care-number", label: "Customer care number", desc: "Official WhatsApp for support" },
    { to: "/contact-us", label: "Contact us", desc: "Written trail" },
    { to: "/kyc-verification-policy", label: "KYC policy", desc: "What Fairplay asks for" },
    { to: "/is-fairplay-safe", label: "Is Fairplay safe?", desc: "Security overview" },
    { to: "/login-issues", label: "Login issues", desc: "Access troubleshooting" },
  ],
  general: [
    { to: "/schedule", label: "2026 schedule", desc: "Cricket, football, tennis" },
    { to: "/matches", label: "All matches", desc: "Every tournament, one page" },
    { to: "/betting", label: "Sports exchange", desc: "Live cricket and more" },
    { to: "/casino", label: "Live casino", desc: "HD dealer tables" },
    { to: "/fairplay-id", label: "Fairplay ID", desc: "Start with a verified ID" },
    { to: "/blog", label: "Guides & blogs", desc: "180+ Fairplay articles" },
  ],
};

const MATCH_HUBS: HubLink[] = [
  { to: "/matches", label: "All matches index", desc: "Every tournament, one page" },
  { to: "/schedule", label: "Full 2026 schedule", desc: "Cricket, football and tennis" },
  { to: "/betting", label: "Sports exchange", desc: "Live books for this fixture" },
  { to: "/fairplay-id", label: "Get a Fairplay ID", desc: "Trade this match on a live ID" },
  { to: "/deposit-guide", label: "Deposit guide", desc: "Fund before the toss" },
  { to: "/blog", label: "Betting guides", desc: "How Fairplay markets settle" },
  { to: "/casino", label: "Live casino", desc: "Tables when the match is idle" },
];

const PATH_CLUSTER: Record<string, LinkCluster> = {
  "/login-guide": "login",
  "/login-issues": "login",
  "/account-issues": "login",
  "/register-guide": "id",
  "/fairplay-id": "id",
  "/deposit-guide": "wallet",
  "/deposit-issues": "wallet",
  "/withdrawal-guide": "wallet",
  "/withdrawal-issues": "wallet",
  "/ipl-betting": "cricket",
  "/t20-world-cup": "cricket",
  "/wpl-betting": "cricket",
  "/champions-trophy": "cricket",
  "/betting": "cricket",
  "/casino": "casino",
  "/bonus": "bonus",
  "/bonus-issues": "bonus",
  "/horse-racing": "horse",
  "/kabaddi-betting": "kabaddi",
  "/basketball-betting": "general",
  "/esports-betting": "general",
  "/support": "support",
  "/whatsapp-support": "support",
  "/fairplay-deposit-number": "support",
  "/fairplay-withdrawal-number": "support",
  "/fairplay-customer-care-number": "support",
  "/contact-us": "support",
  "/kyc-verification-policy": "support",
  "/is-fairplay-safe": "support",
  "/is-fairplay-real": "support",
  "/is-fairplay-legal": "support",
  "/security-safety": "support",
  "/responsible-gaming": "support",
  "/privacy-policy": "support",
  "/terms-conditions": "support",
  "/legal-status": "support",
  "/refund-policy": "support",
  "/rules-regulations": "support",
  "/disclaimer": "support",
  "/gold365": "id",
  "/11xplay": "id",
  "/laser247": "id",
  "/cricbet99": "id",
  "/fairdeal": "id",
};

const PAGE_EXTRA_HUBS: Record<string, HubLink[]> = {
  "/": CLUSTER_HUBS.general,
  "/betting": [
    { to: "/ipl-betting", label: "IPL betting", desc: "Cricket match and fancy books" },
    { to: "/betting", label: "Football exchange", desc: "1X2, BTTS and HT/FT", search: { category: "football" } },
    { to: "/betting", label: "Tennis exchange", desc: "Sets, games and live", search: { category: "tennis" } },
    { to: "/schedule", label: "2026 schedule", desc: "Cricket, FIFA and tennis" },
    { to: "/fairplay-id", label: "Fairplay ID", desc: "One ID for every sport" },
    { to: "/deposit-guide", label: "Deposit guide", desc: "UPI before you trade" },
  ],
  "/schedule": [
    { to: "/matches", label: "All matches index", desc: "Grouped by tournament" },
    { to: "/ipl-betting", label: "IPL betting", desc: "Cricket match books" },
    { to: "/betting", label: "Live exchange", desc: "Trade listed fixtures" },
    { to: "/fairplay-id", label: "Get an ID", desc: "Bet any listed match" },
    { to: "/blog", label: "Match guides", desc: "How markets settle" },
    { to: "/t20-world-cup", label: "T20 World Cup", desc: "ICC cricket hub" },
  ],
  "/matches": [
    { to: "/schedule", label: "Day-by-day schedule", desc: "Same fixtures, date order" },
    { to: "/ipl-betting", label: "IPL 2026", desc: "Cricket match and fancy books" },
    { to: "/betting", label: "Live exchange", desc: "Trade any listed fixture" },
    { to: "/fairplay-id", label: "Get a Fairplay ID", desc: "One ID for every sport" },
    { to: "/t20-world-cup", label: "T20 World Cup", desc: "ICC cricket hub" },
    { to: "/blog", label: "Betting guides", desc: "How markets settle" },
  ],
  "/blog": [
    { to: "/schedule", label: "Match schedule", desc: "Open a fixture after you read" },
    { to: "/fairplay-id", label: "Fairplay ID", desc: "Most guides start here" },
    { to: "/ipl-betting", label: "IPL hub", desc: "Season cricket markets" },
    { to: "/deposit-guide", label: "Deposits", desc: "UPI wallet steps" },
    { to: "/login-guide", label: "Login", desc: "OTP access" },
    { to: "/betting", label: "Exchange", desc: "Put the guide into a live book" },
  ],
  "/about": [
    { to: "/what-is-fairplay", label: "What is Fairplay?", desc: "How the exchange works" },
    { to: "/is-fairplay-safe", label: "Is Fairplay safe?", desc: "Security checks" },
    { to: "/fairplay-id", label: "Get an ID", desc: "Start betting" },
    { to: "/schedule", label: "Schedule", desc: "2026 fixtures" },
    { to: "/blog", label: "Blog", desc: "Guides and FAQs" },
    { to: "/all-links", label: "All links", desc: "Full site index" },
  ],
  "/what-is-fairplay": CLUSTER_HUBS.general,
  "/app": CLUSTER_HUBS.general,
  "/services": CLUSTER_HUBS.general,
  "/platforms": CLUSTER_HUBS.general,
  "/telegram-channel": CLUSTER_HUBS.support,
};

export function getHubLinksForCluster(cluster: LinkCluster, limit = 6): HubLink[] {
  return (CLUSTER_HUBS[cluster] ?? CLUSTER_HUBS.general).slice(0, limit);
}

export function getHubLinksForPage(pathname: string, limit = 6): HubLink[] {
  return getHubLinksForPathname(pathname, limit);
}

export function getHubLinksForSlug(slug: string, limit = 6): HubLink[] {
  return getHubLinksForCluster(clusterFromSlug(slug), limit);
}

export function getHubLinksForPathname(pathname: string, limit = 6): HubLink[] {
  if (pathname.startsWith("/posts/")) {
    return getHubLinksForSlug(pathname.slice("/posts/".length), limit);
  }
  if (pathname.startsWith("/match/")) {
    return MATCH_HUBS.slice(0, limit);
  }
  const extras = PAGE_EXTRA_HUBS[pathname];
  if (extras) return extras.slice(0, limit);
  const cluster = PATH_CLUSTER[pathname];
  if (cluster) return getHubLinksForCluster(cluster, limit);
  if (pathname.startsWith("/fairplay-vs-")) return getHubLinksForCluster("id", limit);
  return getHubLinksForCluster("general", limit);
}

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getRelatedBlogSlugs(slug: string, limit = 3): string[] {
  const cluster = clusterFromSlug(slug);
  const same = blogArticles.filter((article) => article.slug !== slug && clusterFromSlug(article.slug) === cluster);
  const others = blogArticles.filter((article) => article.slug !== slug && clusterFromSlug(article.slug) !== cluster);
  const picked: string[] = [];
  const sameStart = same.length ? hashSeed(slug) % same.length : 0;
  const sameStride = same.length > 1 ? 1 + (hashSeed(`${slug}|stride`) % (same.length - 1)) : 1;
  for (let i = 0; i < same.length && picked.length < limit; i++) {
    const article = same[(sameStart + i * sameStride) % same.length];
    if (article && !picked.includes(article.slug)) picked.push(article.slug);
  }
  const otherStart = others.length ? hashSeed(`${slug}|other`) % others.length : 0;
  for (let i = 0; i < others.length && picked.length < limit; i++) {
    const article = others[(otherStart + i * 5) % others.length];
    if (article && !picked.includes(article.slug)) picked.push(article.slug);
  }
  return picked.slice(0, limit);
}

export function relatedBlogCards(slug: string, limit = 3) {
  return getRelatedBlogSlugs(slug, limit).map((related) => {
    const seo = getBlogSeo(related);
    const meta = blogArticles.find((article) => article.slug === related);
    return {
      slug: related,
      title: seo.h1,
      desc: seo.description,
      date: meta?.date ?? "2026",
    };
  });
}
