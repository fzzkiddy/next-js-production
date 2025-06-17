/*
 * @Date: 2025-05-27 01:47:07
 * @LastEditors: kiddy fanzhenzhen@blued.com
 * @LastEditTime: 2025-06-17 16:05:16
 * @FilePath: /nextjs-dashboard/app/ui/acme-logo.tsx
 * @Description: 
 */
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* 这里的logo是50*50的, 圆角 */}
      <Image width={50} height={50} className='border-0 rounded-full' src="/heesay-logo.png" alt="Heesay" />
      <p className="text-[44px]">Heesay</p>
    </div>
  );
}
