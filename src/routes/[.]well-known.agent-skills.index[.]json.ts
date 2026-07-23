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
      name: "sprinters-discovery",
      type: "skill-md",
      description:
        "Discover Sprinters Online Gaming pages, support channels, and responsible-gaming resources.",
      url: "/.well-known/agent-skills/sprinters-discovery/SKILL.md",
      digest: "sha256:65adbd567f9900e2d1104f3141fb9623f6407f1e2b8a1d6398446811b004b655",
    },
  ],
};
