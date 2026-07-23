import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export type Runner = { runner: { id: number; name: string }; price: number; size: number } | null;
export type ApiEvent = {
  eventType: string;
  isInPlay: boolean;
  status?: string;
  event: { id: string; name: string; openDate: string };
  market: {
    name: string;
    competition?: { name: string };
    inPlay: boolean;
    event: { id: string; name: string; openDate: string };
    consolidatedRunner?: { back: Runner[]; lay: Runner[] };
  };
};

type ApiResp = {
  success: boolean;
  result: { inPlayEvents?: ApiEvent[]; popularEvents?: ApiEvent[] };
};

const API = "https://b2b.max247.co/api/public/exchange/odds/inPlayAndPopularEvents";

export const getLiveMatches = createServerFn({ method: "GET" }).handler(
  async (): Promise<ApiEvent[]> => {
    try {
      const res = await fetch(API, { headers: { accept: "application/json" } });
      if (!res.ok) return [];
      const j = (await res.json()) as ApiResp;
      const live = j.result?.inPlayEvents ?? [];
      const pop = j.result?.popularEvents ?? [];
      const merged = new Map<string, ApiEvent>();
      [...live, ...pop].forEach((e) => merged.set(e.event.id, e));
      return [...merged.values()];
    } catch {
      return [];
    }
  },
);

export const liveMatchesQueryOptions = queryOptions({
  queryKey: ["live-matches"],
  queryFn: () => getLiveMatches(),
  staleTime: 10_000,
});

export const getMatchByEventId = createServerFn({ method: "GET" })
  .inputValidator((data: { id: string }) => ({ id: String(data.id) }))
  .handler(async ({ data }): Promise<ApiEvent | null> => {
    const all = await getLiveMatches();
    return all.find((e) => e.event?.id === data.id) ?? null;
  });

export const matchByEventIdQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["match-by-event", id],
    queryFn: () => getMatchByEventId({ data: { id } }),
    staleTime: 10_000,
  });


