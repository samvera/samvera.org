module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  experimental: {
    esmExternals: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};
