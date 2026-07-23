import { createFileRoute } from "@tanstack/react-router";

// RFC 9728 OAuth 2.0 Protected Resource Metadata.
export const Route = createFileRoute("/.well-known/oauth-protected-resource")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = {
          resource: origin,
          authorization_servers: [origin],
          scopes_supported: ["openid", "profile", "email"],
          bearer_methods_supported: ["header"],
          resource_documentation: `${origin}/contact-us`,
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
