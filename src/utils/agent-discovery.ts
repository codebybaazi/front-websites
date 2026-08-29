/**
 * RFC 8288 Link headers and the RFC 9727 api-catalog document that let agents find
 * the site's machine-readable and policy resources without first parsing HTML.
 */
import { SITE_ORIGIN } from "./page-seo";

interface DiscoveryLink {
  /** Root-relative, so the header also resolves correctly on preview hosts. */
  path: string;
  /** Only IANA-registered names: RFC 8288 requires bare tokens to be registered. */
  rel: string;
  type: string;
}

export const API_CATALOG_PATH = "/.well-known/api-catalog";

/** RFC 9727 requires the Linkset media type plus its profile parameter. */
export const API_CATALOG_CONTENT_TYPE =
  'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"';

const DISCOVERY_LINKS: DiscoveryLink[] = [
  { path: API_CATALOG_PATH, rel: "api-catalog", type: "application/linkset+json" },
  { path: "/sitemap.xml", rel: "describedby", type: "application/xml" },
  { path: "/all-links", rel: "index", type: "text/html" },
  { path: "/services", rel: "service-doc", type: "text/html" },
  { path: "/auth.md", rel: "help", type: "text/markdown" },
  {
    path: "/.well-known/mcp/server-card.json",
    rel: "mcp-server-card",
    type: "application/json",
  },
  { path: "/support", rel: "help", type: "text/html" },
  { path: "/about", rel: "author", type: "text/html" },
  { path: "/terms-conditions", rel: "terms-of-service", type: "text/html" },
  { path: "/privacy-policy", rel: "privacy-policy", type: "text/html" },
];

/** Value for the `Link` response header, sent on every HTML document. */
export const AGENT_DISCOVERY_LINK_HEADER = DISCOVERY_LINKS.map(
  ({ path, rel, type }) => `<${path}>; rel="${rel}"; type="${type}"`,
).join(", ");

/** The machine-readable endpoints this site publishes, listed as catalog items. */
const CATALOG_ITEMS = [
  {
    path: "/sitemap.xml",
    type: "application/xml",
    title: "Sitemap of every Fairplay page, guide and match fixture",
  },
  {
    path: "/robots.txt",
    type: "text/plain",
    title: "Crawler and agent access rules",
  },
  {
    path: "/.well-known/oauth-authorization-server",
    type: "application/json",
    title: "OAuth 2.0 metadata: this site is public, no authentication required",
  },
  {
    path: "/.well-known/openid-configuration",
    type: "application/json",
    title: "OpenID Connect metadata: this site is public, no authentication required",
  },
  {
    path: "/auth.md",
    type: "text/markdown",
    title: "Agent authentication and registration instructions: none required",
  },
  {
    path: "/.well-known/oauth-protected-resource",
    type: "application/json",
    title: "OAuth 2.0 Protected Resource metadata: no protected APIs on this origin",
  },
  {
    path: "/.well-known/mcp/server-card.json",
    type: "application/json",
    title: "MCP Server Card (SEP-1649): public read-only MCP server for this site",
  },
  {
    path: "/mcp",
    type: "application/json",
    title: "MCP Streamable HTTP endpoint (public, no authentication required)",
  },
];

function absolute(path: string) {
  return `${SITE_ORIGIN}${path}`;
}

/** Linkset (RFC 9264) served at {@link API_CATALOG_PATH}. */
export function buildApiCatalogLinkset(): string {
  return JSON.stringify(
    {
      linkset: [
        {
          anchor: absolute(API_CATALOG_PATH),
          item: CATALOG_ITEMS.map(({ path, type, title }) => ({
            href: absolute(path),
            type,
            title,
          })),
        },
        {
          anchor: `${SITE_ORIGIN}/`,
          ...Object.fromEntries(
            DISCOVERY_LINKS.filter((link) => link.rel !== "api-catalog").map(
              ({ path, rel, type }) => [rel, [{ href: absolute(path), type }]],
            ),
          ),
        },
      ],
    },
    null,
    2,
  );
}
