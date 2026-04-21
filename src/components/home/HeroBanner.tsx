'use client';

import SearchBar from './SearchBar';
import { STATS } from '@/data/mockServices';
import { GiDiamondRing } from 'react-icons/gi';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-100/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-700 text-sm font-medium mb-6 backdrop-blur-sm">
            <GiDiamondRing className="w-4 h-4" />
            <span>Nền tảng dịch vụ cưới #1 Việt Nam</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Tìm dịch vụ cưới{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              hoàn hảo
            </span>
            <br />
            cho ngày trọng đại
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Kết nối với hàng trăm nhà cung cấp uy tín. Chụp ảnh, nhà hàng, trang trí, thiệp cưới - tất cả trong một nền tảng.
          </p>

          {/* Search Bar */}
          <SearchBar />

          {/* Stats Ticker */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10">
            {[
              { value: `${STATS.services}+`, label: 'Dịch vụ' },
              { value: `${STATS.partners}+`, label: 'Đối tác' },
              { value: `${STATS.weddings}+`, label: 'Đám cưới thành công' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-600">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
