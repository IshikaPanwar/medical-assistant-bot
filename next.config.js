/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  
  // Image optimization
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
  },
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Only run these optimizations in production
    if (!isServer) {
      // Enable tree shaking
      config.optimization.usedExports = true;
      
      // Enable module concatenation
      config.optimization.concatenateModules = true;
      
      // Enable scope hoisting
      config.optimization.sideEffects = true;
    }
    
    return config;
  },
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;