/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRIPE_WEBHOOK_KEY: process.env.STRIPE_WEBHOOK_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    MUMBAI_URL: process.env.MUMBAI_URL,
  },
};

module.exports = nextConfig;
