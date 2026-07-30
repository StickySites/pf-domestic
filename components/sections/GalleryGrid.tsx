import Image from "next/image";
import Link from "next/link";
import Container from "@/components/primitives/Container";
import {
  gallery,
  galleryProjectDisplayTitle,
  galleryProjectHero,
} from "@/lib/data";

export default function GalleryGrid() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.projects.map((project) => {
            const hero = galleryProjectHero(project);
            const label = galleryProjectDisplayTitle(project);
            const photoCount = project.images.length;
            const className =
              "group relative block aspect-[4/3] overflow-hidden rounded-lg border border-line shadow-sm";

            const media = (
              <>
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={
                    project.galleryOnly
                      ? "object-cover"
                      : "object-cover transition-transform duration-300 group-hover:scale-105"
                  }
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4">
                  <span className="text-sm font-semibold text-white">
                    {label}
                  </span>
                  {!project.galleryOnly && photoCount > 1 && (
                    <span className="mt-0.5 block text-xs text-white/75">
                      {photoCount} photos
                    </span>
                  )}
                </div>
              </>
            );

            if (project.galleryOnly) {
              return (
                <div key={project.slug} className={className}>
                  {media}
                </div>
              );
            }

            return (
              <Link
                key={project.slug}
                href={`/project-gallery/${project.slug}`}
                className={`${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`}
              >
                {media}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
