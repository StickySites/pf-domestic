import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import { process } from "@/lib/data";

type Props = {
  tone?: "white" | "band";
};

// Renders the shared `process` data from lib/data.ts. Used on both the About
// and Building Services pages so the "how we work" explanation is identical
// wherever it appears — update the copy once, in one place.
export default function ProcessSteps({ tone = "white" }: Props) {
  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        <SectionHeading kicker={process.kicker} heading={process.heading} />
        <p className="mx-auto mt-4 max-w-3xl text-center text-body">
          {process.intro}
        </p>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step) => (
            <li
              key={step.step}
              className="flex flex-col items-start gap-3 rounded-lg border border-line bg-white p-6 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink"
              >
                {step.step}
              </span>
              <p className="font-semibold text-ink">{step.title}</p>
              <p className="text-sm leading-relaxed text-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
