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
  { key: 'cricket', title: 'Cricket fixtures 2026', intro: 'IPL, ICC T20, ODIs and bilateral series — open a match for predictions and Fairplay cricket markets.', series: CRICKET_SERIES },
  { key: 'football', title: 'Football fixtures 2026', intro: 'FIFA World Cup 2026 and club fixtures — 1X2, BTTS and live books on the same Fairplay ID.', series: FOOTBALL_SERIES },
  { key: 'tennis', title: 'Tennis fixtures 2026', intro: 'ATP and WTA tour matches — set betting, games and live tennis on Fairplay.', series: TENNIS_SERIES },
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

/** "England vs India" -> "ENG vs IND", the term cricket fixtures are searched by. */
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,100,0,0.1),transparent_60%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              <div className="h-[2px] w-8 bg-primary" />
              2026 fixtures
              <div className="h-[2px] w-8 bg-primary" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-8">
              Fairplay <span className="text-primary not-italic">schedule 2026</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto italic">
              Cricket, FIFA World Cup and tennis fixtures for 2026 — tap Details on any match for predictions, set or scoreline markets, and Fairplay betting notes.
            </p>
            <div className="flex justify-center">
              <Link
                to="/matches"
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-card/40 px-6 py-3 text-[11px] font-black uppercase tracking-widest text-white/60 hover:border-primary/40 hover:text-primary transition-all"
              >
                Browse by tournament
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-12">
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

        {/* Sport Tabs & Search */}
        <div className="space-y-8 my-16">
          <nav aria-label="Filter schedule by sport" className="flex flex-wrap justify-center gap-4">
            {(['all', 'cricket', 'football', 'tennis'] as const).map((sport) => (
              <a
                key={sport}
                href={sport === 'all' ? '/schedule' : `/schedule#schedule-${sport}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(sport);
                  if (sport !== 'all') {
                    document.getElementById(`schedule-${sport}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all border cursor-pointer relative z-20 ${
                  activeTab === sport 
                    ? 'bg-primary text-black border-primary shadow-[0_0_20px_rgba(255,100,0,0.3)]' 
                    : 'bg-card/50 text-white/40 border-white/5 hover:border-white/20 hover:bg-card/70'
                }`}
              >
                {sport}
              </a>
            ))}
          </nav>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text"
              placeholder="Search matches, series or venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card/30 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/10"
            />
          </div>
        </div>

        {/* Schedule List — all sports stay in the DOM for crawlers; tabs only hide visually */}
        <div className="space-y-16">
          {filteredSections.map((section) => {
            const sectionHidden = !searchQuery && activeTab !== 'all' && activeTab !== section.key;
            const emptyAfterSearch = searchQuery.length > 0 && section.series.length === 0;
            return (
              <section
                key={section.key}
                id={`schedule-${section.key}`}
                aria-labelledby={`schedule-${section.key}-heading`}
                className={`${sectionHidden || emptyAfterSearch ? 'hidden' : 'space-y-6'} scroll-mt-28`}
              >
                <div className="max-w-3xl">
                  <h2 id={`schedule-${section.key}-heading`} className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-white/55 text-sm md:text-base">{section.intro}</p>
                </div>

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
                      className="bg-card/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm group"
                    >
                      <button
                        type="button"
                        onClick={() => toggleSeries(series.series)}
                        aria-expanded={isExpanded}
                        className="w-full bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                            {sport === 'cricket' ? <Trophy className="w-7 h-7 text-primary" /> :
                             sport === 'football' ? <Swords className="w-7 h-7 text-primary" /> :
                             <Star className="w-7 h-7 text-primary" />}
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight flex items-center flex-wrap gap-3">
                              {series.series}
                              {series.matches.length > 0 && !isExpanded && searchQuery === '' && (
                                <span className="text-[9px] not-italic bg-primary text-black px-2 py-0.5 rounded-full font-black">
                                  {series.matches.length} {series.matches.length === 1 ? 'MATCH' : 'MATCHES'}
                                </span>
                              )}
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                              <p className="text-primary text-[10px] font-bold tracking-widest uppercase">{series.period}</p>
                              <span className="w-1 h-1 rounded-full bg-white/20" />
                              <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{sport}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 self-end md:self-auto">
                          <ChevronDown className={`w-6 h-6 text-white/20 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`} />
                        </div>
                      </button>

                      <div className={`grid transition-[grid-template-rows] duration-300 ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <div className="bg-white/[0.01] border-t border-white/5">
                            <div className="hidden md:grid grid-cols-[2fr_1.2fr_1.2fr_1.5fr_0.8fr] gap-4 px-8 py-5 border-b border-white/5 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                              <div>Match</div>
                              <div>Date</div>
                              <div>Kick-off / Stage</div>
                              <div>Venue</div>
                              <div className="text-right">Action</div>
                            </div>

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
                                    className="group/row grid grid-cols-1 md:grid-cols-[2fr_1.2fr_1.2fr_1.5fr_0.8fr] gap-4 px-6 md:px-8 py-6 md:py-5 border-b border-white/[0.03] hover:bg-white/[0.03] transition-all items-center"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="hidden md:flex w-8 h-8 rounded-lg bg-background border border-white/5 items-center justify-center text-[10px] font-bold text-white/20 group-hover/row:text-primary group-hover/row:border-primary/30 transition-all">
                                        {mIdx + 1}
                                      </div>
                                      <div>
                                        <div className="md:hidden text-[9px] font-black text-primary/40 uppercase tracking-widest mb-1">Match</div>
                                        <h4 className="text-[15px] font-bold text-white group-hover/row:text-primary transition-colors">
                                          {matchName}
                                        </h4>
                                        {sport === 'cricket' && (codePair || stage) && (
                                          <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mt-1">
                                            {[codePair, stage !== match.time ? stage : null, 'prediction']
                                              .filter(Boolean)
                                              .join(' · ')}
                                          </div>
                                        )}
                                        {sport === 'tennis' && stage && (
                                          <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mt-1">
                                            {stage}
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div>
                                      <div className="md:hidden text-[9px] font-black text-primary/40 uppercase tracking-widest mb-1">Date</div>
                                      <div className="flex items-center gap-2.5 text-sm md:text-[13px] text-white/70 font-medium">
                                        <Calendar className="w-4 h-4 text-primary/50" />
                                        {isoDate ? (
                                          <time dateTime={isoDate}>{match.date}</time>
                                        ) : (
                                          <span>{match.date || 'TBD'}</span>
                                        )}
                                      </div>
                                    </div>

                                    <div>
                                      <div className="md:hidden text-[9px] font-black text-primary/40 uppercase tracking-widest mb-1">Kick-off / Stage</div>
                                      <div className="flex items-center gap-2.5 text-sm md:text-[13px] text-white/70 font-medium">
                                        <Clock className="w-4 h-4 text-primary/50" />
                                        <span className="truncate">{kickoff || 'TBD'}</span>
                                      </div>
                                    </div>

                                    <div>
                                      <div className="md:hidden text-[9px] font-black text-primary/40 uppercase tracking-widest mb-1">Venue</div>
                                      <div className="flex items-center gap-2.5 text-sm md:text-[13px] text-white/70 font-medium">
                                        <MapPin className="w-4 h-4 text-primary/50" />
                                        <span className="line-clamp-1">{match.venue || 'International Stadium'}</span>
                                      </div>
                                    </div>

                                    <div className="flex justify-start md:justify-end pt-4 md:pt-0">
                                      <span className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2.5 md:p-0 rounded-xl bg-white/5 md:bg-transparent border border-white/10 md:border-0 text-[11px] font-black text-primary group-hover/row:text-white transition-all uppercase tracking-widest shadow-lg md:shadow-none">
                                        Details
                                        <ChevronRight className="w-3.5 h-3.5 group-hover/row:translate-x-1 transition-transform" />
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </section>
            );
          })}

          {visibleCount === 0 && (
            <div className="text-center py-20 bg-card/20 rounded-3xl border border-dashed border-white/10">
              <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
              <p className="text-white/40 font-medium italic">No events found matching your search.</p>
            </div>
          )}
        </div>

        {/* Elite CTA */}
        <section className="mt-24 py-16 px-8 rounded-[3rem] bg-gradient-to-br from-primary to-[#ff8c00] relative overflow-hidden group shadow-[0_0_50px_rgba(255,100,0,0.2)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-black leading-[0.9]">
              Never Miss A <span className="text-white not-italic">Winning Trade</span>
            </h2>
            <p className="text-black/70 text-lg max-w-xl font-medium">
              Get a Fairplay ID, then open cricket, football or tennis from this schedule. Same login for IPL and the T20 World Cup.
            </p>
            <Link 
              to="/fairplay-id"
              className="px-12 py-5 bg-black text-primary rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group"
            >
              Get a Fairplay ID
              <Zap className="w-5 h-5 fill-primary group-hover:animate-pulse" />
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
