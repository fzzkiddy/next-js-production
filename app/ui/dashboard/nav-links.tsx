import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// 定义链接类型
type NavLink = {
  name: string;
  href?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: { name: string; href: string }[];
};
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// 左侧导航栏的链接映射。根据应用程序的大小，这将被存储在数据库中。
const links: NavLink[] = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: '用户数据',
    href: '/pay/users',
    icon: DocumentDuplicateIcon,
  },
  { 
    name: '订单明细', 
    children: [
      { name: '消费订单', href: '/pay/orders/consums' },
      { name: '币商订单', href: '/pay/orders/beans-dealer' },
    ],
    icon: UserGroupIcon 
  },
];

const baseLinkClass = "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 hover:text-purple-500 md:flex-none md:justify-start md:p-2 md:px-3";

// 创建 NavLink 组件处理单个链接
const NavLink = ({ link }: { link: NavLink }) => {
  const pathname = usePathname();
  const LinkIcon = link.icon;
  
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
              className={clsx(
                baseLinkClass, 
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
      className={clsx(
        baseLinkClass, 
        {
          'bg-purple-100 text-purple-500': pathname === link.href,
        }
      )}
    >
      {LinkIcon && <LinkIcon className="w-6" />}
      <p className="hidden md:block">{link.name}</p>
    </Link>
  );
};

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <NavLink key={link.name} link={link} />
      ))}
    </>
  );
}