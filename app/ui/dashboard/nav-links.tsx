/*
 * @Date: 2025-05-27 01:47:07
 * @LastEditors: kiddy fanzhenzhen@blued.com
 * @LastEditTime: 2025-06-17 17:07:48
 * @FilePath: /nextjs-dashboard/app/ui/dashboard/nav-links.tsx
 * @Description: 
 */
// Since usePathname() is a React hook, you'll need to turn nav-links.tsx into a Client Component. 
// Add React's "use client" directive to the top of the file, then import usePathname() from next/navigation:
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// 左侧导航栏的链接映射。根据应用程序的大小，这将被存储在数据库中。
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: '用户数据',
    href: '/pay/users',
    icon: DocumentDuplicateIcon,
  },
  { name: '订单明细', 
    children: [
      { name: '消费订单', href: '/pay/orders/consums' },
      { name: '币商订单', href: '/pay/orders/beans-dealer' },
    ],
    icon: UserGroupIcon 
  },
];

// 定义基础链接样式，提高代码可维护性
const baseLinkClass = "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 hover:text-purple-500 md:flex-none md:justify-start md:p-2 md:px-3";


// 递归渲染嵌套链接的函数
const renderLink = (link: { name: string; href?: string; icon?: React.ComponentType; children?: { name: string; href: string }[] }) => {
  const LinkIcon = link.icon;
  // 获取当前页面 路径
  const pathname = usePathname()
  console.log('🦌', pathname, pathname === link.href)
  if (link.children) {
    return (
      <div key={link.name}>
        <div className={baseLinkClass}>
          {LinkIcon && <LinkIcon className="w-6" />}
          <p className="hidden md:block">{link.name}</p>
        </div>
        <div className="ml-6">
          {link.children.map(child => (
            <Link
              key={child.name}
              href={child.href}
              className={clsx(baseLinkClass, 
                {
                  'bg-purple-100 text-purple-500': pathname === child.href,
                }
              )}
            >
              <p className="hidden md:block">{child.name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return (
    <Link
      key={link.name}
      href={link.href!}
      className={clsx(baseLinkClass, 
        {
          'bg-purple-100 text-purple-500': pathname === link.href,
        }
    )}>
      {LinkIcon && <LinkIcon className="w-6" />}
      <p className="hidden md:block">{link.name}</p>
    </Link>
  );
};

export default function NavLinks() {
  return (
    <>
      {links.map(renderLink)}
      {/* {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })} */}
    </>
  );
}
