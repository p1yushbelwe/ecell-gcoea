'use client'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  trailingSlash:true,
  images: {
    unoptimized:true,
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },

  allowedDevOrigins: [
    "10.177.58.97",
    "10.204.9.97",
    "10.62.154.97",
    "10.100.59.97",
    "detail-savor-sleeve.ngrok-free.dev",
  ],
};

export default nextConfig;