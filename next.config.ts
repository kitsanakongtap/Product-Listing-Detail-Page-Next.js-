/** @type {import('next').NextConfig} */
const nextConfig = {
  // แก้ปัญหาที่ 1: อนุญาตให้ IP เครื่องอื่น/มือถือ เข้ามาดูหน้าเว็บตอน Dev ได้
  allowedDevOrigins: ['172.20.10.3'],

  // แก้ปัญหาที่ 2: อนุญาตให้ดึงรูปภาพจาก fakestoreapi.com มาแสดงผลได้
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;