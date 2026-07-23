import { createFileRoute } from "@tanstack/react-router";

// Agent Skills Discovery Index (RFC v0.2.0)
// https://github.com/cloudflare/agent-skills-discovery-rfc
export const Route = createFileRoute("/.well-known/agent-skills/index.json")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;

        const artifacts: Array<{
          name: string;
          type: "skill-md" | "archive";
          description: string;
          url: string;
        }> = [
          {
            name: "auth-md",
            type: "skill-md",
            description:
              "Agent authentication and registration instructions for SprintersHub.",
            url: `${origin}/auth.md`,
          },
        ];

        const skills = await Promise.all(
          artifacts.map(async (a) => {
            const res = await fetch(a.url);
            const buf = await res.arrayBuffer();
            const hash = await crypto.subtle.digest("SHA-256", buf);
            const hex = Array.from(new Uint8Array(hash))
              .map((b) => b.toString(16).padStart(2, "0"))
              .join("");
            return { ...a, digest: `sha256:${hex}` };
          }),
        );

        const body = {
          $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
          skills,
        };

        return new Response(JSON.stringify(body, null, 2), {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "public, max-age=300",
          },
        });
      },
    },
  },
});
