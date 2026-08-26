import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/start-server-core";
import { FALLBACK_CONTACT, fetchWhatsAppContact } from "./whatsapp";

export const getWhatsAppContact = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const req = getRequest();
    const host =
      req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "";
    return (await fetchWhatsAppContact(host, 2000)) ?? FALLBACK_CONTACT;
  } catch {
    return FALLBACK_CONTACT;
  }
});
