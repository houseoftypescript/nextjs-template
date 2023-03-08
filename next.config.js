/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/nextjs-template' : undefined,
  assetPrefix: isProd ? '/nextjs-template/' : undefined,
  image: { unoptimized: true },
};

module.exports = nextConfig;
