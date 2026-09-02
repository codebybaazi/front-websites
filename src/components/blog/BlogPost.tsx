import { Link } from "@tanstack/react-router";
import { BookOpen, Calendar, Clock, User } from "lucide-react";
import type { ReactNode } from "react";
import { ICON_MAP } from "@/lib/blog-data";
import { cn } from "@/lib/utils";
import {
  BlogPostContext,
  BlogPostProvider,
  useBlogPost,
} from "@/components/blog/blog-post-context";

function BlogPostFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={className}>{children}</article>;
}

function BlogPostLink({
  children,
  className,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  const { state, meta } = useBlogPost();
  return (
    <Link
      to={meta.to}
      params={meta.params}
      className={className}
      aria-label={ariaLabel ?? state.title}
    >
      {children}
    </Link>
  );
}

function BlogPostMedia({
  className,
  loading,
}: {
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const { state } = useBlogPost();
  const Icon = ICON_MAP[state.icon ?? ""] ?? BookOpen;

  if (state.bannerSrc) {
    return (
      <img
        src={state.bannerSrc}
        alt={state.title}
        width={1600}
        height={900}
        loading={loading}
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-transparent",
        className,
      )}
      role="img"
      aria-label={state.title}
    >
      <Icon className="size-14 text-primary/40" />
    </div>
  );
}

function BlogPostCategory({ className }: { className?: string }) {
  const { state } = useBlogPost();
  return <span className={className}>{state.category}</span>;
}

function BlogPostTitle({
  as: Tag = "h3",
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}) {
  const { state } = useBlogPost();
  return <Tag className={className}>{state.title}</Tag>;
}

function BlogPostDescription({ className }: { className?: string }) {
  const { state } = useBlogPost();
  return <p className={className}>{state.description}</p>;
}

function BlogPostDateText({ className }: { className?: string }) {
  const { state } = useBlogPost();
  return (
    <time className={className} dateTime={state.date}>
      {state.date}
    </time>
  );
}

function BlogPostDate({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <Calendar className="size-3.5 shrink-0" aria-hidden />
      <BlogPostDateText />
    </span>
  );
}

function BlogPostBanner({
  className,
  loading = "lazy",
}: {
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const { state } = useBlogPost();
  if (!state.bannerSrc) return null;
  return (
    <img
      src={state.bannerSrc}
      alt={state.title}
      width={1600}
      height={900}
      loading={loading}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}

function BlogPostReadTime({ className }: { className?: string }) {
  const { state } = useBlogPost();
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <Clock className="size-3.5 shrink-0" aria-hidden />
      {state.readMinutes} min read
    </span>
  );
}

function BlogPostAuthor({ className }: { className?: string }) {
  const { state } = useBlogPost();
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <User className="size-3.5 shrink-0" aria-hidden />
      {state.author}
    </span>
  );
}

function BlogPostMeta({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground",
        className,
      )}
    >
      <BlogPostDate />
      <BlogPostAuthor />
      <BlogPostReadTime />
    </p>
  );
}

function BlogPostHeader({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={className}>
      {children ?? (
        <>
          <BlogPostTitle
            as="h1"
            className="font-display max-w-[22ch] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
          />
          <BlogPostMeta className="mt-5" />
        </>
      )}
    </header>
  );
}

function BlogPostHero({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-xl bg-[#071018]", className)}>
      <div className="aspect-[16/9] w-full md:aspect-[21/9]">
        <BlogPostMedia loading="eager" className="h-full w-full" />
      </div>
    </div>
  );
}

function BlogPostContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("min-w-0", className)}>{children}</div>;
}

export const BlogPost = {
  Provider: BlogPostProvider,
  Context: BlogPostContext,
  Frame: BlogPostFrame,
  Link: BlogPostLink,
  Media: BlogPostMedia,
  Banner: BlogPostBanner,
  Hero: BlogPostHero,
  Header: BlogPostHeader,
  Meta: BlogPostMeta,
  Content: BlogPostContent,
  Category: BlogPostCategory,
  Title: BlogPostTitle,
  Description: BlogPostDescription,
  Date: BlogPostDate,
  DateText: BlogPostDateText,
  Author: BlogPostAuthor,
  ReadTime: BlogPostReadTime,
};
