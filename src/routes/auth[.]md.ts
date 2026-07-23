import { createFileRoute } from '@tanstack/react-router'

const ISSUER = 'https://mahadevbookss.com'

const body = `# auth.md — Mahadev Book Agent Authentication

This document describes how AI agents, LLM clients, and automated tools register and authenticate with Mahadev Book to call site tools, MCP endpoints, and public APIs.

- Site: ${ISSUER}
- Contact: ${ISSUER}/contact
- Support: support@mahadevbookss.com
- Terms: ${ISSUER}/terms-conditions
- Privacy: ${ISSUER}/policies

## Discovery

| Purpose | URL |
| --- | --- |
| OAuth Authorization Server metadata (RFC 8414) | ${ISSUER}/.well-known/oauth-authorization-server |
| OAuth Protected Resource metadata (RFC 9728) | ${ISSUER}/.well-known/oauth-protected-resource |
| OpenID Provider configuration | ${ISSUER}/.well-known/openid-configuration |
| JSON Web Key Set | ${ISSUER}/.well-known/jwks.json |
| MCP Server Card | ${ISSUER}/.well-known/mcp/server-card.json |
| Agent Skills index | ${ISSUER}/.well-known/agents.json |
| API Catalog (RFC 9727) | ${ISSUER}/.well-known/api-catalog |

## Agent Registration

- **Register endpoint:** \`POST ${ISSUER}/oauth/register\`
- **Protocol:** OAuth 2.0 Dynamic Client Registration (RFC 7591)
- **Auth for registration:** none required (open registration) — clients receive credentials in the response.

Example request:

\`\`\`http
POST /oauth/register HTTP/1.1
Host: mahadevbookss.com
Content-Type: application/json

{
  "client_name": "Example Agent",
  "client_uri": "https://example.com",
  "redirect_uris": ["https://example.com/oauth/callback"],
  "grant_types": ["authorization_code", "refresh_token", "client_credentials"],
  "response_types": ["code"],
  "token_endpoint_auth_method": "client_secret_basic",
  "scope": "openid profile email offline_access",
  "software_id": "example-agent",
  "identity_type": "agent"
}
\`\`\`

## Supported Identity Types

| Identity | Description |
| --- | --- |
| \`human\` | End user acting through an interactive client. |
| \`agent\` | Autonomous AI agent acting on behalf of a user or itself. |
| \`service_account\` | Backend/server-to-server integration with no user present. |

## Supported Credential Types

- \`client_secret\` — issued at registration for confidential clients.
- \`private_key_jwt\` — RFC 7523 asymmetric client authentication.
- \`dpop\` — RFC 9449 sender-constrained access tokens.
- \`mtls\` — RFC 8705 mutual TLS client authentication.
- \`api_key\` — long-lived key for service accounts, sent as \`Authorization: Bearer <key>\`.

## Grants & Flows

- \`authorization_code\` (PKCE S256 required for public clients)
- \`refresh_token\`
- \`client_credentials\` (service accounts and agents)

## Scopes

| Scope | Meaning |
| --- | --- |
| \`openid\` | Issue an ID token. |
| \`profile\` | Basic profile claims. |
| \`email\` | Verified email address. |
| \`offline_access\` | Issue a refresh token. |

## Token Lifecycle

- **Token endpoint:** \`${ISSUER}/oauth/token\`
- **Introspection:** \`${ISSUER}/oauth/introspect\` (RFC 7662)
- **Revocation:** \`${ISSUER}/oauth/revoke\` (RFC 7009)
- **Claim / linking:** \`${ISSUER}/oauth/claim\` — used by agents to bind an issued credential to a verified user account.

## Calling Protected Resources

Send the access token as a Bearer credential:

\`\`\`http
GET /mcp HTTP/1.1
Host: mahadevbookss.com
Authorization: Bearer <access_token>
Accept: application/json, text/event-stream
\`\`\`

## Rate Limits

- 120 requests / minute per client
- 5,000 requests / hour per client
- 25 concurrent streaming connections

## Responsible Use

Mahadev Book services are restricted to users 18+ located in India. Agents must honor jurisdictional and responsible-gaming constraints declared in the MCP server card and \`/.well-known/agents.json\`.
`

export const Route = createFileRoute('/auth.md')({
  server: {
    handlers: {
      GET: async () =>
        new Response(body, {
          headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
          },
        }),
    },
  },
})
