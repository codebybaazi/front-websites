import { createFileRoute } from '@tanstack/react-router'
import { generateScheduleSitemap } from '@/lib/sitemap-utils'
import { cricketFixtures } from '@/data/cricket-fixtures'
import { footballFixtures } from '@/data/football-fixtures'
import { tennisFixtures } from '@/data/tennis-fixtures'

export const Route = createFileRoute('/sitemap/xml')({
  server: {
    handlers: {
      GET: async () => {
        const sitemap = generateScheduleSitemap(
          cricketFixtures,
          footballFixtures,
          tennisFixtures
        );

        return new Response(sitemap, {
          headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=18000',
            'X-Robots-Tag': 'noindex, follow'
          },
        })
      },
    },
  },
})
