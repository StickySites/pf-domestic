import Link from "next/link";
import Image from "next/image";
import Container from "@/components/primitives/Container";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Phone,
  Mail,
} from "@/components/primitives/icons";
import { ManageCookiesButton } from "@/components/analytics/manage-cookies-button";
import { site, images, nav, accreditations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <Container className="!max-w-none flex flex-col gap-8 !px-6 py-10 sm:!px-8 lg:!px-10 xl:flex-row xl:items-start xl:justify-between xl:gap-16">
        <div className="flex max-w-sm flex-col space-y-4 xl:shrink-0">
          <Image
            src={images.logoOnDark}
            alt={site.name}
            width={763}
            height={729}
            className="h-28 w-auto self-start object-contain"
          />
          <p className="self-stretch text-left text-sm leading-relaxed">
            Expert building and construction services across London and the Home
            Counties. Building with integrity, delivering with pride.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-6 lg:gap-x-10 xl:ml-auto">
          <nav aria-label="Explore" className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide !text-white">
              Explore
            </h4>
            <ul className="space-y-1 text-sm">
              {nav.footer.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide !text-white">
              Services
            </h4>
            <ul className="space-y-1 text-sm">
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

          <nav aria-label="Policies" className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide !text-white">
              Policies
            </h4>
            <ul className="space-y-1 text-sm">
              {nav.footer.policies.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <ManageCookiesButton className="block text-left hover:text-accent" />
              </li>
            </ul>
          </nav>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide !text-white">
              Get in touch
            </h4>
            <ul className="space-y-1 text-sm">
              {nav.footer.contact.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
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
            </ul>
            <div className="flex gap-3 pt-1">
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
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-ink"
              >
                <WhatsApp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="!max-w-none flex flex-wrap items-center justify-center gap-4 !px-6 py-8 sm:gap-6 sm:!px-8 lg:!px-10">
          {accreditations.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 w-28 items-center justify-center rounded-md bg-white p-2.5 sm:h-20 sm:w-32"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="!max-w-none flex flex-col items-center justify-between gap-2 !px-6 py-4 text-xs text-white/60 sm:!px-8 sm:flex-row lg:!px-10">
          <p className="flex flex-row flex-wrap items-center justify-center gap-x-1.5 gap-y-1 sm:justify-start">
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
                className="text-white/80 transition-colors hover:text-accent"
              >
                StickySites
              </a>
            </span>
          </p>
          <p>Building with integrity, delivering with pride.</p>
        </Container>
      </div>
    </footer>
  );
}
