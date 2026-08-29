/**
 * Agentic Resource Discovery (ARD) capability manifest served at
 * /.well-known/ai-catalog.json, listing the machine-readable capabilities of
 * this site (MCP server, agent skills, sitemap, markdown pages).
 */
import { SITE_ORIGIN } from "./page-seo";

export const AI_CATALOG_PATH = "/.well-known/ai-catalog.json";
export const AI_CATALOG_CONTENT_TYPE = "application/json; charset=utf-8";

const DOMAIN = "fairplayindia.com";

const urn = (namespace: string, name: string) => `urn:air:${DOMAIN}:${namespace}:${name}`;

const entries = [
  {
    identifier: urn("mcp", "site-tools"),
    displayName: "Fairplay India MCP Server",
    description:
      "Public read-only MCP server (Streamable HTTP) with tools to list, search and read Fairplay India blog posts and site pages.",
    type: "application/json",
    url: `${SITE_ORIGIN}/mcp`,
    authentication: { required: false, type: "none" },
    representativeQueries: [
      "Search Fairplay India guides about getting a cricket betting ID",
      "List the latest Fairplay blog posts about IPL betting",
      "Read the Fairplay withdrawal guide",
      "Find Fairplay articles about live casino games",
    ],
  },
  {
    identifier: urn("mcp", "server-card"),
    displayName: "MCP Server Card (SEP-1649)",
    description:
      "Server card describing the transport endpoint, capabilities and tools of the public Fairplay India MCP server.",
    type: "application/json",
    url: `${SITE_ORIGIN}/.well-known/mcp/server-card.json`,
    representativeQueries: [
      "What MCP tools does fairplayindia.com expose?",
      "Where is the MCP endpoint for Fairplay India?",
      "Does the Fairplay MCP server require authentication?",
    ],
  },
  {
    identifier: urn("skills", "agent-skills-index"),
    displayName: "Agent Skills Discovery Index",
    description:
      "Agent Skills Discovery index (RFC v0.2.0) with sha256-digested markdown skill documents for browsing blog content, reading site pages and looking up fixtures.",
    type: "application/json",
    url: `${SITE_ORIGIN}/.well-known/agent-skills/index.json`,
    representativeQueries: [
      "What skills can an agent use on Fairplay India?",
      "How should an agent read Fairplay blog content?",
      "How do I look up cricket fixtures on Fairplay India?",
    ],
  },
  {
    identifier: urn("catalog", "api-catalog"),
    displayName: "API Catalog (RFC 9727 Linkset)",
    description:
      "Linkset listing every machine-readable resource this site publishes, including sitemap, robots, OAuth metadata and MCP endpoints.",
    type: "application/linkset+json",
    url: `${SITE_ORIGIN}/.well-known/api-catalog`,
    representativeQueries: [
      "What machine-readable endpoints does fairplayindia.com publish?",
      "Where is the Fairplay India sitemap?",
      "List Fairplay India policy and discovery documents",
    ],
  },
  {
    identifier: urn("content", "sitemap"),
    displayName: "Fairplay India Sitemap",
    description:
      "XML sitemap of every indexable Fairplay India page, including guides, comparisons, blog posts and match fixtures. Any page also returns markdown when requested with Accept: text/markdown.",
    type: "application/xml",
    url: `${SITE_ORIGIN}/sitemap.xml`,
    representativeQueries: [
      "List all pages on fairplayindia.com",
      "Which Fairplay India match fixture pages exist?",
      "Find the Fairplay India login guide page",
    ],
  },
  {
    identifier: urn("auth", "agent-auth-instructions"),
    displayName: "Agent Authentication Instructions",
    description:
      "Markdown document stating that Fairplay India requires no agent registration or authentication: all listed resources are public and read-only.",
    type: "text/markdown",
    url: `${SITE_ORIGIN}/auth.md`,
    representativeQueries: [
      "How does an agent authenticate with fairplayindia.com?",
      "Does Fairplay India require an API key?",
      "Is agent registration needed for Fairplay India?",
    ],
  },
];

/** ARD manifest body served at {@link AI_CATALOG_PATH}. */
export function buildAiCatalog(): string {
  return JSON.stringify(
    {
      specVersion: "0.1",
      host: {
        name: "Fairplay India",
        domain: DOMAIN,
        url: `${SITE_ORIGIN}/`,
        description:
          "Fairplay India: cricket betting ID guides, IPL and sports coverage, live casino explainers and account support content for Indian players.",
        contact: `${SITE_ORIGIN}/contact-us`,
        documentation: `${SITE_ORIGIN}/all-links`,
      },
      entries,
    },
    null,
    2,
  );
}
