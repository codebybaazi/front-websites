import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/agent-registration')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          // Mock registration success
          return new Response(JSON.stringify({
            status: "success",
            message: "Agent registration received. Identity being verified.",
            agent_id: `agent_${Math.random().toString(36).substr(2, 9)}`,
            next_steps: "https://cricbet99.co.in/auth.md#post-registration"
          }), {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        } catch (e) {
          return new Response(JSON.stringify({ error: "Invalid registration payload" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      },
      OPTIONS: async () => {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          }
        });
      }
    }
  }
})
