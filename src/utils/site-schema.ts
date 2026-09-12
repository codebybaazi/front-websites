import { SITE_ORIGIN } from "@/utils/page-seo";

/** Site-wide brand entity graph — one Organization behind one WebSite, rendered once in the root layout. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: "Fairplay",
        url: SITE_ORIGIN,
        logo: `${SITE_ORIGIN}/logo.png`,
        foundingDate: "2017",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        name: "Fairplay",
        url: SITE_ORIGIN,
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
    ],
  };
}
