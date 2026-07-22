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
          <div className="absolute inset-0">
            <Image
              src={image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[50%_40%] md:object-center"
              aria-hidden="true"
            />
          </div>
          {/* Mobile: stronger bottom→top darken for full-width copy */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/92 via-navy/72 to-navy/48 md:hidden"
            aria-hidden="true"
          />
          {/* md+: soft L→R + light vignette — fuller photo colour */}
          <div
            className="absolute inset-0 hidden bg-gradient-to-r from-navy/90 via-navy/60 to-navy/25 md:block"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden bg-gradient-to-t from-navy/40 via-transparent to-navy/20 md:block"
            aria-hidden="true"
          />
        </>
      )}
      <Container className="relative py-12 sm:py-16 md:py-20">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight !text-white sm:text-4xl lg:text-5xl">
          {heading}
        </h1>
        {intro && (
          <p className="mt-3 max-w-3xl text-base text-white/85 sm:mt-4 sm:text-lg">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
