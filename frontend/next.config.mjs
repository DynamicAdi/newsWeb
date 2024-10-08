import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: false,
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: 'cdn.sanity.io',
            port: ''
            }
        ]
    }
};

export default nextConfig;
