import { AI_CATALOG_PATH } from "./ai-catalog";
import { API_CATALOG_PATH } from "./agent-discovery";
import { SITE_ORIGIN } from "./page-seo";

export const LLMS_TXT_PATH = "/llms.txt";
export const LLMS_TXT_CONTENT_TYPE = "text/plain; charset=utf-8";

/** llmstxt.org pointer file for AI crawlers. */
export function buildLlmsTxt(): string {
  return `# Fairplay India

> Public cricket ID and sports-exchange guides for India: Fairplay login, IPL, football, tennis, live casino, UPI deposits and WhatsApp support. No agent registration.

Fairplay is an offshore sports exchange plus casino. You must be 18+. This site does not publish a licence number, registered operator name, or user counts.

## Machine-readable

- [AI catalog](${SITE_ORIGIN}${AI_CATALOG_PATH}): MCP tools, agent skills, sitemap
- [API catalog](${SITE_ORIGIN}${API_CATALOG_PATH}): RFC 9727 linkset of discovery URLs
- [Sitemap](${SITE_ORIGIN}/sitemap.xml)
- [Auth for agents](${SITE_ORIGIN}/auth.md): none required
- Any HTML page also returns markdown when requested with \`Accept: text/markdown\`

## Start here

- [Home](${SITE_ORIGIN}/): what Fairplay is
- [What is Fairplay](${SITE_ORIGIN}/what-is-fairplay)
- [About](${SITE_ORIGIN}/about)
- [Legal status](${SITE_ORIGIN}/legal-status)
- [Contact](${SITE_ORIGIN}/contact-us)
- [All pages](${SITE_ORIGIN}/all-links)
- [Blog](${SITE_ORIGIN}/blog)
- [Writers](${SITE_ORIGIN}/authors)
- [2026 schedule](${SITE_ORIGIN}/schedule)

## Optional

- [MCP](${SITE_ORIGIN}/mcp)
- [Robots](${SITE_ORIGIN}/robots.txt)
`;
}
