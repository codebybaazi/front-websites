# Agent Registration & Authentication

Cricbet99 supports autonomous agent registration and authentication for programmatic access to sports data and betting APIs.

## Registration
Agents can register for credentials at:
`https://cricbet99.co.in/api/public/agent-registration`

Supported Identity Types:
- `organization`
- `independent-agent`

## Authentication
We support OAuth 2.0 and OpenID Connect.
- **Issuer**: `https://cricbet99.co.in`
- **Token Endpoint**: `https://cricbet99.co.in/api/public/token`
- **JWKS URI**: `https://cricbet99.co.in/.well-known/jwks.json`

## Metadata
- **OIDC Configuration**: `/.well-known/openid-configuration`
- **Protected Resources**: `/.well-known/oauth-protected-resource`

## Claims & Revocation
- **Revocation Endpoint**: `https://cricbet99.co.in/api/public/revoke`
- **Claims Request**: `https://cricbet99.co.in/api/public/claims`
