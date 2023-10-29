/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //distDir: "dist",
  output: "export",
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
