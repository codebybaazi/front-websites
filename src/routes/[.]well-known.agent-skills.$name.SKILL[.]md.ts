import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { skillContents } from "./[.]well-known.agent-skills.index[.]json";

export const Route = createFileRoute("/.well-known/agent-skills/$name/SKILL.md")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const body = skillContents[params.name];
        if (!body) return new Response("Not found", { status: 404 });
        return new Response(body, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
