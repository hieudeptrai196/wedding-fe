import LoginForm from '@/components/auth/LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng nhập - Wedding',
  description: 'Đăng nhập vào tài khoản Wedding để sử dụng dịch vụ',
};

export default function LoginPage() {
  return <LoginForm />;
}
