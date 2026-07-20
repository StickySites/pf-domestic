import type { Metadata } from "next";
import Container from "@/components/primitives/Container";
import Button from "@/components/primitives/Button";
import PageHeader from "@/components/sections/PageHeader";
import ContactStrip from "@/components/sections/ContactStrip";
import { thankYou } from "@/lib/data";

// Form confirmation page: noindex and deliberately absent from sitemap.ts — it should
// only ever be reached by submitting the contact form.
export const metadata: Metadata = {
  title: "Thank You",
  description: thankYou.body,
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={thankYou.heading} />
      <section className="bg-white">
        <Container className="py-16 text-center sm:py-20">
          <p className="mx-auto max-w-2xl text-lg text-body">{thankYou.body}</p>
          <div className="mt-8 flex justify-center">
            <Button href={thankYou.cta.href} variant="outline">
              {thankYou.cta.label}
            </Button>
          </div>
        </Container>
      </section>
      <ContactStrip />
    </>
  );
}
