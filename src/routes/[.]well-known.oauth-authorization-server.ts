import { createFileRoute } from '@tanstack/react-router'

const config = {
  issuer: "https://mahadevbookss.com",
  authorization_endpoint: "https://mahadevbookss.com/oauth/authorize",
  token_endpoint: "https://mahadevbookss.com/oauth/token",
  jwks_uri: "https://mahadevbookss.com/.well-known/jwks.json",
  registration_endpoint: "https://mahadevbookss.com/oauth/register",
  revocation_endpoint: "https://mahadevbookss.com/oauth/revoke",
  introspection_endpoint: "https://mahadevbookss.com/oauth/introspect",
  scopes_supported: ["openid", "profile", "email", "offline_access"],
  response_types_supported: ["code", "token"],
  response_modes_supported: ["query", "fragment", "form_post"],
  grant_types_supported: ["authorization_code", "refresh_token", "client_credentials"],
  token_endpoint_auth_methods_supported: ["client_secret_basic", "client_secret_post", "none"],
  code_challenge_methods_supported: ["S256", "plain"],
  service_documentation: "https://mahadevbookss.com/.well-known/agents.json",
  agent_auth: {
    skill: "agent-registration",
    register_uri: "https://mahadevbookss.com/oauth/register",
    auth_metadata_uri: "https://mahadevbookss.com/auth.md",
    registration_methods: [
      {
        type: "dynamic_client_registration",
        protocol: "RFC7591",
        register_uri: "https://mahadevbookss.com/oauth/register",
        token_endpoint: "https://mahadevbookss.com/oauth/token",
        grant_types_supported: ["authorization_code", "client_credentials", "refresh_token"],
        token_endpoint_auth_methods_supported: [
          "client_secret_basic",
          "client_secret_post",
          "private_key_jwt",
          "none",
        ],
        credential_types_supported: ["client_secret", "private_key_jwt", "dpop"],
        scopes_supported: ["openid", "profile", "email", "offline_access"],
      },
    ],
    identity_types_supported: [
      "human",
      "agent",
      "service_account",
      "identity_assertion",
      "anonymous",
    ],
    credential_types_supported: [
      "client_secret",
      "private_key_jwt",
      "dpop",
      "mtls",
      "api_key",
    ],
    identity_assertion: {
      assertion_types_supported: [
        "urn:ietf:params:oauth:token-type:id-jag",
        "verified_email",
      ],
      credential_types_supported: ["client_secret", "private_key_jwt", "dpop"],
    },
    anonymous: {
      credential_types_supported: ["dpop", "api_key"],
    },
    events_supported: ["registration", "revocation", "claim"],
    claim_uri: "https://mahadevbookss.com/oauth/claim",
    revocation_uri: "https://mahadevbookss.com/oauth/revoke",
    introspection_uri: "https://mahadevbookss.com/oauth/introspect",
    documentation_uri: "https://mahadevbookss.com/auth.md",
  },
}

export const Route = createFileRoute('/.well-known/oauth-authorization-server')({
  server: {
    handlers: {
      GET: async () =>
        new Response(JSON.stringify(config, null, 2), {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
          },
        }),
    },
  },
})
