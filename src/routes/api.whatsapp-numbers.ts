import { createFileRoute } from "@tanstack/react-router";
import { fetchHostNumbers } from "@/lib/whatsapp";

export const Route = createFileRoute("/api/whatsapp-numbers")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const map = await fetchHostNumbers();
          return Response.json(map, {
            headers: { "cache-control": "no-store, no-cache" },
          });
        } catch {
          return Response.json(
            {},
            { headers: { "cache-control": "no-store, no-cache" } },
          );
        }
      },
    },
  },
});
