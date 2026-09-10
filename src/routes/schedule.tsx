import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";

const SchedulePage = lazy(() => import("@/components/schedule-page"));

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "2026 Cricket Schedule & Live Sports Calendar | IPL & T20 World Cup 2026 | Cricbet99" },
      { name: "description", content: "Official 2026 cricket schedule and live sports calendar. Get IPL 2026 fixtures, T20 World Cup 2026 dates, football, and tennis match details with real-time betting updates on Cricbet99." },
      { property: "og:title", content: "2026 Cricket Schedule & Live Sports Calendar — Cricbet99" },
      { property: "og:description", content: "Your definitive guide to the 2026 sports calendar. IPL fixtures, T20 World Cup 2026, and major tennis/football events with live betting analytics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/schedule" },
      { property: "og:image", content: "https://cricbet99.co.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "2026 Cricket Schedule & Live Sports Calendar | Cricbet99" },
      { name: "twitter:description", content: "Official 2026 cricket schedule and live sports calendar. IPL 2026, T20 World Cup, and major events with live betting insights." },
      { name: "twitter:image", content: "https://cricbet99.co.in/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://cricbet99.co.in/schedule" },
      { rel: "alternate", hreflang: "en-in", href: "https://cricbet99.co.in/schedule" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/schedule", "2026 Cricket Schedule & Sports Calendar")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          name: "2026 Global Sports Calendar",
          description: "Comprehensive schedule for 2026 major sports events including IPL, T20 World Cup, and FIFA World Cup.",
          startDate: "2026-01-01T00:00:00Z",
          endDate: "2026-12-31T23:59:59Z",
          location: {
            "@type": "Place",
            name: "Global Venues",
          },
          organizer: {
            "@type": "Organization",
            name: "Cricbet99",
            url: "https://cricbet99.co.in",
          },
        }),
      },
    ],
  }),
  component: ScheduleRoute,
});

function ScheduleRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SchedulePage />
    </Suspense>
  );
}
