import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL, COOKIE_TOKEN_KEY } from '@/utils/constants';

// ==========================================
// Axios Instance
// Cấu hình sẵn baseURL và interceptors
// Uncomment khi backend sẵn sàng
// ==========================================

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - tự động gắn token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get(COOKIE_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - xử lý lỗi chung
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token hết hạn → logout
      Cookies.remove(COOKIE_TOKEN_KEY);
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
