import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local assets live under /public (Job-Photos, Site-Images, Brand-Assets, etc.).
    // remotePatterns stays as a hotlink fallback for any asset not bundled locally.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pfdomesticsolutions.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
