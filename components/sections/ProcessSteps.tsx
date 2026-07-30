import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import { process } from "@/lib/data";

type Props = {
  tone?: "white" | "band";
};

// Renders the shared `process` data from lib/data.ts. Used on About, Building
// Services, and the homepage so the "how we work" explanation is identical
// wherever it appears — update the copy once, in one place.
export default function ProcessSteps({ tone = "white" }: Props) {
  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        <SectionHeading kicker={process.kicker} heading={process.heading} />
        <p className="mx-auto mt-4 max-w-3xl text-center text-body">
          {process.intro}
        </p>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {process.steps.map((step) => (
            <li
              key={step.step}
              className="group flex min-h-[14rem] flex-col gap-4 rounded-lg border border-line border-t-[3px] border-t-accent bg-white p-6 shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-bold leading-none tracking-tight text-accent tabular-nums"
              >
                {String(step.step).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-col gap-2">
                <p className="font-heading text-lg font-semibold leading-snug text-ink">
                  {step.title}
                </p>
                <p className="text-sm leading-relaxed text-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
