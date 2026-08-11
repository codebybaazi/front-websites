import { createFileRoute } from '@tanstack/react-router'
import { generateRobotsTxt } from '@/lib/robots-utils'

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: async () => {
        return new Response(generateRobotsTxt(), {
          headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=86400, s-age=86400',
          },
        })
      },
    },
  },
})
