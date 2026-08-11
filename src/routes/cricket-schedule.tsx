import { createFileRoute } from '@tanstack/react-router'
import SchedulePage from './schedule'

export const Route = createFileRoute('/cricket-schedule')({
  component: () => <SchedulePage initialTab="cricket" />,
})
