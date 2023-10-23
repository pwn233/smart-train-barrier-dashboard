/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ir',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
