// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // เพิ่มบรรทัดนี้ลงไปครับ
  experimental: {
    allowedDevOrigins: ['172.20.10.3', 'localhost:3000']
  }
};

export default nextConfig;