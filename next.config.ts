import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.gowell.edu.np",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/category/:slug",
        destination: "/categories/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
