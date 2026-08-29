/**
 * Agent Skills Discovery (RFC v0.2.0): a machine-readable index of the skills an
 * agent can use against this site, plus the markdown skill documents themselves.
 *
 * Every skill here is backed by the public read-only MCP server at /mcp, so no
 * credentials are needed to execute them.
 */
import { SITE_ORIGIN } from "./page-seo";

export const AGENT_SKILLS_INDEX_PATH = "/.well-known/agent-skills/index.json";
export const AGENT_SKILLS_INDEX_CONTENT_TYPE = "application/json; charset=utf-8";
export const AGENT_SKILL_CONTENT_TYPE = "text/markdown; charset=utf-8";
export const AGENT_SKILLS_DOC_PREFIX = "/.well-known/agent-skills/";

interface AgentSkill {
  name: string;
  /** RFC v0.2.0 skill types; all skills here are plain markdown instructions. */
  type: "markdown";
  description: string;
  /** Path of the markdown skill document, served from this origin. */
  path: string;
  body: string;
}

const SKILLS: AgentSkill[] = [
  {
    name: "browse-fairplay-blog",
    type: "markdown",
    description:
      "List, search and read Fairplay India blog posts (cricket betting guides, IPL and casino explainers) through the public MCP server.",
    path: `${AGENT_SKILLS_DOC_PREFIX}browse-fairplay-blog.md`,
    body: `# Skill: browse-fairplay-blog

Read Fairplay India's blog content without scraping HTML.

## Endpoint

Streamable HTTP MCP server: \`${SITE_ORIGIN}/mcp\` (public, no authentication).

## Tools

- \`list_blog_posts\` — paginated list of posts with slug, title, date, category and excerpt.
- \`search_blog_posts\` — keyword search across titles, excerpts and body text.
- \`get_blog_post\` — full markdown body of one post by \`slug\`.

## Recipe

1. Call \`search_blog_posts\` with the user's topic (e.g. "IPL betting id").
2. Take the best \`slug\` from the results.
3. Call \`get_blog_post\` with that \`slug\` and answer from the returned text.
4. Cite the canonical URL \`${SITE_ORIGIN}/posts/<slug>\`.

## Notes

- All content is public and read-only; there are no write operations.
- Any page is also available as markdown by sending \`Accept: text/markdown\`.
`,
  },
  {
    name: "read-fairplay-site-page",
    type: "markdown",
    description:
      "Fetch any Fairplay India site page (guides, comparisons, policies, support pages) as clean markdown for grounded answers.",
    path: `${AGENT_SKILLS_DOC_PREFIX}read-fairplay-site-page.md`,
    body: `# Skill: read-fairplay-site-page

Get grounded, citable text for any page on ${SITE_ORIGIN}.

## Options

1. MCP: call \`get_site_page\` on \`${SITE_ORIGIN}/mcp\` with a \`path\` such as \`/fairplay-id\`.
2. HTTP: request the page with header \`Accept: text/markdown\` and receive markdown
   instead of HTML (the \`x-markdown-tokens\` response header reports token size).

## Discovery

- \`${SITE_ORIGIN}/sitemap.xml\` — every indexable URL.
- \`${SITE_ORIGIN}/all-links\` — human-readable link index.
- \`${SITE_ORIGIN}/.well-known/api-catalog\` — machine-readable resource catalog.

## Notes

- No authentication: see \`${SITE_ORIGIN}/auth.md\`.
- Content covers Fairplay ID access, betting guides, casino pages and policies.
`,
  },
  {
    name: "fairplay-fixtures-lookup",
    type: "markdown",
    description:
      "Look up cricket, football and tennis fixture pages on Fairplay India, including match previews and related fixtures.",
    path: `${AGENT_SKILLS_DOC_PREFIX}fairplay-fixtures-lookup.md`,
    body: `# Skill: fairplay-fixtures-lookup

Find match and schedule information published on ${SITE_ORIGIN}.

## Recipe

1. Fetch \`${SITE_ORIGIN}/sitemap.xml\` and filter URLs starting with \`/match/\`.
2. Or open \`${SITE_ORIGIN}/matches\` and \`${SITE_ORIGIN}/schedule\` with
   \`Accept: text/markdown\` for a listing of upcoming fixtures.
3. Read an individual fixture at \`${SITE_ORIGIN}/match/<slug>\`, which includes the
   preview, key players and related fixtures.

## Notes

- Fixture pages are editorial previews, not live scores or live odds feeds.
- All requests are public and read-only.
`,
  },
];

function absolute(path: string) {
  return `${SITE_ORIGIN}${path}`;
}

const encoder = new TextEncoder();

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

/** Markdown body for a skill document path, or undefined when unknown. */
export function getAgentSkillDocument(pathname: string): string | undefined {
  return SKILLS.find((skill) => skill.path === pathname)?.body;
}

/** Discovery index served at {@link AGENT_SKILLS_INDEX_PATH}. */
export async function buildAgentSkillsIndex(): Promise<string> {
  const skills = await Promise.all(
    SKILLS.map(async (skill) => ({
      name: skill.name,
      type: skill.type,
      description: skill.description,
      url: absolute(skill.path),
      sha256: await sha256Hex(skill.body),
      version: "1.0.0",
      authentication: { required: false, type: "none" },
    })),
  );

  return JSON.stringify(
    {
      $schema: "https://agentskills.dev/schemas/v0.2.0/index.json",
      version: "0.2.0",
      publisher: {
        name: "Fairplay India",
        url: `${SITE_ORIGIN}/`,
        contact: `${SITE_ORIGIN}/contact-us`,
      },
      skills,
    },
    null,
    2,
  );
}
