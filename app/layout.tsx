/*
 * @Date: 2025-05-27 01:47:07
 * @LastEditors: kiddy fanzhenzhen@blued.com
 * @LastEditTime: 2025-06-17 14:15:07
 * @FilePath: /nextjs-dashboard/app/layout.tsx
 * @Description: 
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}