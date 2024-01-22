/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  experimental: {
    esmExternals: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
