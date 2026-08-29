/**
 * Serves the SSR document as markdown to agents that ask for it, so they get prose
 * instead of having to strip Tailwind-heavy markup out of the HTML themselves.
 */
import { NodeHtmlMarkdown } from "node-html-markdown";

import { SITE_ORIGIN } from "./page-seo";

export const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";

/** Media types an agent may use to ask for markdown. */
const MARKDOWN_TYPES = ["text/markdown", "text/x-markdown"];

/** Quality of `mediaType` in an Accept header, 0 when it is absent. */
function quality(accept: string, mediaType: string): number {
  for (const entry of accept.split(",")) {
    const [type, ...params] = entry.split(";").map((part) => part.trim().toLowerCase());
    if (type !== mediaType) continue;
    const q = params.find((param) => param.startsWith("q="));
    if (!q) return 1;
    const parsed = Number.parseFloat(q.slice(2));
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

/**
 * True only when markdown is wanted at least as much as HTML. Browsers never list a
 * markdown type at all, so they keep getting HTML.
 */
export function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  const normalized = accept.toLowerCase();
  const markdown = Math.max(...MARKDOWN_TYPES.map((type) => quality(normalized, type)));
  return markdown > 0 && markdown >= quality(normalized, "text/html");
}

const converter = new NodeHtmlMarkdown({
  maxConsecutiveNewlines: 2,
  // Accordion triggers and CTAs are buttons, so only genuinely non-textual tags are dropped.
  ignore: ["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "IFRAME"],
});

function extractSection(html: string, tag: "main" | "body"): string | undefined {
  // Greedy on purpose: the document has a single main/body, so this spans the whole element.
  return new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>`, "i").exec(html)?.[1];
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  "#39": "'",
  apos: "'",
  nbsp: " ",
};

function decodeEntities(text: string): string {
  return text.replace(/&(#\d+|[a-z]+);/gi, (match, name: string) => {
    const entity = ENTITIES[name.toLowerCase()];
    if (entity) return entity;
    if (name.startsWith("#")) return String.fromCodePoint(Number(name.slice(1)));
    return match;
  });
}

function extractTitle(html: string): string | undefined {
  const raw = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1];
  return raw ? decodeEntities(raw).trim() || undefined : undefined;
}

/** Agents receive markdown without a base URL, so root-relative targets need the origin. */
function absolutizeLinks(markdown: string): string {
  return markdown.replace(/\]\((\/(?!\/)[^)\s]*)\)/g, `](${SITE_ORIGIN}$1)`);
}

export function htmlToMarkdown(html: string): string {
  const content = extractSection(html, "main") ?? extractSection(html, "body") ?? html;
  const markdown = absolutizeLinks(converter.translate(content)).trim();

  // The <title> is richer than the on-page heading, but skip it when one is already there.
  const title = extractTitle(html);
  return title && !/^#\s/m.test(markdown) ? `# ${title}\n\n${markdown}` : markdown;
}

/** Advertised as `x-markdown-tokens`; the usual ~4-characters-per-token approximation. */
export function estimateTokens(markdown: string): number {
  return Math.ceil(markdown.length / 4);
}
