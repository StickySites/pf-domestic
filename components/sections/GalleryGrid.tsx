import Image from "next/image";
import Container from "@/components/primitives/Container";
import { gallery } from "@/lib/data";

export default function GalleryGrid() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-line shadow-sm"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4">
                <span className="text-sm font-semibold text-white">
                  {project.title}
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted">{gallery.address}</p>
      </Container>
    </section>
  );
}
