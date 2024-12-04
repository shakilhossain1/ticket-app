import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: "proper-wolf-242.convex.cloud",
                protocol: "https",
            }
        ]
    }
};

export default nextConfig;
