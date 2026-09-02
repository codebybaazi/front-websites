import { Search } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/components/blog/BlogPost";
import type { BlogPostState } from "@/components/blog/blog-post-context";
import {
  BlogPostCard,
  CompactBlogPost,
  FeaturedBlogPost,
  RecentBlogPost,
  RelatedBlogPost,
  SidebarBlogPost,
} from "@/components/blog/BlogPostCard";

function ListFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function BlogPostGridList({ children }: { children: ReactNode }) {
  return <ListFrame className="grid gap-8 sm:grid-cols-2">{children}</ListFrame>;
}

function BlogPostRelatedList({ children }: { children: ReactNode }) {
  return <ListFrame className="grid grid-cols-1 gap-6 md:grid-cols-3">{children}</ListFrame>;
}

function BlogPostRecentList({ children }: { children: ReactNode }) {
  return (
    <ListFrame className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</ListFrame>
  );
}

function BlogPostTrendingList({ children }: { children: ReactNode }) {
  return <ListFrame className="flex flex-col gap-6">{children}</ListFrame>;
}

function withPosts(
  posts: BlogPostState[],
  render: (post: BlogPostState, index: number) => ReactNode,
) {
  return posts.map((post, index) => (
    <BlogPost.Provider key={post.slug} post={post} index={index}>
      {render(post, index)}
    </BlogPost.Provider>
  ));
}

export const BlogPostList = {
  Frame: ListFrame,
  Grid: ({ posts }: { posts: BlogPostState[] }) => (
    <BlogPostGridList>{withPosts(posts, () => <BlogPostCard />)}</BlogPostGridList>
  ),
  Related: ({ posts }: { posts: BlogPostState[] }) => (
    <BlogPostRelatedList>{withPosts(posts, () => <RelatedBlogPost />)}</BlogPostRelatedList>
  ),
  Recent: ({ posts }: { posts: BlogPostState[] }) => (
    <BlogPostRecentList>{withPosts(posts, () => <RecentBlogPost />)}</BlogPostRecentList>
  ),
  Trending: ({ posts }: { posts: BlogPostState[] }) => (
    <BlogPostTrendingList>
      {withPosts(posts, (_post, index) => (
        <CompactBlogPost rank={index + 1} />
      ))}
    </BlogPostTrendingList>
  ),
  Sidebar: ({ posts }: { posts: BlogPostState[] }) => (
    <ListFrame className="flex flex-col gap-2">
      {withPosts(posts, () => (
        <SidebarBlogPost />
      ))}
    </ListFrame>
  ),
  Featured: ({ post }: { post: BlogPostState }) => (
    <BlogPost.Provider post={post}>
      <FeaturedBlogPost />
    </BlogPost.Provider>
  ),
  Empty: ({ className }: { className?: string }) => (
    <div className={cn("rounded-xl border-2 border-dashed border-white/5 py-40 text-center", className)}>
      <Search className="mx-auto mb-6 size-16 text-white/10" />
      <h3 className="text-2xl font-bold tracking-tight text-white/20">No matching guides</h3>
      <p className="mt-2 font-bold tracking-tight text-white/10">Try another search or pick a topic.</p>
    </div>
  ),
};
