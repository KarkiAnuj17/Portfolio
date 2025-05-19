/** @type {import('next').NextConfig} */
const nextConfig = {
    srcDir: 'src',
  experimental: {
    eslint:{
      ignoreDuringBuilds:true,
    }

  },
};

module.exports = nextConfig;
