/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        domains: ['assets.coingecko.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'alternative.me',
                port: '',
                pathname: '/crypto/fear-and-greed-index.png',
            },
        ],
    },
    reactStrictMode: true,
    webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
    },

};


