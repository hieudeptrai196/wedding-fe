import RegisterForm from '@/components/auth/RegisterForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng ký - Wedding',
  description: 'Tạo tài khoản Wedding để sử dụng dịch vụ cưới',
};

export default function RegisterPage() {
  return <RegisterForm />;
}
