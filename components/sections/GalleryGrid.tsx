import Image from "next/image";
import Container from "@/components/primitives/Container";
import { gallery } from "@/lib/data";

export default function GalleryGrid() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.projects.map((project) => (
            <figure
              key={project.image}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-line shadow-sm"
            >
              <Image
                src={project.image}
                alt={project.alt ?? project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4">
                <span className="text-sm font-semibold text-white">
                  {project.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
