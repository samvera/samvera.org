const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const dotenv = require("dotenv");
dotenv.config();

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  contentfulToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  experimental: {
    esmExternals: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/leaflet/dist/images",
            to: path.resolve(__dirname, "public", "leaflet", "images"),
          },
        ],
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
