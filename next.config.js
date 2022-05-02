// from https://gregrickaby.blog/article/nextjs-github-pages
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: '/samvera.org',
  images: {
    loader: 'akamai',
    path: '',
  },
}