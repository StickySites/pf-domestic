import Link from "next/link";
import Container from "@/components/primitives/Container";
import MapEmbed from "@/components/primitives/MapEmbed";
import { coverageTowns } from "@/lib/data";

export default function AreasGrid() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coverageTowns.map((town) => (
            <article
              key={town.name}
              className="overflow-hidden rounded-lg border border-line bg-white shadow-sm"
            >
              <MapEmbed
                query={town.mapQuery}
                title={`Map of ${town.name}`}
                className="rounded-none border-0 border-b border-line"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink">{town.name}</h3>
                {town.href && (
                  <Link
                    href={town.href}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink hover:text-accent"
                  >
                    View area
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
