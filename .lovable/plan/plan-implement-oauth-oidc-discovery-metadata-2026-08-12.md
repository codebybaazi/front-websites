# Plan: Implement OAuth/OIDC Discovery Metadata

The user wants to publish OAuth/OIDC discovery metadata (`/.well-known/openid-configuration`) to allow agents to discover how to authenticate with the site's APIs.

## User Review Required

> [!IMPORTANT]
> This implementation provides **discovery metadata only**. It defines where endpoints *would* be. Real authentication logic (OAuth flow, token issuance) is not part of this task.

## Proposed Changes

### 1. New API Route for OIDC Configuration
- Create `src/routes/api/public/openid-configuration.ts`.
- This route will return the standard JSON metadata for OpenID Connect discovery.
- It will include standard OIDC fields: `issuer`, `authorization_endpoint`, `token_endpoint`, `jwks_uri`, etc.
- Content-Type will be `application/json`.

### 2. JWKS (JSON Web Key Set) File
- Create a static file `public/.well-known/jwks.json` to satisfy the `jwks_uri` requirement in the discovery metadata.

### 3. Server Interception for Discovery Path
- Update `src/server.ts` to intercept `/.well-known/openid-configuration` and route it to the new internal API endpoint.
- This ensures the discovery metadata is served correctly at the standard OIDC path.

### 4. Metadata and Link Headers
- Add `rel="openid-configuration"` to the HTTP `Link` headers on the homepage for automated discovery.
- Update `src/routes/__root.tsx` to include the discovery link in the HTML `<head>`.

## Technical Details
- **RFC Compliance**: Follows OpenID Connect Discovery 1.0 specifications.
- **Routing**: Uses the existing TanStack Start server routing pattern with a custom fetch interceptor for `.well-known` paths.
- **Endpoint mapping**:
  - `/.well-known/openid-configuration` -> `src/routes/api/public/openid-configuration.ts`
  - `/.well-known/jwks.json` -> `public/.well-known/jwks.json` (static)

## Verification Plan
- Use `curl` to verify `GET /.well-known/openid-configuration` returns JSON with `Content-Type: application/json`.
- Verify the homepage includes the `rel="openid-configuration"` link in both HTML and HTTP headers.
- Verify `/.well-known/jwks.json` is reachable.
