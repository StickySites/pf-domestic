import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/primitives/Container";
import PageHeader from "@/components/sections/PageHeader";
import ContactStrip from "@/components/sections/ContactStrip";
import { ManageCookiesButton } from "@/components/analytics/manage-cookies-button";
import { cookiePolicy, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookie Policy (UK)",
  description: cookiePolicy.intro,
  alternates: { canonical: "/cookie-policy-uk" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={cookiePolicy.heading} />
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-body">
            <p className="text-sm text-muted">
              Last updated: {cookiePolicy.lastUpdated}
            </p>
            <p className="text-lg">
              {cookiePolicy.intro} See our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-ink underline hover:text-accent"
              >
                Privacy Policy
              </Link>{" "}
              for how we handle personal data more generally.
            </p>

            {cookiePolicy.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.heading === "Cookies we use" ? (
                  <ManageCookiesButton className="mt-2 inline-flex rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover" />
                ) : null}
              </div>
            ))}

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-ink">
                {cookiePolicy.contactHeading}
              </h2>
              <p>{cookiePolicy.contactBody}</p>
              <address className="not-italic">
                {site.name}
                <br />
                {site.address}
                <br />
                United Kingdom
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink underline hover:text-accent"
                >
                  {site.email}
                </a>
              </address>
            </div>
          </div>
        </Container>
      </section>
      <ContactStrip />
    </>
  );
}
