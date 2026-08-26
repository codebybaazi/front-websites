import { createFileRoute } from "@tanstack/react-router";
import { FALLBACK_CONTACT, fetchWhatsAppContact } from "@/lib/whatsapp";

export const Route = createFileRoute("/api/public/whatsapp-number")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const host =
          request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
        const contact = (await fetchWhatsAppContact(host)) ?? FALLBACK_CONTACT;
        return new Response(JSON.stringify(contact), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        });
      },
    },
  },
});
