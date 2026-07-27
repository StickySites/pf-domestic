"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import TurnstileWidget from "@/components/analytics/TurnstileWidget";
import { contact } from "@/lib/data";

const inputClass =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

type FieldProps = {
  id: "firstName" | "phone" | "email";
  type?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  autoComplete?: string;
};

function Field({ id, type = "text", inputMode, autoComplete }: FieldProps) {
  const field = contact.fields[id];
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-ink">
        {field.label}
        {field.required && (
          <span aria-hidden="true" className="ml-0.5 text-ink">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={field.placeholder}
        required={field.required}
        className={inputClass}
      />
    </div>
  );
}

type Props = {
  /** Heading above the form. Defaults to the contact page's "How Can We Help?". */
  heading?: string;
  /** Optional smaller line under the heading (used by the Ads landing page). */
  subheading?: string;
  /** The contact page pairs the form with a photo; the landing page does not. */
  showImage?: boolean;
  tone?: "white" | "band";
};

export default function ContactForm({
  heading = contact.formHeading,
  subheading,
  showImage = true,
  tone = "white",
}: Props) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStartedAt] = useState(() => Date.now());
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRequired = Boolean(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Client honeypot: bail silently (server repeats this check).
    if ((form.elements.namedItem("company") as HTMLInputElement)?.value) {
      return;
    }

    if (submitting) return;

    if (turnstileRequired && !turnstileToken) {
      setError("Please complete the security check.");
      return;
    }

    setSubmitting(true);
    setError(null);

    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      comments: String(fd.get("comments") ?? ""),
      newsletter: fd.get("newsletter") === "on",
      company: String(fd.get("company") ?? ""),
      formStartedAt,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setError(
          data?.error ||
            "We couldn't send your message. Please try again or call us.",
        );
        setSubmitting(false);
        return;
      }

      router.push(contact.redirectTo);
    } catch {
      setError("We couldn't send your message. Please try again or call us.");
      setSubmitting(false);
    }
  }

  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container
        className={`grid items-start gap-12 py-16 sm:py-20 ${
          showImage ? "lg:grid-cols-2" : "max-w-2xl"
        }`}
      >
        {showImage && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-ink">{heading}</h2>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <Image
                src={contact.image}
                alt="P&F Domestic Solutions team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div>
          {!showImage && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-ink">{heading}</h2>
              {subheading && (
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted">
                  {subheading}
                </p>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <Field id="firstName" autoComplete="given-name" />
            <Field
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
            />
            <Field
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
            />

            <div>
              <label
                htmlFor="comments"
                className="mb-1 block text-sm font-medium text-ink"
              >
                {contact.fields.comments.label}
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={5}
                placeholder={contact.fields.comments.placeholder}
                className={inputClass}
                maxLength={2000}
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-body">
              <input
                type="checkbox"
                name="newsletter"
                className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent"
              />
              {contact.fields.newsletter}
            </label>

            {/* Honeypot — hidden from users and assistive tech, attractive to bots. */}
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor="company">Company (leave blank)</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <TurnstileWidget onToken={setTurnstileToken} />

            {error && (
              <p
                role="alert"
                className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
              >
                {error}
              </p>
            )}

            <Button type="submit">
              {submitting ? "Sending…" : contact.fields.submit}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
