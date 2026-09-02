import { CRICKET_SCHEDULE_DATA } from '@/lib/cricket-schedule';
import { FOOTBALL_SCHEDULE_DATA } from '@/lib/sports-data';
import { TENNIS_SCHEDULE_DATA } from '@/lib/tennis-schedule';

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
};

export interface MatchSlugInput {
  event: string;
  date?: string;
  venue?: string;
}

export function getMatchSlug(seriesName: string, match: MatchSlugInput): string {
  return slugify(`${seriesName}-${match.event}-${match.date || ""}-${match.venue || ""}`);
}

export function getCanonicalMatchSlug(match: MatchSlugInput & { seriesName: string }): string {
  return getMatchSlug(match.seriesName, match);
}

export function matchSlugAliases(seriesName: string, match: MatchSlugInput): string[] {
  const withVenue = getMatchSlug(seriesName, match);
  const withoutVenue = slugify(`${seriesName}-${match.event}-${match.date || ""}`);
  return withVenue === withoutVenue ? [withVenue] : [withVenue, withoutVenue];
}

export function matchMatchesSlug(seriesName: string, match: MatchSlugInput, slug: string): boolean {
  return matchSlugAliases(seriesName, match).includes(slug);
}

export const findMatchBySlug = (slug: string) => {
  const allData = [...CRICKET_SCHEDULE_DATA, ...FOOTBALL_SCHEDULE_DATA, ...TENNIS_SCHEDULE_DATA];
  
  for (const series of allData) {
    for (const match of series.matches) {
      if (matchMatchesSlug(series.series, match, slug)) {
        return {
          ...match,
          seriesName: series.series,
          period: series.period
        };
      }
    }
  }
  return null;
};
