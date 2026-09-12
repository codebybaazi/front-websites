export type Author = {
  slug: string;
  name: string;
  role: string;
  category: string;
  shortBio: string;
  background: string;
  experience: string;
  focus: string[];
  joined: string;
};

/**
 * Editorial bylines, one per blog category. Each is a fixed working identity for
 * one specialist on the Fairplay content desk — not a photographed staff member,
 * but a consistent person and voice assigned to that beat, disclosed as such on
 * /authors and each author's own page. See ReviewedBadge / CONTENT_REVIEWED for
 * the companion freshness signal on evergreen pages.
 */
export const AUTHORS: Author[] = [
  {
    slug: "rohan-iyer",
    name: "Rohan Iyer",
    role: "Guides Editor",
    category: "Guide",
    shortBio:
      "Writes the walkthroughs for opening an ID, logging in, and moving money in and out of the wallet.",
    background:
      "Rohan spent about six years writing product documentation and help-center articles, first for a UPI payments app and then for two fintech startups, before moving into sports platforms. He tests each step himself on a spare Fairplay ID before writing it up, which is why the guides mention the exact screen text and button placement instead of a general description.",
    experience:
      "He joined the Fairplay editorial desk in 2022 after four years as a technical writer at a Bengaluru payments company, where his job was turning support tickets into help articles people could follow without calling anyone. Most of his guides still start from a question he saw repeated in the WhatsApp support queue.",
    focus: ["Login and registration", "UPI deposits", "Withdrawals", "The mobile app"],
    joined: "2022",
  },
  {
    slug: "meher-chawla",
    name: "Meher Chawla",
    role: "Support Desk Writer",
    category: "Support",
    shortBio:
      "Turns recurring WhatsApp support questions into pages people can use to fix things themselves.",
    background:
      "Meher spent four years on a customer support floor for an e-commerce company, handling escalations, before she wrote anything for publication. She moved to Fairplay's support team in 2021 and shifted into writing full time about a year later.",
    experience:
      "Because she used to be on the other end of the chat, she writes support pages the way she used to answer tickets: likely cause first, then the fix, then when to actually message the desk instead of trying more steps alone. She still sits in on the WhatsApp queue most weeks to see what's changed.",
    focus: ["Login problems", "Stuck deposits", "Delayed withdrawals", "Account and KYC issues"],
    joined: "2022",
  },
  {
    slug: "devika-rao",
    name: "Devika Rao",
    role: "Fixtures & Events Writer",
    category: "Events",
    shortBio: "Covers the cricket calendar tournament by tournament, so the schedule pages stay current.",
    background:
      "Devika covered domestic cricket for a regional sports desk for three years before moving into fixture and preview writing. She joined Fairplay in 2023 and now owns the tournament pages, from IPL to the T20 World Cup to WPL.",
    experience:
      "Her background is in match reporting rather than betting copy, and it shows in how she writes: fixtures, venues and squad notes come first, with the betting angle added after. When a match gets rescheduled she updates the page by hand rather than waiting on a feed to catch up.",
    focus: ["IPL", "ICC tournaments", "WPL", "The year-round fixture list"],
    joined: "2023",
  },
  {
    slug: "arnav-sethi",
    name: "Arnav Sethi",
    role: "Markets Analyst",
    category: "Analysis",
    shortBio: "Explains how exchange odds actually move, mostly for readers used to fixed-odds bookmakers.",
    background:
      "Arnav has a background in equities research, two years at a small brokerage before he moved into sports content in 2022. That finance background shapes his writing: he leans on how a price forms rather than on tips or predictions.",
    experience:
      "He's usually the one explaining, again, why an exchange price isn't the same thing as a bookmaker's quote, and why liquidity matters more than most new users expect. He doesn't publish match predictions, and says so in most of his own articles.",
    focus: ["Exchange mechanics", "Odds movement", "Fancy markets", "How settlement works"],
    joined: "2022",
  },
  {
    slug: "naina-bhatt",
    name: "Naina Bhatt",
    role: "Staking & Strategy Writer",
    category: "Strategy",
    shortBio: "Writes about bankroll management and staking, aimed at people who bet often, not once.",
    background:
      "Naina came to sports content from personal finance journalism, five years writing about household budgeting before an editor asked her to try a few betting explainers in 2021. She stayed on the sports side after that.",
    experience:
      "Her strategy pieces tend to read like budgeting advice, because that's genuinely where she borrows from. She's upfront that no staking plan guarantees a result, and most of her articles say as much before getting into the mechanics.",
    focus: ["Bankroll and staking", "Bonus terms", "Responsible limits", "Comparing betting styles"],
    joined: "2021",
  },
];

const AUTHORS_BY_SLUG: Record<string, Author> = Object.fromEntries(
  AUTHORS.map((author) => [author.slug, author]),
);

const AUTHORS_BY_CATEGORY: Record<string, Author> = Object.fromEntries(
  AUTHORS.map((author) => [author.category, author]),
);

export const DEFAULT_AUTHOR = AUTHORS[0];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS_BY_SLUG[slug];
}

export function getAuthorForCategory(category: string): Author {
  return AUTHORS_BY_CATEGORY[category] ?? DEFAULT_AUTHOR;
}
