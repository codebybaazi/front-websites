import { createFileRoute } from '@tanstack/react-router'
import SchedulePage from './schedule'

export const Route = createFileRoute('/football-schedule')({
  component: () => <SchedulePage initialTab="football" />,
})
