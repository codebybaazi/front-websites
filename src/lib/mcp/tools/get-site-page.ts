import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_ORIGIN } from "@/utils/page-seo";

export default defineTool({
  name: "get_site_page",
  title: "Get site page as Markdown",
  description:
    "Fetch any public Fairplay India page by path (e.g. /betting, /app, /fairplay-id) and return its readable Markdown content.",
  inputSchema: {
    path: z
      .string()
      .trim()
      .min(1)
      .describe("Site-relative path starting with '/', e.g. /betting."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ path }) => {
    if (!path.startsWith("/") || path.startsWith("//")) {
      throw new ToolError("path must be a site-relative path starting with a single '/'.");
    }

    const url = `${SITE_ORIGIN}${path}`;
    const response = await fetch(url, { headers: { accept: "text/markdown" } });
    if (!response.ok) throw new ToolError(`${url} returned HTTP ${response.status}.`);

    const markdown = await response.text();
    return {
      content: [{ type: "text", text: markdown }],
      structuredContent: { url, markdown },
    };
  },
});
