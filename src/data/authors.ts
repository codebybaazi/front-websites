// Author bios for the Lotus365 editorial desk. Names/roles here must stay in
// sync with the `author`/`authorRole` pairs used across src/data/posts.ts —
// there are exactly 6, each already assigned a stable role there.

import { slugify } from "@/lib/match-slug";

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
};

export const AUTHORS: Author[] = [
  {
    slug: "aarav-mehta",
    name: "Aarav Mehta",
    role: "Senior Editor",
    bio: "Aarav edits the Lotus365 platform desk — login and account security, verification, and the mechanics of how the site itself works. He signs off on anything explaining a process end to end before it publishes.",
    focus: ["Platform", "Account security", "How-it-works explainers"],
  },
  {
    slug: "ishaan-kapoor",
    name: "Ishaan Kapoor",
    role: "Cricket Analyst",
    bio: "Ishaan covers cricket markets on Lotus365 — tournament previews, odds explainers, and the match-by-match reads that go out during IPL and ICC windows.",
    focus: ["Cricket", "Tournament previews", "Odds explainers"],
  },
  {
    slug: "riya-sharma",
    name: "Riya Sharma",
    role: "Product Writer",
    bio: "Riya writes about the Lotus365 product itself — sports ID setup, account features, and how the platform's tools fit together for a new or returning player.",
    focus: ["Product features", "Account setup", "Platform guides"],
  },
  {
    slug: "kabir-rao",
    name: "Kabir Rao",
    role: "Casino Desk",
    bio: "Kabir runs the Lotus365 casino desk — table games, live-dealer formats, and the rules explainers that walk new players through a game before they sit down to play it.",
    focus: ["Casino", "Live dealer games", "Game rules"],
  },
  {
    slug: "neha-iyer",
    name: "Neha Iyer",
    role: "Payments Lead",
    bio: "Neha covers everything money-related on Lotus365 — deposits, withdrawals, payment methods, and the security practices that keep a transaction safe end to end.",
    focus: ["Payments", "Deposits & withdrawals", "Transaction security"],
  },
  {
    slug: "rohan-verma",
    name: "Rohan Verma",
    role: "IPL Correspondent",
    bio: "Rohan follows the IPL season match by match for Lotus365 — team form, fixture previews, and the in-play reads that matter once a game is live.",
    focus: ["IPL", "Match previews", "Live/in-play betting"],
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
