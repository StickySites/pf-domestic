"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import {
  getConsent,
  getServerConsent,
  subscribeConsent,
} from "@/lib/cookie-consent/consent-store";

/** Loads Microsoft Clarity only when NEXT_PUBLIC_CLARITY_PROJECT_ID is set
 *  AND the visitor has accepted the "analytics" cookie category. */
export function MicrosoftClarity() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent,
    getServerConsent,
  );
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  if (!projectId || !consent.analytics) return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
      `}
    </Script>
  );
}
