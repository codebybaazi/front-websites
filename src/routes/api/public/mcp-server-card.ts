import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/mcp-server-card')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const baseUrl = `${url.protocol}//${url.host}`
        
        const serverCard = {
          "serverInfo": {
            "name": "Cricbet99 Intelligence Hub",
            "version": "1.0.0",
            "description": "AI-powered sports betting insights and match analysis for Cricbet99"
          },
          "transport": {
            "type": "sse",
            "endpoint": `${baseUrl}/api/public/mcp/sse`
          },
          "capabilities": {
            "resources": {
              "subscribe": true,
              "list": true
            },
            "prompts": {
              "list": true
            },
            "tools": {
              "list": true
            },
            "logging": {}
          },
          "instructions": `${baseUrl}/auth.md`
        }

        return new Response(JSON.stringify(serverCard, null, 2), {
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