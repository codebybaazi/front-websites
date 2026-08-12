import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/oauth-protected-resource')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const baseUrl = `${url.protocol}//${url.host}`
        
        const metadata = {
          resource: baseUrl,
          authorization_servers: [
            baseUrl
          ],
          scopes_supported: [
            "openid",
            "profile",
            "email",
            "api:read",
            "api:write"
          ],
          bearer_methods_supported: ["header"],
          resource_documentation: `${baseUrl}/all-links`
        }

        return new Response(JSON.stringify(metadata, null, 2), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600'
          }
        })
      }
    }
  }
})