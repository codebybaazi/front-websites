import { BLOG_POST_OVERRIDES, hasUniqueBlogContent } from "@/lib/blog-post-overrides";

export interface BlogSeo {
  h1: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
}

export interface BlogBlock {
  t: "h1" | "h2" | "h3" | "p" | "ul" | "faq";
  c?: string;
  items?: string[] | Array<{ q: string; a: string }>;
}

/** Re-exported so route modules only need one import for the indexability check. */
export { hasUniqueBlogContent };

const ACRONYMS: Record<string, string> = {
  fairplay: "Fairplay",
  ipl: "IPL",
  icc: "ICC",
  t20: "T20",
  wpl: "WPL",
  id: "ID",
  ids: "IDs",
  upi: "UPI",
  kyc: "KYC",
  otp: "OTP",
  faq: "FAQ",
  hd: "HD",
  atp: "ATP",
  wta: "WTA",
  epl: "EPL",
  ucl: "UCL",
  fifa: "FIFA",
  pkl: "PKL",
  vip: "VIP",
  aml: "AML",
  ssl: "SSL",
  app: "app",
};

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function prettyWord(word: string): string {
  const lower = word.toLowerCase();
  if (ACRONYMS[lower]) return ACRONYMS[lower];
  if (["vs", "and", "or", "to", "on", "in", "for", "of", "with", "a", "an", "the", "how", "why", "what"].includes(lower)) {
    return lower;
  }
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function titleFromSlug(slug: string): string {
  const cleaned = slug
    .replace(/-elite-fairplay-guide$/i, "")
    .replace(/-complete-beginner-guide$/i, "")
    .replace(/-step-by-step-guide$/i, "")
    .replace(/-explained$/i, "")
    .replace(/\\u2013/g, "")
    .trim();
  const words = cleaned.split("-").filter(Boolean).map(prettyWord);
  if (words.length === 0) return "Fairplay betting guide";
  const first = words[0];
  if (first) words[0] = first.charAt(0).toUpperCase() + first.slice(1);
  return words.join(" ").replace(/\s+/g, " ").trim();
}

function clipMeta(text: string, max = 155): string {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= max) return compact;
  const cut = compact.slice(0, max);
  const sp = cut.lastIndexOf(" ");
  return `${(sp > 90 ? cut.slice(0, sp) : cut).replace(/[.,;:—-]+$/, "")}.`;
}

type Cluster =
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

function clusterOf(slug: string): Cluster {
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

const CLUSTER: Record<
  Cluster,
  {
    short: string;
    keywords: string[];
    what: string;
    slip: string;
  }
> = {
  login: {
    short: "Fairplay login",
    keywords: ["Fairplay login", "Fairplay ID login", "OTP login India"],
    what: "signing in with OTP or 2FA on a Fairplay ID",
    slip: "the login screen — not a bet slip",
  },
  wallet: {
    short: "Fairplay wallet",
    keywords: ["Fairplay deposit", "Fairplay withdrawal", "Fairplay UPI"],
    what: "UPI deposits, withdrawals and wallet limits",
    slip: "the wallet and payment screen",
  },
  cricket: {
    short: "cricket betting",
    keywords: ["Fairplay cricket betting", "IPL betting", "cricket ID"],
    what: "match-winner, sessions and fancy books on a cricket ID",
    slip: "the cricket bet slip",
  },
  football: {
    short: "football betting",
    keywords: ["Fairplay football betting", "FIFA betting", "soccer exchange"],
    what: "1X2, BTTS, HT/FT and live totals",
    slip: "the football bet slip",
  },
  tennis: {
    short: "tennis betting",
    keywords: ["Fairplay tennis betting", "ATP betting", "set betting"],
    what: "match-winner, set handicap and total games",
    slip: "the tennis bet slip",
  },
  casino: {
    short: "live casino",
    keywords: ["Fairplay live casino", "Teen Patti", "Andar Bahar"],
    what: "Teen Patti, Andar Bahar, roulette and live tables",
    slip: "the casino table or slot",
  },
  bonus: {
    short: "Fairplay bonus",
    keywords: ["Fairplay bonus", "Fairplay promo code", "welcome bonus"],
    what: "welcome offers, wagering and promo credit",
    slip: "the bonus and wallet screen",
  },
  id: {
    short: "Fairplay ID",
    keywords: ["Fairplay ID", "get Fairplay ID", "cricket ID"],
    what: "getting a verified Fairplay ID and first login",
    slip: "registration and ID chat",
  },
  horse: {
    short: "horse racing",
    keywords: ["Fairplay horse racing", "horse race betting"],
    what: "win, place and in-running race books",
    slip: "the race ticket",
  },
  kabaddi: {
    short: "kabaddi betting",
    keywords: ["Fairplay kabaddi", "PKL betting"],
    what: "PKL match-winner and raid or tackle props",
    slip: "the kabaddi bet slip",
  },
  support: {
    short: "Fairplay support",
    keywords: ["Fairplay customer care", "Fairplay KYC", "Fairplay support"],
    what: "WhatsApp help, KYC and account checks",
    slip: "the support chat — keep your ID handy",
  },
  general: {
    short: "Fairplay betting",
    keywords: ["Fairplay", "sports exchange India", "online cricket ID"],
    what: "cricket, football, tennis and casino on one ID",
    slip: "the exchange or casino lobby",
  },
};

const OPENERS = [
  "Skip the brochure language. This is the order of clicks that actually works.",
  "If you already have a Fairplay ID, you can follow this on your phone while the market is open.",
  "Most people get stuck on one small step. The rest is ordinary.",
  "Write this down once, then you will not need another tab open next time.",
  "Treat this as a checklist, not a sales page.",
];

function pick<T>(pool: T[], slug: string, salt: string, count: number): T[] {
  const start = hashSeed(`${salt}|${slug}`) % pool.length;
  const out: T[] = [];
  const used = new Set<number>();
  for (let i = 0; i < pool.length && out.length < count; i++) {
    const idx = (start + i * 3) % pool.length;
    if (used.has(idx)) continue;
    used.add(idx);
    const item = pool[idx];
    if (item !== undefined) out.push(item);
  }
  return out;
}

function topicNoun(h1: string): string {
  return h1
    .replace(/^How to /i, "")
    .replace(/^Why /i, "")
    .replace(/^What is /i, "")
    .replace(/ on Fairplay$/i, "")
    .trim();
}

export function getBlogSeo(slug: string): BlogSeo {
  const override = BLOG_POST_OVERRIDES[slug];
  const h1 = override?.h1 ?? titleFromSlug(slug);
  const cluster = clusterOf(slug);
  const copy = CLUSTER[cluster];
  const opener = OPENERS[hashSeed(slug) % OPENERS.length] ?? OPENERS[0];
  const noun = topicNoun(h1);
  const title = override?.title ?? `${h1} | Fairplay`;
  const keywords = [h1, copy.short, ...copy.keywords, "Fairplay 2026"].join(", ");
  const intro = `${opener} This page is about ${noun} on Fairplay — ${copy.what}. You will use the same Fairplay ID for cricket, football, tennis and casino. ${copy.slip.charAt(0).toUpperCase() + copy.slip.slice(1)} is where the work happens.`;

  const description = override
    ? override.description
    : clipMeta(`${opener} ${copy.short} on Fairplay: ${copy.what}. Same Fairplay ID and UPI wallet.`);

  return { h1, title, description, keywords, intro };
}

export function enrichBlogArticle<T extends { slug: string; title: string; desc: string }>(article: T): T {
  const seo = getBlogSeo(article.slug);
  return {
    ...article,
    title: seo.h1,
    desc: seo.description,
  };
}

export function getBlogArticleBlocks(slug: string): BlogBlock[] {
  const override = BLOG_POST_OVERRIDES[slug];
  if (override) return override.blocks;

  const seo = getBlogSeo(slug);
  const cluster = clusterOf(slug);
  const copy = CLUSTER[cluster];
  const h1 = seo.h1;
  const noun = topicNoun(h1);

  const steps = pick(
    [
      `Open Fairplay on your phone or laptop and sign in with the Fairplay ID that was verified on WhatsApp.`,
      `If this ID is new, wait until the desk confirms it is live — usually a few minutes — before you fund the wallet.`,
      `For ${noun}, first check that ${copy.what} is actually listed. Do not deposit into an empty book.`,
      `Start small. A ₹10–₹50 stake is enough to see whether cash-out and settlement look right.`,
      `In-play prices jump in the first few minutes. Wait for a passage of play unless you meant to bet the open.`,
      `Keep a screenshot of ${copy.slip} until the market settles (often within 180 minutes of the official result).`,
    ],
    slug,
    "steps",
    4,
  );

  const why = pick(
    [
      `Live ${copy.short} prices move. You are not stuck with a number from the morning.`,
      `Cash-out exists on eligible Fairplay books if the story of the match turns.`,
      `UPI in and UPI out sit on the same Fairplay ID as cricket, football, tennis and casino.`,
      `WhatsApp support can unblock login, KYC or a stuck payout without an email ticket.`,
      `A demo ID is for practice. A live Fairplay ID is what unlocks ${copy.what}.`,
    ],
    slug,
    "why",
    4,
  );

  const faqs: Array<{ q: string; a: string }> = pick(
    [
      {
        q: `What does Fairplay actually offer for ${copy.short}?`,
        a: `On a live Fairplay ID you get ${copy.what}. It is the same account you use for deposits and withdrawals — not a second registration.`,
      },
      {
        q: `How do I start with ${noun}?`,
        a: `Message WhatsApp for a Fairplay ID, complete the short check, add money via UPI, then open ${copy.what}. Stakes often start around ₹10.`,
      },
      {
        q: `Can I do this in-play?`,
        a: `Yes, when the book is live. In-play ${copy.short} updates during the event. Cash-out appears only on markets that allow it.`,
      },
      {
        q: `How long do Fairplay winnings take?`,
        a: `Settled returns usually land in the Fairplay wallet within 180 minutes of the official result, then you can withdraw to the method you saved.`,
      },
      {
        q: `Does this work on the Fairplay app?`,
        a: `Yes. One Fairplay ID works on app and browser, so ${copy.what} follows you. You do not register twice.`,
      },
      {
        q: `Who do I message if something fails?`,
        a: `WhatsApp Fairplay support with your ID and a screenshot. Login, deposit and withdrawal pages on this site list the usual fixes first.`,
      },
    ],
    slug,
    "faq",
    4,
  );

  const nextByCluster: Record<Cluster, string> = {
    login: "If OTP still fails, use the login issues page, confirm the number on the Fairplay ID page, then WhatsApp a screenshot.",
    wallet: "When you are ready, open the deposit guide or withdrawal guide. Pending credits are covered on the deposit issues and withdrawal issues pages.",
    cricket: "Pick a fixture on the 2026 schedule, then IPL betting or the sports exchange. New players get a Fairplay ID before the first stake.",
    football: "Open football on the exchange, check kick-off on the schedule, and fund from the deposit guide so 1X2 is live before the whistle.",
    tennis: "Find the next ATP or WTA match on the schedule, open tennis on the exchange, and fund the wallet if the ID is new.",
    casino: "Open the live casino after the Fairplay ID is live. Bonus terms are on the bonus page; limits and breaks are on responsible gaming.",
    bonus: "Claim a Fairplay bonus only after the ID is live. Wagering questions go to bonus issues; qualifying deposits follow the deposit guide.",
    id: "Get the ID on the Fairplay ID page, then register guide → login guide → deposit guide so the first cricket book is funded.",
    horse: "Open the horse racing hub, fund from the deposit guide, and keep the full schedule if you also bet cricket the same day.",
    kabaddi: "PKL books sit on the kabaddi betting hub. Same Fairplay ID as cricket. Check the schedule for overlapping fixtures.",
    support: "Start at the support hub or WhatsApp. KYC policy covers documents; Is Fairplay safe covers the usual security questions.",
    general: "Most people next open the Fairplay ID page, the 2026 schedule, or the sports exchange. Longer walkthroughs live on the blog.",
  };

  return [
    { t: "h2", c: `How this works on Fairplay` },
    { t: "p", c: seo.intro },
    {
      t: "p",
      c: `${copy.short.charAt(0).toUpperCase() + copy.short.slice(1)} is easy to overthink. Fairplay keeps ${copy.what} on one ID. Read the steps, then only press confirm when the market name on ${copy.slip} matches what you meant.`,
    },
    { t: "p", c: nextByCluster[cluster] },
    { t: "h2", c: `Steps for ${noun}` },
    { t: "ul", items: steps },
    { t: "h2", c: `Why people use Fairplay for this` },
    { t: "ul", items: why },
    {
      t: "p",
      c: `One rule that still helps: size the stake as if ${copy.short} can go against you for twenty minutes. Liquidity on Fairplay is usually fine. Chasing a steam bet is not.`,
    },
    { t: "h2", c: `Common questions` },
    { t: "faq", items: faqs },
  ];
}
