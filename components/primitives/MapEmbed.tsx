import { mapEmbedSrc } from "@/lib/data";

type Props = {
  query: string;
  title?: string;
  className?: string;
};

// Lazy-loaded Google Maps iframe. Uses the live site's embed pattern:
// https://maps.google.com/maps?q=<town>&t=m&z=10&output=embed&iwloc=near
export default function MapEmbed({ query, title, className = "" }: Props) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line ${className}`}
    >
      <iframe
        src={mapEmbedSrc(query)}
        title={title ?? `Map of ${query}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
