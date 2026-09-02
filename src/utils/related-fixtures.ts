import { getMatchSlug, matchMatchesSlug } from "@/utils/slugify";
import { detectCricketFormat, parseMatchTeams } from "@/utils/match-projections";
import { CRICKET_SCHEDULE_DATA } from "@/lib/cricket-schedule";

export interface RelatedFixture {
  event: string;
  date: string;
  venue: string;
  time: string;
  seriesName: string;
  slug: string;
}

interface ScheduleSeries {
  series: string;
  matches: Array<{
    event: string;
    date: string;
    venue: string;
    time: string;
  }>;
}

function teamsOverlap(
  a: { teamA: string; teamB: string },
  b: { teamA: string; teamB: string },
): boolean {
  const left = [a.teamA, a.teamB].map((t) => t.toLowerCase());
  const right = [b.teamA, b.teamB].map((t) => t.toLowerCase());
  return left.some((team) =>
    right.some((other) => team.includes(other) || other.includes(team)),
  );
}

export function getRelatedFixtures(input: {
  slug: string;
  seriesName: string;
  event: string;
  venue: string;
  schedule: ReadonlyArray<ScheduleSeries>;
  limit?: number;
}): RelatedFixture[] {
  const limit = input.limit ?? 4;
  const currentTeams = parseMatchTeams(input.event);
  const currentFormat = detectCricketFormat(input.event, input.seriesName);
  const venueKey = input.venue.split(",")[0]?.trim().toLowerCase() ?? "";

  const rows: Array<RelatedFixture & { seriesIndex: number; matchIndex: number }> = [];
  input.schedule.forEach((series, seriesIndex) => {
    series.matches.forEach((match, matchIndex) => {
      const matchSlug = getMatchSlug(series.series, match);
      if (matchMatchesSlug(series.series, match, input.slug)) return;
      rows.push({
        event: match.event,
        date: match.date,
        venue: match.venue,
        time: match.time,
        seriesName: series.series,
        slug: matchSlug,
        seriesIndex,
        matchIndex,
      });
    });
  });

  const currentSeries = input.schedule.find((series) => series.series === input.seriesName);
  const currentIndex =
    currentSeries?.matches.findIndex((match) => {
      return matchMatchesSlug(input.seriesName, match, input.slug);
    }) ?? -1;
  const seriesLen = currentSeries?.matches.length ?? 0;

  const scored = rows.map((row) => {
    let score = 0;
    if (row.seriesName === input.seriesName && currentIndex >= 0 && seriesLen > 0) {
      const forward = (row.matchIndex - currentIndex + seriesLen) % seriesLen;
      if (forward > 0 && forward <= limit) {
        score += 400 - forward * 25;
      } else {
        score += 80;
      }
    }

    const otherTeams = parseMatchTeams(row.event);
    if (teamsOverlap(currentTeams, otherTeams)) score += 60;

    const otherFormat = detectCricketFormat(row.event, row.seriesName);
    if (otherFormat === currentFormat) score += 30;

    const otherVenue = row.venue.split(",")[0]?.trim().toLowerCase() ?? "";
    if (venueKey && otherVenue && (otherVenue.includes(venueKey) || venueKey.includes(otherVenue))) {
      score += 20;
    }

    return { row, score };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.row.slug.localeCompare(b.row.slug);
  });

  return scored.slice(0, limit).map(({ row }) => ({
    event: row.event,
    date: row.date,
    venue: row.venue,
    time: row.time,
    seriesName: row.seriesName,
    slug: row.slug,
  }));
}

interface BlogCard {
  slug: string;
  title: string;
  category: string;
  desc: string;
  date: string;
  icon: string;
  img: string;
}

const TEAM_CODES: Record<string, string> = {
  india: "ind",
  england: "eng",
  australia: "aus",
  pakistan: "pak",
  "south africa": "sa",
  "new zealand": "nz",
  "west indies": "wi",
  "sri lanka": "sl",
  bangladesh: "ban",
  afghanistan: "afg",
  ireland: "ire",
  zimbabwe: "zim",
};

const TEAM_MARKERS: Record<string, string[]> = {
  india: ["india", "indian", "ind-vs", "vs-ind", "ind vs"],
  england: ["england", "english", "eng-vs", "vs-eng", "eng vs"],
  australia: ["australia", "aus-vs", "vs-aus"],
  pakistan: ["pakistan", "pak-vs", "vs-pak"],
  "south africa": ["south africa", "sa-vs", "vs-sa", "ind-vs-sa"],
  "new zealand": ["new zealand", "nz-vs", "vs-nz", "ind-vs-nz", "-nz-", "nz t20", "nz odi"],
  "west indies": ["west indies", "wi-vs", "vs-wi", "wi vs"],
  "sri lanka": ["sri lanka"],
  bangladesh: ["bangladesh"],
  afghanistan: ["afghanistan"],
  ireland: ["ireland"],
  zimbabwe: ["zimbabwe"],
  usa: ["usa", "vs-usa", "india-vs-usa"],
  netherlands: ["netherlands"],
};

function involvedTeams(teamA: string, teamB: string): Set<string> {
  return new Set(
    [canonicalTeam(teamA), canonicalTeam(teamB)].filter((name): name is string => Boolean(name)),
  );
}

function articleHay(article: BlogCard): string {
  return `${article.slug} ${article.title} ${article.desc} ${article.category}`.toLowerCase();
}

function isForeignMatchArticle(article: BlogCard, teamA: string, teamB: string): boolean {
  const hay = articleHay(article);
  if (pairNeedles(teamA, teamB).some((needle) => hay.includes(needle))) return false;
  const hasVs = hay.includes("-vs-") || hay.includes(" vs ") || /(?:^|[\s-])vs(?:[\s-]|$)/.test(hay);
  const isFranchisePreview =
    hasVs &&
    /rcb|csk|kkr|pbks|srh|lsg|wpl|warriors|dream11|mi-vs|rr-vs|gt-vs|dc-vs|orange cap|purple cap/.test(hay);
  if (isFranchisePreview) return true;
  if (!hasVs) return false;
  const involved = involvedTeams(teamA, teamB);
  return Object.entries(TEAM_MARKERS).some(([name, markers]) => {
    if (involved.has(name)) return false;
    return markers.some((marker) => hay.includes(marker));
  });
}

function canonicalTeam(teamName: string): string | undefined {
  const key = teamName.toLowerCase().trim();
  return Object.keys(TEAM_CODES).find((name) => key.includes(name) || name.includes(key));
}

function teamNeedles(teamName: string): string[] {
  const key = teamName.toLowerCase().trim();
  const aliases: Record<string, string[]> = {
    india: ["india", "indian", "ind-vs", "vs-ind", "ind vs", "vs ind"],
    england: ["england", "english", "eng-vs", "vs-eng", "eng vs", "vs eng"],
    australia: ["australia", "aus-vs", "vs-aus"],
    pakistan: ["pakistan", "pak-vs", "vs-pak"],
    "south africa": ["south africa", "sa-vs", "vs-sa", "ind-vs-sa", "sa vs"],
    "new zealand": ["new zealand", "nz-vs", "vs-nz", "zealand"],
    "west indies": ["west indies", "wi-vs", "vs-wi", "wi vs"],
    "sri lanka": ["sri lanka"],
    bangladesh: ["bangladesh"],
    afghanistan: ["afghanistan"],
    ireland: ["ireland"],
    zimbabwe: ["zimbabwe"],
  };
  const match = canonicalTeam(key);
  if (match && aliases[match]) return aliases[match];
  return key.length > 2 ? [key] : [];
}

function pairNeedles(teamA: string, teamB: string): string[] {
  const a = canonicalTeam(teamA);
  const b = canonicalTeam(teamB);
  if (!a || !b) return [];
  const codeA = TEAM_CODES[a];
  const codeB = TEAM_CODES[b];
  if (!codeA || !codeB) return [];
  const hyphenA = a.replace(/\s+/g, "-");
  const hyphenB = b.replace(/\s+/g, "-");
  return [
    `${a}-vs-${b}`,
    `${b}-vs-${a}`,
    `${a} vs ${b}`,
    `${b} vs ${a}`,
    `${hyphenA}-vs-${hyphenB}`,
    `${hyphenB}-vs-${hyphenA}`,
    `${hyphenA} vs ${hyphenB}`,
    `${hyphenB} vs ${hyphenA}`,
    `${codeA}-vs-${codeB}`,
    `${codeB}-vs-${codeA}`,
    `${codeA} vs ${codeB}`,
    `${codeB} vs ${codeA}`,
  ];
}

function formatNeedles(format: "T20" | "ODI" | "TEST"): string[] {
  if (format === "ODI") return ["odi", "50 overs", "one day", "one-day"];
  if (format === "TEST") return ["test match", "test cricket", "red-ball", "red ball"];
  return ["t20", "t20i", "t20 world", "world-cup", "world cup"];
}

function scoreBlog(
  article: BlogCard,
  input: {
    teamA: string;
    teamB: string;
    format: "T20" | "ODI" | "TEST";
    seriesName: string;
    event: string;
  },
): number {
  const hay = articleHay(article);
  let score = 4;
  const context = `${input.seriesName} ${input.event}`.toLowerCase();
  const isIplMatch = /ipl|wpl|bbl/.test(context);
  const isWomenMatch = /women|wpl/.test(context);

  for (const needle of pairNeedles(input.teamA, input.teamB)) {
    if (hay.includes(needle)) score += 140;
  }

  for (const needle of [...teamNeedles(input.teamA), ...teamNeedles(input.teamB)]) {
    if (hay.includes(needle)) score += 48;
  }
  const teamAHit = teamNeedles(input.teamA).some((needle) => hay.includes(needle));
  const teamBHit = teamNeedles(input.teamB).some((needle) => hay.includes(needle));
  if (teamAHit && teamBHit) score += 90;

  for (const needle of formatNeedles(input.format)) {
    if (hay.includes(needle)) score += 28;
  }

  const hasT20 = /t20|\bipl\b|wpl/.test(hay);
  const hasOdi = /\bodi\b|50 overs|one-day|one day/.test(hay);
  const hasTest = /test match|test cricket|red-ball|red ball/.test(hay);
  if (input.format === "TEST") {
    if (hasTest) score += 24;
    if (hasT20 && !hasTest) score -= 55;
    if (hasOdi && !hasTest) score -= 22;
  } else if (input.format === "ODI") {
    if (hasOdi) score += 18;
    if (hasT20 && !hasOdi) score -= 48;
    if (hasTest && !hasOdi) score -= 14;
  } else {
    if (hasT20) score += 12;
    if (hasTest && !hasT20) score -= 22;
    if (hasOdi && !hasT20) score -= 10;
  }

  const involved = involvedTeams(input.teamA, input.teamB);
  for (const [name, markers] of Object.entries(TEAM_MARKERS)) {
    if (involved.has(name)) continue;
    if (markers.some((marker) => hay.includes(marker))) score -= 90;
  }

  if (hay.includes("cricket")) score += 16;
  if (hay.includes("live") && hay.includes("bet")) score += 10;
  if (hay.includes("prediction") || hay.includes("match")) score += 8;
  if (article.category === "Events") score += 6;
  if (article.category === "Guide") score += 3;
  if (article.category === "Analysis") score += 8;

  const seriesBits = input.seriesName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && w !== "tour" && w !== "2026");
  for (const bit of seriesBits) {
    if (hay.includes(bit)) score += 4;
  }

  if (!isIplMatch && (hay.includes("ipl") || hay.includes("wpl") || hay.includes("bbl") || hay.includes("dream11"))) {
    score -= 24;
  }
  if (
    !isIplMatch &&
    (hay.includes("rcb") ||
      hay.includes("csk") ||
      hay.includes("kkr") ||
      hay.includes("pbks") ||
      hay.includes("srh") ||
      hay.includes("warriors") ||
      hay.includes("orange cap") ||
      hay.includes("purple cap"))
  ) {
    score -= 30;
  }
  if (!isWomenMatch && (hay.includes("women") || hay.includes("wpl") || hay.includes("warriors"))) {
    score -= 28;
  }

  if (hay.includes("fifa") || hay.includes("football") || hay.includes("soccer")) score -= 40;
  if (
    hay.includes("casino") ||
    hay.includes("poker") ||
    hay.includes("roulette") ||
    hay.includes("andar") ||
    hay.includes("teen-patti") ||
    hay.includes("blackjack") ||
    hay.includes("slots")
  ) {
    score -= 35;
  }
  if (hay.includes("horse")) score -= 20;

  return score;
}

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  const kk = Math.min(k, n - k);
  let r = 1;
  for (let i = 1; i <= kk; i++) {
    r = (r * (n - kk + i)) / i;
  }
  return Math.round(r);
}

function combinadic(n: number, k: number, idx: number): number[] {
  const combo: number[] = [];
  let x = idx;
  let remaining = k;
  for (let i = 0; i < n && remaining > 0; i++) {
    const ways = binom(n - i - 1, remaining - 1);
    if (x < ways) {
      combo.push(i);
      remaining -= 1;
    } else {
      x -= ways;
    }
  }
  while (combo.length < k) {
    combo.push(Math.min(n - 1, combo.length));
  }
  return combo;
}

function isCricketBlog(article: BlogCard): boolean {
  const hay = `${article.slug} ${article.title} ${article.category}`.toLowerCase();
  if (hay.includes("fifa") || hay.includes("football") || hay.includes("soccer") || hay.includes("casino") || hay.includes("poker") || hay.includes("roulette") || hay.includes("andar") || hay.includes("blackjack") || hay.includes("slots") || hay.includes("horse")) {
    return false;
  }
  if (hay.includes("apk") || hay.includes("login") || hay.includes("wallet") || hay.includes("whatsapp")) {
    return false;
  }
  return (
    hay.includes("cricket") ||
    hay.includes("ipl") ||
    hay.includes("t20") ||
    hay.includes("odi") ||
    hay.includes("wpl") ||
    hay.includes("test cricket") ||
    hay.includes("test match") ||
    hay.includes("match-prediction") ||
    hay.includes("prediction")
  );
}

type BlogScoreCtx = {
  teamA: string;
  teamB: string;
  format: "T20" | "ODI" | "TEST";
  seriesName: string;
  event: string;
};

function comboKey(blogs: readonly BlogCard[]): string {
  return blogs
    .map((article) => article.slug)
    .sort()
    .join("|");
}

function takeUniqueCombo(
  ranked: readonly BlogCard[],
  limit: number,
  used: Set<string>,
  ctx: BlogScoreCtx,
): BlogCard[] {
  const n = ranked.length;
  if (n === 0) return [];
  if (n <= limit) return [...ranked];

  const totalCombos = Math.max(1, binom(n, limit));
  for (let idx = 0; idx < totalCombos; idx++) {
    const indexes = combinadic(n, limit, idx);
    const picked: BlogCard[] = [];
    const seen = new Set<string>();
    for (const index of indexes) {
      const article = ranked[index];
      if (!article || seen.has(article.slug)) continue;
      seen.add(article.slug);
      picked.push(article);
    }
    if (picked.length < limit) continue;
    const key = comboKey(picked);
    if (used.has(key)) continue;
    used.add(key);
    return picked.sort((a, b) => scoreBlog(b, ctx) - scoreBlog(a, ctx) || a.slug.localeCompare(b.slug));
  }

  return [...ranked].slice(0, limit);
}

const assignmentCache = new WeakMap<object, Map<number, Map<string, BlogCard[]>>>();

function assignMatchBlogs(articles: readonly BlogCard[], limit: number): Map<string, BlogCard[]> {
  let byLimit = assignmentCache.get(articles as object);
  if (!byLimit) {
    byLimit = new Map();
    assignmentCache.set(articles as object, byLimit);
  }
  const cached = byLimit.get(limit);
  if (cached) return cached;

  const cricketPool = articles.filter((article) => isCricketBlog(article));
  const source = cricketPool.length >= limit ? cricketPool : [...articles];
  const used = new Set<string>();
  const assigned = new Map<string, BlogCard[]>();

  for (const series of CRICKET_SCHEDULE_DATA) {
    for (const match of series.matches) {
      const slug = getMatchSlug(series.series, match);
      const { teamA, teamB } = parseMatchTeams(match.event);
      const ctx: BlogScoreCtx = {
        teamA,
        teamB,
        format: detectCricketFormat(match.event, series.series),
        seriesName: series.series,
        event: match.event,
      };
      const ranked = source
        .filter((article) => !isForeignMatchArticle(article, teamA, teamB))
        .sort((a, b) => scoreBlog(b, ctx) - scoreBlog(a, ctx) || a.slug.localeCompare(b.slug));
      assigned.set(slug, takeUniqueCombo(ranked, limit, used, ctx));
    }
  }

  byLimit.set(limit, assigned);
  return assigned;
}

function rankBlogsForMatch(articles: readonly BlogCard[], ctx: BlogScoreCtx, limit: number): BlogCard[] {
  return [...articles]
    .filter((article) => isCricketBlog(article) && !isForeignMatchArticle(article, ctx.teamA, ctx.teamB))
    .sort((a, b) => scoreBlog(b, ctx) - scoreBlog(a, ctx) || a.slug.localeCompare(b.slug))
    .slice(0, limit);
}

export function getRelatedMatchBlogs(
  articles: readonly BlogCard[],
  input: {
    slug: string;
    event: string;
    seriesName: string;
    teamA: string;
    teamB: string;
    format: "T20" | "ODI" | "TEST";
    limit?: number;
  },
): BlogCard[] {
  const limit = input.limit ?? 3;
  const assigned = assignMatchBlogs(articles, limit).get(input.slug);
  if (assigned && assigned.length > 0) return assigned.slice(0, limit);

  return rankBlogsForMatch(articles, input, limit);
}
