import Image from "next/image";
import Container from "@/components/primitives/Container";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactStrip from "@/components/sections/ContactStrip";
import PageHeader from "@/components/sections/PageHeader";
import { type Service } from "@/lib/data";

// Shared template for the six service pages. Route files compose only this wrapper.
export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <PageHeader heading={service.pageHeading} />
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-lg shadow-md">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-semibold text-ink">{service.intro}</p>
            <div className="mt-6 space-y-5 text-body">
              {service.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CtaBanner heading={service.ctaHeading} />
      <ContactStrip />
    </>
  );
}
