import { defineMcp } from "@lovable.dev/mcp-js";
import type { AnyToolDefinition } from "@lovable.dev/mcp-js";
import getBlogPostTool from "./tools/get-blog-post";
import getSitePageTool from "./tools/get-site-page";
import listBlogPostsTool from "./tools/list-blog-posts";
import searchBlogPostsTool from "./tools/search-blog-posts";

export default defineMcp({
  name: "fairplay-india",
  title: "Fairplay India",
  version: "1.0.0",
  instructions:
    "Read-only tools for Fairplay India, a public information site about Fairplay IDs, cricket betting, sports markets and live casino games. Use `list_blog_posts` and `search_blog_posts` to discover guides, `get_blog_post` to read one, and `get_site_page` to read any other public page as Markdown. All data is public; no authentication is required.",
  // Cast: exactOptionalPropertyTypes makes the SDK's optional `outputSchema` unassignable
  // for tools that omit it.
  tools: [listBlogPostsTool, searchBlogPostsTool, getBlogPostTool, getSitePageTool] as unknown as AnyToolDefinition[],
});
