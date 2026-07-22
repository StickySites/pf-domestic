import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";

type Props = {
  heading?: string;
  body?: string;
  buttonLabel?: string;
};

/** Compact CTA linking service pages to the project cost estimator. */
export default function CostEstimatorStrip({
  heading = "Wondering what your project might cost?",
  body = "Use our free Project Cost Estimator for an indicative budget in minutes, then talk to us for a formal quotation.",
  buttonLabel = "Estimate My Project",
}: Props) {
  return (
    <section className="border-y border-line bg-band">
      <Container className="flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
          <p className="mt-1 text-sm text-body sm:text-base">{body}</p>
        </div>
        <Button href="/project-cost-estimator" className="shrink-0">
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
