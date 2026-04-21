'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineUser, HiOutlineLogout, HiOutlineChevronDown } from 'react-icons/hi';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import MobileMenu from './MobileMenu';
import { useAuth } from '@/hooks/useAuth';
import { NAV_ITEMS, ROUTES } from '@/utils/constants';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-amber-600 rounded-lg hover:bg-amber-50 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated && user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-50 transition-all cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold text-sm">
                      {user.fullName.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">
                      {user.fullName}
                    </span>
                    <HiOutlineChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-800">{user.fullName}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-700 font-medium">
                          {user.role === 'admin' ? 'Quản trị viên' : 'Người dùng'}
                        </span>
                      </div>
                      {user.role === 'admin' && (
                        <Link
                          href={ROUTES.ADMIN}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <HiOutlineUser className="w-4 h-4" />
                          Trang quản trị
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          logout();
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <HiOutlineLogout className="w-4 h-4" />
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href={ROUTES.REGISTER}>
                    <Button variant="outline" size="sm">
                      Đăng ký
                    </Button>
                  </Link>
                  <Link href={ROUTES.LOGIN}>
                    <Button variant="primary" size="sm">
                      Đăng nhập
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiOutlineMenu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
