//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next");
const webpack = require("webpack");
const config = require("dotenv").config();

const apiRoute = process.env.WEB_GQL_URL?.replace("/graphql", "")?.split("/").pop();

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // @ts-ignore
        hostname: process.env.STORAGE_ENDPOINT
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: `/${apiRoute}/:path*`,
        destination: `${process.env.API_URL}/:path*`
      }
    ];
  },
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
      })
    );
    return config;
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx
];

module.exports = composePlugins(...plugins)(nextConfig);
