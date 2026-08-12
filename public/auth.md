# auth.md

Cricbet99 supports autonomous agent registration and authentication for programmatic access to sports data and betting APIs.

## Registration
Agents can register for credentials via the `register_uri` advertised in our OAuth Authorization Server metadata.

**Registration Endpoint**: `https://cricbet99.co.in/api/public/agent-registration`

Supported Identity Types:
- `identity_assertion` (ID-JAG, verified_email)
- `anonymous`

## Authentication
We support OAuth 2.0 and OpenID Connect with Agent Registration support.
- **Issuer**: `https://cricbet99.co.in`
- **Token Endpoint**: `https://cricbet99.co.in/api/public/auth/token`
- **JWKS URI**: `https://cricbet99.co.in/.well-known/jwks.json`

## Discovery Metadata
- **OIDC Configuration**: `/.well-known/openid-configuration`
- **OAuth Authorization Server**: `/.well-known/oauth-authorization-server`
- **Protected Resources**: `/.well-known/oauth-protected-resource`

## Claims & Revocation
- **Revocation Endpoint**: `https://cricbet99.co.in/api/public/revoke`
- **Claims Request**: `https://cricbet99.co.in/api/public/claims`
