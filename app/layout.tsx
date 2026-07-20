import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pfdomesticsolutions.com"),
  title: {
    default: `${site.name} - Building & Construction Services`,
    template: `%s - ${site.name}`,
  },
  description:
    "P&F Domestic Solutions — expert building and construction services in Harrow, Hillingdon, Beaconsfield and across London and the Home Counties. Extensions, loft & garage conversions, kitchens, bathrooms and garden rooms.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    url: "https://pfdomesticsolutions.com",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${roboto.variable} ${robotoSlab.variable} h-full`}
    >
      {/* Chrome lives in the route-group layouts: app/(site) renders the full site
          header and footer; app/(landing) renders a distraction-free variant. */}
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
