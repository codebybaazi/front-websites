import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

let turndownService: any;

async function getTurndownService() {
  if (!turndownService) {
    try {
      // @ts-ignore
      const module = await import("turndown/lib/turndown.cjs.js");
      const TurndownService = module.default || module;
      turndownService = new TurndownService();
    } catch (e) {
      console.error("Failed to initialize TurndownService:", e);
    }
  }
  return turndownService;
}

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

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      
      const acceptHeader = request.headers.get("accept") || "";
      const isMarkdownRequested = acceptHeader.includes("text/markdown");
      
      let internalRequest = request;
      if (isMarkdownRequested) {
        // Clone request and modify headers to avoid 406/500 in internal handler
        const headers = new Headers(request.headers);
        headers.set("Accept", "text/html");
        internalRequest = new Request(request.url, {
          method: request.method,
          headers,
          body: request.body,
          // @ts-ignore
          duplex: request.body ? 'half' : undefined
        });
      }

      const response = await handler.fetch(internalRequest, env, ctx);
      
      const acceptHeader = request.headers.get("accept") || "";
      const isMarkdownRequested = acceptHeader.includes("text/markdown");
      
      const url = new URL(request.url);
      const isHome = url.pathname === "/";
      
      let finalResponse = response;

      // Handle Markdown request
      if (isMarkdownRequested && response.headers.get("content-type")?.includes("text/html")) {
        try {
          const html = await response.text();
          const service = await getTurndownService();
          const markdown = service ? service.turndown(html) : html;
          
          const headers = new Headers(response.headers);
          headers.set("Content-Type", "text/markdown; charset=utf-8");
          // Optional tracking header for tokens if needed
          headers.set("x-markdown-tokens", markdown.split(/\s+/).length.toString());
          
          finalResponse = new Response(markdown, {
            status: response.status,
            statusText: response.statusText,
            headers
          });
        } catch (error) {
          console.error("Markdown conversion failed:", error);
          // Fallback occurs as finalResponse remains the original response
        }
      }

      // Add Link headers to homepage if not already a markdown response
      if (isHome && !isMarkdownRequested) {
        const headers = new Headers(finalResponse.headers);
        const linkHeaders = [
          '</.well-known/api-catalog>; rel="api-catalog"',
          '</all-links>; rel="service-doc"',
          '</.well-known/ai-skills.json>; rel="ai-skills"',
          '</.well-known/dns-aid.json>; rel="dns-aid"',
          '</about>; rel="describedby"'
        ];
        headers.append("Link", linkHeaders.join(", "));
        
        finalResponse = new Response(finalResponse.body, {
          status: finalResponse.status,
          statusText: finalResponse.statusText,
          headers
        });
      }

      return await normalizeCatastrophicSsrResponse(finalResponse);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};