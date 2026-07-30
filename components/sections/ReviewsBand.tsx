import Container from "@/components/primitives/Container";
import { Stars, Google } from "@/components/primitives/icons";
import { reviews, reviewsSummary } from "@/lib/data";

const featured = reviews.slice(0, 3);

/** Compact trust strip — rating summary + a few short review snippets. Not the carousel. */
export default function ReviewsBand() {
  return (
    <aside className="border-b border-line bg-band" aria-label="Google reviews summary">
      <a
        href={reviewsSummary.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-colors hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        <Container className="flex flex-col items-center gap-4 py-4 sm:py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="text-xs font-bold uppercase tracking-wide text-ink sm:text-sm">
              {reviewsSummary.rating}
            </span>
            <Stars className="h-4 text-accent sm:h-5" />
            <p className="flex items-center gap-1.5 text-xs text-body sm:text-sm">
              Based on {reviewsSummary.count} {reviewsSummary.source} reviews
              <Google className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </p>
          </div>

          <ul className="grid w-full gap-3 sm:grid-cols-3 sm:gap-4">
            {featured.map((review) => (
              <li
                key={review.name}
                className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left"
              >
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 sm:justify-start">
                  <span className="text-xs font-semibold text-ink">{review.name}</span>
                  <Stars
                    className="h-3 text-accent"
                    label={`${review.rating} out of 5 stars`}
                  />
                </div>
                <p className="line-clamp-2 text-xs leading-relaxed text-body">
                  &ldquo;{review.text}&rdquo;
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </a>
    </aside>
  );
}
