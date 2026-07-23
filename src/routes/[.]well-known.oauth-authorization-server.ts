import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "@/data/site";

export const Route = createFileRoute("/.well-known/oauth-authorization-server")({
  server: {
    handlers: {
      GET: async () => {
        const body = {
          issuer: siteUrl,
          authorization_endpoint: `${siteUrl}/oauth/authorize`,
          token_endpoint: `${siteUrl}/oauth/token`,
          registration_endpoint: `${siteUrl}/oauth/register`,
          revocation_endpoint: `${siteUrl}/oauth/revoke`,
          introspection_endpoint: `${siteUrl}/oauth/introspect`,
          jwks_uri: `${siteUrl}/.well-known/jwks.json`,
          service_documentation: `${siteUrl}/`,
          response_types_supported: ["code"],
          response_modes_supported: ["query", "fragment", "form_post"],
          grant_types_supported: [
            "authorization_code",
            "refresh_token",
            "client_credentials",
          ],
          token_endpoint_auth_methods_supported: [
            "client_secret_basic",
            "client_secret_post",
            "none",
          ],
          revocation_endpoint_auth_methods_supported: [
            "client_secret_basic",
            "client_secret_post",
          ],
          introspection_endpoint_auth_methods_supported: [
            "client_secret_basic",
            "client_secret_post",
          ],
          code_challenge_methods_supported: ["S256", "plain"],
          scopes_supported: ["openid", "profile", "email", "offline_access"],
          ui_locales_supported: ["en-IN", "en"],
          request_parameter_supported: false,
          request_uri_parameter_supported: false,
          agent_auth: {
            skill: "auth.md",
            register_uri: `${siteUrl}/oauth/register`,
            supported_identity_types: ["human", "agent", "service"],
            supported_credential_types: [
              "client_secret_basic",
              "client_secret_post",
              "none",
              "pkce",
            ],
            identity_types_supported: [
              "identity_assertion",
              "anonymous",
            ],
            identity_assertion: {
              assertion_types_supported: [
                "urn:ietf:params:oauth:token-type:id-jag",
                "verified_email",
              ],
              credential_types_supported: [
                "client_secret_basic",
                "client_secret_post",
                "none",
                "pkce",
              ],
            },
            anonymous: {
              credential_types_supported: ["none", "pkce"],
            },
            registration_methods_supported: [
              {
                method: "dynamic_client_registration",
                register_uri: `${siteUrl}/oauth/register`,
                identity_types_supported: [
                  "identity_assertion",
                  "anonymous",
                ],
                credential_types_supported: [
                  "client_secret_basic",
                  "client_secret_post",
                  "none",
                  "pkce",
                ],
                claim_uri: `${siteUrl}/oauth/claim`,
                revocation_uri: `${siteUrl}/oauth/revoke`,
              },
            ],
            events_supported: ["revocation"],
            claim_uri: `${siteUrl}/oauth/claim`,
            revocation_uri: `${siteUrl}/oauth/revoke`,
            documentation_uri: `${siteUrl}/auth.md`,
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
