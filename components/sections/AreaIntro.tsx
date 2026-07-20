import Image from "next/image";
import Container from "@/components/primitives/Container";
import { images } from "@/lib/data";

type Props = {
  paragraphs: string[];
};

export default function AreaIntro({ paragraphs }: Props) {
  return (
    <section className="bg-white">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div className="space-y-4 text-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src={images.doors}
            alt="P&F Domestic Solutions craftsmanship"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
