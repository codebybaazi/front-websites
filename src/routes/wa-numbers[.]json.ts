import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { fetchNumbersMapFromSource } from "@/lib/whatsapp";

export const Route = createFileRoute("/wa-numbers.json")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const map = await fetchNumbersMapFromSource();
          return new Response(JSON.stringify(map), {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "no-store, no-cache, must-revalidate",
              Pragma: "no-cache",
            },
          });
        } catch {
          return new Response("{}", {
            status: 502,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "no-store",
            },
          });
        }
      },
    },
  },
});
