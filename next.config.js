const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/out',
  reactStrictMode: true
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
