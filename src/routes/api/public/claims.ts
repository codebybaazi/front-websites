import { createFileRoute } from '@tanstack/react-router'

const CORS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'public, max-age=3600',
  'Access-Control-Allow-Origin': '*',
}

export const Route = createFileRoute('/api/public/claims')({
  server: {
    handlers: {
      GET: async () =>
        new Response(
          JSON.stringify(
            {
              issuer: 'https://cricbet99.co.in',
              claims_supported: ['sub', 'iss', 'aud', 'exp', 'iat', 'email', 'name', 'agent_id'],
              credential_types_supported: ['bearer', 'oauth-client-secret', 'jwt-bearer'],
              documentation: 'https://cricbet99.co.in/auth.md',
            },
            null,
            2,
          ),
          { headers: CORS },
        ),
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: { ...CORS, 'Access-Control-Allow-Methods': 'GET, OPTIONS' },
        }),
    },
  },
})
