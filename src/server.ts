import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  AGENT_DISCOVERY_LINK_HEADER,
  API_CATALOG_CONTENT_TYPE,
  API_CATALOG_PATH,
  buildApiCatalogLinkset,
} from "./utils/agent-discovery";

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

// Agents that only issue a HEAD/GET on the document should not have to parse HTML to
// find the sitemap, api-catalog or policy pages, so advertise them as RFC 8288 links.
function withAgentDiscoveryLinks(response: Response): Response {
  if (!(response.headers.get("content-type") ?? "").includes("text/html")) return response;

  // Appending keeps any Link header the renderer already emitted (e.g. asset preloads).
  try {
    response.headers.append("link", AGENT_DISCOVERY_LINK_HEADER);
    return response;
  } catch {
    // Some runtimes hand back responses with immutable headers.
    const headers = new Headers(response.headers);
    headers.append("link", AGENT_DISCOVERY_LINK_HEADER);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
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
      const url = new URL(request.url);
      const isRead = request.method === "GET" || request.method === "HEAD";
      const bodyFor = (body: string) => (request.method === "HEAD" ? null : body);

      if (isRead && url.pathname === "/sitemap.xml") {
        const { buildSitemapXml } = await import("./utils/match-seo");
        return new Response(bodyFor(buildSitemapXml()), {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      }

      if (isRead && url.pathname === API_CATALOG_PATH) {
        return new Response(bodyFor(buildApiCatalogLinkset()), {
          status: 200,
          headers: {
            "content-type": API_CATALOG_CONTENT_TYPE,
            "cache-control": "public, max-age=3600",
            link: `<${API_CATALOG_PATH}>; rel="self"; type="application/linkset+json"`,
          },
        });
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withAgentDiscoveryLinks(await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
