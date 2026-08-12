import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/openid-configuration')({
  server: {
    handlers: {
      GET: async () => {
        const domain = "https://cricbet99.co.in";
        const config = {
          "issuer": domain,
          "authorization_endpoint": `${domain}/auth/login`,
          "token_endpoint": `${domain}/api/public/auth/token`,
          "jwks_uri": `${domain}/.well-known/jwks.json`,
          "response_types_supported": ["code", "token", "id_token"],
          "subject_types_supported": ["public"],
          "id_token_signing_alg_values_supported": ["RS256"],
          "scopes_supported": ["openid", "profile", "email"],
          "token_endpoint_auth_methods_supported": ["client_secret_post", "client_secret_basic"],
          "claims_supported": ["aud", "exp", "iat", "iss", "sub", "email", "name"]
        };
        
        return new Response(JSON.stringify(config, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600'
          }
        });
      }
    }
  }
})
