"use client";

import { useId, useState } from "react";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";

export type ProjectType = {
  id: string;
  name: string;
  icon: string;
  baseRate: number;
  minM2: number;
  maxM2: number;
  defaultM2: number;
  typical: string;
  planningNote: string;
};

export type ServicePackage = {
  id: string;
  name: string;
  feePct: number;
  desc: string;
};

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: "rear-extension",
    name: "Rear Extension",
    icon: "🏠",
    baseRate: 2800,
    minM2: 10,
    maxM2: 80,
    defaultM2: 25,
    typical: "15–40m²",
    planningNote:
      "Often falls under Permitted Development, though this depends on size and your local restrictions. We will advise at quote stage.",
  },
  {
    id: "side-extension",
    name: "Side Extension",
    icon: "📐",
    baseRate: 2900,
    minM2: 8,
    maxM2: 60,
    defaultM2: 20,
    typical: "10–30m²",
    planningNote:
      "Planning permission is typically required for side extensions. We handle the full application as part of our Full Service package.",
  },
  {
    id: "two-storey",
    name: "Two-Storey Extension",
    icon: "🏗️",
    baseRate: 2650,
    minM2: 20,
    maxM2: 120,
    defaultM2: 45,
    typical: "30–80m² total (both floors)",
    planningNote:
      "Planning permission is required. Our Full Service package covers the entire process from application to build.",
  },
  {
    id: "loft-dormer",
    name: "Loft Conversion (Dormer)",
    icon: "🔺",
    baseRate: 2100,
    minM2: 15,
    maxM2: 60,
    defaultM2: 30,
    typical: "20–40m²",
    planningNote:
      "Often Permitted Development, but conservation areas and certain property types may require planning permission.",
  },
  {
    id: "loft-velux",
    name: "Loft Conversion (Velux)",
    icon: "🪟",
    baseRate: 1800,
    minM2: 12,
    maxM2: 50,
    defaultM2: 25,
    typical: "15–35m²",
    planningNote:
      "Usually falls under Permitted Development with no planning application required.",
  },
  {
    id: "garage-conversion",
    name: "Garage Conversion",
    icon: "🚗",
    baseRate: 1250,
    minM2: 12,
    maxM2: 50,
    defaultM2: 18,
    typical: "15–30m² (single garage ≈ 18m²)",
    planningNote:
      "Usually Permitted Development. Building regulations approval is still required to ensure the space is habitable.",
  },
  {
    id: "garden-room",
    name: "Garden Room",
    icon: "🌿",
    baseRate: 1950,
    minM2: 6,
    maxM2: 60,
    defaultM2: 18,
    typical: "9–30m²",
    planningNote:
      "Usually Permitted Development within size limits. Restrictions apply in conservation areas and on listed properties.",
  },
  {
    id: "refurb",
    name: "Full Refurbishment",
    icon: "🔨",
    baseRate: 1350,
    minM2: 20,
    maxM2: 300,
    defaultM2: 80,
    typical: "40–150m²",
    planningNote:
      "Internal works typically do not require planning permission, though building regulations may apply depending on the scope.",
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "build-only",
    name: "Build Only",
    feePct: 0,
    desc: "You already have approved plans and permissions in place. We price the job, manage the site, and deliver the build.",
  },
  {
    id: "design-build",
    name: "Design & Build",
    feePct: 0.11,
    desc: "We appoint the architect, manage structural engineering and building regulations sign-off, then handle the full construction.",
  },
  {
    id: "full-service",
    name: "Fully Managed",
    feePct: 0.17,
    desc: "We take care of everything: planning application, design, structural approvals, build, and final handover. You just make the decisions.",
  },
];

function fmt(n: number) {
  return "£" + Math.round(n).toLocaleString("en-GB");
}

function estimate(baseRate: number, sizeM2: number, feePct: number) {
  const buildCost = baseRate * sizeM2;
  const professionalFees = buildCost * feePct;
  const totalIncVAT = (buildCost + professionalFees) * 1.2;
  const rangeLow = totalIncVAT * 0.88;
  const rangeHigh = totalIncVAT * 1.15;
  return { buildCost, professionalFees, totalIncVAT, rangeLow, rangeHigh };
}

type Props = {
  /** Show the in-component title (hide when the page already has a PageHeader). */
  showTitle?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
};

export default function CostEstimator({
  showTitle = true,
  ctaHref = "/contact-us",
  ctaLabel = "Get a Formal Quote",
  className = "",
}: Props) {
  const baseId = useId();
  const [projectId, setProjectId] = useState<string | null>(null);
  const [sizeM2, setSizeM2] = useState(25);
  const [serviceId, setServiceId] = useState("full-service");

  const project = PROJECT_TYPES.find((p) => p.id === projectId) ?? null;
  const service =
    SERVICE_PACKAGES.find((s) => s.id === serviceId) ?? SERVICE_PACKAGES[2];

  const minM2 = project?.minM2 ?? 5;
  const maxM2 = project?.maxM2 ?? 150;

  const result =
    project && service
      ? estimate(project.baseRate, sizeM2, service.feePct)
      : null;

  function selectProject(id: string) {
    const next = PROJECT_TYPES.find((p) => p.id === id);
    if (!next) return;
    setProjectId(id);
    setSizeM2(next.defaultM2);
  }

  function setSizeFromInput(raw: string) {
    const v = parseInt(raw, 10);
    if (!Number.isNaN(v) && v >= 5) {
      setSizeM2(v);
    }
  }

  return (
    <section
      id="project-cost-estimator"
      className={`bg-band ${className}`}
      aria-labelledby={showTitle ? `${baseId}-title` : undefined}
    >
      <Container className="max-w-4xl py-14 sm:py-16">
        {showTitle && (
          <header className="mb-10 text-center">
            <h2
              id={`${baseId}-title`}
              className="text-3xl font-bold text-ink sm:text-4xl"
            >
              Project Cost Estimator
            </h2>
            <p className="mt-2 text-body">
              Get an instant indicative budget for your home improvement
              project.
            </p>
          </header>
        )}

        {/* Step 1 — Project type */}
        <div className="mb-4 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Step 1
          </p>
          <h3 className="mt-1 text-lg font-semibold text-ink">
            What type of project are you planning?
          </h3>
          <div
            className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4"
            role="radiogroup"
            aria-label="Project type"
          >
            {PROJECT_TYPES.map((p) => {
              const selected = projectId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => selectProject(p.id)}
                  className={`rounded-xl border-2 px-3 py-4 text-center transition-colors ${
                    selected
                      ? "border-accent bg-accent/10 shadow-[0_0_0_1px_var(--color-accent)]"
                      : "border-line bg-white hover:border-accent hover:bg-accent/5"
                  }`}
                >
                  <span className="mb-2.5 block text-3xl" aria-hidden="true">
                    {p.icon}
                  </span>
                  <span className="block text-sm font-semibold leading-snug text-ink">
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 — Size */}
        <div className="mb-4 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Step 2
          </p>
          <h3 className="mt-1 text-lg font-semibold text-ink">
            Approximate floor area
          </h3>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex shrink-0 items-center gap-2">
              <label htmlFor={`${baseId}-size`} className="sr-only">
                Floor area in square metres
              </label>
              <input
                id={`${baseId}-size`}
                type="number"
                min={minM2}
                max={maxM2}
                value={sizeM2}
                onChange={(e) => setSizeFromInput(e.target.value)}
                className="w-[4.75rem] rounded-md border-2 border-line bg-white px-3 py-2.5 text-center text-xl font-bold text-ink outline-none transition-colors focus:border-accent"
              />
              <span className="text-base font-semibold text-muted">m²</span>
            </div>
            <input
              type="range"
              min={minM2}
              max={maxM2}
              value={Math.min(Math.max(sizeM2, minM2), maxM2)}
              onChange={(e) => setSizeM2(parseInt(e.target.value, 10))}
              aria-label="Floor area slider"
              className="h-1.5 w-full cursor-pointer appearance-none rounded-sm bg-line accent-accent [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-accent [&::-webkit-slider-thumb]:h-[22px] [&::-webkit-slider-thumb]:w-[22px] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_var(--color-accent)]"
            />
          </div>
          <div className="mt-3 flex justify-between text-xs text-muted">
            {project ? (
              <>
                <span>Min: {project.minM2}m²</span>
                <span>Typical: {project.typical}</span>
                <span>Max: {project.maxM2}m²</span>
              </>
            ) : (
              <span>Select a project type to see typical size ranges</span>
            )}
          </div>
          {project && (
            <p className="mt-3 text-sm leading-relaxed text-body">
              {project.planningNote}
            </p>
          )}
        </div>

        {/* Step 3 — Service package */}
        <div className="mb-4 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Step 3
          </p>
          <h3 className="mt-1 text-lg font-semibold text-ink">
            How much would you like us to handle?
          </h3>
          <div
            className="mt-5 grid gap-3 sm:grid-cols-3"
            role="radiogroup"
            aria-label="Service package"
          >
            {SERVICE_PACKAGES.map((s) => {
              const selected = serviceId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setServiceId(s.id)}
                  className={`rounded-xl border-2 px-4 py-5 text-left transition-colors ${
                    selected
                      ? "border-accent bg-accent/10 shadow-[0_0_0_1px_var(--color-accent)]"
                      : "border-line bg-white hover:border-accent hover:bg-accent/5"
                  }`}
                >
                  <span className="block text-base font-semibold text-ink">
                    {s.name}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">
                    {s.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result */}
        <div className="relative mb-5 overflow-hidden rounded-2xl bg-navy-dark px-6 py-9 text-white sm:px-8">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15"
            aria-hidden="true"
          />
          <div className="relative">
            {result ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Estimated Project Cost (inc. VAT)
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                  {fmt(result.totalIncVAT)}
                </p>
                <p className="mt-2 text-sm text-white/50">
                  Indicative range: {fmt(result.rangeLow)} –{" "}
                  {fmt(result.rangeHigh)}
                </p>
                <div className="mt-7 border-t border-white/12 pt-6">
                  <Button href={ctaHref} variant="solid" className="w-full">
                    {ctaLabel}
                  </Button>
                </div>
              </>
            ) : (
              <p className="py-5 text-center text-base text-white/45">
                Select a project type above to generate an estimate
              </p>
            )}
          </div>
        </div>

        <p className="px-4 text-center text-xs leading-relaxed text-muted">
          Indicative estimates based on 2026 UK average build costs for the
          Oxfordshire and South East region. All figures include VAT at 20%.
          Estimates assume standard site conditions; complex sites, conservation
          areas, or structural challenges may increase costs. A contingency of
          10–15% is recommended. Formal quotations should always be obtained
          before proceeding.
        </p>
      </Container>
    </section>
  );
}
