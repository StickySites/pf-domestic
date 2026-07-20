import LandingHeader from "@/components/sections/LandingHeader";
import LandingFooter from "@/components/sections/LandingFooter";

// Distraction-free layout for paid-traffic landing pages: no site navigation and no
// footer nav — logo + phone only, so the page has a single conversion path.
export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <LandingHeader />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </>
  );
}
