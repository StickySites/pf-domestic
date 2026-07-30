import Container from "@/components/primitives/Container";
import { ManageCookiesButton } from "@/components/analytics/manage-cookies-button";
import { site } from "@/lib/data";

// Minimal footer for Ads landing pages: contact details and legal line only — no
// navigation links, so the page keeps a single conversion path.
export default function LandingFooter() {
  return (
    <footer className="border-t border-line bg-navy text-white/70">
      <Container className="flex flex-col items-center justify-between gap-3 py-8 text-center text-sm sm:flex-row sm:text-left">
        <p className="flex flex-row flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-white/50 sm:justify-start">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span aria-hidden="true">·</span>
          <span>
            Created and maintained by{" "}
            <a
              href="https://stkysites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-accent"
            >
              StickySites
            </a>
          </span>
        </p>
        <p className="flex flex-col gap-1 sm:items-end sm:flex-row sm:gap-4">
          <a href={site.phoneHref} className="hover:text-accent">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
          <ManageCookiesButton
            className="hover:text-accent"
            label="Cookie preferences"
          />
        </p>
      </Container>
    </footer>
  );
}
