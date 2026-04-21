'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Logo from '@/components/common/Logo';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/utils/constants';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { login, isLoading, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
      toast.success('Đăng nhập thành công!');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Đăng nhập thất bại');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Logo className="mb-6" />
            <h2 className="text-2xl font-bold text-gray-900">Đăng nhập</h2>
            <p className="text-sm text-gray-500 mt-1">
              Chào mừng bạn trở lại! Vui lòng đăng nhập để tiếp tục.
            </p>
          </div>

          {/* Error Message */}
          {error && error.length > 0 && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="Nhập email của bạn"
              icon={<HiOutlineMail className="w-5 h-5" />}
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label="Mật khẩu"
              type="password"
              placeholder="Nhập mật khẩu"
              icon={<HiOutlineLockClosed className="w-5 h-5" />}
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                <span className="text-gray-600">Ghi nhớ đăng nhập</span>
              </label>
              <a href="#" className="font-medium text-amber-600 hover:text-amber-700">
                Quên mật khẩu?
              </a>
            </div>

            <Button type="submit" fullWidth isLoading={isLoading} size="lg">
              Đăng nhập
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">hoặc</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Login Placeholders */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Chưa có tài khoản?{' '}
            <Link href={ROUTES.REGISTER} className="font-semibold text-amber-600 hover:text-amber-700">
              Đăng ký ngay
            </Link>
          </p>

          {/* Demo credentials */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-xs font-semibold text-amber-700 mb-2">🔑 Tài khoản demo:</p>
            <div className="space-y-1 text-xs text-amber-600">
              <p><strong>Admin:</strong> admin@wedding.com / admin123</p>
              <p><strong>User:</strong> user@wedding.com / user123</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5" />

        <div className="relative text-center text-white max-w-md">
          <div className="text-6xl mb-6">💍</div>
          <h3 className="text-3xl font-bold mb-4">
            Chào mừng đến với Wedding
          </h3>
          <p className="text-amber-100 text-lg leading-relaxed">
            Nền tảng kết nối dịch vụ cưới hàng đầu Việt Nam. Tìm kiếm, so sánh và lựa chọn dịch vụ tốt nhất cho ngày trọng đại.
          </p>
        </div>
      </div>
    </div>
  );
}
