"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { ChevronDown } from "@/components/primitives/icons";
import { site, images, nav } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white shadow-sm">
      <Container className="!max-w-none flex w-full items-center justify-between gap-4 !px-4 py-4 sm:!px-6 lg:!px-8">
        <Link href="/" className="flex min-w-0 shrink items-center" aria-label={site.name}>
          <Image
            src={images.logo}
            alt={site.name}
            width={1275}
            height={453}
            priority
            className="h-14 w-auto max-w-[min(100%,11.5rem)] object-contain object-left sm:h-16 sm:max-w-[14rem]"
          />
        </Link>

        {/* Desktop nav + CTA — grouped and pushed right */}
        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {nav.primary.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded px-3 py-2 text-base font-medium transition-colors hover:text-accent ${
                      isActive(item.href) ? "text-accent" : "text-navy"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-64 rounded-md border border-line bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-band hover:text-accent ${
                          isActive(child.href) ? "text-accent" : "text-navy"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded px-3 py-2 text-base font-medium transition-colors hover:text-accent ${
                    isActive(item.href) ? "text-accent" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="shrink-0">
            <Button href="/contact-us" className="px-4 py-2">
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="ml-auto inline-flex items-center justify-center rounded p-2 text-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-line bg-white lg:hidden"
          aria-label="Mobile"
        >
          <Container className="!max-w-none flex w-full flex-col !px-4 py-2 sm:!px-6 lg:!px-8">
            {nav.primary.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-line/60">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMenu((m) => (m === item.href ? null : item.href))
                    }
                    className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-navy"
                    aria-expanded={openMenu === item.href}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMenu === item.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMenu === item.href && (
                    <div className="pb-2 pl-4">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm font-medium text-navy"
                      >
                        {item.label} overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-body"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`border-b border-line/60 py-3 text-base font-medium ${
                    isActive(item.href) ? "text-accent" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="py-3">
              <Button
                href="/contact-us"
                className="w-full"
              >
                Get a Quote
              </Button>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
