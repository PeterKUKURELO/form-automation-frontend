/** @type {import('next').NextConfig} */
const defaultBackendApiUrl = 'http://217.196.61.5:9090/api'

const nextConfig = {
  async rewrites() {
    const backendApiUrl = (
      process.env.BACKEND_API_URL || defaultBackendApiUrl
    ).replace(/\/$/, '')

    return [
      {
        source: '/api/:path*',
        destination: `${backendApiUrl}/:path*`,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
}

export default nextConfig
