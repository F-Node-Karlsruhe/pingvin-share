/** @type {import('next').NextConfig} */
const path = require("path");
const { version } = require("./package.json");

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline: false,
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkOnly",
      },
    ],
  },
});

module.exports = withPWA({
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  env: {
    VERSION: version,
  },
});
