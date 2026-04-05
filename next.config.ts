import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  productionBrowserSourceMaps: false,
  outputFileTracingIncludes: {
    "/api/download": ["./private/**"],
  },
};

export default nextConfig;
