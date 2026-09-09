// Derives HowTo schema from a page's own numbered "Step N — ..." sections,
// so any $page.tsx entry written as a step-by-step guide gets HowTo markup
// automatically instead of needing a bespoke route like lotus365-register.tsx.

import type { PageContent } from "@/data/pages";

const STEP_HEADING = /^step\s+\d+\s*[—–:-]\s*(.+)$/i;

export function derivePageHowToSteps(page: PageContent) {
  return page.sections
    .map((section) => {
      const match = section.heading.match(STEP_HEADING);
      if (!match) return null;
      return { name: match[1].trim(), text: section.body.trim() };
    })
    .filter((s): s is { name: string; text: string } => s !== null && s.text.length > 0);
}

export function toHowToJsonLd(name: string, steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
