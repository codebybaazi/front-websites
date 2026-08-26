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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WebMCPProvider } from "@/components/WebMCPProvider";
import { WhatsAppProvider } from "@/components/WhatsAppProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lotus365 — India's Most Trusted Online Gaming Platform" },
      {
        name: "description",
        content:
          "Lotus365 is India's most trusted online gaming platform since 2016 — cricket, casino, live sports, instant Lotus IDs, secure payouts and 24/7 concierge support.",
      },
      { name: "author", content: "Lotus365" },
      { property: "og:site_name", content: "Lotus365" },
      { property: "og:title", content: "Lotus365 — India's Most Trusted Online Gaming Platform" },
      {
        property: "og:description",
        content:
          "Cricket, casino and live sports on India's most trusted gaming platform. Instant Lotus IDs, secure payouts, VIP rewards and 24/7 concierge support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      // (6) hreflang — declare the India English variant as self-referential.
      { rel: "alternate", hrefLang: "en-in", href: "https://lotus365id.com/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://lotus365id.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://lotus365id.com/#organization",
          name: "Lotus365",
          alternateName: ["Lotus 365", "Lotus365 India"],
          url: "https://lotus365id.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://lotus365id.com/favicon.png",
            width: 512,
            height: 512,
          },
          foundingDate: "2016",
          description:
            "India's most trusted online gaming platform for cricket, casino and live sports.",
          areaServed: "IN",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: ["en", "hi"],
            areaServed: "IN",
          },
          sameAs: ["https://lotus365id.com/"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://lotus365id.com/#website",
          url: "https://lotus365id.com/",
          name: "Lotus365",
          description:
            "India's most trusted online gaming platform for cricket, casino and live sports.",
          inLanguage: "en-IN",
          publisher: { "@id": "https://lotus365id.com/#organization" },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://lotus365id.com/blog?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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

  return (
    <QueryClientProvider client={queryClient}>
      <WhatsAppProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <WhatsAppFloat />
        <WebMCPProvider />
      </WhatsAppProvider>
    </QueryClientProvider>
  );
}
