import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: async () => {
        const [
          { generateScheduleSitemap },
          { cricketFixtures },
          { footballFixtures },
          { tennisFixtures },
        ] = await Promise.all([
          import("@/lib/sitemap-utils"),
          import("@/data/cricket-fixtures"),
          import("@/data/football-fixtures"),
          import("@/data/tennis-fixtures"),
        ]);

        const sitemap = generateScheduleSitemap(
          cricketFixtures,
          footballFixtures,
          tennisFixtures,
        );

        return new Response(sitemap, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=18000",
            "X-Robots-Tag": "noindex, follow",
          },
        });
      },
    },
  },
});
