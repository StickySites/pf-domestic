import Link from "next/link";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import { type Area } from "@/lib/data";

type Props = {
  items: Area["serviceHighlights"];
  heading?: string;
};

export default function ServiceHighlights({
  items,
  heading = "Our services include:",
}: Props) {
  return (
    <section className="bg-band">
      <Container className="py-16 sm:py-20">
        <SectionHeading heading={heading} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-line bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-ink">
                {item.href ? (
                  <Link href={item.href} className="hover:text-accent">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
