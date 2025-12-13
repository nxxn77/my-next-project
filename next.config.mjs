/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "images.microms-assetes.io",
        },
    ],
  }, 
};

export default nextConfig;
