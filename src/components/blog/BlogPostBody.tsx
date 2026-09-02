import { Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import type { BlogBlock } from "@/utils/blog-seo";
export type { BlogBlock };

export function readMinutesFromBlocks(blocks: BlogBlock[]): number {
  const text = blocks
    .map((block) => {
      if (typeof block.c === "string") return block.c;
      if (!block.items) return "";
      return block.items
        .map((item) => (typeof item === "string" ? item : `${item.q} ${item.a}`))
        .join(" ");
    })
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.min(18, Math.round(words / 200) || 4));
}

export function BlogPostBody({ blocks }: { blocks: BlogBlock[] }) {
  if (blocks.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/10 p-8">
        <Info className="mb-3 size-8 text-muted-foreground" aria-hidden />
        <h2 className="text-lg font-semibold tracking-tight text-white">This guide is being updated</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          Open the{" "}
          <Link to="/blog" className="text-primary underline-offset-4 hover:underline">
            Fairplay guides index
          </Link>{" "}
          for a live article, or WhatsApp the desk with the topic in one message.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 text-[17px] leading-[1.7] text-white/75">
      {blocks.map((item, idx) => {
        if (item.t === "h1") return null;
        if (item.t === "h2") {
          return (
            <h2
              key={idx}
              className="font-display mt-10 text-2xl font-semibold tracking-[-0.02em] text-white first:mt-0"
            >
              {item.c}
            </h2>
          );
        }
        if (item.t === "h3") {
          return (
            <h3 key={idx} className="mt-6 text-lg font-semibold tracking-tight text-white">
              {item.c}
            </h3>
          );
        }
        if (item.t === "ul") {
          const items = (item.items ?? []).filter((li): li is string => typeof li === "string");
          return (
            <ul key={idx} className="flex list-disc flex-col gap-2 pl-5 text-white/75">
              {items.map((li, liIdx) => (
                <li key={liIdx}>{li}</li>
              ))}
            </ul>
          );
        }
        if (item.t === "faq") {
          return (
            <div key={idx} className="mt-8 flex flex-col gap-5">
              {(item.items || []).map((faq, fIdx) => {
                if (typeof faq === "string") return null;
                return (
                  <div key={fIdx} className="rounded-xl border border-white/8 bg-card/40 p-6">
                    <h3 className="text-base font-semibold text-white">{faq.q}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/70">{faq.a}</p>
                  </div>
                );
              })}
            </div>
          );
        }
        return (
          <p key={idx} className="max-w-[72ch]">
            {item.c}
          </p>
        );
      })}
    </div>
  );
}
