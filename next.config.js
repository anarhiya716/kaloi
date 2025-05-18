/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pagedone.io', 'randomuser.me'],
  },
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },
  // Отключаю rewrites для прямого доступа
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: '/:path*',
  //         destination: 'http://25.4.251.5:3001/:path*',
  //       },
  //     ],
  //   }
  // },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  experimental: {
    allowMiddlewareResponseBody: true
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  },
  // Настройка порта и хоста
  serverRuntimeConfig: {
    PORT: 3000,
    HOST: '25.4.251.5'
  },
  publicRuntimeConfig: {
    port: 3000,
    host: '25.4.251.5'
  }
}

module.exports = nextConfig