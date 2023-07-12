/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
