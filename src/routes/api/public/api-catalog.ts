import { createFileRoute } from '@tanstack/react-router'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const Route = createFileRoute('/api/public/api-catalog')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const filePath = join(process.cwd(), 'public/.well-known/api-catalog')
          const content = await readFile(filePath, 'utf-8')
          return new Response(content, {
            headers: {
              'Content-Type': 'application/linkset+json',
              'Cache-Control': 'no-store, no-cache, must-revalidate'
            }
          })
        } catch (error) {
          console.error('Failed to read api-catalog file:', error)
          return new Response('Not Found', { status: 404 })
        }
      }
    }
  }
})
