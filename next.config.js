module.exports = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    BASIC_HOST: process.env.BASIC_HOST,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
