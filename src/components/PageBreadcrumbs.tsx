import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, crumbsForPathname } from "@/utils/breadcrumb-schema";

export function PageBreadcrumbs() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const crumbs = crumbsForPathname(pathname);
  if (crumbs.length < 2) return null;
  const schema = breadcrumbJsonLd(pathname);

  return (
    <div className="border-b border-white/5 bg-background/80 backdrop-blur-sm">
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="container max-w-7xl mx-auto px-4 md:px-6 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <li key={`${crumb.path}-${index}`} className="flex items-center gap-1.5 min-w-0">
                {index > 0 && <ChevronRight className="w-3 h-3 shrink-0 text-white/25" aria-hidden="true" />}
                {last ? (
                  <span className="text-primary truncate max-w-[16rem] md:max-w-md">{crumb.name}</span>
                ) : crumb.path === "/" ? (
                  <Link to="/" className="hover:text-primary transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <a href={crumb.path} className="hover:text-primary transition-colors truncate max-w-[10rem]">
                    {crumb.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
