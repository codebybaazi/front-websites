import { createFileRoute } from "@tanstack/react-router";

// Empty JWKS — no keys are published because the site does not issue tokens.
export const Route = createFileRoute("/.well-known/jwks.json")({
  server: {
    handlers: {
      GET: async () =>
        new Response(JSON.stringify({ keys: [] }), {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
