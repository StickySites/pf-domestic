import Container from "@/components/primitives/Container";
import { site } from "@/lib/data";

// Minimal footer for Ads landing pages: contact details and legal line only — no
// navigation links, so the page keeps a single conversion path.
export default function LandingFooter() {
  return (
    <footer className="border-t border-line bg-navy text-white/70">
      <Container className="flex flex-col items-center justify-between gap-3 py-8 text-center text-sm sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="flex flex-col gap-1 sm:flex-row sm:gap-4">
          <a href={site.phoneHref} className="hover:text-accent">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
        </p>
      </Container>
    </footer>
  );
}
