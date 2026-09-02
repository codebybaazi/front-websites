const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

function compact(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** Pick the first title that fits SERP length, otherwise trim the last candidate. */
export function fitSeoTitle(candidates: string[]): string {
  const cleaned = candidates.map(compact).filter(Boolean);
  const fit = cleaned.find((title) => title.length <= TITLE_MAX);
  if (fit) return fit;
  const fallback = cleaned[cleaned.length - 1] ?? "Fairplay";
  if (fallback.length <= TITLE_MAX) return fallback;
  return `${fallback.slice(0, TITLE_MAX - 1).trimEnd()}…`;
}

export function fitSeoDescription(text: string): string {
  const compactText = compact(text);
  if (compactText.length <= DESCRIPTION_MAX) return compactText;
  const sliced = compactText.slice(0, DESCRIPTION_MAX - 1);
  const atWord = sliced.replace(/\s+\S*$/, "").replace(/[,:;–-]$/, "");
  return `${(atWord.length >= 110 ? atWord : sliced).trimEnd()}…`;
}
