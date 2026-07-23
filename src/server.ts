import "./lib/error-capture";

import TurndownService from "turndown";

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

function wantsMarkdown(request: Request): boolean {
  return /text\/markdown/i.test(request.headers.get("accept") ?? "");
}

function extractMainHtml(html: string): string {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (main) return main[1];
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return body ? body[1] : html;
}

function extractTitle(html: string): string | undefined {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
}

function htmlToMarkdown(html: string): string {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });
  td.remove(["script", "style", "noscript"]);
  const body = td.turndown(extractMainHtml(html)).trim();
  const title = extractTitle(html);
  return title ? `# ${title}\n\n${body}` : body;
}

async function maybeConvertToMarkdown(
  request: Request,
  response: Response,
): Promise<Response> {
  if (!wantsMarkdown(request)) return response;
  if (response.status >= 400) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  try {
    const html = await response.clone().text();
    const markdown = htmlToMarkdown(html);
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/markdown; charset=utf-8");
    headers.set("x-markdown-tokens", String(Math.ceil(markdown.length / 4)));
    headers.set("vary", [headers.get("vary"), "Accept"].filter(Boolean).join(", "));
    headers.delete("content-length");
    return new Response(markdown, { status: response.status, headers });
  } catch (error) {
    console.error("markdown conversion failed", error);
    return response;
  }
}

function stripMarkdownAccept(request: Request): Request {
  if (!wantsMarkdown(request)) return request;
  const headers = new Headers(request.headers);
  headers.set("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
  return new Request(request.url, {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: request.redirect,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const forwarded = stripMarkdownAccept(request);
      const response = await handler.fetch(forwarded, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return await maybeConvertToMarkdown(request, normalized);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

