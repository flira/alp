const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [375, 480, 640, 750, 828, 1080, 1200, 1920, 2048],
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
