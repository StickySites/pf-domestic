"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import {
  getConsent,
  getServerConsent,
  subscribeConsent,
} from "@/lib/cookie-consent/consent-store";

/** Renders nothing unless NEXT_PUBLIC_GA_MEASUREMENT_ID is set AND the
 *  visitor has accepted the "analytics" cookie category via CookieConsentInit. */
export function GoogleAnalytics() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent,
    getServerConsent,
  );
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId || !consent.analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
