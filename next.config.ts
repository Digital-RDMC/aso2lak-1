import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

export default nextConfig;
