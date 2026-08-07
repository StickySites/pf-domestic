import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// Standard site chrome: full navigation header + footer. Every route except the
// Ads landing pages in app/(landing) renders inside this layout.
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="w-full min-w-0 flex-1">{children}</main>
      <Footer />
    </>
  );
}
