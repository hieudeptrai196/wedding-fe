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
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';
import toast from 'react-hot-toast';

const registerSchema = z
  .object({
    fullName: z.string().min(2, 'Họ tên phải có ít nhất 2 ký tự'),
    email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
    phone: z
      .string()
      .min(1, 'Vui lòng nhập số điện thoại')
      .regex(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirmPassword: z.string().min(1, 'Vui lòng xác nhận mật khẩu'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const { register: registerUser, isLoading, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);
      toast.success('Đăng ký thành công! Vui lòng đăng nhập.');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Đăng ký thất bại');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10" />

        <div className="relative text-center text-white max-w-md">
          <div className="text-6xl mb-6">🎊</div>
          <h3 className="text-3xl font-bold mb-4">
            Bắt đầu hành trình cùng Wedding
          </h3>
          <p className="text-amber-100 text-lg leading-relaxed">
            Tạo tài khoản để khám phá hàng trăm dịch vụ cưới chất lượng và nhận ưu đãi đặc biệt cho ngày trọng đại.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Logo className="mb-6" />
            <h2 className="text-2xl font-bold text-gray-900">Đăng ký</h2>
            <p className="text-sm text-gray-500 mt-1">
              Tạo tài khoản mới để sử dụng dịch vụ.
            </p>
          </div>

          {error && error.length > 0 && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Họ và tên"
              type="text"
              placeholder="Nhập họ và tên"
              icon={<HiOutlineUser className="w-5 h-5" />}
              error={errors.fullName?.message}
              {...register('fullName')}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Nhập email"
              icon={<HiOutlineMail className="w-5 h-5" />}
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label="Số điện thoại"
              type="tel"
              placeholder="Nhập số điện thoại"
              icon={<HiOutlinePhone className="w-5 h-5" />}
              error={errors.phone?.message}
              {...register('phone')}
            />

            <Input
              label="Mật khẩu"
              type="password"
              placeholder="Ít nhất 6 ký tự"
              icon={<HiOutlineLockClosed className="w-5 h-5" />}
              error={errors.password?.message}
              {...register('password')}
            />

            <Input
              label="Xác nhận mật khẩu"
              type="password"
              placeholder="Nhập lại mật khẩu"
              icon={<HiOutlineLockClosed className="w-5 h-5" />}
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 mt-1"
                required
              />
              <span className="text-xs text-gray-500">
                Tôi đồng ý với{' '}
                <a href="#" className="text-amber-600 hover:underline">Điều khoản dịch vụ</a>
                {' '}và{' '}
                <a href="#" className="text-amber-600 hover:underline">Chính sách bảo mật</a>
              </span>
            </div>

            <Button type="submit" fullWidth isLoading={isLoading} size="lg">
              Đăng ký
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Đã có tài khoản?{' '}
            <Link href={ROUTES.LOGIN} className="font-semibold text-amber-600 hover:text-amber-700">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
