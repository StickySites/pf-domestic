import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { landingOxford, images } from "@/lib/data";

export default function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={images.extension}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {landingOxford.kicker}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
            {landingOxford.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            {landingOxford.strapline}
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {landingOxford.usps.map((usp) => (
              <li
                key={usp}
                className="flex items-center gap-2 text-sm font-semibold text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.71a.75.75 0 0 0-1.22-.87l-3.24 4.53-1.62-1.62a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.1l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                {usp}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={landingOxford.cta.href} variant="solid">
              {landingOxford.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
