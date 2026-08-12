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
      { title: "Cricbet99 — India's #1 Trusted Cricket Exchange" },
      {
        name: "description",
        content:
          "Official Cricbet99 ID provider. Get instant access to IPL 2026 betting, live casino, and sports markets with 24/7 WhatsApp support and rapid UPI withdrawals.",
      },
      { name: "author", content: "Cricbet99" },
      { property: "og:site_name", content: "Cricbet99" },
      { property: "og:title", content: "Cricbet99 — India's Trusted Cricket ID" },
      {
        property: "og:description",
        content:
          "One verified ID for cricket, football, tennis, kabaddi and live casino. Instant payouts, 24/7 support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "https://cricbet99.co.in/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "https://cricbet99.co.in/apple-touch-icon.png" },
      { rel: "sitemap", type: "application/xml", href: "https://cricbet99.co.in/sitemap.xml" },
      { rel: "api-catalog", href: "https://cricbet99.co.in/.well-known/api-catalog" },
      { rel: "service-doc", href: "https://cricbet99.co.in/all-links" },
      { rel: "ai-skills", href: "https://cricbet99.co.in/.well-known/ai-skills.json" },
      { rel: "dns-aid", href: "https://cricbet99.co.in/.well-known/dns-aid.json" },
      { rel: "openid-configuration", href: "https://cricbet99.co.in/.well-known/openid-configuration" },
      { rel: "service-desc", href: "https://cricbet99.co.in/.well-known/oauth-protected-resource" },
      { rel: "describedby", href: "https://cricbet99.co.in/about" },
      { rel: "mcp-server-card", href: "https://cricbet99.co.in/.well-known/mcp/server-card.json" },
      { rel: "agent-skills", href: "https://cricbet99.co.in/.well-known/agent-skills/index.json" }


    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cricbet99",
          url: "https://cricbet99.co.in/",
          logo: "https://cricbet99.co.in/favicon.png",
          description:
            "India's trusted online cricket ID platform since 2020 — cricket, football, tennis and live casino with instant UPI payouts and 24/7 WhatsApp support.",
          sameAs: [
            "https://cricbet99.co.in/whatsapp-support",
            "https://cricbet99.co.in/telegram-channel"
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Cricbet99",
          url: "https://cricbet99.co.in/",
          potentialAction: {
            "@type": "SearchAction",
            "target": "https://cricbet99.co.in/blog?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
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

  useEffect(() => {
    // Implement WebMCP API to expose site tools to AI agents
    if (typeof window !== 'undefined' && (navigator as any).modelContext?.provideContext) {
      try {
        (navigator as any).modelContext.provideContext({
          tools: [
            {
              name: "get_official_id",
              description: "Provides instructions and a direct link to get an official Cricbet99 ID on WhatsApp.",
              inputSchema: {
                type: "object",
                properties: {
                  userName: { type: "string", description: "Optional name of the user" }
                }
              },
              execute: async (args: any) => {
                const waLink = "https://wa.me/919999999999";
                return {
                  message: `Hello ${args.userName || 'there'}! To get your official Cricbet99 ID, please message our support team on WhatsApp.`,
                  action_url: waLink,
                  cta: "Chat on WhatsApp"
                };
              }
            },
            {
              name: "check_match_schedule",
              description: "Exposes the latest sports match schedule for 2026-27.",
              inputSchema: {
                type: "object",
                properties: {
                  sport: { type: "string", enum: ["cricket", "football", "tennis"], description: "The sport to check schedule for" }
                }
              },
              execute: async (args: any) => {
                return {
                  message: `Viewing the 2026-27 ${args.sport || 'sports'} schedule.`,
                  action_url: `https://cricbet99.co.in/schedule?sport=${args.sport || ''}`,
                  cta: "View Full Schedule"
                };
              }
            }
          ]
        });
      } catch (error) {
        console.error("WebMCP initialization failed:", error);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
