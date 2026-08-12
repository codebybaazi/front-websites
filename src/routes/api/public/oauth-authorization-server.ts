import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/oauth-authorization-server')({
  server: {
    handlers: {
      GET: async () => {
        const domain = "https://cricbet99.co.in";
        const config = {
          "issuer": domain,
          "authorization_endpoint": `${domain}/auth/login`,
          "token_endpoint": `${domain}/api/public/auth/token`,
          "jwks_uri": `${domain}/.well-known/jwks.json`,
          "registration_endpoint": `${domain}/api/public/agent-registration`,
          "response_types_supported": ["code", "token", "id_token"],
          "subject_types_supported": ["public"],
          "id_token_signing_alg_values_supported": ["RS256"],
          "scopes_supported": ["openid", "profile", "email", "api:read", "agent:identity"],
          "token_endpoint_auth_methods_supported": ["client_secret_post", "client_secret_basic"],
          "claims_supported": ["aud", "exp", "iat", "iss", "sub", "email", "name"],
          "agent_auth": {
            "skill": "cricbet99-betting-assistant",
            "register_uri": `${domain}/api/public/agent-registration`,
            "identity_types_supported": ["identity_assertion", "anonymous"],
            "identity_assertion": {
              "assertion_types_supported": [
                "urn:ietf:params:oauth:token-type:id-jag", 
                "verified_email"
              ]
            },
            "anonymous": {
              "credential_types_supported": ["bearer"],
              "claim_uri": `${domain}/api/public/claims`
            },
            "credential_types_supported": ["oauth-client-secret", "jwt-bearer"],
            "revocation_uri": `${domain}/api/public/revoke`,
            "claims_uri": `${domain}/api/public/claims`,
            "events_supported": ["revocation"]
          }
        };

        return new Response(JSON.stringify(config, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }
  }
})
