'use client';

import { MOCK_CATEGORIES } from '@/data/mockServices';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import {
  HiOutlineCamera,
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
  HiOutlineMail,
  HiOutlineMusicNote,
} from 'react-icons/hi';
import { GiDress, GiFlowerPot, GiLipstick } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  camera: <HiOutlineCamera className="w-7 h-7" />,
  restaurant: <HiOutlineOfficeBuilding className="w-7 h-7" />,
  decoration: <GiFlowerPot className="w-7 h-7" />,
  invitation: <HiOutlineMail className="w-7 h-7" />,
  dress: <GiDress className="w-7 h-7" />,
  music: <HiOutlineMusicNote className="w-7 h-7" />,
  car: <FaCar className="w-7 h-7" />,
  makeup: <GiLipstick className="w-7 h-7" />,
};

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Khám phá dịch vụ cưới
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Đa dạng danh mục dịch vụ để bạn lựa chọn cho ngày cưới hoàn hảo
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {MOCK_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#"
              className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center text-amber-500 group-hover:text-amber-600 transition-all mb-4">
                {CATEGORY_ICONS[cat.icon] || <HiOutlineSparkles className="w-7 h-7" />}
              </div>

              {/* Text */}
              <h3 className="font-semibold text-gray-800 group-hover:text-amber-700 transition-colors mb-1">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-400">
                {cat.count} dịch vụ
              </p>

              {/* Hover arrow */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
