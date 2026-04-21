// ==========================================
// App Constants
// ==========================================

export const APP_NAME = 'Wedding';
export const APP_DESCRIPTION = 'Nền tảng dịch vụ cưới hàng đầu Việt Nam';

// API Base URL - Update when backend is ready
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
export const API_VERSION = '/api/v1';

// Auth endpoints (matching backend)
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_VERSION}/auth/login`,
  REGISTER: `${API_VERSION}/auth/register`,
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ADMIN: '/admin',
  SERVICES: '/services',
  TEMPLATES: '/templates',
  CONTACT: '/contact',
};

// Cookie keys
export const COOKIE_TOKEN_KEY = 'wedding_token';
export const COOKIE_USER_KEY = 'wedding_user';

// Navigation items
export const NAV_ITEMS = [
  { label: 'Trang chủ', href: ROUTES.HOME },
  { label: 'Dịch vụ', href: ROUTES.SERVICES },
  { label: 'Mẫu thiệp', href: ROUTES.TEMPLATES },
  { label: 'Liên hệ', href: ROUTES.CONTACT },
];

// Locations for search
export const LOCATIONS = [
  'Tất cả địa điểm',
  'Hà Nội',
  'TP. Hồ Chí Minh',
  'Đà Nẵng',
  'Hải Phòng',
  'Cần Thơ',
  'Nha Trang',
  'Huế',
  'Đà Lạt',
];
