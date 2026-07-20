import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { home, images } from "@/lib/data";

export default function AboutTeaser() {
  return (
    <section className="bg-white">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src={images.about}
            alt="P&F Domestic Solutions building work"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            {home.aboutTeaser.heading}
          </h2>
          <p className="mt-6 text-body">{home.aboutTeaser.body}</p>
          <div className="mt-8">
            <Button href={home.aboutTeaser.cta.href} variant="outline">
              {home.aboutTeaser.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
