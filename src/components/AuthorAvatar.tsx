import { cn } from "@/lib/utils";

const PALETTE = [
  "from-primary/40 to-primary/10 text-primary",
  "from-flame/40 to-flame/10 text-flame",
  "from-sky-400/40 to-sky-400/10 text-sky-300",
  "from-amber-400/40 to-amber-400/10 text-amber-300",
  "from-fuchsia-400/40 to-fuchsia-400/10 text-fuchsia-300",
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function paletteFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i)) % PALETTE.length;
  return PALETTE[hash];
}

export function AuthorAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br font-bold",
        paletteFor(name),
        className,
      )}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}
