import { createFileRoute } from '@tanstack/react-router'
import SchedulePage from './schedule'
import { buildBreadcrumbJsonLd } from '@/components/long-form-page'
import { AiOverview } from '@/components/ai-overview'

export const Route = createFileRoute('/football-schedule')({
  head: () => ({
    meta: [
      { title: "2026 Football Schedule & Live Soccer Calendar | FIFA World Cup 2026 | Cricbet99" },
      { name: "description", content: "Official 2026 football schedule and live soccer calendar. Get FIFA World Cup 2026 fixtures, Premier League dates, and UCL match details on Cricbet99." },
      { property: "og:title", content: "2026 Football Schedule & Live Soccer Calendar — Cricbet99" },
      { property: "og:description", content: "Definitive guide to the 2026 football calendar. FIFA World Cup fixtures, Premier League, and major league events with live betting analytics." },
      { property: "og:url", content: "https://cricbet99.co.in/football-schedule" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/football-schedule" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/football-schedule", "2026 Football Schedule & Live Soccer Calendar")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/football-schedule", "2026 Football Schedule")),
      },
    ],
  }),
  component: () => (
    <>
      <SchedulePage initialTab="Football" />
      <AiOverview 
        summary="FIFA World Cup & Football Schedule Hub: Comprehensive 2026 calendar covering Premier League, UCL, and international fixtures."
        highlights={[
          "FIFA World Cup 2026 Calendar",
          "Premier League Matchday Data",
          "Champions League Key Dates",
          "Global Soccer Event Intelligence"
        ]}
      />
    </>
  ),
})
