import Image from "next/image";
import Link from "next/link";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import Button from "@/components/primitives/Button";
import {
  galleryProjectDisplayTitle,
  galleryProjectHero,
  getGalleryCaseStudy,
  home,
} from "@/lib/data";

type Props = {
  tone?: "white" | "band";
};

export default function ProjectsTeaser({ tone = "white" }: Props) {
  const { kicker, heading, intro, slugs, cta } = home.projectsTeaser;
  const projects = slugs
    .map((slug) => getGalleryCaseStudy(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        <SectionHeading kicker={kicker} heading={heading} />
        <p className="mx-auto mt-4 max-w-3xl text-center text-body">{intro}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const hero = galleryProjectHero(project);
            const label = galleryProjectDisplayTitle(project);

            return (
              <Link
                key={project.slug}
                href={`/project-gallery/${project.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-line shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4">
                  <span className="text-sm font-semibold text-white">
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={cta.href} variant="outline">
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
