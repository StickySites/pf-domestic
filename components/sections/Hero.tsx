import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { home, images, site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[62vh] items-center overflow-hidden bg-navy-dark sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[85vh]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={images.home}
          alt="Finished garden room by P&F Domestic Solutions, lit at dusk"
          fill
          priority
          sizes="100vw"
          className="hero-ken-burns object-cover object-[62%_42%] sm:object-[58%_40%] md:object-[55%_center] lg:object-center"
        />
      </div>
      {/* Mobile: full-width bottom→top darken for readable copy over bright wood */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/92 via-navy-dark/72 to-navy-dark/48 md:hidden"
        aria-hidden="true"
      />
      {/* md+: L→R scrim + light bottom vignette — shows more photo colour */}
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-navy-dark/92 via-navy-dark/55 to-navy-dark/15 md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-t from-navy-dark/55 via-transparent to-navy-dark/25 md:block"
        aria-hidden="true"
      />

      <Container className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="hero-enter text-3xl font-bold leading-tight !text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {home.hero.headline}
          </h1>
          <span className="hero-accent-line" aria-hidden="true" />
          <p className="hero-enter hero-enter-delay-1 mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg">
            {home.hero.strapline}
          </p>
          <div className="hero-enter hero-enter-delay-2 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4 md:mt-10">
            <Button href={site.phoneHref} variant="solid" className="w-full sm:w-auto">
              {home.hero.primaryCta.label}
            </Button>
            <Button
              href={home.hero.secondaryCta.href}
              variant="outlineLight"
              className="w-full sm:w-auto"
            >
              {home.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
