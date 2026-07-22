import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  // Project site: https://aa89976566.github.io/Crespidia-coffee/
  basePath: isGhPages ? "/Crespidia-coffee" : "",
  assetPrefix: isGhPages ? "/Crespidia-coffee/" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
