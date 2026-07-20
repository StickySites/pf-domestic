import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import MapEmbed from "@/components/primitives/MapEmbed";

type Props = {
  heading: string;
  mapQuery: string;
  paragraphs: string[];
};

export default function TownProfile({ heading, mapQuery, paragraphs }: Props) {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading heading={heading} align="left" />
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <MapEmbed query={mapQuery} title={`Map of ${mapQuery}`} />
          {paragraphs.length > 0 && (
            <div className="space-y-4 text-body">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
