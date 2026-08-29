/**
 * MCP Server Card (SEP-1649) for agent discovery.
 * Schema in standardization: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
 */
import { SITE_ORIGIN } from "./page-seo";

export const MCP_SERVER_CARD_PATH = "/.well-known/mcp/server-card.json";
export const MCP_ENDPOINT_PATH = "/mcp";
export const MCP_SERVER_CARD_CONTENT_TYPE = "application/json; charset=utf-8";

export function buildMcpServerCard(): string {
  const card = {
    $schema: "https://modelcontextprotocol.io/schemas/draft/server-card.json",
    serverInfo: {
      name: "fairplay-india",
      title: "Fairplay India",
      version: "1.0.0",
      description:
        "Read-only MCP tools over the public Fairplay India site: browse and search betting/casino guides and read any public page as Markdown.",
      websiteUrl: SITE_ORIGIN,
      icons: [{ src: `${SITE_ORIGIN}/favicon.png`, sizes: "any", mimeType: "image/png" }],
    },
    protocolVersion: "2025-06-18",
    transport: {
      type: "streamable-http",
      endpoint: `${SITE_ORIGIN}${MCP_ENDPOINT_PATH}`,
    },
    // SEP-1649 also allows a flat list of remote endpoints.
    remotes: [
      { type: "streamable-http", url: `${SITE_ORIGIN}${MCP_ENDPOINT_PATH}` },
    ],
    capabilities: {
      tools: { listChanged: false },
      resources: {},
      prompts: {},
      completions: {},
      logging: {},
    },
    authentication: {
      required: false,
      schemes: [] as string[],
      notice: "Public read-only server. No OAuth flow, credentials or registration are required.",
    },
    tools: [
      { name: "list_blog_posts", title: "List blog posts", readOnly: true },
      { name: "search_blog_posts", title: "Search blog posts", readOnly: true },
      { name: "get_blog_post", title: "Get blog post", readOnly: true },
      { name: "get_site_page", title: "Get site page as Markdown", readOnly: true },
    ],
    documentationUrl: `${SITE_ORIGIN}/auth.md`,
    privacyPolicyUrl: `${SITE_ORIGIN}/privacy-policy`,
    termsOfServiceUrl: `${SITE_ORIGIN}/terms-conditions`,
  };

  return JSON.stringify(card, null, 2);
}
