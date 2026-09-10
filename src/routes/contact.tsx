import { createFileRoute, redirect } from "@tanstack/react-router";

/** Old /contact URL. Canonical page is /contact-us. */
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({
      to: "/$page",
      params: { page: "contact-us" },
      replace: true,
    });
  },
});
