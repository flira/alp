const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './modules/imageLoader.ts'
  },
  reactStrictMode: true,
}

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    Object.assign(nextConfig, {
      images: {
        domains: ['localhost', 'alp.toscocloud.com']
      },
    });
  }

  return nextConfig;
}
