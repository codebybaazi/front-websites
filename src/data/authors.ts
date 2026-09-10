import type { BlogPost } from "./blog-posts";

export type AuthorCategory = "cricket" | "predictions" | "casino" | "multisport";

export type Author = {
  slug: string;
  name: string;
  role: string;
  category: AuthorCategory;
  initials: string;
  focus: string;
  shortBio: string;
  bio: string[];
  expertise: string[];
  details: { label: string; value: string }[];
  experience: { title: string; body: string }[];
};

export const AUTHORS: Author[] = [
  {
    slug: "arjun-rathore",
    name: "Arjun Rathore",
    role: "Cricket Desk Lead",
    category: "cricket",
    initials: "AR",
    focus: "IPL, Test cricket and the numbers behind big innings.",
    shortBio:
      "Arjun has covered Indian domestic and international cricket for Sprinters since the desk started, turning post-match chaos into calls readers can actually use.",
    bio: [
      "Arjun grew up on Ranji Trophy scorecards before IPL made cricket a year-round sport, and that habit never really left him. He leads cricket coverage on the Sprinters blog: match previews, player form breakdowns, and the odd contrarian take when the consensus feels lazy.",
      "Before joining the desk, he spent time writing for regional cricket fan sites and helping friends make sense of session betting during IPL season, which is really how he ended up here.",
      "His pieces stick to what actually happened on the pitch (recent form, conditions, team news) rather than hype. If a prediction post reads more like a script than an opinion, that's not one of his.",
    ],
    expertise: ["IPL", "Test cricket", "Player form analysis", "Domestic cricket"],
    details: [
      { label: "Desk", value: "Cricket" },
      { label: "Role", value: "Cricket Desk Lead" },
      { label: "Writes in", value: "English and Hindi" },
      { label: "Covers", value: "IPL, Tests, domestic cricket" },
    ],
    experience: [
      { title: "Cricket Desk Lead, Sprinters", body: "Leads match previews, player form breakdowns and post-match analysis for the Sprinters blog." },
      { title: "Regional cricket fan sites", body: "Wrote about Indian domestic cricket before joining the Sprinters desk." },
      { title: "IPL session markets", body: "Helped readers make sense of session betting during IPL season, which is how he ended up on this desk." },
    ],
  },
  {
    slug: "meera-krishnan",
    name: "Meera Krishnan",
    role: "Predictions & Strategy Analyst",
    category: "predictions",
    initials: "MK",
    focus: "Match previews, session and fancy markets, bankroll discipline.",
    shortBio:
      "Meera writes the daily prediction previews on Sprinters: pitch reports, weather, head-to-head history, and whatever team news drops the morning of a match.",
    bio: [
      "Meera has no formal tipster credentials. What she has is enough seasons watching odds move to know when a market is overreacting to one bad over.",
      "She started tracking domestic odds as a hobby years before Sprinters existed, mostly out of curiosity about why a price moved the way it did after a toss or an early wicket. Writing about it for other people came later.",
      "Her standing advice, repeated often enough that regular readers can probably recite it: treat every prediction as one data point, never the whole decision, and never bet more than you're prepared to actually lose.",
    ],
    expertise: ["Match predictions", "Session and fancy markets", "Odds movement", "Bankroll management"],
    details: [
      { label: "Desk", value: "Predictions & strategy" },
      { label: "Role", value: "Predictions & Strategy Analyst" },
      { label: "Writes in", value: "English and Hindi" },
      { label: "Covers", value: "Match previews, session and fancy markets" },
    ],
    experience: [
      { title: "Predictions writer, Sprinters", body: "Writes daily previews: pitch reports, weather, head-to-head history and morning team news." },
      { title: "Odds tracking", body: "Spent years watching domestic odds move after a toss or an early wicket, then started writing that up for other people." },
      { title: "Bankroll advice", body: "Treats every prediction as one data point, never the whole decision, and never more than a reader can afford to lose." },
    ],
  },
  {
    slug: "vikram-sethi",
    name: "Vikram Sethi",
    role: "Casino & Card Games Specialist",
    category: "casino",
    initials: "VS",
    focus: "Live dealer tables, slots and Teen Patti / Andar Bahar strategy.",
    shortBio:
      "Vikram covers the casino side of Sprinters: live dealer tables, slot mechanics, and the Indian card games (Teen Patti, Andar Bahar, 32 Cards) that get the most questions from readers.",
    bio: [
      "He explains how a game actually works before getting into strategy, on the theory that most bad casino decisions come from not understanding the rules in the first place, not bad luck.",
      "Before any of this was a job, he ran fairly serious home Teen Patti nights for years, the kind where people actually kept score. Most of his card-game instincts come from that, not from studying the games from the outside.",
      "He's upfront that no system beats a negative-edge game over the long run. His guides are about playing smarter and managing a bankroll, not about beating the house.",
    ],
    expertise: ["Live casino", "Teen Patti & Andar Bahar", "Slots", "Bankroll strategy"],
    details: [
      { label: "Desk", value: "Casino & card games" },
      { label: "Role", value: "Casino & Card Games Specialist" },
      { label: "Writes in", value: "English and Hindi" },
      { label: "Covers", value: "Live dealer, slots, Teen Patti, Andar Bahar" },
    ],
    experience: [
      { title: "Casino specialist, Sprinters", body: "Explains live dealer tables, slot mechanics and Indian card games that readers ask about most." },
      { title: "Home Teen Patti nights", body: "Ran regular home games where people actually kept score. Most of his card instincts come from that, not from studying the games from outside." },
      { title: "Bankroll-first guides", body: "No system beats a negative-edge game over the long run. His pieces are about playing smarter, not beating the house." },
    ],
  },
  {
    slug: "sana-fernandes",
    name: "Sana Fernandes",
    role: "Football, Tennis & Multi-Sport Writer",
    category: "multisport",
    initials: "SF",
    focus: "Premier League, Grand Slam tennis, horse racing and kabaddi.",
    shortBio:
      "Sana handles everything outside cricket and casino on the Sprinters blog: Premier League and Champions League football, Grand Slam tennis, horse racing cards, and Pro Kabaddi.",
    bio: [
      "She came to sports writing through football fan forums, then picked up tennis and horse racing along the way because readers kept asking about them.",
      "Her articles lean on official fixtures, recent form, and market movement rather than gut feeling. If a market moves sharply, she'll explain why, not just report that it happened.",
      "She still checks football forums out of habit, partly for gossip and partly because that's usually where a team-news rumour turns up first. If a match preview reads a little too tidy, she probably rewrote it after checking one more source.",
    ],
    expertise: ["Football", "Tennis", "Horse racing", "Kabaddi"],
    details: [
      { label: "Desk", value: "Football, tennis & multi-sport" },
      { label: "Role", value: "Football, Tennis & Multi-Sport Writer" },
      { label: "Writes in", value: "English" },
      { label: "Covers", value: "Premier League, Grand Slams, racing, kabaddi" },
    ],
    experience: [
      { title: "Multi-sport writer, Sprinters", body: "Handles everything outside cricket and casino: football, Grand Slam tennis, horse racing cards and Pro Kabaddi." },
      { title: "Football fan forums", body: "Came to sports writing through football forums, then picked up tennis and racing because readers kept asking." },
      { title: "Form and fixtures", body: "Leans on official fixtures, recent form and market movement. If a price jumps, she explains why." },
    ],
  },
];

const AUTHORS_BY_SLUG: Record<string, Author> = Object.fromEntries(AUTHORS.map((a) => [a.slug, a]));

const CASINO_RE = /casino|slot|teen patti|andar bahar|roulette|blackjack|baccarat|aviator|card game|poker|rummy/i;
const MULTISPORT_RE = /football|premier league|\bepl\b|uefa|fifa|ligue|bundesliga|la liga|champions league|tennis|wimbledon|\batp\b|\bwta\b|grand slam|us open|french open|australian open|roland garros|horse rac|kabaddi/i;
const PREDICTIONS_RE = /predict|betting tip|\bodds\b|fancy bet|session bet|how to bet/i;

/**
 * Assigns each post to one of the four blog-desk authors by topic, since the
 * legacy Wix-migrated post data has no category field of its own. Order
 * matters: casino and multi-sport keywords are checked first because most
 * cricket posts also mention "predictions" in the title.
 */
export function getAuthorForPost(post: BlogPost): Author {
  const title = post.title || "";
  if (CASINO_RE.test(title)) return AUTHORS_BY_SLUG["vikram-sethi"];
  if (MULTISPORT_RE.test(title)) return AUTHORS_BY_SLUG["sana-fernandes"];
  if (PREDICTIONS_RE.test(title)) return AUTHORS_BY_SLUG["meera-krishnan"];
  return AUTHORS_BY_SLUG["arjun-rathore"];
}

export function getAuthorBySlug(slug: string): Author | null {
  return AUTHORS_BY_SLUG[slug] ?? null;
}

export function getPostsByAuthor(slug: string, posts: BlogPost[]): BlogPost[] {
  return posts.filter((p) => getAuthorForPost(p).slug === slug);
}
