import { createFileRoute } from '@tanstack/react-router'
import { createHash } from 'crypto'

const ISSUER = 'https://mahadevbookss.com'
const UPDATED_AT = '2026-07-23T00:00:00.000Z'

type Skill = {
  name: string
  type: 'skill-md' | 'archive'
  description: string
  url: string
  title?: string
  summary?: string
  version?: string
  license?: string
  language?: string
  languages?: string[]
  tags?: string[]
  categories?: string[]
  keywords?: string[]
  media_type?: string
  size?: number
  author?: { name: string; url: string; email?: string }
  homepage?: string
  documentation?: string
  source?: string
  icon?: string
  requires?: string[]
  inputs?: Array<{ name: string; type: string; required?: boolean; description: string }>
  outputs?: Array<{ name: string; type: string; description: string }>
  examples?: Array<{ title: string; prompt: string }>
  safety?: { age_restriction?: string; regions?: string[]; disclaimer?: string }
  created_at?: string
  updated_at?: string
  content: string
}

const AUTHOR = {
  name: 'Mahadev Book',
  url: ISSUER,
  email: 'support@mahadevbookss.com',
}

const SAFETY = {
  age_restriction: '18+',
  regions: ['IN'],
  disclaimer: 'For informational purposes only. Please gamble responsibly.',
}

const skills: Skill[] = [
  {
    name: 'get-new-id',
    title: 'Request a new Mahadev Book betting ID',
    type: 'skill-md',
    description:
      'Guide a user through requesting a new verified Mahadev Book betting ID via WhatsApp support, including KYC steps and initial deposit setup.',
    summary: 'Onboard a new user and provision a verified betting ID.',
    url: `${ISSUER}/skills/get-new-id/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    languages: ['en', 'hi'],
    tags: ['onboarding', 'betting-id', 'whatsapp', 'kyc'],
    categories: ['onboarding'],
    keywords: ['new id', 'signup', 'register', 'cricket betting'],
    author: AUTHOR,
    homepage: `${ISSUER}/`,
    documentation: `${ISSUER}/get-new-id`,
    icon: `${ISSUER}/favicon.ico`,
    inputs: [
      { name: 'name', type: 'string', required: true, description: 'Full legal name of the user.' },
      { name: 'whatsapp', type: 'string', required: true, description: 'WhatsApp number with country code.' },
    ],
    outputs: [
      { name: 'whatsapp_url', type: 'string', description: 'Deep link to start the onboarding chat.' },
    ],
    examples: [{ title: 'New user', prompt: 'I want to create a new Mahadev Book ID.' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# get-new-id\nWalk the user through requesting a new verified betting ID via WhatsApp.',
  },
  {
    name: 'login-help',
    title: 'Login and ID recovery assistance',
    type: 'skill-md',
    description:
      'Help users log into an existing Mahadev Book ID, recover forgotten credentials, and reset passwords securely.',
    summary: 'Assist with login issues and credential recovery.',
    url: `${ISSUER}/skills/login-help/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['auth', 'recovery', 'password'],
    categories: ['account'],
    keywords: ['login', 'forgot password', 'reset', 'recover id'],
    author: AUTHOR,
    homepage: `${ISSUER}/login`,
    icon: `${ISSUER}/favicon.ico`,
    inputs: [
      { name: 'user_id', type: 'string', required: false, description: 'Existing Mahadev Book user id.' },
    ],
    outputs: [{ name: 'recovery_steps', type: 'string', description: 'Step-by-step recovery instructions.' }],
    examples: [{ title: 'Recover', prompt: 'I forgot my Mahadev Book password.' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# login-help\nGuide login and credential recovery.',
  },
  {
    name: 'services-overview',
    title: 'List available services',
    type: 'skill-md',
    description:
      'Describe the deposit, withdrawal, live-line, and 24x7 customer-support services offered by Mahadev Book.',
    summary: 'Enumerate deposit, withdrawal, and support services.',
    url: `${ISSUER}/skills/services-overview/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['services', 'deposit', 'withdrawal', 'support'],
    categories: ['services'],
    keywords: ['services', 'features', 'deposit', 'withdrawal'],
    author: AUTHOR,
    homepage: `${ISSUER}/services`,
    icon: `${ISSUER}/favicon.ico`,
    outputs: [{ name: 'services', type: 'array', description: 'Array of service objects.' }],
    examples: [{ title: 'What do you offer', prompt: 'What services does Mahadev Book provide?' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# services-overview\nDeposit, withdrawal, and 24x7 support.',
  },
  {
    name: 'compare-providers',
    title: 'Compare Mahadev Book with other providers',
    type: 'skill-md',
    description:
      'Detailed comparisons between Mahadev Book and other betting ID providers such as Lotus 365 and Skyexchange 247, covering fees, speed, and support.',
    summary: 'Side-by-side comparison against major competitors.',
    url: `${ISSUER}/skills/compare-providers/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['comparison', 'providers', 'lotus365', 'skyexchange'],
    categories: ['comparison'],
    keywords: ['vs', 'compare', 'lotus 365', 'skyexchange 247'],
    author: AUTHOR,
    homepage: `${ISSUER}/mahadev-book-vs-lotus-365`,
    icon: `${ISSUER}/favicon.ico`,
    inputs: [{ name: 'competitor', type: 'string', required: false, description: 'Competitor slug to compare against.' }],
    outputs: [{ name: 'comparison', type: 'object', description: 'Structured comparison result.' }],
    examples: [{ title: 'Compare', prompt: 'How does Mahadev Book compare to Lotus 365?' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# compare-providers\nCompare Mahadev Book to Lotus 365 and Skyexchange 247.',
  },
  {
    name: 'contact-support',
    title: 'Contact customer support',
    type: 'skill-md',
    description:
      'Provide the fastest supported channels to reach Mahadev Book 24x7 customer support, primarily WhatsApp plus the on-site contact form.',
    summary: 'Route the user to 24x7 human support.',
    url: `${ISSUER}/skills/contact-support/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['support', 'contact', 'whatsapp', '24x7'],
    categories: ['support'],
    keywords: ['help', 'contact', 'support', 'whatsapp'],
    author: AUTHOR,
    homepage: `${ISSUER}/contact`,
    icon: `${ISSUER}/favicon.ico`,
    outputs: [{ name: 'channels', type: 'array', description: 'Ordered list of support channels.' }],
    examples: [{ title: 'Need help', prompt: 'How do I contact Mahadev Book support?' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# contact-support\nReach support 24x7 via WhatsApp or the contact page.',
  },
  {
    name: 'get-predictions',
    title: 'Get cricket predictions',
    type: 'skill-md',
    description:
      "Retrieve today's cricket match predictions with win probabilities, key players, and betting insights curated by Mahadev Book analysts.",
    summary: "Fetch today's cricket predictions with probabilities.",
    url: `${ISSUER}/skills/get-predictions/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['cricket', 'predictions', 'analytics'],
    categories: ['predictions'],
    keywords: ['today', 'match', 'prediction', 'win probability'],
    author: AUTHOR,
    homepage: `${ISSUER}/predictions`,
    icon: `${ISSUER}/favicon.ico`,
    inputs: [{ name: 'date', type: 'string', required: false, description: 'ISO date to fetch predictions for.' }],
    outputs: [{ name: 'predictions', type: 'array', description: 'Array of match prediction objects.' }],
    examples: [{ title: 'Today', prompt: "What are today's cricket predictions?" }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# get-predictions\nReturn cricket predictions with probabilities.',
  },
  {
    name: 'get-matches',
    title: 'Get live and upcoming matches',
    type: 'skill-md',
    description: 'List currently live and upcoming cricket matches with venue, teams, format, and start time.',
    summary: 'List live and upcoming cricket matches.',
    url: `${ISSUER}/skills/get-matches/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['cricket', 'live', 'matches'],
    categories: ['matches'],
    keywords: ['live', 'upcoming', 'match'],
    author: AUTHOR,
    homepage: `${ISSUER}/matches`,
    icon: `${ISSUER}/favicon.ico`,
    inputs: [{ name: 'status', type: 'string', required: false, description: 'live | upcoming | all' }],
    outputs: [{ name: 'matches', type: 'array', description: 'Array of match objects.' }],
    examples: [{ title: 'Live', prompt: 'Which cricket matches are live right now?' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# get-matches\nList live and upcoming cricket matches.',
  },
  {
    name: 'get-schedule',
    title: 'Get match schedule',
    type: 'skill-md',
    description: 'Retrieve the full upcoming cricket match schedule across leagues and international fixtures.',
    summary: 'Return the upcoming cricket fixtures.',
    url: `${ISSUER}/skills/get-schedule/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['cricket', 'schedule', 'fixtures'],
    categories: ['schedule'],
    keywords: ['fixtures', 'calendar', 'schedule'],
    author: AUTHOR,
    homepage: `${ISSUER}/schedule`,
    icon: `${ISSUER}/favicon.ico`,
    inputs: [
      { name: 'from', type: 'string', required: false, description: 'ISO start date.' },
      { name: 'to', type: 'string', required: false, description: 'ISO end date.' },
    ],
    outputs: [{ name: 'schedule', type: 'array', description: 'Array of scheduled matches.' }],
    examples: [{ title: 'This week', prompt: "What's the cricket schedule this week?" }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# get-schedule\nReturn the upcoming cricket match schedule.',
  },
  {
    name: 'get-blog-posts',
    title: 'Get blog posts',
    type: 'skill-md',
    description:
      'List Mahadev Book blog posts, betting guides, and analysis articles with title, slug, tags, author, and publication date.',
    summary: 'List blog posts and guides.',
    url: `${ISSUER}/skills/get-blog-posts/SKILL.md`,
    media_type: 'text/markdown',
    version: '1.0.0',
    license: 'CC-BY-4.0',
    language: 'en',
    tags: ['blog', 'guides', 'articles'],
    categories: ['content'],
    keywords: ['blog', 'guide', 'article', 'analysis'],
    author: AUTHOR,
    homepage: `${ISSUER}/blog`,
    icon: `${ISSUER}/favicon.ico`,
    inputs: [{ name: 'tag', type: 'string', required: false, description: 'Filter posts by tag.' }],
    outputs: [{ name: 'posts', type: 'array', description: 'Array of blog post metadata.' }],
    examples: [{ title: 'Latest', prompt: 'Show me the latest Mahadev Book blog posts.' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: '# get-blog-posts\nList blog posts and betting guides.',
  },
  {
    name: 'mcp-server',
    title: 'Mahadev Book MCP Server bundle',
    type: 'archive',
    description:
      'Bundled Model Context Protocol server exposing Mahadev Book cricket predictions, matches, schedule, and blog tools over Streamable HTTP.',
    summary: 'Complete MCP server distribution.',
    url: `${ISSUER}/skills/mcp-server.tar.gz`,
    media_type: 'application/gzip',
    size: 4096,
    version: '1.0.0',
    license: 'MIT',
    language: 'en',
    tags: ['mcp', 'streamable-http', 'server'],
    categories: ['mcp'],
    keywords: ['mcp', 'server', 'protocol'],
    author: AUTHOR,
    homepage: `${ISSUER}/mcp`,
    documentation: `${ISSUER}/.well-known/mcp/server-card.json`,
    source: `${ISSUER}/skills/mcp-server.tar.gz`,
    icon: `${ISSUER}/favicon.ico`,
    requires: ['mcp>=1.0'],
    examples: [{ title: 'Connect', prompt: 'Connect to the Mahadev Book MCP server.' }],
    safety: SAFETY,
    created_at: UPDATED_AT,
    updated_at: UPDATED_AT,
    content: 'mcp-server-archive-v1.0.0',
  },
]

const sha256 = (value: string) =>
  `sha256:${createHash('sha256').update(value).digest('hex')}`

const index = {
  $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
  spec_version: '0.2.0',
  name: 'Mahadev Book',
  title: 'Mahadev Book Agent Skills',
  description:
    'Agent Skills discovery index for Mahadev Book — India\'s verified online cricket betting ID provider. Exposes onboarding, account recovery, live matches, predictions, schedule, blog, and MCP server skills for AI agents.',
  publisher: {
    name: 'Mahadev Book',
    url: ISSUER,
    contact: `${ISSUER}/contact`,
    email: 'support@mahadevbookss.com',
    logo: `${ISSUER}/favicon.ico`,
  },
  url: ISSUER,
  homepage: ISSUER,
  documentation: `${ISSUER}/.well-known/agents.json`,
  terms_of_service: `${ISSUER}/terms`,
  privacy_policy: `${ISSUER}/privacy`,
  license: 'CC-BY-4.0',
  language: 'en',
  languages: ['en', 'hi'],
  categories: ['sports', 'cricket', 'betting', 'india'],
  tags: ['cricket', 'ipl', 'betting-id', 'india', 'whatsapp', 'mcp'],
  region: 'IN',
  age_restriction: '18+',
  safety: SAFETY,
  contact: {
    email: 'support@mahadevbookss.com',
    url: `${ISSUER}/contact`,
    whatsapp: 'https://wa.me/919999999999',
  },
  related: {
    'service-desc': `${ISSUER}/.well-known/agents.json`,
    'mcp-server-card': `${ISSUER}/.well-known/mcp/server-card.json`,
    'oauth-protected-resource': `${ISSUER}/.well-known/oauth-protected-resource`,
    'openid-configuration': `${ISSUER}/.well-known/openid-configuration`,
    'llms.txt': `${ISSUER}/llms.txt`,
    sitemap: `${ISSUER}/sitemap.xml`,
  },
  updated_at: UPDATED_AT,
  skills: skills.map(({ content, ...s }) => ({
    ...s,
    digest: sha256(content),
  })),
}

export const Route = createFileRoute('/.well-known/agent-skills/index.json')({
  server: {
    handlers: {
      GET: async () =>
        new Response(JSON.stringify(index, null, 2), {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
          },
        }),
    },
  },
})
