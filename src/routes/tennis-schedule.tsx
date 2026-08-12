import { createFileRoute } from '@tanstack/react-router'
import SchedulePage from './schedule'
import { buildBreadcrumbJsonLd } from '@/components/long-form-page'
import { AiOverview } from '@/components/ai-overview'

export const Route = createFileRoute('/tennis-schedule')({
  head: () => ({
    meta: [
      { title: "2026 Tennis Schedule & Live Tournament Calendar | ATP & WTA 2026 | Cricbet99" },
      { name: "description", content: "Official 2026 tennis schedule and live tournament calendar. Get Australian Open, Wimbledon, and US Open 2026 dates on Cricbet99." },
      { property: "og:title", content: "2026 Tennis Schedule & Live Tournament Calendar — Cricbet99" },
      { property: "og:description", content: "Definitive guide to the 2026 tennis calendar. Grand Slam fixtures, ATP/WTA tours, and major tennis events with live betting analytics." },
      { property: "og:url", content: "https://cricbet99.co.in/tennis-schedule" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/tennis-schedule" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/tennis-schedule", "2026 Tennis Schedule & Live Tournament Calendar")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/tennis-schedule", "2026 Tennis Schedule")),
      },
    ],
  }),
  component: () => (
    <>
      <SchedulePage initialTab="Tennis" />
      <AiOverview 
        summary="ATP & WTA Tournament Hub: 2026 Grand Slam schedules and global tennis tour intelligence for professional traders."
        highlights={[
          "Grand Slam 2026 Key Dates",
          "Surface-Specific Tour Data",
          "ATP/WTA Tournament Calendar",
          "Elite Tennis Event Tracking"
        ]}
      />
    </>
  ),
})
