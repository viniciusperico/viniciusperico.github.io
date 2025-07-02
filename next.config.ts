import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // O basePath informa ao Next.js que o site será publicado em um subdiretório.
  // Isso ajusta automaticamente todos os links e caminhos de recursos no build de produção.
  basePath: '/perico',
  assetPrefix: '/perico/', // Garante que todos os assets (CSS, JS, imagens) usem o prefixo.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Necessário para 'next export' e GitHub Pages.
  },
};

export default nextConfig;
