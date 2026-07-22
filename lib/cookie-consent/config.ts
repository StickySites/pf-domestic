import type CookieConsent from "vanilla-cookieconsent";

/**
 * Central config for vanilla-cookieconsent. Kept as plain data so the
 * cookie-policy page's category descriptions and this config can't drift
 * apart silently — if you add a category, update both.
 *
 * Categories map 1:1 to the scripts they gate:
 *  - necessary    -> nothing to gate, always on
 *  - analytics    -> GoogleAnalytics (components/analytics/google-analytics.tsx)
 *  - advertising  -> MetaPixel (components/analytics/meta-pixel.tsx)
 */
export function getCookieConsentConfig(): CookieConsent.CookieConsentConfig {
  return {
    mode: "opt-in",
    autoShow: true,
    hideFromBots: true,
    guiOptions: {
      consentModal: {
        layout: "bar inline",
        position: "bottom",
        equalWeightButtons: true,
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
      },
    },
    categories: {
      necessary: {
        readOnly: true,
        enabled: true,
      },
      analytics: {},
      advertising: {},
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies",
            description:
              'We use cookies to run the site, and (only with your permission) to understand how it’s used and measure ad performance. See our <a href="/cookie-policy-uk" class="cc-link">Cookie Policy</a> for details.',
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage preferences",
          },
          preferencesModal: {
            title: "Cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Save preferences",
            sections: [
              {
                title: "Strictly necessary",
                description:
                  "Required for the site to function. These can't be switched off.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics",
                description:
                  "Helps us understand how visitors use the site, via Google Analytics.",
                linkedCategory: "analytics",
              },
              {
                title: "Advertising",
                description:
                  "Used to measure the performance of ads run via Meta (Facebook/Instagram), via the Meta Pixel.",
                linkedCategory: "advertising",
              },
              {
                title: "More information",
                description:
                  'Full detail on what each category covers is in our <a href="/cookie-policy-uk" class="cc-link">Cookie Policy</a>. Questions? Contact admin@pfdomesticsolutions.com.',
              },
            ],
          },
        },
      },
    },
  };
}
