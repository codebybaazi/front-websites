import { useRouterState } from "@tanstack/react-router";
import { InternalLinkGrid } from "@/components/InternalLinkGrid";
import { getHubLinksForPathname } from "@/utils/internal-links";

export function PageInternalLinks() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname === "/all-links" || pathname.startsWith("/posts/")) return null;

  return (
    <InternalLinkGrid
      links={getHubLinksForPathname(pathname)}
      intro="ID, markets, wallet and support that sit next to this topic."
    />
  );
}
