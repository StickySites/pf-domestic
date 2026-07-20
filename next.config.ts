import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are bundled in /public/images. remotePatterns stays as a hotlink
    // fallback for any asset that is not bundled locally.
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
