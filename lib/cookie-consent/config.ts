import type CookieConsent from "vanilla-cookieconsent";

/**
 * Central config for vanilla-cookieconsent. Kept as plain data so the
 * cookie-policy page's category descriptions and this config can't drift
 * apart silently — if you add a category, update both.
 *
 * Categories map 1:1 to the scripts they gate:
 *  - necessary  -> nothing to gate, always on
 *  - analytics  -> Google Tag Manager (GA4) + Microsoft Clarity
 *
 * Advertising / Meta Pixel can be re-added later as a separate category.
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
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies",
            description:
              'We use cookies to run the site, and (only with your permission) to understand how it’s used via Google Analytics and Microsoft Clarity. See our <a href="/cookie-policy-uk" class="cc-link">Cookie Policy</a> for details.',
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
                  "Helps us understand how visitors use the site via Google Tag Manager / Google Analytics (GA4) and Microsoft Clarity (session recordings and heatmaps).",
                linkedCategory: "analytics",
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
