import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { home, images, site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={images.home}
        alt="Home renovated by P&F Domestic Solutions"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {home.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            {home.hero.strapline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={site.phoneHref} variant="solid">
              {home.hero.primaryCta.label}
            </Button>
            <Button href={home.hero.secondaryCta.href} variant="outlineLight">
              {home.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
