import { createFileRoute } from "@tanstack/react-router";

// MCP Server Card (SEP-1649) — advertises the site's MCP surface for agents.
export const Route = createFileRoute("/.well-known/mcp/server-card.json")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = {
          $schema:
            "https://raw.githubusercontent.com/modelcontextprotocol/modelcontextprotocol/main/schema/server-card.schema.json",
          serverInfo: {
            name: "sprintershub-mcp",
            title: "SprintersHub MCP",
            version: "0.1.0",
            description:
              "Discovery card for SprintersHub. No public MCP tools are exposed yet; contact the site owner for agent access.",
            documentation: `${origin}/auth.md`,
            homepage: origin,
          },
          transport: {
            type: "http",
            endpoint: `${origin}/mcp`,
          },
          endpoints: {
            mcp: `${origin}/mcp`,
          },
          capabilities: {
            tools: { listChanged: false },
            resources: { listChanged: false, subscribe: false },
            prompts: { listChanged: false },
            logging: {},
          },
          auth: {
            type: "oauth2",
            protected_resource_metadata: `${origin}/.well-known/oauth-protected-resource`,
            authorization_server_metadata: `${origin}/.well-known/oauth-authorization-server`,
          },
          contact: `${origin}/contact-us`,
        };
        return new Response(JSON.stringify(body, null, 2), {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
