/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Para exportaciones estáticas
  },
  basePath: "/ecommerce",
  assetPrefix: "/ecommerce/",
};

export default nextConfig;
