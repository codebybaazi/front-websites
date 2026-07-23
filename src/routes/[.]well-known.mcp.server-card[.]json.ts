import { createFileRoute } from '@tanstack/react-router'

const ISSUER = 'https://mahadevbookss.com'
const UPDATED = new Date().toISOString().split('T')[0]

const card = {
  $schema: 'https://modelcontextprotocol.io/schemas/2025-06-18/server-card.json',
  spec_version: '2025-06-18',
  sep: 'SEP-1649',
  serverInfo: {
    name: 'mahadev-book-mcp',
    title: 'Mahadev Book MCP Server',
    version: '1.0.0',
    protocolVersion: '2025-06-18',
    vendor: 'Mahadev Book',
    vendorUrl: ISSUER,
    description:
      'Model Context Protocol server exposing Mahadev Book cricket predictions, live match data, schedules, betting guides, and blog content for AI agents and LLM clients.',
    documentation: `${ISSUER}/.well-known/agents.json`,
    homepage: ISSUER,
    contact: `${ISSUER}/contact`,
    supportEmail: 'support@mahadevbookss.com',
    supportUrl: `${ISSUER}/contact`,
    termsOfService: `${ISSUER}/terms-conditions`,
    privacyPolicy: `${ISSUER}/policies`,
    license: 'proprietary',
    licenseUrl: `${ISSUER}/terms-conditions`,
    categories: ['sports', 'cricket', 'betting', 'predictions', 'content'],
    tags: ['cricket', 'ipl', 'predictions', 'live-scores', 'schedule', 'betting-id', 'india'],
    languages: ['en', 'en-IN', 'hi'],
    region: 'IN',
    logo: `${ISSUER}/favicon.png`,
    icon: `${ISSUER}/favicon.ico`,
  },
  transport: {
    type: 'http',
    protocol: 'streamable-http',
    endpoint: `${ISSUER}/mcp`,
    supported: ['streamable-http', 'sse'],
    contentTypes: ['application/json', 'text/event-stream'],
    encoding: 'utf-8',
  },
  endpoints: {
    mcp: `${ISSUER}/mcp`,
    sse: `${ISSUER}/mcp/sse`,
    health: `${ISSUER}/mcp/health`,
    metadata: `${ISSUER}/.well-known/mcp/server-card.json`,
  },
  authentication: {
    type: 'oauth2',
    required: false,
    authorization_servers: [ISSUER],
    protected_resource_metadata: `${ISSUER}/.well-known/oauth-protected-resource`,
    openid_configuration: `${ISSUER}/.well-known/openid-configuration`,
    oauth_authorization_server: `${ISSUER}/.well-known/oauth-authorization-server`,
    jwks_uri: `${ISSUER}/.well-known/jwks.json`,
    scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
    bearer_methods_supported: ['header', 'body', 'query'],
    grant_types_supported: ['authorization_code', 'refresh_token', 'client_credentials'],
    dpop_supported: true,
    pkce_required: true,
  },
  capabilities: {
    tools: { listChanged: true },
    resources: { listChanged: true, subscribe: true },
    prompts: { listChanged: true },
    logging: { levels: ['debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency'] },
    completions: {},
    sampling: {},
    roots: { listChanged: true },
    experimental: {
      streaming: true,
      batching: true,
      cancellation: true,
      progress: true,
    },
  },
  rateLimits: {
    requestsPerMinute: 120,
    requestsPerHour: 5000,
    concurrentConnections: 25,
    maxPayloadBytes: 1048576,
  },
  tools: [
    {
      name: 'get_predictions',
      title: 'Get Cricket Predictions',
      description:
        "Retrieve today's cricket match predictions including win probabilities, expert analysis, and confidence scores for IPL, international, and domestic matches.",
      inputSchema: {
        type: 'object',
        properties: {
          date: { type: 'string', format: 'date', description: 'ISO date (YYYY-MM-DD). Defaults to today.' },
          league: { type: 'string', description: 'Optional league filter (e.g. IPL, T20, ODI).' },
        },
      },
      annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
    },
    {
      name: 'get_matches',
      title: 'Get Live & Upcoming Matches',
      description: 'List currently live and upcoming cricket matches with teams, venues, start times, and current status.',
      inputSchema: {
        type: 'object',
        properties: {
          status: { type: 'string', enum: ['live', 'upcoming', 'all'], description: 'Filter by match status.' },
          limit: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
        },
      },
      annotations: { readOnlyHint: true, idempotentHint: true },
    },
    {
      name: 'get_schedule',
      title: 'Get Match Schedule',
      description: 'Retrieve the full upcoming cricket match schedule with dates, teams, tournaments, and venues.',
      inputSchema: {
        type: 'object',
        properties: {
          from: { type: 'string', format: 'date' },
          to: { type: 'string', format: 'date' },
          tournament: { type: 'string' },
        },
      },
      annotations: { readOnlyHint: true, idempotentHint: true },
    },
    {
      name: 'get_blog_posts',
      title: 'Get Blog Posts',
      description: 'List Mahadev Book blog posts, betting guides, tutorials, and analysis articles.',
      inputSchema: {
        type: 'object',
        properties: {
          category: { type: 'string' },
          tag: { type: 'string' },
          limit: { type: 'integer', minimum: 1, maximum: 50, default: 10 },
          offset: { type: 'integer', minimum: 0, default: 0 },
        },
      },
      annotations: { readOnlyHint: true, idempotentHint: true },
    },
  ],
  resources: [
    { uri: `${ISSUER}/sitemap.xml`, name: 'Sitemap', description: 'XML sitemap of all indexable pages.', mimeType: 'application/xml' },
    { uri: `${ISSUER}/llms.txt`, name: 'LLM Manifest', description: 'LLM-friendly site manifest per llmstxt.org.', mimeType: 'text/plain' },
    { uri: `${ISSUER}/.well-known/agents.json`, name: 'Agents Manifest', description: 'Agent skills catalog per AgentSkills spec.', mimeType: 'application/json' },
    { uri: `${ISSUER}/.well-known/api-catalog`, name: 'API Catalog', description: 'RFC 9727 API catalog listing.', mimeType: 'application/linkset+json' },
    { uri: `${ISSUER}/robots.txt`, name: 'Robots', description: 'Crawler directives.', mimeType: 'text/plain' },
  ],
  prompts: [
    {
      name: 'predict_match',
      title: 'Predict a Match',
      description: 'Generate a betting prediction summary for a specific cricket match.',
      arguments: [
        { name: 'team_a', description: 'First team name', required: true },
        { name: 'team_b', description: 'Second team name', required: true },
      ],
    },
    {
      name: 'compare_providers',
      title: 'Compare Betting Providers',
      description: 'Compare Mahadev Book against another provider (e.g. Lotus 365, Skyexchange 247).',
      arguments: [{ name: 'competitor', description: 'Competitor name', required: true }],
    },
  ],
  compliance: {
    dataResidency: 'IN',
    ageRestriction: 18,
    jurisdiction: 'India',
    responsibleGaming: true,
  },
  meta: {
    protocol_version: '2025-06-18',
    sep: 'SEP-1649',
    updated_at: UPDATED,
    generated_at: new Date().toISOString(),
    revision: 2,
  },
}

export const Route = createFileRoute('/.well-known/mcp/server-card.json')({
  server: {
    handlers: {
      GET: async () =>
        new Response(JSON.stringify(card, null, 2), {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
          },
        }),
    },
  },
})
