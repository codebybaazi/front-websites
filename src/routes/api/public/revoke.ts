import { createFileRoute } from '@tanstack/react-router'

const CORS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

export const Route = createFileRoute('/api/public/revoke')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let token = ''
        try {
          const body = (await request.json()) as { token?: string }
          token = typeof body?.token === 'string' ? body.token : ''
        } catch {
          token = ''
        }
        if (!token) {
          return new Response(JSON.stringify({ error: 'invalid_request' }), {
            status: 400,
            headers: CORS,
          })
        }
        return new Response(JSON.stringify({ status: 'revoked' }), { status: 200, headers: CORS })
      },
      GET: async () =>
        new Response(
          JSON.stringify({
            revocation_endpoint: 'https://cricbet99.co.in/api/public/revoke',
            revocation_endpoint_auth_methods_supported: ['client_secret_post', 'bearer'],
            events_supported: ['revocation'],
            documentation: 'https://cricbet99.co.in/auth.md',
          }),
          { headers: { ...CORS, 'Cache-Control': 'public, max-age=3600' } },
        ),
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: { ...CORS, 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS' },
        }),
    },
  },
})
