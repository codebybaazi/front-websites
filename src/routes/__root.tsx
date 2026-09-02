import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";


import appCss from "../styles.css?url";
import { OG_IMAGE } from "../utils/page-seo";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { PageInternalLinks } from "../components/PageInternalLinks";
import { PageBreadcrumbs } from "../components/PageBreadcrumbs";
import { WhatsAppNumberSync } from "../components/WhatsAppNumberSync";
import { getWhatsAppNumber, WHATSAPP_NUMBER_META_NAME } from "../lib/whatsapp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="kicker justify-center">Page missing</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          That address does not exist
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The URL may have changed, or the page was retired. Use the site index or go back to the home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home
          </Link>
          <Link
            to="/all-links"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
          >
            Site index
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="kicker justify-center">Load failed</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          This screen did not finish loading
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          That is on us. Refresh once — it usually comes back clean.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reload page
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
          >
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "Fairplay | Cricket ID, live markets and casino on one login" },
      { name: "description", content: "Open a Fairplay cricket ID for IPL, football, tennis and live tables. UPI into the wallet, WhatsApp for the desk, and payouts that usually land within 180 minutes of settlement." },
      { name: "author", content: "Fairplay" },
      { name: "robots", content: "index, follow" },
      // Hands the host-matched number to the client bundle before it renders.
      { name: WHATSAPP_NUMBER_META_NAME, content: getWhatsAppNumber() },
      { property: "og:title", content: "Fairplay | Cricket ID for IPL, sports and tables" },
      { property: "og:description", content: "One Fairplay login covers cricket, football, tennis and live casino. Fund with UPI, message WhatsApp, withdraw after the result." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Fairplay" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@FairplayElite" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <motion.div
          className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left brand-rule"
          style={{ scaleX }}
        />
        <SiteHeader />
        <main className="flex-1">
          <PageBreadcrumbs />
          <Outlet />
          <PageInternalLinks />
          <FloatingWhatsApp />
          <WhatsAppNumberSync />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}


