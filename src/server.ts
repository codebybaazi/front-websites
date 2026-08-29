import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  AGENT_DISCOVERY_LINK_HEADER,
  API_CATALOG_CONTENT_TYPE,
  API_CATALOG_PATH,
  buildApiCatalogLinkset,
} from "./utils/agent-discovery";
import {
  estimateTokens,
  htmlToMarkdown,
  MARKDOWN_CONTENT_TYPE,
  prefersMarkdown,
} from "./utils/markdown-response";

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

function isDocument(response: Response): boolean {
  const contentType = response.headers.get("content-type") ?? "";
  return contentType.includes("text/html") || contentType.includes("text/markdown");
}

// Agents that only issue a HEAD/GET on the document should not have to parse HTML to
// find the sitemap, api-catalog or policy pages, so advertise them as RFC 8288 links.
// `Vary: Accept` is required because HTML and markdown share one URL.
function withDocumentHeaders(response: Response): Response {
  if (!isDocument(response)) return response;

  const decorate = (headers: Headers) => {
    // Appending keeps any Link header the renderer already emitted (e.g. asset preloads).
    headers.append("link", AGENT_DISCOVERY_LINK_HEADER);
    headers.append("vary", "Accept");
  };

  try {
    decorate(response.headers);
    return response;
  } catch {
    // Some runtimes hand back responses with immutable headers.
    const headers = new Headers(response.headers);
    decorate(headers);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
}

// TanStack Start's router answers anything other than an HTML Accept with a 500
// ({"error":"Only HTML requests are supported here"}), so render HTML and convert it
// rather than forwarding the agent's Accept header.
async function renderMarkdown(request: Request, env: unknown, ctx: unknown): Promise<Response> {
  const headers = new Headers(request.headers);
  headers.set("accept", "text/html");

  // Always GET: a HEAD would come back without the body there is to convert.
  const handler = await getServerEntry();
  const response = await normalizeCatastrophicSsrResponse(
    await handler.fetch(new Request(request.url, { method: "GET", headers }), env, ctx),
  );
  if (!(response.headers.get("content-type") ?? "").includes("text/html")) return response;

  const markdown = htmlToMarkdown(await response.text());
  return new Response(request.method === "HEAD" ? null : markdown, {
    status: response.status,
    headers: {
      "content-type": MARKDOWN_CONTENT_TYPE,
      "x-markdown-tokens": String(estimateTokens(markdown)),
    },
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

      if (isRead && url.pathname === "/.well-known/mcp/server-card.json") {
        const { MCP_SERVER_CARD_CONTENT_TYPE, buildMcpServerCard } = await import(
          "./utils/mcp-server-card"
        );
        return new Response(bodyFor(buildMcpServerCard()), {
          status: 200,
          headers: {
            "content-type": MCP_SERVER_CARD_CONTENT_TYPE,
            "cache-control": "public, max-age=3600",
          },
        });
      }

      if (url.pathname === "/.well-known/ai-catalog.json") {
        if (request.method === "OPTIONS") {
          return new Response(null, {
            status: 204,
            headers: {
              "access-control-allow-origin": "*",
              "access-control-allow-methods": "GET, HEAD, OPTIONS",
              "access-control-allow-headers": "Content-Type, Accept",
              "access-control-max-age": "86400",
            },
          });
        }
        if (isRead) {
          const { AI_CATALOG_CONTENT_TYPE, buildAiCatalog } = await import(
            "./utils/ai-catalog"
          );
          return new Response(bodyFor(buildAiCatalog()), {
            status: 200,
            headers: {
              "content-type": AI_CATALOG_CONTENT_TYPE,
              "access-control-allow-origin": "*",
              "cache-control": "public, max-age=3600",
            },
          });
        }
      }

      if (isRead && url.pathname.startsWith("/.well-known/agent-skills/")) {
        const {
          AGENT_SKILLS_INDEX_PATH,
          AGENT_SKILLS_INDEX_CONTENT_TYPE,
          AGENT_SKILL_CONTENT_TYPE,
          buildAgentSkillsIndex,
          getAgentSkillDocument,
        } = await import("./utils/agent-skills");

        if (url.pathname === AGENT_SKILLS_INDEX_PATH) {
          return new Response(bodyFor(await buildAgentSkillsIndex()), {
            status: 200,
            headers: {
              "content-type": AGENT_SKILLS_INDEX_CONTENT_TYPE,
              "cache-control": "public, max-age=3600",
            },
          });
        }

        const document = getAgentSkillDocument(url.pathname);
        if (document) {
          return new Response(bodyFor(document), {
            status: 200,
            headers: {
              "content-type": AGENT_SKILL_CONTENT_TYPE,
              "cache-control": "public, max-age=3600",
            },
          });
        }
      }

      if (isRead && url.pathname === "/auth.md") {
        const { AUTH_MD_CONTENT_TYPE, buildAuthMarkdown } = await import(
          "./utils/oauth-metadata"
        );
        return new Response(bodyFor(buildAuthMarkdown()), {
          status: 200,
          headers: {
            "content-type": AUTH_MD_CONTENT_TYPE,
            "cache-control": "public, max-age=3600",
          },
        });
      }

      if (isRead) {
        const {
          OAUTH_AS_PATH,
          OPENID_CONFIGURATION_PATH,
          OAUTH_PROTECTED_RESOURCE_PATH,
          OAUTH_METADATA_CONTENT_TYPE,
          buildOAuthAuthorizationServerMetadata,
          buildOpenIdConfigurationMetadata,
          buildOAuthProtectedResourceMetadata,
        } = await import("./utils/oauth-metadata");

        if (
          url.pathname === OAUTH_AS_PATH ||
          url.pathname === OPENID_CONFIGURATION_PATH ||
          url.pathname === OAUTH_PROTECTED_RESOURCE_PATH
        ) {
          const body =
            url.pathname === OAUTH_AS_PATH
              ? buildOAuthAuthorizationServerMetadata()
              : url.pathname === OPENID_CONFIGURATION_PATH
                ? buildOpenIdConfigurationMetadata()
                : buildOAuthProtectedResourceMetadata();
          return new Response(bodyFor(body), {
            status: 200,
            headers: {
              "content-type": OAUTH_METADATA_CONTENT_TYPE,
              "cache-control": "public, max-age=3600",
            },
          });
        }
      }

      if (isRead && prefersMarkdown(request.headers.get("accept"))) {
        return withDocumentHeaders(await renderMarkdown(request, env, ctx));
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withDocumentHeaders(await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
