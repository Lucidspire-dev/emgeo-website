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
  async redirects() {
    return [
      {
        source: "/contacts/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/consultation/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/how-we-work/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/visa/global-employer-of-record-eor/:path*",
        destination: "/services/employer-of-record",
        permanent: true,
      },
      {
        source: "/visa/global-immigration/:path*",
        destination: "/services/immigration-and-compliance",
        permanent: true,
      },
      {
        source: "/global-immigration/:path*",
        destination: "/services/immigration-and-compliance",
        permanent: true,
      },
      {
        source: "/visa/visa-and-work-permit/:path*",
        destination: "/services/immigration-and-compliance",
        permanent: true,
      },
      {
        source: "/visa-and-work-permit/:path*",
        destination: "/services/immigration-and-compliance",
        permanent: true,
      },
      {
        source: "/visa/destination-services/:path*",
        destination: "/services/relocation-and-destination-services",
        permanent: true,
      },
      {
        source: "/destination-services/:path*",
        destination: "/services/relocation-and-destination-services",
        permanent: true,
      },
      {
        source: "/visa/expense-management/:path*",
        destination: "/services/global-payroll-solutions",
        permanent: true,
      },
      {
        source: "/expense-management/:path*",
        destination: "/services/global-payroll-solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
