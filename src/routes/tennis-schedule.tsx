import { createFileRoute } from '@tanstack/react-router'
import SchedulePage from './schedule'

export const Route = createFileRoute('/tennis-schedule')({
  component: () => <SchedulePage initialTab="tennis" />,
})
