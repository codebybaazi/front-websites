import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/oauth-protected-resource')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // OAuth Protected Resource Metadata (RFC 9470 / Draft)
        // Helps agents discover how to authenticate to this site's APIs
        const baseUrl = 'https://cricbet99.co.in'
        
        const metadata = {
          "resource": baseUrl,
          "authorization_servers": [
            baseUrl
          ],
          "scopes_supported": [
            "openid",
            "profile",
            "email",
            "agent:identity",
            "api:read"
          ],
          "bearer_methods_supported": ["header"],
          "resource_documentation": `${baseUrl}/auth.md`,
          "ui_locales_supported": ["en-IN", "hi-IN"],
          "agent_auth": {
            "skill": "cricbet99-betting-assistant",
            "register_uri": `${baseUrl}/api/public/agent-registration`,
            "identity_types_supported": ["identity_assertion", "anonymous"]
          }
        }

        return new Response(JSON.stringify(metadata, null, 2), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*'
          }
        })
      }
    }
  }
})