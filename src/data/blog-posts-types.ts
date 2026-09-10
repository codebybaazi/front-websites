export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  author: string;
  authorSlug: string;
  date: string;
  dateModified?: string;
  excerpt: string;
  hero?: string;
  sections: { heading: string; body: string }[];
  faqs?: { q: string; a: string }[];
};
