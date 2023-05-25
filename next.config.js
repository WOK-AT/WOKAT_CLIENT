/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wokat-place-image.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
