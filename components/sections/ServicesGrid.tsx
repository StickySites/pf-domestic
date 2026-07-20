import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";
import { services } from "@/lib/data";

type Props = {
  kicker?: string;
  heading: string;
  intro?: string;
  tone?: "white" | "band";
};

export default function ServicesGrid({
  kicker,
  heading,
  intro,
  tone = "white",
}: Props) {
  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        <SectionHeading kicker={kicker} heading={heading} />
        {intro && (
          <p className="mx-auto mt-4 max-w-3xl text-center text-body">{intro}</p>
        )}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
