const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  basePath: !debug ? '/calles_de_rosario' : '',
  assetPrefix: !debug ? '/calles_de_rosario/' : '',
}
