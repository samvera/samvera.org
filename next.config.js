const path = require("path");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

// Copy Leaflet marker images to public so they're available at runtime
// (avoids copy-webpack-plugin and its ajv dependency chain issues)
const leafletImagesSrc = path.join(__dirname, "node_modules", "leaflet", "dist", "images");
const leafletImagesDest = path.join(__dirname, "public", "leaflet", "images");
if (fs.existsSync(leafletImagesSrc)) {
  if (!fs.existsSync(leafletImagesDest)) {
    fs.mkdirSync(leafletImagesDest, { recursive: true });
  }
  for (const name of fs.readdirSync(leafletImagesSrc)) {
    fs.copyFileSync(
      path.join(leafletImagesSrc, name),
      path.join(leafletImagesDest, name)
    );
  }
}

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
