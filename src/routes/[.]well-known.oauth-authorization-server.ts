import { createFileRoute } from "@tanstack/react-router";

// RFC 8414 OAuth 2.0 Authorization Server Metadata.
// The site has no first-party protected APIs; this document advertises that
// there is no interactive authorization server for agent flows and points to
// the site's contact page for machine-to-machine access requests.
export const Route = createFileRoute("/.well-known/oauth-authorization-server")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = {
          issuer: origin,
          authorization_endpoint: `${origin}/contact-us`,
          token_endpoint: `${origin}/contact-us`,
          jwks_uri: `${origin}/.well-known/jwks.json`,
          grant_types_supported: ["authorization_code", "refresh_token"],
          response_types_supported: ["code"],
          code_challenge_methods_supported: ["S256"],
          token_endpoint_auth_methods_supported: ["none"],
          service_documentation: `${origin}/contact-us`,
          agent_auth: {
            skill: "authMd",
            register_uri: `${origin}/contact-us`,
            documentation_uri: `${origin}/auth.md`,
            identity_types_supported: ["identity_assertion", "anonymous"],
            credential_types_supported: ["bearer"],
            claim_uri: `${origin}/auth.md`,
            revocation_uri: `${origin}/contact-us`,
            events_supported: ["revocation"],
            identity_assertion: {
              assertion_types_supported: [
                "urn:ietf:params:oauth:token-type:id-jag",
                "verified_email",
              ],
              credential_types_supported: ["bearer"],
              claim_uri: `${origin}/auth.md`,
            },
            anonymous: {
              credential_types_supported: ["bearer"],
              claim_uri: `${origin}/auth.md`,
            },
          },
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
