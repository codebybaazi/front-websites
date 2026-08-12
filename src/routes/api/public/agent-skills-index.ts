import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/agent-skills-index')({
  server: {
    handlers: {
      GET: async () => {
        const skillsIndex = {
          "$schema": "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
          "skills": [
            {
              "name": "cricket-betting-intel",
              "type": "skill-md",
              "description": "Real-time analytics and predictive insights for cricket matches, specializing in IPL 2026.",
              "url": "https://cricbet99.co.in/.well-known/agent-skills/cricket-betting.md",
              "digest": "sha256:3f3affbb9706dfadc7b7fdd8b79dc900f80d41b303e63b9f1784cd529c74b87e"
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
