import { type ReactNode } from "react";

type Props = {
  kicker?: string;
  heading: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  kicker,
  heading,
  align = "center",
  tone = "dark",
  as: Tag = "h2",
  className = "",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const headingColor = tone === "light" ? "text-white" : "text-ink";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {kicker && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {kicker}
        </p>
      )}
      <Tag
        className={`text-3xl font-bold leading-tight sm:text-4xl ${headingColor}`}
      >
        {heading}
      </Tag>
    </div>
  );
}
