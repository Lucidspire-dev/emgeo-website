import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emgeo.lucidspire.com",
      },
    ],
  },
};

export default nextConfig;
