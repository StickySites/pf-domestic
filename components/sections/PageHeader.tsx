import Image from "next/image";
import Container from "@/components/primitives/Container";

type Props = {
  heading: string;
  intro?: string;
  image?: string;
};

// Dark banner heading used at the top of hub/simple/service/area pages.
export default function PageHeader({ heading, intro, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </>
      )}
      <Container className="relative py-16 sm:py-20">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {heading}
        </h1>
        {intro && <p className="mt-4 max-w-3xl text-lg text-white/85">{intro}</p>}
      </Container>
    </section>
  );
}
