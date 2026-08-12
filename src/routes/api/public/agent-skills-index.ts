import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/agent-skills-index')({
  server: {
    handlers: {
      GET: async () => {
        const skillsIndex = {
          "$schema": "https://agent-skills.org/schemas/v0.2.0/index.json",
          "skills": [
            {
              "name": "Cricket Betting Intelligence",
              "type": "tool",
              "description": "Provides real-time analytics and predictive insights for cricket matches, specializing in IPL 2026.",
              "url": "https://cricbet99.co.in/api/public/mcp-server-card",
              "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" 
            },
            {
              "name": "Real-time Odds Analysis",
              "type": "resource",
              "description": "A live stream of betting odds and market movements across major sports exchanges.",
              "url": "https://cricbet99.co.in/matches",
              "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            },
            {
              "name": "Market Sentiment",
              "type": "prompt",
              "description": "Analyzes public sentiment and betting volume to identify market trends and value bets.",
              "url": "https://cricbet99.co.in/blog",
              "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            }
          ]
        };

        return new Response(JSON.stringify(skillsIndex, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600'
          }
        });
      }
    }
  }
})
