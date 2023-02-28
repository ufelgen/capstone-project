/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com'
      // },
    ],
  },
  server: {
    proxy: {
      "/dict-api": "https://api.pons.com",
    },
  },
};

module.exports = {
  ...nextConfig,
  swcMinify: false,
  i18n: { locales: ["en"], defaultLocale: "en" },
};
