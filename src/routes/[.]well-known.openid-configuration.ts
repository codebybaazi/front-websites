import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "@/data/site";

export const Route = createFileRoute("/.well-known/openid-configuration")({
  server: {
    handlers: {
      GET: async () => {
        const body = {
          issuer: siteUrl,
          authorization_endpoint: `${siteUrl}/oauth/authorize`,
          token_endpoint: `${siteUrl}/oauth/token`,
          userinfo_endpoint: `${siteUrl}/oauth/userinfo`,
          registration_endpoint: `${siteUrl}/oauth/register`,
          revocation_endpoint: `${siteUrl}/oauth/revoke`,
          introspection_endpoint: `${siteUrl}/oauth/introspect`,
          end_session_endpoint: `${siteUrl}/oauth/logout`,
          jwks_uri: `${siteUrl}/.well-known/jwks.json`,
          service_documentation: `${siteUrl}/`,
          response_types_supported: ["code", "id_token", "code id_token"],
          response_modes_supported: ["query", "fragment", "form_post"],
          grant_types_supported: [
            "authorization_code",
            "refresh_token",
            "client_credentials",
          ],
          subject_types_supported: ["public"],
          id_token_signing_alg_values_supported: ["RS256"],
          scopes_supported: ["openid", "profile", "email", "offline_access"],
          token_endpoint_auth_methods_supported: [
            "client_secret_basic",
            "client_secret_post",
            "none",
          ],
          code_challenge_methods_supported: ["S256", "plain"],
          claims_supported: [
            "sub",
            "iss",
            "aud",
            "exp",
            "iat",
            "name",
            "email",
            "email_verified",
            "preferred_username",
          ],
          claim_types_supported: ["normal"],
          ui_locales_supported: ["en-IN", "en"],
          request_parameter_supported: false,
          request_uri_parameter_supported: false,
          require_request_uri_registration: false,
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
