/**
 * Definitive "this site is public" OAuth/OIDC discovery answers.
 *
 * Fairplay India publishes no protected APIs and has no user accounts, so there is no
 * issuer that can mint tokens. Rather than 404-ing agents that probe the well-known
 * paths (which they read as "unknown / maybe try again"), we serve valid JSON that
 * states no grant types are supported and points at the public resources instead.
 */
import { API_CATALOG_PATH } from "./agent-discovery";
import { SITE_ORIGIN } from "./page-seo";

export const OAUTH_AS_PATH = "/.well-known/oauth-authorization-server";
export const OPENID_CONFIGURATION_PATH = "/.well-known/openid-configuration";
export const OAUTH_PROTECTED_RESOURCE_PATH = "/.well-known/oauth-protected-resource";

export const OAUTH_METADATA_CONTENT_TYPE = "application/json; charset=utf-8";

function buildMetadata() {
  return {
    issuer: SITE_ORIGIN,
    /** Empty: no authorization, token or refresh flow exists on this origin. */
    grant_types_supported: [] as string[],
    response_types_supported: [] as string[],
    scopes_supported: [] as string[],
    token_endpoint_auth_methods_supported: ["none"],
    service_documentation: `${SITE_ORIGIN}/services`,
    op_policy_uri: `${SITE_ORIGIN}/privacy-policy`,
    op_tos_uri: `${SITE_ORIGIN}/terms-conditions`,
    "x-authentication-required": false,
    "x-access-model": "public-read-only",
    "x-notice":
      "All content on this site is public and readable without authentication. No OAuth authorization server, token endpoint or JWKS is operated on this origin.",
    "x-public-resources": {
      api_catalog: `${SITE_ORIGIN}${API_CATALOG_PATH}`,
      sitemap: `${SITE_ORIGIN}/sitemap.xml`,
      index: `${SITE_ORIGIN}/all-links`,
    },
  };
}

export function buildOAuthAuthorizationServerMetadata(): string {
  return JSON.stringify(buildMetadata(), null, 2);
}

export function buildOpenIdConfigurationMetadata(): string {
  return JSON.stringify(
    { ...buildMetadata(), subject_types_supported: [], id_token_signing_alg_values_supported: [] },
    null,
    2,
  );
}

export function buildOAuthProtectedResourceMetadata(): string {
  return JSON.stringify(
    {
      resource: SITE_ORIGIN,
      authorization_servers: [] as string[],
      scopes_supported: [] as string[],
      bearer_methods_supported: ["header"],
      resource_documentation: `${SITE_ORIGIN}/services`,
      "x-authentication-required": false,
      "x-access-model": "public-read-only",
      "x-notice":
        "This site is a public read-only resource. No protected APIs or OAuth authorization servers are operated on this origin.",
      "x-public-resources": {
        api_catalog: `${SITE_ORIGIN}${API_CATALOG_PATH}`,
        sitemap: `${SITE_ORIGIN}/sitemap.xml`,
        index: `${SITE_ORIGIN}/all-links`,
      },
    },
    null,
    2,
  );
}

export const AUTH_MD_PATH = "/auth.md";
export const AUTH_MD_CONTENT_TYPE = "text/markdown; charset=utf-8";

/**
 * Agent-facing registration document. No credentials exist to hand out, so the
 * honest answer is "register nothing, read freely" — stated in the format agents
 * look for instead of a 404 they read as "unknown".
 */
export function buildAuthMarkdown(): string {
  return `# Agent Authentication — Fairplay India

## Summary

No authentication is required. \`${SITE_ORIGIN}\` is a public, read-only content site.
There is no agent registration step, no API key issuance, no OAuth client
registration and no protected API on this origin.

| Question | Answer |
| --- | --- |
| Registration required? | No |
| Credentials issued? | None |
| Identity types supported | none (anonymous) |
| Credential types supported | none |
| Authorization server | none operated on this origin |
| Access model | public-read-only |

## How agents should access this site

1. Fetch any URL listed in [the sitemap](${SITE_ORIGIN}/sitemap.xml) with a plain
   \`GET\`. Send no \`Authorization\` header.
2. Request \`Accept: text/markdown\` on any page to receive a clean markdown
   rendering instead of HTML.
3. Use [the api-catalog](${SITE_ORIGIN}${API_CATALOG_PATH}) to discover every
   machine-readable resource.
4. Respect [robots.txt](${SITE_ORIGIN}/robots.txt) and a reasonable request rate.

## Discovery metadata

- \`${SITE_ORIGIN}${OAUTH_AS_PATH}\`
- \`${SITE_ORIGIN}${OPENID_CONFIGURATION_PATH}\`
- \`${SITE_ORIGIN}${OAUTH_PROTECTED_RESOURCE_PATH}\`

All three declare \`"x-authentication-required": false\` and empty grant, scope and
authorization-server lists.

## Account help for humans

Fairplay playing IDs are issued by human support over WhatsApp, not through this
website and not to automated agents. See [support](${SITE_ORIGIN}/support).

## Policies

- [Terms & conditions](${SITE_ORIGIN}/terms-conditions)
- [Privacy policy](${SITE_ORIGIN}/privacy-policy)
`;
}
