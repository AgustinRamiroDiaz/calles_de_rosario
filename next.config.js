const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/Next-gh-page-example/' : '',
}
