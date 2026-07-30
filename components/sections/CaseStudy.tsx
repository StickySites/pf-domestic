import Image from "next/image";
import Link from "next/link";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import PageHeader from "@/components/sections/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactStrip from "@/components/sections/ContactStrip";
import {
  services,
  galleryProjectDisplayTitle,
  galleryProjectHero,
  type GalleryProject,
} from "@/lib/data";

export default function CaseStudy({ project }: { project: GalleryProject }) {
  const title = galleryProjectDisplayTitle(project);
  const hero = galleryProjectHero(project);
  const service = services.find((s) => s.slug === project.serviceSlug);
  const hasCaptions = project.images.some((img) => img.caption);
  const extraImages = project.images.filter((img) => img.src !== hero.src);

  return (
    <>
      <PageHeader heading={title} intro={project.summary} />
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="mb-8 text-sm text-muted">
            <Link
              href="/project-gallery"
              className="font-medium text-ink underline-offset-2 hover:text-accent hover:underline"
            >
              Project Gallery
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{title}</span>
          </p>

          {hasCaptions ? (
            <div className="mb-10 grid gap-6 sm:grid-cols-2">
              {project.images.map((image, index) => (
                <figure key={image.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line shadow-sm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="mt-3 text-sm font-semibold text-ink">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-lg shadow-md">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          )}

          <div className="mx-auto max-w-3xl">
            <div className="space-y-5 text-body">
              {project.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {service && (
              <p className="mt-8 text-body">
                Related service:{" "}
                <Link
                  href={`/${service.slug}`}
                  className="font-semibold text-ink underline-offset-2 hover:text-accent hover:underline"
                >
                  {service.title}
                </Link>
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact-us" variant="solid">
                Get a Free Quote
              </Button>
              <Button href="/project-gallery" variant="outline">
                Back to Gallery
              </Button>
            </div>
          </div>

          {!hasCaptions && extraImages.length > 0 && (
            <div className="mt-14">
              <h2 className="mb-6 text-2xl font-bold text-ink">
                More from this project
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {extraImages.map((image) => (
                  <figure
                    key={image.src}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line shadow-sm"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
      <CtaBanner heading="Like what you see? Tell us about your project and we’ll provide a free, no-obligation quote." />
      <ContactStrip />
    </>
  );
}
