'use client';

import Link from 'next/link';
import { HiOutlineX } from 'react-icons/hi';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { NAV_ITEMS, ROUTES } from '@/utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl animate-slideIn">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <HiOutlineX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* User Info (if authenticated) */}
        {isAuthenticated && user && (
          <div className="p-4 bg-amber-50 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold">
                {user.fullName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{user.fullName}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all"
            >
              {item.label}
            </Link>
          ))}

          {isAuthenticated && user?.role === 'admin' && (
            <Link
              href={ROUTES.ADMIN}
              onClick={onClose}
              className="block px-4 py-3 text-sm font-medium text-amber-600 rounded-lg hover:bg-amber-50 transition-all"
            >
              🛠 Trang quản trị
            </Link>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
          {isAuthenticated ? (
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                logout();
                onClose();
              }}
            >
              Đăng xuất
            </Button>
          ) : (
            <div className="space-y-2">
              <Link href={ROUTES.LOGIN} onClick={onClose}>
                <Button variant="primary" fullWidth>
                  Đăng nhập
                </Button>
              </Link>
              <Link href={ROUTES.REGISTER} onClick={onClose}>
                <Button variant="outline" fullWidth>
                  Đăng ký
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
