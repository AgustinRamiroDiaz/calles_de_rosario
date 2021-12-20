const optimizedImages = require("next-optimized-images");
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  basePath: !debug ? "/calles_de_rosario" : "",
  assetPrefix: !debug ? "/calles_de_rosario/" : "",
};
