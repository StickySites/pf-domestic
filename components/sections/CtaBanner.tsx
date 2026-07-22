import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { images } from "@/lib/data";

type Props = {
  heading: string;
  buttonLabel?: string;
  buttonHref?: string;
  image?: string;
};

export default function CtaBanner({
  heading,
  buttonLabel = "Contact Us",
  buttonHref = "/contact-us",
  image = images.banner,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <Container className="relative flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-3xl text-2xl font-bold !text-white sm:text-3xl">
          {heading}
        </h2>
        <Button href={buttonHref} variant="solid">
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
