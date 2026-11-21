import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    // The old How it works page was folded into /vendor.
    return [{ source: "/works", destination: "/vendor#how-it-works", permanent: true }];
  },
  async rewrites() {
    // Proxy /api requests to the backend to avoid CORS issues
    let backendUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "https://qlozet-backend.fly.dev";
    // Strip trailing slash if present
    if (backendUrl.endsWith('/')) {
      backendUrl = backendUrl.slice(0, -1);
    }
    
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
