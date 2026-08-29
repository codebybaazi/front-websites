/**
 * A2A (Agent2Agent) Agent Card.
 *
 * Fairplay India exposes a public, read-only content agent: it answers questions about
 * blog posts, guides and site pages. There is no authentication and no write skill, so
 * the card advertises the "none" security scheme and read-only skills only.
 */
import { SITE_ORIGIN } from "./page-seo";

export const A2A_AGENT_CARD_PATHS = [
  "/.well-known/agent-card.json",
  "/.well-known/agent.json",
  "/.well-known/a2a/agent-card.json",
];

export const A2A_AGENT_CARD_CONTENT_TYPE = "application/json; charset=utf-8";

export function buildA2aAgentCard(): string {
  const card = {
    protocolVersion: "0.3.0",
    name: "Fairplay India Content Agent",
    description:
      "Read-only agent for Fairplay India: search and read cricket betting ID guides, IPL and sports coverage, casino explainers and site pages.",
    version: "1.0.0",
    url: `${SITE_ORIGIN}/mcp`,
    preferredTransport: "JSONRPC",
    provider: {
      organization: "Fairplay India",
      url: `${SITE_ORIGIN}/`,
    },
    documentationUrl: `${SITE_ORIGIN}/auth.md`,
    iconUrl: `${SITE_ORIGIN}/og-banner.jpg`,
    capabilities: {
      streaming: false,
      pushNotifications: false,
      stateTransitionHistory: false,
    },
    defaultInputModes: ["text/plain"],
    defaultOutputModes: ["text/plain", "text/markdown"],
    securitySchemes: {},
    security: [] as unknown[],
    skills: [
      {
        id: "search-blog-posts",
        name: "Search Fairplay blog posts",
        description:
          "Search the Fairplay India blog by keyword and return matching post titles, dates, categories and URLs.",
        tags: ["search", "blog", "cricket", "betting"],
        examples: [
          "Search Fairplay blog posts about IPL betting tips",
          "Find articles about Fairplay ID login security",
        ],
        inputModes: ["text/plain"],
        outputModes: ["text/plain", "text/markdown"],
      },
      {
        id: "read-blog-post",
        name: "Read a Fairplay blog post",
        description:
          "Fetch the full markdown content of any Fairplay India blog post by its slug or URL.",
        tags: ["read", "blog", "content"],
        examples: [
          "Read the post fairplay-id-security-tips-protect-your-id-login",
          "Summarise the latest Fairplay IPL betting guide",
        ],
        inputModes: ["text/plain"],
        outputModes: ["text/plain", "text/markdown"],
      },
      {
        id: "read-site-page",
        name: "Read a Fairplay site page",
        description:
          "Fetch the markdown rendering of any public Fairplay India page such as guides, sports pages, support or policies.",
        tags: ["read", "pages", "support"],
        examples: [
          "What does the Fairplay India support page say?",
          "Read the Fairplay app download guide",
        ],
        inputModes: ["text/plain"],
        outputModes: ["text/plain", "text/markdown"],
      },
    ],
    supportsAuthenticatedExtendedCard: false,
    additionalInterfaces: [
      { url: `${SITE_ORIGIN}/mcp`, transport: "JSONRPC" },
    ],
    "x-authentication-required": false,
    "x-access-model": "public-read-only",
  };

  return JSON.stringify(card, null, 2);
}
