"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import { contact } from "@/lib/data";

const inputClass =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

type FieldProps = {
  id: "firstName" | "phone" | "email";
  type?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
};

function Field({ id, type = "text", inputMode }: FieldProps) {
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: real users never see this field, so a filled value means a bot.
    // Bail silently rather than telling the bot it was caught.
    // TODO: the API route must repeat this check server-side — never trust the client.
    if ((form.elements.namedItem("company") as HTMLInputElement)?.value) return;

    if (submitting) return;
    setSubmitting(true);

    // TODO: wire to API route + Resend (Stage 7 backlog). UI-only stub: the live
    // Fluent Form redirects to the same confirmation page on success.
    router.push(contact.redirectTo);
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

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Field id="firstName" />
            <Field id="phone" type="tel" inputMode="numeric" />
            <Field id="email" type="email" inputMode="email" />

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
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company (leave blank)</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <Button type="submit">
              {submitting ? "Sending…" : contact.fields.submit}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
