import { createFileRoute } from "@tanstack/react-router";

// RFC 9728 OAuth 2.0 Protected Resource Metadata.
export const Route = createFileRoute("/.well-known/oauth-protected-resource")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = {
          resource: origin,
          resource_name: "sprintersbloom",
          resource_documentation: `${origin}/auth.md`,
          resource_policy_uri: `${origin}/privacy-policy`,
          resource_tos_uri: `${origin}/terms-and-conditions`,
          authorization_servers: [origin],
          jwks_uri: `${origin}/.well-known/jwks.json`,
          scopes_supported: ["openid", "profile", "email"],
          bearer_methods_supported: ["header"],
          resource_signing_alg_values_supported: ["RS256", "ES256"],
          token_endpoint_auth_methods_supported: ["none", "client_secret_basic"],
          revocation_endpoint: `${origin}/contact-us`,
          service_documentation: `${origin}/auth.md`,
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
