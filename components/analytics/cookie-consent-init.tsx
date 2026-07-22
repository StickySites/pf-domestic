"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { getCookieConsentConfig } from "@/lib/cookie-consent/config";
import { setConsent } from "@/lib/cookie-consent/consent-store";

/**
 * Mounts once in the root layout. Dynamically imports vanilla-cookieconsent
 * (a DOM-manipulating vanilla-JS lib) inside useEffect so it never runs
 * during SSR, then runs it and mirrors accepted categories into our own
 * consent-store so GoogleAnalytics/MetaPixel can react to them.
 *
 * Renders nothing itself — the library appends its own banner/modal
 * markup directly to <body>.
 */
export function CookieConsentInit() {
  useEffect(() => {
    let cancelled = false;

    import("vanilla-cookieconsent").then((CookieConsent) => {
      if (cancelled) return;

      function syncConsent() {
        setConsent({
          analytics: CookieConsent.acceptedCategory("analytics"),
          advertising: CookieConsent.acceptedCategory("advertising"),
        });
      }

      CookieConsent.run({
        ...getCookieConsentConfig(),
        onFirstConsent: syncConsent,
        onConsent: syncConsent,
        onChange: syncConsent,
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
