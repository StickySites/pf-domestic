"use client";

import { useState } from "react";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import { ChevronDown } from "@/components/primitives/icons";
import { faqs } from "@/lib/data";

type Props = {
  heading?: string;
  subheading?: string;
  tone?: "white" | "band";
};

export default function FaqAccordion({
  heading = "Get Answers to Your Questions",
  subheading = "Our Most Common Questions:",
  tone = "band",
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        <SectionHeading kicker={subheading} heading={heading} />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-lg border border-line bg-white">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink"
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-body">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
