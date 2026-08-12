import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/api-catalog')({
  server: {
    handlers: {
      GET: async () => {
        const content = {
          "linkset": [
            {
              "anchor": "https://cricbet99.co.in/",
              "service-desc": [
                {
                  "href": "https://cricbet99.co.in/.well-known/oauth-protected-resource",
                  "type": "application/json"
                }
              ],
              "service-doc": [
                {
                  "href": "https://cricbet99.co.in/all-links",
                  "type": "text/html"
                }
              ],
              "status": [
                {
                  "href": "https://cricbet99.co.in/api/public/health",
                  "type": "application/json"
                }
              ]
            }
          ]
        };
        
        return new Response(JSON.stringify(content, null, 2), {
          headers: {
            'Content-Type': 'application/linkset+json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        });
      }
    }
  }
})
