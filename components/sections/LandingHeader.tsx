import Image from "next/image";
import Link from "next/link";
import Container from "@/components/primitives/Container";
import { Phone } from "@/components/primitives/icons";
import { site, images } from "@/lib/data";

// Ads landing chrome: logo (→ main site) + click-to-call only. Deliberately no
// navigation — the primary actions are call or submit the form; the logo is the
// escape hatch for visitors who want the full website.
export default function LandingHeader() {
  return (
    <header className="border-b border-line bg-white">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
          <Image
            src={images.logo}
            alt={site.name}
            width={1275}
            height={453}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover"
        >
          <Phone className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline">Call now {site.phoneDisplay}</span>
          <span className="sm:hidden">Call now {site.phone}</span>
        </a>
      </Container>
    </header>
  );
}
