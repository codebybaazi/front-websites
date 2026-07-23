import { createFileRoute } from '@tanstack/react-router'

const ISSUER = "https://mahadevbookss.com"

const metadata = {
  resource: ISSUER,
  resource_name: "Mahadev Book API",
  resource_documentation: `${ISSUER}/.well-known/agents.json`,
  resource_policy_uri: `${ISSUER}/policies`,
  resource_tos_uri: `${ISSUER}/terms-conditions`,
  authorization_servers: [ISSUER],
  jwks_uri: `${ISSUER}/.well-known/jwks.json`,
  scopes_supported: ["openid", "profile", "email", "offline_access", "address", "phone"],
  bearer_methods_supported: ["header", "body", "query"],
  resource_signing_alg_values_supported: ["RS256", "RS384", "ES256", "ES384", "PS256"],
  resource_encryption_alg_values_supported: ["RSA-OAEP", "RSA-OAEP-256"],
  resource_encryption_enc_values_supported: ["A128CBC-HS256", "A256GCM"],
  tls_client_certificate_bound_access_tokens: false,
  authorization_details_types_supported: ["oauth_authorization_server"],
  dpop_signing_alg_values_supported: ["RS256", "ES256", "PS256"],
  dpop_bound_access_tokens_required: false,
}

export const Route = createFileRoute('/.well-known/oauth-protected-resource')({
  server: {
    handlers: {
      GET: async () =>
        new Response(JSON.stringify(metadata, null, 2), {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
          },
        }),
    },
  },
})
