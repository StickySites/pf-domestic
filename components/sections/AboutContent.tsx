import Image from "next/image";
import Container from "@/components/primitives/Container";
import { about } from "@/lib/data";

export default function AboutContent() {
  return (
    <>
      <section className="bg-white">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div className="space-y-4 text-body">
            <p className="text-lg text-body">{about.intro}</p>
            <h2 className="pt-4 text-2xl font-bold text-ink">
              {about.story.heading}
            </h2>
            {about.story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <Image
              src={about.image}
              alt="P&F Domestic Solutions building work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-band">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              {about.values.heading}
            </h2>
            {about.values.body.map((p, i) => (
              <p key={i} className="mt-4 text-body">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
            {about.whyChoose.heading}
          </h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-col flex-wrap gap-6 sm:flex-row sm:justify-center">
            {about.whyChoose.points.map((point) => (
              <article
                key={point.title}
                className="rounded-lg border border-line border-t-[3px] border-t-accent bg-white px-6 py-7 shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[calc(50%-0.75rem)]"
              >
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-semibold text-ink">
            {about.cta}
          </p>
        </Container>
      </section>
    </>
  );
}
