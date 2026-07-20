import Image from "next/image";
import Container from "@/components/primitives/Container";
import { Phone } from "@/components/primitives/icons";
import { site, images } from "@/lib/data";

// Ads landing chrome: logo + click-to-call only. Deliberately no navigation and no
// link on the logo — the only actions on this page are call or submit the form.
export default function LandingHeader() {
  return (
    <header className="border-b border-line bg-white">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Image
          src={images.logo}
          alt={site.name}
          width={1275}
          height={453}
          priority
          className="h-12 w-auto"
        />
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">Call now</span>
        </a>
      </Container>
    </header>
  );
}
