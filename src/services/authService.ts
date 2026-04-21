// import api from './api';
// import { AUTH_ENDPOINTS } from '@/utils/constants';
import { LoginRequest, RegisterRequest, AuthResponse } from '@/types/auth';
import { findMockUser, isEmailTaken, generateFakeToken, MOCK_USERS } from '@/data/mockUsers';

// ==========================================
// Auth Service
// Hiện tại sử dụng fake data
// Khi backend sẵn sàng, uncomment API calls và xóa fake logic
// ==========================================

/**
 * Đăng nhập
 * Backend endpoint: POST /api/v1/auth/login
 * Body: { email: string, password: string }
 */
export async function login(data: LoginRequest): Promise<AuthResponse> {
  // ===== FAKE DATA - Xóa block này khi backend sẵn sàng =====
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = findMockUser(data.email, data.password);
      if (found) {
        resolve({
          user: found.user,
          token: generateFakeToken(found.user.id),
          message: 'Đăng nhập thành công',
        });
      } else {
        reject(new Error('Email hoặc mật khẩu không đúng'));
      }
    }, 800); // Simulate network delay
  });
  // ===== END FAKE DATA =====

  // ===== UNCOMMENT KHI BACKEND SẴN SÀNG =====
  // const response = await api.post(AUTH_ENDPOINTS.LOGIN, data);
  // return response.data.data;
  // ============================================
}

/**
 * Đăng ký
 * Backend endpoint: POST /api/v1/auth/register
 * Body: { fullName: string, email: string, phone: string, password: string }
 */
export async function register(data: RegisterRequest): Promise<AuthResponse> {
  // ===== FAKE DATA - Xóa block này khi backend sẵn sàng =====
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isEmailTaken(data.email)) {
        reject(new Error('Email đã được sử dụng'));
        return;
      }

      const newUser = {
        id: String(MOCK_USERS.length + 1),
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        role: 'user' as const,
      };

      resolve({
        user: newUser,
        token: generateFakeToken(newUser.id),
        message: 'Đăng ký thành công',
      });
    }, 800);
  });
  // ===== END FAKE DATA =====

  // ===== UNCOMMENT KHI BACKEND SẴN SÀNG =====
  // const response = await api.post(AUTH_ENDPOINTS.REGISTER, {
  //   fullName: data.fullName,
  //   email: data.email,
  //   phone: data.phone,
  //   password: data.password,
  // });
  // return response.data.data;
  // ============================================
}
