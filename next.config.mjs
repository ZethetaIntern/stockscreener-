/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,  // Avoid double-mount in dev (wsSimulator singleton)
};

export default nextConfig;
