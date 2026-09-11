import { blogArticles } from "@/lib/blog-data";
import { SITE_ORIGIN, organizationNode } from "@/utils/page-seo";

export type SiteAuthor = {
  slug: string;
  name: string;
  firstName: string;
  role: string;
  category: string;
  pronouns: string;
  focus: string[];
  languages: string[];
  shortBio: string;
  about: string[];
  background: string[];
  experience: string[];
  other: string[];
};

/** One named writer per blog category tab. Pen names for the Fairplay India desk. */
export const SITE_AUTHORS: SiteAuthor[] = [
  {
    slug: "neha-iyer",
    name: "Neha Iyer",
    firstName: "Neha",
    role: "How-to writer",
    category: "Guide",
    pronouns: "she/her",
    focus: ["Fairplay ID", "Login", "UPI wallet", "Withdrawals"],
    languages: ["English", "Hindi"],
    shortBio:
      "Neha writes the how-to posts: how you get a Fairplay ID on WhatsApp, how OTP login works, and how money moves in and out of the wallet.",
    about: [
      "Neha is the how-to writer on the Fairplay India desk. If a post walks through register, login, deposit, withdraw, or the app install, it is usually hers.",
      "She writes the same steps the WhatsApp desk already sends in chat. The page exists so you do not have to wait for a reply to hear “open the wallet, pick UPI, wait for the credit.”",
    ],
    background: [
      "Before this site she wrote in-app help for Indian payment products: OTP screens, failed UPI, and “where did my money go” copy. That is the habit she brought here. Name the button. Name what happens next. Leave the sales line out.",
      "She is not a lawyer and she does not sit in a Fairplay data centre. She sits with the support queue and turns repeated tickets into a page you can search.",
    ],
    experience: [
      "On a normal week she drafts or rewrites Guide posts, then checks them against what the desk actually tells people that week. If a screenshot in the app moved, the article should move too.",
      "She also flags clone domains and personal UPI handles when those show up in tickets, because those two mistakes still cause most of the damage.",
    ],
    other: [
      "Credit on Guide posts: Written by Neha Iyer, how-to writer.",
      "For an ID or a stuck deposit, use the WhatsApp number on this site. Neha does not publish a personal number.",
      "Pages are product help, not legal advice. You must be 18+.",
    ],
  },
  {
    slug: "kabir-mehta",
    name: "Kabir Mehta",
    firstName: "Kabir",
    role: "Fairplay support desk",
    category: "Support",
    pronouns: "he/him",
    focus: ["OTP delays", "Locked ID", "KYC", "WhatsApp tickets"],
    languages: ["English", "Hindi"],
    shortBio:
      "Kabir works the Fairplay support desk. Support posts are the answers he already gives on WhatsApp: OTP, locked IDs, KYC holds, and payouts that have not landed.",
    about: [
      "Kabir is the named face of the Fairplay support desk on this site. Support articles are his, including login loops, missing OTP, and verification holds.",
      "He would rather you read the matching issue page first. Bring the Fairplay ID, the mobile on the ID, and a screenshot. Do not send the OTP.",
    ],
    background: [
      "He came to this desk from consumer support for Indian apps: password resets, device changes, and people who had paid the wrong UPI. The Fairplay queue looks similar, with cricket IDs and exchange slips on top.",
      "He is staff on this site’s help desk, not a court officer and not a “compliance expert.” If a post mentions law, it points at the legal pages and tells you to check where you live.",
    ],
    experience: [
      "Most of his day is tickets: login not working, deposit pending, withdrawal waiting on KYC, bonus that did not credit. When the same problem hits ten people, he writes or updates the Support post so the next ten can self-serve.",
      "He keeps a short list of what the desk will never ask for: OTP, full card numbers, a remote-access app. If someone asks for those, it is not this desk.",
    ],
    other: [
      "Credit on Support posts: Written by Kabir Mehta, Fairplay support desk.",
      "Reach the desk on the WhatsApp and email published on Contact. Kabir does not take tickets on a private chat.",
      "Payouts after settlement usually take about 180 minutes if KYC is complete and no market is still open. He will not promise a faster clock.",
    ],
  },
  {
    slug: "arjun-rao",
    name: "Arjun Rao",
    firstName: "Arjun",
    role: "Cricket fixtures writer",
    category: "Events",
    pronouns: "he/him",
    focus: ["IPL", "T20 World Cup", "WPL", "Match windows"],
    languages: ["English", "Hindi"],
    shortBio:
      "Arjun writes Events posts: IPL, T20 World Cup, WPL, and other cricket windows this site already lists on the schedule.",
    about: [
      "Arjun covers tournament and series pages that sit next to the 2026 schedule. If the article is about a cup, a league window, or a named India series, it is usually his.",
      "He uses the same fixture list as /schedule. Cricket dates on this site are series windows unless a page says otherwise. He does not invent an XI.",
    ],
    background: [
      "He used to write match previews for regional cricket sites: toss notes, venue, and who was in the squad last time. That work taught him to separate a published fixture from a rumour.",
      "He is a writer on this desk, not an ICC official and not a scorer in the stadium. When a window slips, he follows the schedule page, not a WhatsApp forward.",
    ],
    experience: [
      "He maps Events posts to the hub pages: IPL betting, T20 World Cup, WPL, Champions Trophy. The post should send you to the match URL when one exists.",
      "He leaves “model pick” percentages on match pages alone. Those are labelled as model output. His job is the series context and where the book sits.",
    ],
    other: [
      "Credit on Events posts: Written by Arjun Rao, cricket fixtures writer.",
      "For live prices, open the exchange after you have an ID. Arjun does not quote a private line.",
      "He writes in English. Hindi terms show up where Indian readers already use them (toss, powerplay, DLS).",
    ],
  },
  {
    slug: "meera-joshi",
    name: "Meera Joshi",
    firstName: "Meera",
    role: "Markets writer",
    category: "Analysis",
    pronouns: "she/her",
    focus: ["Exchange odds", "In-play", "Settlement", "Market names"],
    languages: ["English", "Hindi"],
    shortBio:
      "Meera writes Analysis posts: how Fairplay markets are named, how odds move in play, and how a result actually settles on the book.",
    about: [
      "Meera explains the book, not a tipster sheet. Analysis posts cover match odds, sessions, and why a price moved after a wicket, not “lock this XI.”",
      "She will say when a number on this site is interpolated or a model pick. She will not dress it as a confirmed ICC feed.",
    ],
    background: [
      "She previously wrote odds explainers for an Indian exchange blog: back and lay, unmatched bets, and what “settled” means after the official result. The Fairplay copy uses the same vocabulary because that is what the slip shows.",
      "She is not a former bookmaker with a secret edge. She is the person who sits with the market names on the Fairplay ID and writes them down in plain language.",
    ],
    experience: [
      "A typical Analysis piece starts from a market name players already search (fancy, session, 1X2 on football) and then shows where that market lives on Fairplay. If the book does not list it, she says so.",
      "She also writes the boring half: void rules, abandoned matches, and why an open market holds a withdrawal. Those tickets land on Kabir’s desk; she writes the page so he can point at it.",
    ],
    other: [
      "Credit on Analysis posts: Written by Meera Joshi, markets writer.",
      "Nothing on her pages is a promise you will win. Stake size is your problem. 18+ only.",
      "She does not sell private Telegram tips. If a stranger does, it is not this site.",
    ],
  },
  {
    slug: "vikram-seth",
    name: "Vikram Seth",
    firstName: "Vikram",
    role: "Session notes",
    category: "Strategy",
    pronouns: "he/him",
    focus: ["Staking", "Live cricket", "Casino tables", "Bankroll"],
    languages: ["English"],
    shortBio:
      "Vikram writes Strategy posts: staking, live cricket habits, and how casino tables on the Fairplay ID differ from sports slips.",
    about: [
      "Vikram’s posts are notes on how people already use the book: session size, stopping after a bad over, and why chasing a loss on live casino is a different product from a cricket lay.",
      "He does not run a tipping group. Strategy here means habits and market types, not a guaranteed plan.",
    ],
    background: [
      "He used to moderate a small cricket-exchange forum. Most threads were people who had overstaked one IPL night. That is why his pages talk about unit size before they talk about a favourite.",
      "He is a writer on this desk. He is not a “pro punter” brand and he does not publish a win rate.",
    ],
    experience: [
      "Strategy posts cover cricket sessions, football in-play, and live casino on the same Fairplay wallet. He keeps those products separate on the page because they settle on different clocks.",
      "When a Strategy article mentions IPL or T20, it should still send you to the Events or match page for the fixture. He will not duplicate Arjun’s series window.",
    ],
    other: [
      "Credit on Strategy posts: Written by Vikram Seth, session notes.",
      "If you cannot afford to lose the stake, do not place it. Responsible gaming pages on this site still apply.",
      "He writes in English. Hindi market slang appears where the book already uses it.",
    ],
  },
  {
    slug: "ananya-kulkarni",
    name: "Ananya Kulkarni",
    firstName: "Ananya",
    role: "App and login",
    category: "Platform",
    pronouns: "she/her",
    focus: ["Fairplay app", "Partner books", "Official domain", "APK"],
    languages: ["English", "Marathi", "Hindi"],
    shortBio:
      "Ananya covers Platform posts: the Fairplay app, the official domain, and how partner books relate to a Fairplay ID.",
    about: [
      "Ananya writes when the subject is the product shell: website vs app, APK install, and pages that compare Fairplay with other cricket IDs this site already reviews.",
      "The blog filter includes Platform even when few posts sit in that bucket. If a Guide post is really about the app binary, she still owns that beat on the desk.",
    ],
    background: [
      "She shipped release notes for Android apps used in India: permission prompts, “unknown sources,” and what to do when Play Protect screams at an APK. Fairplay’s app page is the same kind of writing.",
      "She does not claim Fairplay is listed on the Play Store if the current download page says otherwise. She follows the /app page.",
    ],
    experience: [
      "She keeps a checklist the desk already uses: fairplayindia.com, the WhatsApp number on this site, never a lookalike domain, never a personal UPI from a stranger who says they are “Fairplay staff.”",
      "Comparison pages (Fairplay vs another book) stay on the platforms cluster. She will not invent user counts or licence numbers for either side.",
    ],
    other: [
      "Credit on Platform posts: Written by Ananya Kulkarni, app and login.",
      "If Platform is empty in the blog filter, her profile still lists the beat so you know who owns app and clone-domain questions.",
      "Marathi and Hindi when a ticket needs it. English on the published page.",
    ],
  },
  {
    slug: "riya-sen",
    name: "Riya Sen",
    firstName: "Riya",
    role: "Desk updates",
    category: "News",
    pronouns: "she/her",
    focus: ["Desk notices", "Schedule changes", "Product notes"],
    languages: ["English", "Bengali", "Hindi"],
    shortBio:
      "Riya writes News posts: desk notices, schedule changes this site can confirm, and short product notes that are not a full how-to.",
    about: [
      "Riya owns the News category on the blog. That tab is for dated notices, not for a second copy of a Guide.",
      "If the site has few News posts, she still edits the date stamps and lastmod notes when a guide moved.",
    ],
    background: [
      "She worked as a copy editor on Indian sports sites: headlines, date lines, and killing a rumour that had no source. On this desk that means she will not publish a “breaking XI” without a fixture on the schedule.",
      "She is not a wire reporter. She is the person who keeps the Fairplay India blog from mixing a how-to with a rumour.",
    ],
    experience: [
      "When IPL or World Cup windows move, she checks Arjun’s Events copy and the schedule lastmod. When login UI changes, she pings Neha. When tickets spike, she pings Kabir.",
      "News posts will say what changed on this site. They will not invent a press conference Fairplay did not hold.",
    ],
    other: [
      "Credit on News posts: Written by Riya Sen, desk updates.",
      "Bengali and Hindi on the desk. English on the published page unless a notice is issued in both.",
      "She does not run a rumour channel. Official notices stay on this domain.",
    ],
  },
];

const BY_SLUG: Record<string, SiteAuthor> = Object.fromEntries(
  SITE_AUTHORS.map((author) => [author.slug, author]),
);

const BY_CATEGORY: Record<string, SiteAuthor> = Object.fromEntries(
  SITE_AUTHORS.map((author) => [author.category.toLowerCase(), author]),
);

export const DEFAULT_AUTHOR = SITE_AUTHORS[0];

export const AUTHOR_INDEX_PATH = "/authors";

export const AUTHOR_PATHS = [
  AUTHOR_INDEX_PATH,
  ...SITE_AUTHORS.map((author) => `/authors/${author.slug}`),
];

export function authorPath(slug: string): string {
  return `/authors/${slug}`;
}

export function authorAbsoluteUrl(slug: string): string {
  return `${SITE_ORIGIN}${authorPath(slug)}`;
}

export function getAuthorBySlug(slug: string | undefined): SiteAuthor | undefined {
  if (!slug) return undefined;
  return BY_SLUG[slug];
}

export function authorForCategory(category?: string): SiteAuthor {
  const key = (category || "").trim().toLowerCase();
  return BY_CATEGORY[key] ?? DEFAULT_AUTHOR;
}

export function authorForPostSlug(slug: string): SiteAuthor {
  const post = blogArticles.find((article) => article.slug === slug);
  return authorForCategory(post?.category);
}

export type AuthorPost = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  date: string;
};

export function postsWrittenBy(authorSlug: string): AuthorPost[] {
  return blogArticles
    .filter((article) => authorForCategory(article.category).slug === authorSlug)
    .map((article) => ({
      slug: article.slug,
      title: article.title,
      category: article.category,
      desc: article.desc,
      date: article.date,
    }));
}

export function authorInitials(author: SiteAuthor): string {
  return author.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function personNode(author: SiteAuthor) {
  const url = authorAbsoluteUrl(author.slug);
  return {
    "@type": "Person" as const,
    "@id": `${url}#person`,
    name: author.name,
    givenName: author.firstName,
    jobTitle: author.role,
    description: author.shortBio,
    url,
    worksFor: { "@id": `${SITE_ORIGIN}/#organization` },
    knowsAbout: author.focus,
    knowsLanguage: author.languages,
  };
}

export function articleAuthorNode(author: SiteAuthor) {
  const url = authorAbsoluteUrl(author.slug);
  return {
    "@type": "Person" as const,
    "@id": `${url}#person`,
    name: author.name,
    jobTitle: author.role,
    url,
  };
}

export function authorsCollectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_ORIGIN}/authors#webpage`,
        url: `${SITE_ORIGIN}/authors`,
        name: "Fairplay India writers",
        description:
          "Named writers on the Fairplay India desk. One person per blog category, with a public profile linked from every post they write.",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        about: { "@id": `${SITE_ORIGIN}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: SITE_AUTHORS.length,
          itemListElement: SITE_AUTHORS.map((author, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: authorAbsoluteUrl(author.slug),
            name: author.name,
            item: personNode(author),
          })),
        },
      },
    ],
  };
}

export function authorProfileJsonLd(author: SiteAuthor) {
  const url = authorAbsoluteUrl(author.slug);
  const person = personNode(author);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      person,
      {
        "@type": "ProfilePage",
        "@id": `${url}#webpage`,
        url,
        name: `${author.name} | ${author.role}`,
        description: author.shortBio,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        about: { "@id": person["@id"] },
        mainEntity: { "@id": person["@id"] },
      },
    ],
  };
}
