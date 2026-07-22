import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "solid" | "outline" | "outlineLight";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  // Gold fill + black text — approved pairing; never use navy for buttons
  solid: "bg-accent text-ink hover:bg-accent-hover",
  outline:
    "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight:
    "border-2 border-white text-white hover:bg-white hover:text-ink",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
};

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
  type = "button",
  external = false,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
