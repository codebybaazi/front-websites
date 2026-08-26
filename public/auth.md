# auth.md — Lotus365 Agent Authentication

This is the Lotus365 `auth.md` document. It describes how AI agents and
third-party clients register, authenticate, and obtain credentials to act
against this service.

- Audience: AI agents, autonomous services, and third-party OAuth clients.
- Service: Lotus365 (https://lotus365id.com)

## Discovery

- OAuth Authorization Server metadata: `/.well-known/oauth-authorization-server`
- OAuth Protected Resource metadata: `/.well-known/oauth-protected-resource`
- OpenID Configuration: `/.well-known/openid-configuration`
- MCP Server Card: `/.well-known/mcp.server-card.json`
- Agent Skills index: `/.well-known/agent-skills.json`

## Registration

Register a new OAuth client (agent or service) at:

```
POST https://lotus365id.com/oauth/register
Content-Type: application/json
```

Dynamic Client Registration (RFC 7591) is supported. Include your
`client_name`, `redirect_uris`, and desired `grant_types`.

## Supported identity types

- `identity_assertion` — ID-JAG assertions (`urn:ietf:params:oauth:token-type:id-jag`)
- `verified_email` — email-verified agents
- `anonymous` — ephemeral anonymous clients (PKCE public clients)

## Supported credential types

- `client_secret_basic`
- `client_secret_post`
- `none` (public clients with PKCE `S256`)
- `pkce`

## Grants

- `authorization_code` (with PKCE for public clients)
- `refresh_token`
- `client_credentials`

## Scopes

- `openid`, `profile`, `email` — identity
- `offline_access` — refresh tokens

## Claim & Revocation

- Claim endpoint: `https://lotus365id.com/oauth/claim`
- Revocation endpoint: `https://lotus365id.com/oauth/revoke`
- Introspection endpoint: `https://lotus365id.com/oauth/introspect`

## Contact

Concierge & support: https://wa.me/918294924767