import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { landingOxford, images } from "@/lib/data";

export default function LandingHero() {
  return (
    // LandingHeader ≈ 4.5625rem (py-3 + h-12 logo + border-b) — fill remaining viewport
    <section className="relative isolate flex min-h-[calc(100dvh-4.5625rem)] items-center overflow-hidden bg-navy-dark">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={images.extension}
          alt="Finished rendered house extension with bifold doors by P&F Domestic Solutions"
          fill
          priority
          sizes="100vw"
          className="hero-ken-burns object-cover object-[60%_38%] sm:object-[55%_35%] md:object-[52%_center] lg:object-center"
        />
      </div>
      {/* Mobile: full-width bottom→top darken for readable copy over white render */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/92 via-navy-dark/74 to-navy-dark/50 md:hidden"
        aria-hidden="true"
      />
      {/* md+: L→R scrim + light bottom vignette — shows more photo colour */}
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-navy-dark/92 via-navy-dark/55 to-navy-dark/15 md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-t from-navy-dark/50 via-transparent to-navy-dark/25 md:block"
        aria-hidden="true"
      />

      <Container className="relative py-10 sm:py-14 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="hero-enter text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            {landingOxford.kicker}
          </p>
          <h1 className="hero-enter hero-enter-delay-1 mt-2 text-3xl font-bold leading-tight !text-white sm:mt-3 sm:text-4xl md:text-5xl">
            {landingOxford.heading}
          </h1>
          <span className="hero-accent-line" aria-hidden="true" />
          <p className="hero-enter hero-enter-delay-2 mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg">
            {landingOxford.strapline}
          </p>
          <p className="hero-enter hero-enter-delay-3 mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-4">
            {landingOxford.usps.map((usp, i) => (
              <span key={usp} className="block sm:inline">
                {i > 0 && <span className="hidden sm:inline"> · </span>}
                {usp}
              </span>
            ))}
          </p>
          <div className="hero-enter hero-enter-delay-4 mt-6 sm:mt-8 md:mt-10">
            <Button
              href={landingOxford.cta.href}
              variant="solid"
              className="w-full !px-8 !py-5 !text-base sm:w-auto sm:!px-10 sm:!py-5 sm:!text-lg"
            >
              {landingOxford.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
