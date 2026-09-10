import type { Author } from "@/data/authors";

const GRADIENTS: Record<Author["category"], string> = {
  cricket: "from-blue-500 to-indigo-600",
  predictions: "from-fuchsia-500 to-purple-600",
  casino: "from-amber-500 to-orange-600",
  multisport: "from-emerald-500 to-teal-600",
};

export function AuthorAvatar({ author, size = "md" }: { author: Author; size?: "sm" | "md" | "lg" }) {
  const dims = size === "lg" ? "h-20 w-20 text-2xl" : size === "sm" ? "h-10 w-10 text-sm" : "h-14 w-14 text-lg";
  return (
    <div
      aria-hidden
      className={`flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-black text-white ${GRADIENTS[author.category]}`}
    >
      {author.initials}
    </div>
  );
}
