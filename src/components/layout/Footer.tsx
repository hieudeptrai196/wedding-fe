import Link from 'next/link';
import Logo from '@/components/common/Logo';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Nền tảng dịch vụ cưới hàng đầu Việt Nam. Kết nối bạn với hàng trăm nhà cung cấp uy tín để ngày trọng đại thêm hoàn hảo.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2.5">
              {['Chụp ảnh cưới', 'Nhà hàng & Tiệc', 'Trang trí', 'Thiệp cưới', 'Áo cưới', 'MC & Ban nhạc'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2.5">
              {[
                'Hướng dẫn sử dụng',
                'Câu hỏi thường gặp',
                'Chính sách bảo mật',
                'Điều khoản dịch vụ',
                'Đăng ký đối tác',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <HiOutlineLocationMarker className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlinePhone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">1900 xxxx</span>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlineMail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">contact@wedding.vn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Wedding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
