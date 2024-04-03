/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add basePath
    basePath: '/electric',
    poweredByHeader: false,
    compiler: {
      removeConsole: {
        exclude: ['error'],
      },
    },
};

export default nextConfig;
