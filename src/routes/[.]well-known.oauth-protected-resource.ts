import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "@/data/site";

export const Route = createFileRoute("/.well-known/oauth-protected-resource")({
  server: {
    handlers: {
      GET: async () => {
        const body = {
          resource: siteUrl,
          authorization_servers: [siteUrl],
          scopes_supported: ["openid", "profile", "email", "offline_access"],
          bearer_methods_supported: ["header"],
          resource_documentation: `${siteUrl}/`,
          resource_signing_alg_values_supported: ["RS256"],
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
