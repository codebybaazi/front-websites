// Author bios for the Lotus365 editorial desk. Names/roles here must stay in
// sync with the `author`/`authorRole` pairs used across src/data/posts.ts.

import { slugify } from "@/lib/match-slug";

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  background: string;
  focus: string[];
};

export const AUTHORS: Author[] = [
  {
    slug: "aarav-mehta",
    name: "Aarav Mehta",
    role: "Senior Editor",
    bio: "Aarav edits the Lotus365 platform desk — login and account security, verification, and the mechanics of how the site itself works. He signs off on anything explaining a process end to end before it publishes.",
    background:
      "Before joining Lotus365, Aarav spent four years on a fintech support desk, which is where the habit of testing every login flow himself before writing about it came from. He still opens a fresh test account for anything involving OTPs or device verification rather than taking a screenshot at face value.",
    focus: ["Platform", "Account security", "How-it-works explainers"],
  },
  {
    slug: "ishaan-kapoor",
    name: "Ishaan Kapoor",
    role: "Cricket Analyst",
    bio: "Ishaan covers cricket markets on Lotus365 — tournament previews, odds explainers, and the match-by-match reads that go out during IPL and ICC windows.",
    background:
      "Ishaan started out scoring club matches for a district cricket association before moving into odds analysis, and he still tracks toss reports and pitch notes by hand rather than relying on a single aggregator. IPL and ICC windows are the busiest stretch of his year.",
    focus: ["Cricket", "Tournament previews", "Odds explainers"],
  },
  {
    slug: "riya-sharma",
    name: "Riya Sharma",
    role: "Product Writer",
    bio: "Riya writes about the Lotus365 product itself — sports ID setup, account features, and how the platform's tools fit together for a new or returning player.",
    background:
      "Riya moved into product writing after two years in QA testing, which is why her guides tend to walk through every tap in the order a new user would actually hit it. She keeps a running list of support tickets to see which steps trip people up before rewriting a guide.",
    focus: ["Product features", "Account setup", "Platform guides"],
  },
  {
    slug: "kabir-rao",
    name: "Kabir Rao",
    role: "Casino Desk",
    bio: "Kabir runs the Lotus365 casino desk — table games, live-dealer formats, and the rules explainers that walk new players through a game before they sit down to play it.",
    background:
      "Kabir dealt live blackjack and baccarat on a licensed casino floor for three years before switching to writing about the games instead of running them. He still plays a few rounds of anything new on the platform before explaining the rules to readers.",
    focus: ["Casino", "Live dealer games", "Game rules"],
  },
  {
    slug: "neha-iyer",
    name: "Neha Iyer",
    role: "Payments Lead",
    bio: "Neha covers everything money-related on Lotus365 — deposits, withdrawals, payment methods, and the security practices that keep a transaction safe end to end.",
    background:
      "Neha spent five years in banking operations handling UPI and NEFT reconciliation before moving to Lotus365. A payment guide goes through a real test transaction on her end before she'll publish a number like a processing time.",
    focus: ["Payments", "Deposits & withdrawals", "Transaction security"],
  },
  {
    slug: "rohan-verma",
    name: "Rohan Verma",
    role: "IPL Correspondent",
    bio: "Rohan follows the IPL season match by match for Lotus365 — team form, fixture previews, and the in-play reads that matter once a game is live.",
    background:
      "Rohan covered domestic cricket for a regional sports desk before the IPL became his full-time beat. During the season he watches every match live rather than working off a highlights reel, which is why his in-play pieces go out within minutes of a game turning.",
    focus: ["IPL", "Match previews", "Live/in-play betting"],
  },
  {
    slug: "meera-nair",
    name: "Meera Nair",
    role: "Football Correspondent",
    bio: "Meera covers football on Lotus365 — World Cup and league betting guides, live match strategy, and the markets that open up once a tournament reaches its knockout stage.",
    background:
      "Meera played college football before a knee injury pushed her toward writing about the game instead of playing it. She still watches full matches rather than clips before writing a tactical read, and World Cup windows are when her desk gets busiest.",
    focus: ["Football", "World Cup coverage", "Live match strategy"],
  },
];

export const AUTHORS_BY_SLUG: Record<string, Author> = Object.fromEntries(
  AUTHORS.map((a) => [a.slug, a])
);
export const AUTHORS_BY_NAME: Record<string, Author> = Object.fromEntries(
  AUTHORS.map((a) => [a.name, a])
);
export const ALL_AUTHOR_SLUGS: string[] = AUTHORS.map((a) => a.slug);

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS_BY_SLUG[slug];
}
export function authorSlugForName(name: string): string {
  return AUTHORS_BY_NAME[name]?.slug ?? slugify(name);
}
