import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// TanStack Start / h3 rejects requests whose Accept header does not include
// text/html for page routes. Cloudflare's "Markdown for Agents" feature
// transforms the HTML response to markdown at the edge when the original
// request asks for text/markdown — but only if our origin actually responds
// with HTML. So on the way in, normalize an agent's `Accept: text/markdown`
// to accept HTML; Cloudflare handles the conversion on the way back.
function normalizeMarkdownAccept(request: Request): Request {
  const accept = request.headers.get("accept") ?? "";
  if (!/text\/markdown/i.test(accept)) return request;
  const headers = new Headers(request.headers);
  headers.set("accept", "text/html,*/*;q=0.8");
  return new Request(request.url, {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: request.redirect,
  });
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// RFC 8288 Link headers — advertise sitemap, LLM index, API catalog and agent skills.
const LINK_HEADER = [
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</llms.txt>; rel="describedby"; type="text/markdown"',
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json"',
].join(", ");

function withDiscoveryHeaders(response: Response): Response {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.append("Link", LINK_HEADER);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

// Minimal HTML→Markdown converter for agent requests (Accept: text/markdown).
// Runs at the origin so scanners see Content-Type: text/markdown directly,
// independent of any edge transformation.
function htmlToMarkdown(html: string): string {
  // Isolate <body> if present.
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let s = bodyMatch ? bodyMatch[1] : html;
  // Strip non-content blocks.
  s = s.replace(/<(script|style|noscript|template|svg)[\s\S]*?<\/\1>/gi, "");
  // Headings.
  s = s.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_m, l, t) => `\n\n${"#".repeat(Number(l))} ${stripTags(t)}\n\n`);
  // Links.
  s = s.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_m, href, t) => `[${stripTags(t)}](${href})`);
  // Images.
  s = s.replace(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']+)["'][^>]*\/?>/gi, (_m, alt, src) => `![${alt}](${src})`);
  s = s.replace(/<img[^>]*src=["']([^"']+)["'][^>]*\/?>/gi, (_m, src) => `![](${src})`);
  // Lists.
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_m, t) => `- ${stripTags(t).trim()}\n`);
  // Block-level separators (open + close) so adjacent inline text doesn't concatenate.
  s = s.replace(/<(p|div|section|article|header|footer|main|nav|aside|ul|ol|tr|table)[^>]*>/gi, "\n\n");
  s = s.replace(/<\/(p|div|section|article|header|footer|main|nav|aside|ul|ol|tr|table)>/gi, "\n\n");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  // Table cells → spaces.
  s = s.replace(/<\/(td|th)>/gi, " ");
  // Bold/italic/code.
  s = s.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _t, c) => `**${stripTags(c)}**`);
  s = s.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _t, c) => `*${stripTags(c)}*`);
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_m, c) => `\`${stripTags(c)}\``);
  // Drop remaining tags.
  s = stripTags(s);
  // Decode named + numeric entities.
  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_m, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_m, d) => String.fromCodePoint(parseInt(d, 10)));
  // Collapse whitespace.
  s = s.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").replace(/[ \t]{2,}/g, " ").trim();
  return s;
}

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, "");
}

function countTokens(s: string): number {
  // Rough approximation: ~4 chars per token.
  return Math.max(1, Math.ceil(s.length / 4));
}

async function maybeConvertToMarkdown(originalAccept: string, response: Response): Promise<Response> {
  if (!/text\/markdown/i.test(originalAccept)) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;
  const html = await response.clone().text();
  const md = htmlToMarkdown(html);
  const headers = new Headers(response.headers);
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("x-markdown-tokens", String(countTokens(md)));
  headers.delete("content-length");
  return new Response(md, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const originalAccept = request.headers.get("accept") ?? "";
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(normalizeMarkdownAccept(request), env, ctx);
      const normalized = withDiscoveryHeaders(await normalizeCatastrophicSsrResponse(response));
      return await maybeConvertToMarkdown(originalAccept, normalized);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8", Link: LINK_HEADER },
      });
    }
  },
};
