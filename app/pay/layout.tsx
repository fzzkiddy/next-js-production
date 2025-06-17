/*
 * @Date: 2025-06-17 16:00:46
 * @LastEditors: kiddy fanzhenzhen@blued.com
 * @LastEditTime: 2025-06-17 16:00:48
 * @FilePath: /nextjs-dashboard/app/pay/users/layout.tsx
 * @Description: 
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}