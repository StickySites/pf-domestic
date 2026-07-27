import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import Button from "@/components/primitives/Button";
import { Stars, Google } from "@/components/primitives/icons";
import { reviews, reviewsSummary } from "@/lib/data";

type Props = {
  heading?: string;
  tone?: "white" | "band";
};

export default function ReviewsStrip({ heading, tone = "band" }: Props) {
  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        {heading && <SectionHeading heading={heading} />}

        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-2xl font-bold tracking-wide text-ink">
            {reviewsSummary.rating}
          </p>
          <Stars className="h-6 text-accent" />
          <p className="flex items-center gap-2 text-sm text-body">
            Based on {reviewsSummary.count} {reviewsSummary.source} reviews
            <Google className="h-4 w-4" />
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.name}
              className="flex flex-col rounded-lg border border-line bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-ink">{review.name}</p>
                <Google className="h-4 w-4 shrink-0" />
              </div>
              <Stars
                className="mt-2 h-4 text-accent"
                label={`${review.rating} out of 5`}
              />
              <p className="mt-3 text-sm leading-relaxed text-body">
                {review.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button href={reviewsSummary.profileUrl} variant="outline">
            See all reviews on Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
