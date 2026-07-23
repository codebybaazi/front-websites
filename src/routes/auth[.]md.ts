import { createFileRoute } from "@tanstack/react-router";

// /auth.md — agent registration instructions (Markdown).
export const Route = createFileRoute("/auth.md")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = `# auth.md — SprintersHub Agent Authentication

This site publishes machine-readable auth metadata for AI agents and
automated clients.

## Discovery

- OAuth Authorization Server Metadata (RFC 8414): \`${origin}/.well-known/oauth-authorization-server\`
- OAuth Protected Resource Metadata (RFC 9728): \`${origin}/.well-known/oauth-protected-resource\`
- JWKS: \`${origin}/.well-known/jwks.json\`

## Agent Registration

SprintersHub does not currently expose self-service protected APIs. To
register an agent or request programmatic access:

1. Contact the site owner via \`${origin}/contact-us\`.
2. Provide the agent identity (name, operator, homepage) and intended scopes.
3. On approval, credentials are issued out-of-band.

## Supported Identities & Credentials

- Identity types: \`agent\`, \`user\`
- Credential types: \`bearer\`
- Grant types: \`authorization_code\`, \`refresh_token\`
- Response types: \`code\`
- PKCE: \`S256\` required

## Scopes

- \`openid\`, \`profile\`, \`email\` (identity only)

## Claims & Revocation

- Claims documentation: \`${origin}/auth.md\`
- Revocation requests: \`${origin}/contact-us\`

## Contact

For all agent-related inquiries: \`${origin}/contact-us\`.
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
