import type {NextConfig} from 'next';

const repo = 'perico';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

// This configuration is for deploying to a GitHub project page (e.g., username.github.io/repo-name)
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: basePath,
  assetPrefix: assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
