'use client';

import { useAuth } from '@/hooks/useAuth';
import { HiOutlineBell, HiOutlineLogout } from 'react-icons/hi';

export default function AdminHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Quản trị hệ thống</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <HiOutlineBell className="w-5 h-5 text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold text-sm">
            {user?.fullName.charAt(0).toUpperCase() || 'A'}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-700">{user?.fullName || 'Admin'}</p>
            <p className="text-xs text-gray-400">Quản trị viên</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          title="Đăng xuất"
        >
          <HiOutlineLogout className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
