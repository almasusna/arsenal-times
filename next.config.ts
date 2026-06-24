import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal, self-contained build for Docker.
  // See node_modules/next/dist/docs/01-app/02-guides/self-hosting.md
  output: "standalone",
};

export default nextConfig;
