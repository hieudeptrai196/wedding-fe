import Link from 'next/link';
import Button from '@/components/common/Button';
import { ROUTES } from '@/utils/constants';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-8 sm:p-12 lg:p-16">
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute top-12 right-24 w-24 h-24 rounded-full bg-white/5" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Bạn là nhà cung cấp dịch vụ?
              </h2>
              <p className="text-amber-100 text-base sm:text-lg max-w-lg">
                Đăng ký trở thành đối tác và tiếp cận hàng nghìn cặp đôi đang tìm kiếm dịch vụ cưới hoàn hảo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <Link href={ROUTES.REGISTER}>
                <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all shadow-lg shadow-amber-600/20 cursor-pointer">
                  Đăng ký đối tác
                  <HiOutlineArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href={ROUTES.CONTACT}>
                <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/50 text-white font-medium rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                  Tìm hiểu thêm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
