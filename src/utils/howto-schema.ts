import { absolutePageUrl } from "@/utils/page-seo";

export type HowToStepInput = { name: string; text: string };

export function howToJsonLd(input: {
  name: string;
  description: string;
  path: string;
  steps: HowToStepInput[];
}) {
  if (input.steps.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: absolutePageUrl(input.path),
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
