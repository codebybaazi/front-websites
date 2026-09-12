import { CalendarCheck } from "lucide-react";
import { formatReviewedDate } from "@/lib/content-review-dates";
import { cn } from "@/lib/utils";

export function ReviewedBadge({ iso, className }: { iso: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground",
        className,
      )}
    >
      <CalendarCheck className="size-3.5 shrink-0 text-primary" aria-hidden />
      Reviewed <time dateTime={iso}>{formatReviewedDate(iso)}</time>
    </span>
  );
}
