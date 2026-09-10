import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl, siteName } from "@/data/site";

export const Route = createFileRoute("/.well-known/mcp/server-card.json")({
  server: {
    handlers: {
      GET: async () => {
        const body = {
          schemaVersion: "2025-06-18",
          protocolVersion: "2025-06-18",
          serverInfo: {
            name: "lotus365-mcp",
            title: `${siteName} MCP Server`,
            version: "0.1.0",
            description:
              "Model Context Protocol server for Lotus365 — exposes public site content, FAQs, and cricket ID onboarding info for AI agent discovery and retrieval.",
            vendor: {
              name: siteName,
              url: siteUrl,
              
            },
            homepage: siteUrl,
            documentation: `${siteUrl}/faq`,
            license: "proprietary",
          },
          transport: {
            type: "streamable-http",
            endpoint: `${siteUrl}/mcp`,
            methods: ["POST", "GET"],
            contentTypes: ["application/json", "text/event-stream"],
          },
          endpoints: {
            mcp: `${siteUrl}/mcp`,
            sse: `${siteUrl}/mcp`,
          },
          capabilities: {
            tools: { listChanged: false },
            resources: { listChanged: false, subscribe: false },
            prompts: { listChanged: false },
            logging: {},
            completions: {},
          },
          instructions:
            "Use this MCP server to retrieve public information about Lotus365 — cricket ID creation, deposit/withdrawal options, bonuses, and support contacts. All content is public; no authentication required.",
          authentication: {
            type: "none",
            required: false,
          },
          contact: {
            
            url: `${siteUrl}/contact-us`,
          },
          documentation: `${siteUrl}/faq`,
          termsOfService: `${siteUrl}/terms`,
          privacyPolicy: `${siteUrl}/privacy`,
          languages: ["en", "hi"],
          tags: ["cricket", "gaming", "india", "lotus365", "sports"],
        };
        return new Response(JSON.stringify(body, null, 2), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
