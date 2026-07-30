"use client";

import { useEffect } from "react";
import { getCookieConsentConfig } from "@/lib/cookie-consent/config";
import { setConsent } from "@/lib/cookie-consent/consent-store";

/**
 * Mounts once in the root layout. Dynamically imports vanilla-cookieconsent
 * inside useEffect so it never runs during SSR, then mirrors accepted
 * categories into consent-store so GTM / Clarity can react to them.
 * CSS is imported from app/globals.css (not here) to avoid Turbopack
 * failing to resolve Tailwind's enhanced-resolve on client CSS imports.
 */
export function CookieConsentInit() {
  useEffect(() => {
    let cancelled = false;

    import("vanilla-cookieconsent").then((CookieConsent) => {
      if (cancelled) return;

      function syncConsent() {
        setConsent({
          analytics: CookieConsent.acceptedCategory("analytics"),
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
