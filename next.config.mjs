/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },

  async rewrites() {
    return [
      {
        source: '/png',
        destination: 'https://logoexpress.tubeguruji.com',
      },
    ];
  },
};

export default nextConfig;
