# auth.md

This document describes the registration and authentication flow for autonomous agents on Cricbet99.

## Agent Registration
Agents can register for credentials using the `agent_auth` metadata provided in our authorization server discovery documents.

**Registration URI**: https://cricbet99.co.in/api/public/agent-registration

### Supported Identity Types
- **identity_assertion**: Supports `urn:ietf:params:oauth:token-type:id-jag` (ID-JAG) and `verified_email`.
- **anonymous**: Supports credential-less discovery with claims via `https://cricbet99.co.in/api/public/claims`.

## Authentication Flow
1. **Discover**: Agents locate metadata at `/.well-known/oauth-authorization-server`.
2. **Register**: POST to `/api/public/agent-registration` with the required identity assertion.
3. **Revoke**: Use `/api/public/revoke` for credential lifecycle management.

## Metadata Summary
- Issuer: https://cricbet99.co.in
- Token Endpoint: https://cricbet99.co.in/api/public/auth/token
- Resource Documentation: https://cricbet99.co.in/auth.md
