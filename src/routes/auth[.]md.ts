import { createFileRoute } from "@tanstack/react-router";
import { getOrigin } from "@/lib/request-origin";

// /auth.md — agent registration instructions (Markdown).
export const Route = createFileRoute("/auth.md")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = getOrigin(request);
        const body = `# auth.md — sprintersbloom Agent Authentication

Audience: AI agents, autonomous clients, and MCP-style tools that need to
authenticate against sprintersbloom on behalf of a user or as an anonymous
caller. This document is the canonical, human- and machine-readable entry
point for agent registration and credential use.

## Discovery Endpoints

- OAuth Authorization Server Metadata (RFC 8414): \`${origin}/.well-known/oauth-authorization-server\`
- OAuth Protected Resource Metadata (RFC 9728): \`${origin}/.well-known/oauth-protected-resource\`
- JSON Web Key Set (JWKS): \`${origin}/.well-known/jwks.json\`
- Agent Skills Index: \`${origin}/.well-known/agent-skills/index.json\`
- MCP Server Card: \`${origin}/.well-known/mcp/server-card.json\`

The \`issuer\` advertised in Authorization Server metadata matches the
\`authorization_servers\` entry in the Protected Resource Metadata document.

## Agent Registration

sprintersbloom uses an operator-approved registration model. Self-service
dynamic client registration is not enabled.

**Register endpoint:** \`${origin}/contact-us\` (\`register_uri\` in
\`agent_auth\`).

Submit the following when requesting access:

1. Agent name, operator/organization, and public homepage.
2. Contact email for security and revocation notices.
3. Intended identity type (see below) and requested scopes.
4. Redirect URIs (for \`authorization_code\` flow) and expected traffic volume.

On approval, credentials are provisioned out-of-band and delivered over a
secure channel. Approved clients may then use the OAuth endpoints below.

## Supported Registration Methods

### 1. Identity Assertion — ID-JAG

- Assertion type: \`urn:ietf:params:oauth:token-type:id-jag\`
- Credential type: \`bearer\` (present as \`Authorization: Bearer <token>\`)
- Use when the agent already holds an identity assertion from a trusted
  identity provider and wants to exchange it for a sprintersbloom access
  token via the token endpoint.
- Claims documentation: \`${origin}/auth.md\`
- Revocation: POST to \`${origin}/contact-us\` (also emitted as a
  \`revocation\` event in \`events_supported\`).

### 2. Identity Assertion — Verified Email

- Assertion type: \`verified_email\`
- Credential type: \`bearer\`
- Use when the agent operator has a verified email identity and wants a
  bearer token bound to that email.
- Claim URI: \`${origin}/auth.md\`

### 3. Anonymous

- Identity type: \`anonymous\`
- Credential type: \`bearer\`
- Use for read-only or rate-limited access that does not require a user
  identity. Tokens are still issued and revocable.
- Claim URI: \`${origin}/auth.md\`

## OAuth Parameters

- Grant types: \`authorization_code\`, \`refresh_token\`
- Response types: \`code\`
- PKCE: \`S256\` required for all public clients
- Token endpoint auth methods: \`none\` (PKCE-only public clients)
- Bearer method: \`header\` (\`Authorization: Bearer <token>\`)

## Scopes

- \`openid\` — required for identity flows
- \`profile\` — basic profile claims
- \`email\` — verified email claim

## Credential Use

Present the issued access token on every request to a protected resource:

\`\`\`
GET /some/protected/resource HTTP/1.1
Host: ${new URL(origin).host}
Authorization: Bearer <access_token>
Accept: application/json
\`\`\`

Refresh tokens (when issued) are exchanged at the token endpoint using the
\`refresh_token\` grant. Tokens are opaque to the client; do not attempt to
decode or introspect them locally.

## Revocation & Security Contact

- Revocation requests: \`${origin}/contact-us\`
- Security disclosures: \`${origin}/contact-us\`
- Revocation events are advertised in \`agent_auth.events_supported\`.

## Change Log

This document is versioned with the site. Agents should re-fetch
\`/auth.md\` and the \`/.well-known/\` metadata periodically to pick up
endpoint or scope changes.
`;

        return new Response(body, {
          status: 200,
          headers: {
            "content-type": "text/markdown; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
