import { mapEmbedSrc } from "@/lib/data";

type Props = {
  query: string;
  title?: string;
  className?: string;
};

// Lazy-loaded Google Maps iframe. Uses the live site's embed pattern:
// https://maps.google.com/maps?q=<town>&t=m&z=10&output=embed&iwloc=near
// sandbox limits the embed's privileges while still allowing Maps to run.
export default function MapEmbed({ query, title, className = "" }: Props) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line ${className}`}
    >
      <iframe
        src={mapEmbedSrc(query)}
        title={title ?? `Map of ${query}`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
