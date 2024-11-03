/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Para exportaciones estáticas
  },
  basePath: "/",
  assetPrefix: "/",
};

export default nextConfig;
