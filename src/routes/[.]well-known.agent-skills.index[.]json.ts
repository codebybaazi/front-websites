import { createFileRoute } from "@tanstack/react-router";

// Agent Skills Discovery Index (RFC v0.2.0)
// https://github.com/cloudflare/agent-skills-discovery-rfc
export const Route = createFileRoute("/.well-known/agent-skills/index.json")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify(discoveryIndex, null, 2), {
          status: 200,
          headers: discoveryHeaders,
        });
      },
      HEAD: async () => {
        return new Response(null, {
          status: 200,
          headers: discoveryHeaders,
        });
      },
    },
  },
});

const discoveryHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "public, max-age=3600",
  "access-control-allow-origin": "*",
};

const discoveryIndex = {
  $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
  skills: [
    {
      name: "sprintersbloom-discovery",
      type: "skill-md",
      description:
        "Discovery guide for the sprintersbloom web app: enumerates public routes, describes the site's purpose, and tells agents how to navigate, cite, and link to canonical pages on this domain.",
      url: "/.well-known/agent-skills/sprinters-discovery/SKILL.md",
      digest: "sha256:0fa5cec6f630efff13e08fdf06126f29c2e7ddfb0943047528a2134f87c5fc2a",
    },
  ],
};
