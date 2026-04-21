'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/common/Logo';
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineCog,
  HiOutlineChartBar,
  HiOutlineDocumentText,
} from 'react-icons/hi';

const ADMIN_NAV = [
  { label: 'Dashboard', href: '/admin', icon: <HiOutlineHome className="w-5 h-5" /> },
  { label: 'Quản lý người dùng', href: '/admin/users', icon: <HiOutlineUsers className="w-5 h-5" /> },
  { label: 'Quản lý dịch vụ', href: '/admin/services', icon: <HiOutlineBriefcase className="w-5 h-5" /> },
  { label: 'Đơn hàng', href: '/admin/orders', icon: <HiOutlineDocumentText className="w-5 h-5" /> },
  { label: 'Thống kê', href: '/admin/analytics', icon: <HiOutlineChartBar className="w-5 h-5" /> },
  { label: 'Cài đặt', href: '/admin/settings', icon: <HiOutlineCog className="w-5 h-5" /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-gray-800">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {ADMIN_NAV.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium
                transition-all duration-200
                ${isActive
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Về trang chủ
        </Link>
      </div>
    </aside>
  );
}
