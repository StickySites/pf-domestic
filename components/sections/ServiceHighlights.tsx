import Link from "next/link";
import Image from "next/image";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import { images, services, type Area } from "@/lib/data";

type Highlight = Area["serviceHighlights"][number];

type Props = {
  items: Area["serviceHighlights"];
  locationName: string;
  heading?: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Inject area name via `{location}` placeholder, or append naturally when missing. */
function withLocation(body: string, location: string): string {
  if (body.includes("{location}")) {
    return body.replaceAll("{location}", location);
  }

  const alreadyMentions = new RegExp(`\\b${escapeRegExp(location)}\\b`, "i");
  if (alreadyMentions.test(body)) return body;

  if (/\bservices\b/i.test(body)) {
    return body.replace(/\bservices\b/i, `services in ${location}`);
  }

  const serviceNoun =
    /\b(home extensions?|house extensions?|loft conversions?|garage conversions?|house refurbishments?|full house refurbishments?|refurbishments?|garden rooms?|kitchens?(?:\s*&\s*|\s+and\s+)bathrooms?|extensions?|conversions?|renovations?|maintenance|installations?|repairs?)\b/i;
  if (serviceNoun.test(body)) {
    return body.replace(serviceNoun, (match) => `${match} in ${location}`);
  }

  const period = body.indexOf(".");
  if (period !== -1) {
    return `${body.slice(0, period)} in ${location}${body.slice(period)}`;
  }

  return `${body} in ${location}`;
}

/** Preferred image for a highlight — title/href match, no dedupe yet. */
function resolveHighlightImage(item: Highlight): string {
  if (item.href) {
    const slug = item.href.replace(/^\//, "");
    const service = services.find((s) => s.slug === slug);
    if (service) return service.image;
  }

  const title = item.title.toLowerCase();
  if (title.includes("refurb")) return images.refurb;
  if (title.includes("extension")) return images.extension;
  if (title.includes("loft")) return images.loft;
  if (title.includes("garage")) return images.garage;
  if (title.includes("kitchen") || title.includes("bathroom")) {
    return images.kitchen;
  }
  if (title.includes("garden")) return images.garden;
  if (title.includes("plumbing") || title.includes("electrical")) {
    return images.plumbingElectrical;
  }
  if (title.includes("general") || title.includes("maintenance")) {
    return images.generalBuilding;
  }
  return images.doors;
}

/** Fallback pool when two highlights would share the same src. */
const HIGHLIGHT_IMAGE_ALTERNATES = [
  images.wetRoom,
  images.joinery,
  images.garage,
  images.garden,
  images.doors,
  images.plumbingElectrical,
  images.generalBuilding,
  images.kitchen,
  images.extension,
  images.loft,
  images.refurb,
] as const;

/** Assign a unique image to each highlight in the grid. */
function assignUniqueHighlightImages(items: Highlight[]): string[] {
  const used = new Set<string>();

  return items.map((item) => {
    let src = resolveHighlightImage(item);

    if (used.has(src)) {
      const alternate = HIGHLIGHT_IMAGE_ALTERNATES.find((a) => !used.has(a));
      if (alternate) src = alternate;
    }

    used.add(src);
    return src;
  });
}

const cardClassName =
  "group flex w-full flex-col rounded-lg border border-line border-t-[3px] border-t-accent bg-white shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[calc(50%-0.75rem)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

function HighlightCard({
  item,
  locationName,
  image,
}: {
  item: Highlight;
  locationName: string;
  image: string;
}) {
  const body = withLocation(item.body, locationName);

  const content = (
    <>
      <div className="relative mx-6 mt-6 aspect-[16/10] overflow-hidden rounded-md">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-ink transition-colors group-hover:text-accent">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{body}</p>
        {item.href ? (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink transition-colors group-hover:text-accent">
            Learn More
            <span aria-hidden="true">→</span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}

export default function ServiceHighlights({
  items,
  locationName,
  heading = "Our services include:",
}: Props) {
  const highlightImages = assignUniqueHighlightImages(items);

  return (
    <section className="bg-band">
      <Container className="py-16 sm:py-20">
        <SectionHeading heading={heading} />
        <div className="mx-auto mt-12 flex max-w-4xl flex-col flex-wrap gap-6 sm:flex-row sm:justify-center">
          {items.map((item, index) => (
            <HighlightCard
              key={item.title}
              item={item}
              locationName={locationName}
              image={highlightImages[index]!}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
