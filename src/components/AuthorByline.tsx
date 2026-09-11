import { Link } from "@tanstack/react-router";
import type { SiteAuthor } from "@/lib/authors";
import { authorInitials, authorPath } from "@/lib/authors";

export function AuthorAvatar({
  author,
  size = "md",
}: {
  author: SiteAuthor;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg" ? "h-20 w-20 text-xl" : size === "sm" ? "h-9 w-9 text-[11px]" : "h-12 w-12 text-sm";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-primary/20 border border-primary/30 text-primary font-black tracking-tight ${box}`}
      aria-hidden="true"
    >
      {authorInitials(author)}
    </span>
  );
}

export function AuthorByline({
  author,
  prefix = "Written by",
}: {
  author: SiteAuthor;
  prefix?: string;
}) {
  return (
    <Link
      to="/authors/$slug"
      params={{ slug: author.slug }}
      className="inline-flex items-center gap-3 group min-w-0"
    >
      <AuthorAvatar author={author} size="sm" />
      <span className="min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60">
          {prefix}
        </span>
        <span className="block text-sm font-bold text-white group-hover:text-primary transition-colors truncate">
          {author.name}
          <span className="text-white/45 font-medium">, {author.role}</span>
        </span>
      </span>
    </Link>
  );
}
