/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "en", // Default language
    locales: ["en", "fr", "ar"], // Supported languages
  },
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        // hostname: 'avatar.vercel.sh',
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        // hostname: 'avatar.vercel.sh',
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};

module.exports = nextConfig;
