/**
 * Tiny external store bridging vanilla-cookieconsent (which lives outside
 * the React tree and mutates the DOM directly) to React components that
 * need to know whether analytics consent is currently granted.
 *
 * CookieConsentInit is the only writer. GoogleTagManager and MicrosoftClarity
 * read via useSyncExternalStore so they mount/unmount when consent changes.
 */

export type ConsentState = {
  analytics: boolean;
};

let state: ConsentState = { analytics: false };
const listeners = new Set<() => void>();

export function getConsent(): ConsentState {
  return state;
}

/** Stable snapshot for useSyncExternalStore's server/initial-render arg. */
const SERVER_CONSENT: ConsentState = { analytics: false };

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
