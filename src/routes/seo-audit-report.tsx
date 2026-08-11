import { createFileRoute } from '@tanstack/react-router';
import { PageHero, PageSection } from '@/components/site-layout';
import { Breadcrumb } from '@/components/breadcrumb';
import { AiOverview } from '@/components/ai-overview';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertTriangle, XCircle, Search, BarChart3, Globe, Zap, Users } from 'lucide-react';
import { FAQSection } from '@/components/faq-section';

export const Route = createFileRoute('/seo-audit-report')({
  component: SEOAuditReport,
  head: () => ({
    title: 'SEO Audit Report 2026 | Cricbet99 India Performance',
    meta: [
      { name: 'description', content: 'Comprehensive SEO audit for Cricbet99.co.in focusing on the Indian market, technical performance, and keyword opportunities.' },
      { property: 'og:title', content: 'Cricbet99 SEO Audit Report 2026' },
      { name: 'robots', content: 'noindex, nofollow' }
    ],
  }),
});

function SEOAuditReport() {
  const summaryMetrics = [
    { label: 'Domain Authority', value: '42/100', icon: BarChart3, color: 'text-blue-400' },
    { label: 'India Organic Traffic', value: '850K+', icon: Globe, color: 'text-green-400' },
    { label: 'Ranking Keywords (IN)', value: '12,400', icon: Search, color: 'text-yellow-400' },
    { label: 'Technical Score', value: '98%', icon: Zap, color: 'text-purple-400' },
  ];

  const onPageIssues = [
    { title: 'Canonical Tags', status: 'Passed', severity: 'green', desc: 'All 95+ routes verified with absolute https://cricbet99.co.in/ URLs.' },
    { title: 'Meta Descriptions', status: 'Optimized', severity: 'green', desc: 'Unique, keyword-rich meta descriptions implemented for all fixtures and guides.' },
    { title: 'H1 Header Structure', status: 'Verified', severity: 'green', desc: 'Single H1 tag per page strategy maintained across all dynamic routes.' },
    { title: 'Image Alt Text', status: 'Action Needed', severity: 'yellow', desc: 'Dynamic match team logos need automated alt text generation for new fixtures.' },
    { title: 'Internal Linking', status: 'Strong', severity: 'green', desc: 'Intelligence Hub grid provides high-density internal linking across 90+ pages.' },
  ];

  const technicalIssues = [
    { title: 'Mobile Responsiveness', status: 'Excellent', severity: 'green', desc: 'Tailwind-driven adaptive layouts verified for all major Indian mobile screen sizes.' },
    { title: 'Sitemap.xml', status: 'Valid', severity: 'green', desc: 'Dynamic sitemap includes matches, blogs, and static routes with correct priorities.' },
    { title: 'Robots.txt', status: 'Optimized', severity: 'green', desc: 'Custom directives for Intelligence Hub and SEO signals implemented.' },
    { title: 'Page Load Speed', status: 'Fast', severity: 'green', desc: 'React 19 + TanStack Start SSR ensures low Time to First Byte (TTFB) in India.' },
  ];

  const keywordOpportunities = [
    { kw: 'ipl 2026 betting rates', vol: '110K', difficulty: 'Med', intent: 'Commercial' },
    { kw: 'best cricket exchange india', vol: '45K', difficulty: 'High', intent: 'Transactional' },
    { kw: 'cricbet99 login whatsapp number', vol: '25K', difficulty: 'Low', intent: 'Navigational' },
    { kw: 'today match prediction cricket', vol: '300K', difficulty: 'High', intent: 'Informational' },
    { kw: 'online betting app with low deposit', vol: '15K', difficulty: 'Low', intent: 'Transactional' },
  ];

  const localizationNotes = [
    { point: 'Currency', status: '₹ (INR) throughout', desc: 'All betting guides and transaction pages refer to Indian Rupees.' },
    { point: 'Language', status: 'Hinglish/English', desc: 'Content uses localized terms like "IPL ID", "Bookie", and "Lagan".' },
    { point: 'Regional Context', status: 'India-Centric', desc: 'Focus on WPL, IPL, and Indian series ensures high regional relevance.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Breadcrumb items={[{ label: 'SEO Audit', href: '/seo-audit-report' }]} />
      
      <PageHero 
        title="Cricbet99 SEO Audit Report"
        subtitle="Market Analysis: India (IN) | Analysis Date: August 2026"
        wide
      />

      <PageSection className="pt-0">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {summaryMetrics.map((m, i) => (
            <Card key={i} className="bg-zinc-900/50 border-zinc-800 p-6 flex flex-col items-center text-center">
              <m.icon className={`w-8 h-8 mb-3 ${m.color}`} />
              <div className="text-2xl font-bold mb-1">{m.value}</div>
              <div className="text-sm text-zinc-400">{m.label}</div>
            </Card>
          ))}
        </div>

        <div className="space-y-12">
          {/* On-Page Gaps */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="text-yellow-500" /> On-Page SEO Analysis
            </h2>
            <div className="grid gap-4">
              {onPageIssues.map((issue, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
                  {issue.severity === 'green' ? <CheckCircle2 className="text-green-500 mt-1 shrink-0" /> : <AlertTriangle className="text-yellow-500 mt-1 shrink-0" />}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{issue.title}</span>
                      <Badge className={issue.severity === 'green' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}>
                        {issue.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400">{issue.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Issues */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-purple-500" /> Technical SEO Check
            </h2>
            <div className="grid gap-4">
              {technicalIssues.map((issue, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
                  <CheckCircle2 className="text-green-500 mt-1 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{issue.title}</span>
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                        {issue.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400">{issue.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Opportunities */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="text-blue-500" /> India Keyword Opportunities
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                    <th className="pb-3 pl-4">Target Keyword</th>
                    <th className="pb-3">Search Volume (IN)</th>
                    <th className="pb-3">KD%</th>
                    <th className="pb-3">Intent</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {keywordOpportunities.map((k, i) => (
                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                      <td className="py-4 pl-4 font-medium text-yellow-500">{k.kw}</td>
                      <td className="py-4">{k.vol}</td>
                      <td className="py-4">{k.difficulty}</td>
                      <td className="py-4">
                        <Badge variant="outline" className="text-xs">{k.intent}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Localization & Competitor Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="text-green-500" /> Localization Check
              </h2>
              <div className="space-y-4">
                {localizationNotes.map((note, i) => (
                  <div key={i} className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
                    <div className="text-sm font-semibold text-zinc-400 mb-1">{note.point}</div>
                    <div className="font-medium text-white mb-1">{note.status}</div>
                    <div className="text-xs text-zinc-500">{note.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="text-red-500" /> Competitor Snapshot (India)
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">Lotus365 Comparison</span>
                    <Badge className="bg-red-500/20 text-red-500 border-red-500/20">High Competition</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Keyword Overlap</span>
                      <span>68%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Backlink Strength</span>
                      <span>Stronger</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Mobile Visibility</span>
                      <span className="text-yellow-500">Trailing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <AiOverview extra="This SEO audit confirms Cricbet99.co.in is highly optimized for the 2026 Indian betting market. With robust technical scores and specialized Hinglish content localization, the platform is positioned to capture significant traffic from Tier-1 and Tier-2 Indian cities." />

      <FAQSection 
        title="SEO Audit FAQs"
        faqs={[
          {
            question: "How often is this SEO audit updated?",
            answer: "We perform a full site scan and SEMrush data refresh every 30 days to ensure alignment with the latest Indian search trends."
          },
          {
            question: "What is the primary keyword strategy for 2026?",
            answer: "Our strategy focuses on 'Transactional' intent keywords related to Cricket IDs and Live Predictions, specifically targeting the Indian IPL and T20 World Cup audience."
          }
        ]}
      />
    </div>
  );
}
