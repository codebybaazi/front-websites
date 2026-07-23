import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";


const LEAGUES: { id: string; name: string }[] = [
  { id: "4482", name: "Indian Premier League" },
  { id: "4483", name: "Big Bash League" },
  { id: "4344", name: "ICC Cricket World Cup" },
  { id: "4602", name: "The Hundred" },
  { id: "4986", name: "Pakistan Super League" },
];

export type UpcomingMatch = {
  id: string;
  league: string;
  teamA: string;
  teamB: string;
  venue: string;
  date: string;
  time: string;
  thumb?: string;
};

export type MatchDetails = UpcomingMatch & {
  country?: string;
  season?: string;
  round?: string;
  poster?: string;
  banner?: string;
  description?: string;
  homeBadge?: string;
  awayBadge?: string;
};


export const getUpcomingMatches = createServerFn({ method: "GET" }).handler(
  async (): Promise<UpcomingMatch[]> => {
    const results = await Promise.allSettled(
      LEAGUES.map(async (l) => {
        const r = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=${l.id}`,
          { headers: { accept: "application/json" } },
        );
        if (!r.ok) return [] as UpcomingMatch[];
        const j = (await r.json()) as { events?: Array<Record<string, string | null>> };
        return (j.events ?? []).map((e) => ({
          id: String(e.idEvent),
          league: l.name,
          teamA: String(e.strHomeTeam ?? "TBA"),
          teamB: String(e.strAwayTeam ?? "TBA"),
          venue: String(e.strVenue ?? "Venue TBA"),
          date: String(e.dateEvent ?? ""),
          time: (e.strTime ?? "").toString().slice(0, 5) || "TBA",
          thumb: e.strThumb ? String(e.strThumb) : undefined,
        })) as UpcomingMatch[];
      }),
    );

    const all = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []));
    all.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
    return all.slice(0, 18);
  },
);

export const getMatchById = createServerFn({ method: "GET" })
  .inputValidator((data: { id: string }) => ({ id: String(data.id) }))
  .handler(async ({ data }): Promise<MatchDetails | null> => {
    try {
      const r = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/lookupevent.php?id=${encodeURIComponent(data.id)}`,
        { headers: { accept: "application/json" } },
      );
      if (!r.ok) return null;
      const j = (await r.json()) as { events?: Array<Record<string, string | null>> };
      const e = j.events?.[0];
      if (!e) return null;

      let homeBadge: string | undefined;
      let awayBadge: string | undefined;
      const homeId = e.idHomeTeam ? String(e.idHomeTeam) : "";
      const awayId = e.idAwayTeam ? String(e.idAwayTeam) : "";
      const badges = await Promise.allSettled(
        [homeId, awayId].filter(Boolean).map(async (tid) => {
          const tr = await fetch(
            `https://www.thesportsdb.com/api/v1/json/3/lookupteam.php?id=${tid}`,
            { headers: { accept: "application/json" } },
          );
          if (!tr.ok) return { tid, badge: undefined as string | undefined };
          const tj = (await tr.json()) as { teams?: Array<Record<string, string | null>> };
          return { tid, badge: tj.teams?.[0]?.strTeamBadge ? String(tj.teams[0].strTeamBadge) : undefined };
        }),
      );
      for (const b of badges) {
        if (b.status !== "fulfilled") continue;
        if (b.value.tid === homeId) homeBadge = b.value.badge;
        if (b.value.tid === awayId) awayBadge = b.value.badge;
      }

      return {
        id: String(e.idEvent),
        league: String(e.strLeague ?? "Cricket"),
        teamA: String(e.strHomeTeam ?? "TBA"),
        teamB: String(e.strAwayTeam ?? "TBA"),
        venue: String(e.strVenue ?? "Venue TBA"),
        date: String(e.dateEvent ?? ""),
        time: (e.strTime ?? "").toString().slice(0, 5) || "TBA",
        thumb: e.strThumb ? String(e.strThumb) : undefined,
        country: e.strCountry ? String(e.strCountry) : undefined,
        season: e.strSeason ? String(e.strSeason) : undefined,
        round: e.intRound ? `Round ${e.intRound}` : undefined,
        poster: e.strPoster ? String(e.strPoster) : undefined,
        banner: e.strBanner ? String(e.strBanner) : undefined,
        description: e.strDescriptionEN ? String(e.strDescriptionEN) : undefined,
        homeBadge,
        awayBadge,
      };
    } catch {
      return null;
    }
  });

export const matchQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["match", id],
    queryFn: () => getMatchById({ data: { id } }),
    staleTime: 1000 * 60 * 30,
  });
