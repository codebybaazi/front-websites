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
      const url = new URL(request.url);
      
      const acceptHeader = request.headers.get("accept") || "";
      const isMarkdownRequested = acceptHeader.includes("text/markdown");
      
      let internalRequest = request;
      if (isMarkdownRequested) {
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

      // Special handling for discovery routes to override static asset behavior
      if (url.pathname === "/.well-known/api-catalog") {
        const apiReq = new Request(new URL("/api/public/api-catalog", request.url).toString(), {
          method: "GET",
          headers: request.headers
        });
        const res = await handler.fetch(apiReq, env, ctx);
        const text = await res.text();
        return new Response(text, {
          status: res.status,
          headers: {
            "Content-Type": "application/linkset+json",
            "Cache-Control": "no-store, no-cache, must-revalidate"
          }
        });
      }
      
      if (url.pathname === "/.well-known/openid-configuration" || url.pathname === "/.well-known/oauth-authorization-server") {
        const oidcReq = new Request(new URL("/api/public/openid-configuration", request.url).toString(), {
          method: "GET",
          headers: request.headers
        });
        const res = await handler.fetch(oidcReq, env, ctx);
        const text = await res.text();
        return new Response(text, {
          status: res.status,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }

      if (url.pathname === "/.well-known/oauth-protected-resource") {
        const resourceReq = new Request(new URL("/api/public/oauth-protected-resource", request.url).toString(), {
          method: "GET",
          headers: request.headers
        });
        const res = await handler.fetch(resourceReq, env, ctx);
        const text = await res.text();
        return new Response(text, {
          status: res.status,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }

      const response = await handler.fetch(internalRequest, env, ctx);

      let finalResponse = response;

      if (isMarkdownRequested && response.headers.get("content-type")?.includes("text/html")) {
        try {
          const html = await response.text();
          const service = await getTurndownService();
          const markdown = service ? service.turndown(html) : html;
          const headers = new Headers(response.headers);
          headers.set("Content-Type", "text/markdown; charset=utf-8");
          headers.set("x-markdown-tokens", markdown.split(/\s+/).length.toString());
          finalResponse = new Response(markdown, {
            status: response.status,
            statusText: response.statusText,
            headers
          });
        } catch (error) {
          console.error("Markdown conversion failed:", error);
        }
      }

      if (url.pathname === "/" && !isMarkdownRequested) {
        const headers = new Headers(finalResponse.headers);
        const linkHeaders = [
          '</.well-known/api-catalog>; rel="api-catalog"',
          '</all-links>; rel="service-doc"',
          '</.well-known/ai-skills.json>; rel="ai-skills"',
          '</.well-known/dns-aid.json>; rel="dns-aid"',
          '</.well-known/openid-configuration>; rel="openid-configuration"',
          '</.well-known/oauth-protected-resource>; rel="service-desc"',
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