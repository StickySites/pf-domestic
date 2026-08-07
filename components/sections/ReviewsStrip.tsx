"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import Button from "@/components/primitives/Button";
import {
  Stars,
  Google,
  ChevronLeft,
  ChevronRight,
} from "@/components/primitives/icons";
import { reviews, reviewsSummary } from "@/lib/data";

type Props = {
  heading?: string;
  tone?: "white" | "band";
};

// Card widths: 1 / 2 / 3 visible across default → sm → md+
// (gap-6 = 1.5rem; subtract (n-1) gaps from the track before dividing).
const cardWidth =
  "w-full shrink-0 snap-start " +
  "sm:w-[calc((100%-1.5rem)/2)] " +
  "md:w-[calc((100%-3rem)/3)]";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function ReviewsStrip({ heading, tone = "band" }: Props) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    const epsilon = 4;

    setCanPrev(scrollLeft > epsilon);
    setCanNext(scrollLeft < maxScroll - epsilon);

    const pages = Math.max(1, Math.ceil(scrollWidth / Math.max(clientWidth, 1)));
    setPageCount(pages);
    setActivePage(
      maxScroll <= epsilon
        ? 0
        : Math.min(
            pages - 1,
            Math.round((scrollLeft / maxScroll) * (pages - 1)),
          ),
    );
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });

    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const scrollBehavior = (): ScrollBehavior =>
    prefersReducedMotion() ? "auto" : "smooth";

  const scrollToPage = (page: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: scrollBehavior() });
  };

  const scrollByPage = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: scrollBehavior(),
    });
  };

  const onScrollerKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByPage(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByPage(1);
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollToPage(0);
    } else if (e.key === "End") {
      e.preventDefault();
      scrollToPage(pageCount - 1);
    }
  };

  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        {heading && <SectionHeading heading={heading} />}

        <a
          href={reviewsSummary.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex flex-col items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <p className="text-2xl font-bold tracking-wide text-ink">
            {reviewsSummary.rating}
          </p>
          <Stars className="h-6 text-accent" />
          <p className="flex items-center gap-2 text-sm text-body">
            Based on {reviewsSummary.count} {reviewsSummary.source} reviews
            <Google className="h-4 w-4" />
          </p>
        </a>

        <div
          className="relative mt-12 min-w-0"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          <ul
            ref={scrollerRef}
            tabIndex={0}
            onKeyDown={onScrollerKeyDown}
            className="flex min-w-0 items-start gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
            aria-label="Reviews"
          >
            {reviews.map((review) => (
              <li
                key={review.name}
                className={`flex flex-col rounded-lg border border-line bg-white p-5 shadow-sm ${cardWidth}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-ink">{review.name}</p>
                  <Google className="h-4 w-4 shrink-0" />
                </div>
                <Stars
                  className="mt-2 h-4 text-accent"
                  label={`${review.rating} out of 5`}
                />
                <p className="mt-3 line-clamp-6 text-sm leading-relaxed text-body">
                  {review.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label="Previous reviews"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {pageCount > 1 && (
              <div className="flex items-center gap-2" aria-hidden="true">
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    tabIndex={-1}
                    aria-label={`Go to review page ${i + 1}`}
                    onClick={() => scrollToPage(i)}
                    className={`h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      i === activePage
                        ? "bg-accent"
                        : "bg-line hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label="Next reviews"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={reviewsSummary.profileUrl} variant="outline">
            See all reviews on Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
