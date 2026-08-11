import { createFileRoute } from '@tanstack/react-router'
import SchedulePage from './schedule'

export const Route = createFileRoute('/cricket-schedule')({
  head: () => ({
    meta: [
      { title: "2026 Cricket Schedule & Live Match Calendar | IPL 2026 Fixtures | Cricbet99" },
      { name: "description", content: "Official 2026 cricket schedule and live match calendar. Get IPL 2026 fixtures, T20 World Cup 2026 dates, and international cricket tour details on Cricbet99." },
      { property: "og:title", content: "2026 Cricket Schedule & Live Match Calendar — Cricbet99" },
      { property: "og:description", content: "Definitive guide to the 2026 cricket calendar. IPL fixtures, T20 World Cup 2026, and all bilateral tours with live betting analytics." },
      { property: "og:url", content: "https://cricbet99.co.in/cricket-schedule" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricket-schedule" }],
  }),
  component: () => <SchedulePage initialTab="Cricket" />,
})
