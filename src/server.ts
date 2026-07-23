import "./lib/error-capture";

import { NodeHtmlMarkdown } from "node-html-markdown";
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

// RFC 8288 Link header — advertises sitemap, API catalog, agent skills index
// and LLM guide on every HTML response for crawlers, agents and AI clients.
const LINK_HEADER = [
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/agent-skills.json>; rel="service-desc"; type="application/json"; title="Agent Skills"',
  '</llms.txt>; rel="describedby"; type="text/plain"; title="LLM Guide"',
].join(", ");

function withLinkHeader(response: Response): Response {
  if (response.headers.has("Link")) return response;
  const headers = new Headers(response.headers);
  headers.set("Link", LINK_HEADER);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function wantsMarkdown(request: Request): boolean {
  const accept = request.headers.get("accept") ?? "";
  return accept.toLowerCase().includes("text/markdown");
}

async function toMarkdownResponse(response: Response): Promise<Response> {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;
  try {
    const html = await response.clone().text();
    const markdown = new NodeHtmlMarkdown({
      ignore: ["script", "style", "noscript", "svg", "link", "meta"],
      keepDataImages: false,
      useLinkReferenceDefinitions: false,
    }).translate(html);
    const cleaned = markdown.replace(/\n{3,}/g, "\n\n").trim();
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/markdown; charset=utf-8");
    headers.set("x-markdown-tokens", String(Math.ceil(cleaned.length / 4)));
    headers.delete("content-length");
    return new Response(cleaned, { status: response.status, statusText: response.statusText, headers });
  } catch {
    return response;
  }
}


export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const markdownRequested = wantsMarkdown(request);
      // The SSR entry only serves HTML; rewrite Accept so it renders the page,
      // then convert to markdown on the way out.
      let upstreamRequest = request;
      if (markdownRequested) {
        const h = new Headers(request.headers);
        h.set("accept", "text/html,application/xhtml+xml");
        upstreamRequest = new Request(request.url, {
          method: request.method,
          headers: h,
          body: request.method === "GET" || request.method === "HEAD" ? undefined : await request.arrayBuffer(),
          redirect: request.redirect,
        });
      }
      const response = await handler.fetch(upstreamRequest, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      const linked = withLinkHeader(normalized);
      return markdownRequested ? await toMarkdownResponse(linked) : linked;
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
          Link: LINK_HEADER,
        },
      });
    }
  },
};


