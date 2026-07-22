import Container from "@/components/primitives/Container";
import { Phone, Mail } from "@/components/primitives/icons";
import { site } from "@/lib/data";

// Contact band that sits above the footer on most pages.
export default function ContactStrip() {
  return (
    <section className="bg-accent text-ink">
      <Container className="flex flex-col items-center justify-center gap-4 py-8 text-center sm:flex-row sm:gap-10 sm:text-left">
        <h2 className="text-xl font-bold sm:text-2xl">
          Contact Us For a Free Quote:
        </h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-lg font-semibold hover:underline"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-lg font-semibold hover:underline"
          >
            <Mail className="h-5 w-5" />
            {site.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
