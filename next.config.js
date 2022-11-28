/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
};
