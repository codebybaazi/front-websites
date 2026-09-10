import { createStart, createMiddleware } from "@tanstack/react-start";
import TurndownService from "turndown";

import { renderErrorPage } from "./lib/error-page";

const LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"; title="API catalog"',
  '</.well-known/agents.json>; rel="service-desc"; type="application/json"; title="Agent service description"',
  '</.well-known/agents.json>; rel="service-doc"; type="application/json"; title="Agent service documentation"',
  '</.well-known/agents.json>; rel="describedby"; type="application/json"; title="Machine-readable site description"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"; title="XML sitemap"',
  '</llms.txt>; rel="alternate"; type="text/plain"; title="LLM discovery manifest"',
  '</robots.txt>; rel="alternate"; type="text/plain"; title="Robots policy"',
  '</about>; rel="author"; title="About Mahadev Book"',
  '</contact>; rel="help"; title="Contact support"',
].join(", ");

function wantsMarkdown(request: Request): boolean {
  const accept = request.headers.get("accept") ?? "";
  return /text\/markdown/i.test(accept);
}

function extractMainHtml(html: string): string {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (main) return main[1];
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return body ? body[1] : html;
}

function htmlToMarkdown(html: string): string {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });
  td.remove(["script", "style", "noscript"]);
  return td.turndown(extractMainHtml(html)).trim();
}

const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    const result = await next();
    const response = (result as { response?: Response }).response;
    if (!response) return result;

    if (!response.headers.has("link")) {
      response.headers.set("Link", LINK_HEADER);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (
      request &&
      wantsMarkdown(request) &&
      response.status < 400 &&
      contentType.includes("text/html")
    ) {
      try {
        const html = await response.clone().text();
        const markdown = htmlToMarkdown(html);
        const headers = new Headers(response.headers);
        headers.set("content-type", "text/markdown; charset=utf-8");
        headers.set("x-markdown-tokens", String(Math.ceil(markdown.length / 4)));
        headers.set("vary", [headers.get("vary"), "Accept"].filter(Boolean).join(", "));
        const md = new Response(markdown, { status: response.status, headers });
        (result as { response?: Response }).response = md;
        return md;
      } catch (mdError) {
        console.error("markdown conversion failed", mdError);
      }
    }

    return result;
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8", Link: LINK_HEADER },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
