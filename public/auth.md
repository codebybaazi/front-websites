---
agent_auth: true
register_uri: https://cricbet99.co.in/api/public/agent-registration
identity_types_supported: ["identity_assertion", "anonymous"]
---
# auth.md

Machine-readable registration and authentication guide for autonomous agents using Cricbet99.

## Audience

This document is written for AI agents, MCP clients, and automated integrations that need credentials to call Cricbet99 public APIs on behalf of a user or on their own behalf.

## Registration Endpoint

- Registration (provisioning) endpoint: `POST https://cricbet99.co.in/api/public/agent-registration`
- Content type: `application/json`
- Response: `201 Created` with `agent_id` and next steps.

Example:

```http
POST /api/public/agent-registration HTTP/1.1
Host: cricbet99.co.in
Content-Type: application/json

{
  "client_name": "example-agent",
  "identity_type": "identity_assertion",
  "assertion_type": "urn:ietf:params:oauth:token-type:id-jag",
  "redirect_uris": ["https://example.com/callback"]
}
```

## Supported Registration Methods

1. **identity_assertion (ID-JAG)** — present a `urn:ietf:params:oauth:token-type:id-jag` assertion. Credentials issued: `oauth-client-secret`, `jwt-bearer`.
2. **identity_assertion (verified_email)** — present a `verified_email` assertion. Claims are published at `https://cricbet99.co.in/api/public/claims`.
3. **anonymous** — request a `bearer` credential without user identity. Claims at `https://cricbet99.co.in/api/public/claims`, revocation at `https://cricbet99.co.in/api/public/revoke`.

## Using Credentials

Send the issued credential on every API request in the HTTP `Authorization` header:

```http
Authorization: Bearer <access_token>
```

Tokens are obtained from `https://cricbet99.co.in/api/public/auth/token` and validated against `https://cricbet99.co.in/.well-known/jwks.json`. Revoke a credential at `https://cricbet99.co.in/api/public/revoke`. Revocation events are advertised via `events_supported: ["revocation"]`.

## Discovery Metadata

- Authorization server metadata: `https://cricbet99.co.in/.well-known/oauth-authorization-server`
- OpenID configuration: `https://cricbet99.co.in/.well-known/openid-configuration`
- Protected resource metadata: `https://cricbet99.co.in/.well-known/oauth-protected-resource`
- Issuer: `https://cricbet99.co.in`
- Scopes: `openid`, `profile`, `email`, `api:read`, `agent:identity`
- Bearer methods: `header`
