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
          agent_auth: {
            skill: "auth.md",
            documentation_uri: `${siteUrl}/auth.md`,
            register_uri: `${siteUrl}/oauth/register`,
            claim_uri: `${siteUrl}/oauth/claim`,
            revocation_uri: `${siteUrl}/oauth/revoke`,
            introspection_uri: `${siteUrl}/oauth/introspect`,
            authorization_servers: [siteUrl],
            supported_identity_types: [
              "identity_assertion",
              "anonymous",
            ],
            identity_types_supported: [
              "identity_assertion",
              "anonymous",
            ],
            supported_credential_types: [
              "client_secret_basic",
              "client_secret_post",
              "none",
              "pkce",
            ],
            credential_types_supported: [
              "client_secret_basic",
              "client_secret_post",
              "none",
              "pkce",
            ],
            identity_assertion: {
              assertion_types_supported: [
                "id-jag",
                "urn:ietf:params:oauth:token-type:id-jag",
                "verified_email",
              ],
              credential_types_supported: [
                "client_secret_basic",
                "client_secret_post",
                "none",
                "pkce",
              ],
              claim_uri: `${siteUrl}/oauth/claim`,
            },
            anonymous: {
              credential_types_supported: ["none", "pkce"],
              claim_uri: `${siteUrl}/oauth/claim`,
            },
            events_supported: ["revocation"],
          },
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
