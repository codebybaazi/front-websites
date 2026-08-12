import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/api-catalog')({
  server: {
    handlers: {
      GET: async () => {
        // RFC 9727: API Catalog for automated discovery
        // RFC 9264: application/linkset+json format
        const content = {
          "linkset": [
            {
              "anchor": "https://cricbet99.co.in/",
              "rel": "api-catalog",
              "service-desc": [
                {
                  "href": "https://cricbet99.co.in/.well-known/oauth-protected-resource",
                  "type": "application/json"
                }
              ],
              "service-doc": [
                {
                  "href": "https://cricbet99.co.in/auth.md",
                  "type": "text/markdown"
                }
              ],
              "status": [
                {
                  "href": "https://cricbet99.co.in/api/public/health",
                  "type": "application/json"
                }
              ]
            },
            {
              "anchor": "https://cricbet99.co.in/matches",
              "service-desc": [
                {
                  "href": "https://cricbet99.co.in/api/public/match-data",
                  "type": "application/json"
                }
              ],
              "service-doc": [
                {
                  "href": "https://cricbet99.co.in/schedule",
                  "type": "text/html"
                }
              ]
            },
            {
              "anchor": "https://cricbet99.co.in/api/public/agent-skills-index",
              "service-desc": [
                {
                  "href": "https://cricbet99.co.in/.well-known/agent-skills/index.json",
                  "type": "application/json"
                }
              ],
              "service-doc": [
                {
                  "href": "https://cricbet99.co.in/all-links",
                  "type": "text/html"
                }
              ]
            }
          ]
        };
        
        return new Response(JSON.stringify(content, null, 2), {
          headers: {
            'Content-Type': 'application/linkset+json',
            'Cache-Control': 'public, max-age=3600, must-revalidate',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }
  }
})