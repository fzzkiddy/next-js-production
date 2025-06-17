/*
 * @Date: 2025-05-27 01:47:07
 * @LastEditors: kiddy fanzhenzhen@blued.com
 * @LastEditTime: 2025-06-17 15:44:14
 * @FilePath: /nextjs-dashboard/next.config.ts
 * @Description: 
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.catchimg.com',
      },
      {
        protocol: 'https',
        hostname: '*.blued.com',
      },
      {
        protocol: 'https',
        hostname: '*.bldimg.com',
      },
      {
        protocol: 'https',
        hostname: '*.heesay.com',
      },
      {
        protocol: 'https',
        hostname: '*.heerosapp.com',
      },
      {
        protocol: 'https',
        hostname: '*.walla-app.com',
      },
      {
        // 开发环境
        protocol: 'http',
        hostname: 'localhost',
        port: '3000'
      }
    ],
  },
};

export default nextConfig;
