import { createContext, use, useMemo, type Context, type ReactNode } from "react";
import { POST_BANNERS } from "@/lib/blog-banners";
import { getAuthorForCategory } from "@/lib/authors";

export interface BlogPostState {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  authorSlug: string;
  bannerSrc?: string;
  icon?: string;
  readMinutes: number;
}

export interface BlogPostActions {
  // Display layouts share one contract so providers can add bookmark/share later
  // without changing compound UI parts.
}

export interface BlogPostMeta {
  to: "/posts/$slug";
  params: { slug: string };
  index: number;
}

export interface BlogPostContextValue {
  state: BlogPostState;
  actions: BlogPostActions;
  meta: BlogPostMeta;
}

// Keep a single context instance across hot-module reloads: without this, a
// re-evaluated module creates a fresh context and consumers rendered by the
// previous instance read `null` and throw.
const CONTEXT_KEY = "__fairplay_blog_post_context__";
const globalStore = globalThis as typeof globalThis & {
  [CONTEXT_KEY]?: Context<BlogPostContextValue | null>;
};

export const BlogPostContext: Context<BlogPostContextValue | null> =
  globalStore[CONTEXT_KEY] ??
  (globalStore[CONTEXT_KEY] = createContext<BlogPostContextValue | null>(null));

const EMPTY_ACTIONS: BlogPostActions = {};

export function useBlogPost() {
  const value = use(BlogPostContext);
  if (!value) {
    throw new Error("BlogPost compound parts must be used within BlogPost.Provider");
  }
  return value;
}

export type BlogPostInput = {
  slug: string;
  title: string;
  desc?: string;
  description?: string;
  date: string;
  category?: string;
  author?: string;
  icon?: string;
  readMinutes?: number;
};

export function toBlogPostState(input: BlogPostInput): BlogPostState {
  const description = input.description ?? input.desc ?? "";
  const bannerSrc = POST_BANNERS[input.slug];
  const readMinutes =
    input.readMinutes ?? Math.max(4, Math.min(12, Math.round(description.length / 40) || 4));
  const category = input.category ?? "Guide";
  const byline = getAuthorForCategory(category);
  return {
    slug: input.slug,
    title: input.title,
    description,
    date: input.date,
    category,
    author: input.author ?? byline.name,
    authorSlug: byline.slug,
    ...(bannerSrc ? { bannerSrc } : {}),
    ...(input.icon ? { icon: input.icon } : {}),
    readMinutes,
  };
}

type BlogPostProviderProps = {
  post: BlogPostState;
  index?: number;
  children: ReactNode;
};

export function BlogPostProvider({ post, index = 0, children }: BlogPostProviderProps) {
  const value = useMemo<BlogPostContextValue>(
    () => ({
      state: post,
      actions: EMPTY_ACTIONS,
      meta: {
        to: "/posts/$slug",
        params: { slug: post.slug },
        index,
      },
    }),
    [post, index],
  );

  return <BlogPostContext value={value}>{children}</BlogPostContext>;
}
