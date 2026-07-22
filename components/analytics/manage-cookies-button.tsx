"use client";

type ManageCookiesButtonProps = {
  className?: string;
  label?: string;
};

/**
 * Reopens the preferences modal on demand — used in the footer and on the
 * cookie-policy page so visitors can change their mind after the initial
 * banner. Dynamic import matches CookieConsentInit's pattern (never touch
 * this DOM-manipulating lib during SSR).
 */
export function ManageCookiesButton({
  className,
  label = "Manage cookie preferences",
}: ManageCookiesButtonProps) {
  async function handleClick() {
    const CookieConsent = await import("vanilla-cookieconsent");
    CookieConsent.showPreferences();
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
