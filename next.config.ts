import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // Indonesian lives at "/", served by app/[lang] with lang=id
  async redirects() {
    return [{ source: "/id", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/id" }];
  },
};

export default nextConfig;
