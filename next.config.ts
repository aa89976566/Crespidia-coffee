import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? "/Crespidia-coffee" : "";

const nextConfig: NextConfig = {
  output: "export",
  // Project site: https://aa89976566.github.io/Crespidia-coffee/
  basePath,
  assetPrefix: isGhPages ? "/Crespidia-coffee/" : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
