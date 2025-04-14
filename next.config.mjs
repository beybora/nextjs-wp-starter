/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nextjs-wp-starter-backend.lndo.site/",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
};

export default nextConfig;
