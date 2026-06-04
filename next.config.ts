import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
  // swcMinify: true/false <-- REMOVE THIS LINE
};

export default nextConfig;