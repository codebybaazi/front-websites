import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from '@/utils/page-seo'
import { motion } from 'framer-motion'
import { Calendar, Trophy, Zap, Clock, MapPin, ChevronRight, Star, Swords, ChevronDown, Search } from 'lucide-react'
import { useState, useMemo, useEffect } from 'react'
import { AIPoweredOverview } from '@/components/AIPoweredOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { CRICKET_SCHEDULE_DATA } from '@/lib/cricket-schedule'
import { FOOTBALL_SCHEDULE_DATA } from '@/lib/sports-data'
import { TENNIS_SCHEDULE_DATA } from '@/lib/tennis-schedule'
import { cricketTeamCode } from '@/utils/cricket-keywords'
import { fixtureStartDate, scheduleCollectionJsonLd } from '@/utils/match-seo'
import { getMatchSlug } from '@/utils/slugify'

interface SportMatch {
  event: string;
  date: string;
  time: string;
  venue: string;
}

type SportKey = 'cricket' | 'football' | 'tennis';

interface SportSeries {
  series: string;
  period: string;
  matches: SportMatch[];
  sport: SportKey;
}

const tagSeries = (rows: ReadonlyArray<Omit<SportSeries, 'sport'>>, sport: SportKey): SportSeries[] =>
  rows.map((series) => ({ ...series, sport }));

const CRICKET_SERIES = tagSeries(CRICKET_SCHEDULE_DATA, 'cricket');
const FOOTBALL_SERIES = tagSeries(FOOTBALL_SCHEDULE_DATA, 'football');
const TENNIS_SERIES = tagSeries(TENNIS_SCHEDULE_DATA, 'tennis');

const SPORT_SECTIONS: Array<{
  key: SportKey;
  title: string;
  intro: string;
  series: SportSeries[];
}> = [
  { key: 'cricket', title: 'Cricket Fixtures 2026', intro: 'IPL, ICC T20, ODIs and bilateral series — open a match for predictions and Fairplay cricket markets.', series: CRICKET_SERIES },
  { key: 'football', title: 'Football Fixtures 2026', intro: 'FIFA World Cup 2026 and club fixtures — 1X2, BTTS and live books on the same Fairplay ID.', series: FOOTBALL_SERIES },
  { key: 'tennis', title: 'Tennis Fixtures 2026', intro: 'ATP and WTA tour matches — set betting, games and live tennis on Fairplay.', series: TENNIS_SERIES },
];

const parseMatchData = (event: string, sport: SportKey, time?: string) => {
  let match = event;
  let stage = time || '';

  if (sport === 'cricket' || sport === 'football') {
    if (event.includes(': ')) {
      const parts = event.split(': ');
      stage = parts[0] || '';
      match = parts[1] || event;
    }
  } else if (sport === 'tennis') {
    if (event.includes(' — ')) {
      const parts = event.split(' — ');
      match = parts[0] || event;
      stage = parts[1] || '';
    } else if (event.includes(' \u2014 ')) {
      const parts = event.split(' \u2014 ');
      match = parts[0] || event;
      stage = parts[1] || '';
    }
  }

  return { match, stage };
};

const cricketCodePair = (matchName: string): string | null => {
  const [teamA, teamB] = matchName.split(/\s+vs\s+/i);
  if (!teamA || !teamB) return null;
  return `${cricketTeamCode(teamA)} vs ${cricketTeamCode(teamB)}`;
};

export const Route = createFileRoute('/schedule')({
  component: SchedulePage,
  head: () => pageHeadFor('/schedule'),
})

function SchedulePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'cricket' | 'football' | 'tennis'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSeries, setExpandedSeries] = useState<string[]>(() => [
    ...CRICKET_SERIES.map((series) => series.series),
    ...FOOTBALL_SERIES.map((series) => series.series),
  ])

  useEffect(() => {
    if (activeTab === 'cricket') {
      setExpandedSeries(CRICKET_SERIES.map((series) => series.series))
    }
    if (activeTab === 'football') {
      setExpandedSeries(FOOTBALL_SERIES.map((series) => series.series))
    }
    if (activeTab === 'tennis') {
      setExpandedSeries(TENNIS_SERIES.map((series) => series.series))
    }
  }, [activeTab])

  const filteredSections = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return SPORT_SECTIONS.map((section) => {
      const series = query
        ? section.series.map((row) => ({
            ...row,
            matches: row.matches.filter((match) =>
              match.event.toLowerCase().includes(query) ||
              row.series.toLowerCase().includes(query) ||
              match.venue.toLowerCase().includes(query)
            ),
          })).filter((row) => row.matches.length > 0)
        : section.series
      return { ...section, series }
    })
  }, [searchQuery])

  const visibleCount = filteredSections.reduce((sum, section) => sum + section.series.length, 0)

  const toggleSeries = (title: string) => {
    setExpandedSeries(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    )
  }

  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      <JsonLd data={scheduleCollectionJsonLd()} />

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center"
          >
            <div className="inline-flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              <div className="h-[1px] w-8 bg-primary/50" />
              2026 Fixtures
              <div className="h-[1px] w-8 bg-primary/50" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
              <span className="text-white">Fairplay</span>{' '}
              <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Schedule</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Cricket, FIFA World Cup and tennis fixtures for 2026 — tap Details on any match for predictions, set or scoreline markets, and Fairplay betting notes.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-12">
        {/* Overview Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <AIPoweredOverview
            title="Intelligence overview: 2026 season"
            summary="The Fairplay schedule lists every 2026 cricket fixture (IPL, ICC T20, ODIs and bilateral tours), the FIFA World Cup 2026 calendar and the ATP/WTA season in date order. Open a fixture for prediction notes, venue context and the markets that usually go up for that format."
            highlights={[
              'Date-first table for cricket, football and tennis',
              'Sport tabs plus search by team, series or venue',
              'Times shown in IST unless the match page says otherwise',
              'Every row opens the same match detail page as /matches',
            ]}
            sources={[
              { label: 'All matches index', to: '/matches' },
              { label: 'Cricket betting', to: '/ipl-betting' },
              { label: 'Live exchange', to: '/betting' },
            ]}
          />
        </div>

        {/* Premium Filter Tabs */}
        <div className="space-y-6 my-16">
          <nav aria-label="Filter schedule by sport" className="flex flex-wrap justify-center gap-3">
            {(['all', 'cricket', 'football', 'tennis'] as const).map((sport) => (
              <button
                key={sport}
                type="button"
                onClick={() => {
                  setActiveTab(sport);
                  if (sport !== 'all') {
                    document.getElementById(`schedule-${sport}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all cursor-pointer relative overflow-hidden ${
                  activeTab === sport 
                    ? 'bg-gradient-to-r from-primary to-emerald-400 text-black shadow-lg shadow-primary/25' 
                    : 'bg-card/50 text-white/50 border border-white/10 hover:border-primary/30 hover:text-white'
                }`}
              >
                {sport === 'all' && <Trophy className="w-4 h-4 inline-block mr-2" />}
                {sport === 'cricket' && <Star className="w-4 h-4 inline-block mr-2" />}
                {sport === 'football' && <Swords className="w-4 h-4 inline-block mr-2" />}
                {sport === 'tennis' && <Calendar className="w-4 h-4 inline-block mr-2" />}
                {sport.charAt(0).toUpperCase() + sport.slice(1)}
              </button>
            ))}
          </nav>

          {/* Premium Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input 
              type="text"
              placeholder="Search matches, series or venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-card/60 transition-all placeholder:text-white/20 text-white"
            />
          </div>
        </div>

        {/* Schedule Tables */}
        <div className="space-y-12">
          {filteredSections.map((section) => {
            const sectionHidden = !searchQuery && activeTab !== 'all' && activeTab !== section.key;
            const emptyAfterSearch = searchQuery.length > 0 && section.series.length === 0;
            return (
              <section
                key={section.key}
                id={`schedule-${section.key}`}
                aria-labelledby={`schedule-${section.key}-heading`}
                className={`${sectionHidden || emptyAfterSearch ? 'hidden' : ''} scroll-mt-28`}
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                    {section.key === 'cricket' ? <Trophy className="w-6 h-6 text-primary" /> :
                     section.key === 'football' ? <Swords className="w-6 h-6 text-primary" /> :
                     <Star className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <h2 id={`schedule-${section.key}-heading`} className="text-2xl md:text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                    <p className="text-white/40 text-sm mt-0.5">{section.intro}</p>
                  </div>
                </div>

                {/* Series Accordions */}
                <div className="space-y-4">
                  {section.series.map((series, sIdx) => {
                    const isExpanded = expandedSeries.includes(series.series) || searchQuery.length > 0;
                    const sport = series.sport;

                    return (
                      <motion.div
                        key={series.series}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.min(sIdx * 0.05, 0.5) }}
                        className="bg-card/30 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm group"
                      >
                        {/* Series Header */}
                        <button
                          type="button"
                          onClick={() => toggleSeries(series.series)}
                          aria-expanded={isExpanded}
                          className="w-full p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="hidden md:flex w-10 h-10 rounded-xl bg-primary/10 items-center justify-center text-sm font-bold text-primary border border-primary/20">
                              {sIdx + 1}
                            </div>
                            <div>
                              <h3 className="text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors">
                                {series.series}
                              </h3>
                              <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
                                <span>{series.period}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between md:justify-end gap-4">
                            <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                              {series.matches.length} matches
                            </span>
                            <ChevronDown className={`w-5 h-5 text-white/30 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`} />
                          </div>
                        </button>

                        {/* Matches Table */}
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="border-t border-white/5">
                            {/* Table Header */}
                            <div className="hidden md:grid grid-cols-[1fr_120px_150px_1fr_100px] gap-4 px-6 py-4 bg-white/[0.02] border-b border-white/5 text-[10px] font-bold text-white/30 uppercase tracking-wider">
                              <div>Match</div>
                              <div>Date</div>
                              <div>Kick-off</div>
                              <div>Venue</div>
                              <div className="text-right">Action</div>
                            </div>

                            {/* Match Rows */}
                            <div className="flex flex-col">
                              {series.matches.map((match, mIdx) => {
                                const { match: matchName, stage } = parseMatchData(match.event, sport, match.time);
                                const slug = getMatchSlug(series.series, match);
                                const kickoff = [stage, match.time].filter(Boolean).join(' · ');
                                const isoDate = fixtureStartDate(match.date);
                                const codePair = sport === 'cricket' ? cricketCodePair(matchName) : null;

                                return (
                                  <Link
                                    key={slug}
                                    to="/match/$slug"
                                    params={{ slug }}
                                    title={`${codePair ? `${codePair} ` : ''}${matchName} prediction, pitch report and Fairplay odds`}
                                    className="group/row grid grid-cols-1 md:grid-cols-[1fr_120px_150px_1fr_100px] gap-3 md:gap-4 px-6 py-5 border-b border-white/[0.03] hover:bg-primary/5 hover:border-primary/20 transition-all items-start md:items-center"
                                  >
                                    {/* Match Name */}
                                    <div>
                                      <div className="md:hidden text-[9px] font-bold text-primary/50 uppercase tracking-widest mb-1">Match</div>
                                      <div className="flex items-center gap-3">
                                        <div className="hidden md:flex w-7 h-7 rounded-lg bg-background border border-white/10 items-center justify-center text-[10px] font-bold text-white/30 group-hover/row:border-primary/40 group-hover/row:text-primary transition-all shrink-0">
                                          {mIdx + 1}
                                        </div>
                                        <div>
                                          <h4 className="text-sm md:text-[15px] font-semibold text-white group-hover/row:text-primary transition-colors">
                                            {matchName}
                                          </h4>
                                          {sport === 'cricket' && (codePair || stage) && (
                                            <div className="text-[10px] font-medium uppercase tracking-widest text-primary/60 mt-0.5">
                                              {[codePair, stage !== match.time ? stage : null]
                                                .filter(Boolean)
                                                .join(' · ')}
                                            </div>
                                          )}
                                          {sport === 'tennis' && stage && (
                                            <div className="text-[10px] font-medium uppercase tracking-widest text-primary/60 mt-0.5">
                                              {stage}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Date */}
                                    <div>
                                      <div className="md:hidden text-[9px] font-bold text-primary/50 uppercase tracking-widest mb-1">Date</div>
                                      <div className="flex items-center gap-2 text-sm text-white/60">
                                        <Calendar className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                                        <span className="text-xs md:text-sm">{isoDate ? match.date : 'TBD'}</span>
                                      </div>
                                    </div>

                                    {/* Kick-off */}
                                    <div>
                                      <div className="md:hidden text-[9px] font-bold text-primary/50 uppercase tracking-widest mb-1">Kick-off</div>
                                      <div className="flex items-center gap-2 text-sm text-white/60">
                                        <Clock className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                                        <span className="text-xs md:text-sm truncate">{kickoff || 'TBD'}</span>
                                      </div>
                                    </div>

                                    {/* Venue */}
                                    <div>
                                      <div className="md:hidden text-[9px] font-bold text-primary/50 uppercase tracking-widest mb-1">Venue</div>
                                      <div className="flex items-center gap-2 text-sm text-white/60">
                                        <MapPin className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                                        <span className="text-xs md:text-sm line-clamp-1">{match.venue || 'International Stadium'}</span>
                                      </div>
                                    </div>

                                    {/* Action */}
                                    <div className="flex justify-start md:justify-end pt-2 md:pt-0">
                                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs font-bold text-primary group-hover/row:bg-primary group-hover/row:text-black group-hover/row:border-primary transition-all">
                                        Details
                                        <ChevronRight className="w-3 h-3 group-hover/row:translate-x-0.5 transition-transform" />
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Empty State */}
          {visibleCount === 0 && (
            <div className="text-center py-20 bg-card/20 rounded-2xl border border-dashed border-white/10">
              <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
              <p className="text-white/40 font-medium">No events found matching your search.</p>
            </div>
          )}
        </div>

        {/* Premium CTA Section */}
        <section className="mt-20 py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,185,74,0.15),transparent_60%)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Open the fixture on a Fairplay ID
              </h2>
              <p className="text-white/50 text-sm max-w-lg">
                Cricket, football and tennis from this calendar share one login. IPL and the T20 World Cup sit on the same wallet.
              </p>
            </div>
            <Link 
              to="/fairplay-id"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              Open a Fairplay ID
              <Zap className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <FAQSection 
        title="Fairplay schedule questions"
        faqs={[
          { q: "How do I bet a fixture from the Fairplay schedule?", a: "Tap Details on a cricket, football or tennis match. That opens the prediction page and Fairplay markets for that slug. You need a Fairplay ID and a UPI deposit first." },
          { q: "Does the schedule include IPL and T20 World Cup?", a: "Yes. IPL, ICC T20 World Cup, ODIs, FIFA and tennis tours sit in the tabs. Filter by sport or search the team name." },
          { q: "What time zone are Fairplay fixtures in?", a: "Match times are shown in IST unless the match page notes local venue time." },
          { q: "Can I bet before the match starts?", a: "Outrights and match winner are often up early. Live books open when the fixture is in play. Same Fairplay cricket ID for all of it." }
        ]}
      />
    </div>
  )
}
