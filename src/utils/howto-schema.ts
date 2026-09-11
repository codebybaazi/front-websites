import { OG_IMAGE, absolutePageUrl } from "@/utils/page-seo";

export type HowToStep = {
  name: string;
  text: string;
};

function cleanText(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

/** HowTo JSON-LD for step-by-step guides. Steps must match visible page copy. */
export function howToJsonLd(input: {
  path: string;
  name: string;
  description: string;
  steps: Array<{ name?: string; text?: string } | null | undefined>;
  totalTime?: string;
}) {
  const steps: HowToStep[] = [];
  for (const step of input.steps) {
    const name = cleanText(step?.name ?? "");
    const text = cleanText(step?.text ?? "");
    if (name.length < 3 || text.length < 12) continue;
    steps.push({ name, text });
  }
  if (steps.length < 2) return null;

  const url = absolutePageUrl(input.path);

  return {
    "@context": "https://schema.org",
    "@type": "HowTo" as const,
    name: cleanText(input.name),
    description: cleanText(input.description),
    url,
    image: OG_IMAGE,
    ...(input.totalTime ? { totalTime: input.totalTime } : {}),
    step: steps.map((step, index) => ({
      "@type": "HowToStep" as const,
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${url}#step-${index + 1}`,
    })),
  };
}
