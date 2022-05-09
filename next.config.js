<<<<<<< HEAD
/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
};
=======
// from https://gregrickaby.blog/article/nextjs-github-pages
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
};
>>>>>>> 4f8a51acab140ba113cb44c27a6199ff4593e0cd
