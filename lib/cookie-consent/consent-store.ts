/**
 * Tiny external store bridging vanilla-cookieconsent (which lives outside
 * the React tree and mutates the DOM directly) to React components that
 * need to know "is analytics/advertising consent currently granted".
 *
 * CookieConsentInit (components/analytics/cookie-consent-init.tsx) is the
 * only writer — it calls setConsent() from the library's onConsent/onChange
 * callbacks. GoogleAnalytics and MetaPixel are the readers, via
 * useSyncExternalStore, so they re-render the instant consent changes
 * without needing prop drilling through the root layout.
 */

export type ConsentState = {
  analytics: boolean;
  advertising: boolean;
};

let state: ConsentState = { analytics: false, advertising: false };
const listeners = new Set<() => void>();

export function getConsent(): ConsentState {
  return state;
}

/** Stable snapshot for useSyncExternalStore's server/initial-render arg. */
const SERVER_CONSENT: ConsentState = { analytics: false, advertising: false };

export function getServerConsent(): ConsentState {
  return SERVER_CONSENT;
}

export function setConsent(next: ConsentState) {
  state = next;
  listeners.forEach((listener) => listener());
}

export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
