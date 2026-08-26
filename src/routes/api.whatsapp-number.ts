import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { fetchWhatsAppNumber, hostnameFromRequest } from "@/lib/whatsapp";

export const Route = createFileRoute("/api/whatsapp-number")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const host = hostnameFromRequest(request);
        const number = await fetchWhatsAppNumber(host);
        return Response.json(
          { number, host },
          {
            headers: {
              "Cache-Control": "no-store, no-cache, must-revalidate",
              Pragma: "no-cache",
            },
          },
        );
      },
    },
  },
});
