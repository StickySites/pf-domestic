import Link from "next/link";
import Image from "next/image";
import Container from "@/components/primitives/Container";
import { Facebook, Instagram, Phone, Mail, Pin } from "@/components/primitives/icons";
import { site, images, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src={images.logo}
            alt={site.name}
            width={1275}
            height={453}
            className="h-16 w-auto rounded-md bg-white px-3 py-2"
          />
          <p className="text-sm leading-relaxed">
            Expert building and construction services across London and the Home
            Counties. Building with integrity, delivering with pride.
          </p>
          <div className="flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-ink"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-ink"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {nav.footer.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {nav.primary
              .find((i) => i.href === "/building-services")
              ?.children?.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="hover:text-accent">
                    {child.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Pin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Building with integrity, delivering with pride.</p>
        </Container>
      </div>
    </footer>
  );
}
