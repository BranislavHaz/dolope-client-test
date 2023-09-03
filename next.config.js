/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  output: "export",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
