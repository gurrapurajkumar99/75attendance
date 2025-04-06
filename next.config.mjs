/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/attendance-tracker/',
  basePath: '/attendance-tracker',
  trailingSlash: true,
};

export default nextConfig;
