'use client';

import { useState } from 'react';
import { MOCK_SERVICES } from '@/data/mockServices';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import { HiOutlineStar, HiOutlineLocationMarker } from 'react-icons/hi';

const TABS = ['Phổ biến nhất', 'Mới nhất', 'Giá tốt'];

export default function FeaturedServices() {
  const [activeTab, setActiveTab] = useState(0);

  // Simple fake filter - just shuffle order based on tab
  const getServices = () => {
    const services = [...MOCK_SERVICES];
    if (activeTab === 1) return services.reverse();
    if (activeTab === 2) return services.sort((a, b) => a.price.localeCompare(b.price));
    return services;
  };

  const visibleServices = getServices().slice(0, 8);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Dịch vụ nổi bật
            </h2>
            <p className="text-gray-500">
              Các dịch vụ được đánh giá cao từ những nhà cung cấp uy tín
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
            {TABS.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer
                  ${activeTab === index
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative">
                <ImagePlaceholder
                  height="h-44"
                  label={service.category}
                  rounded={false}
                />
                {service.isFeatured && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-amber-500 text-white text-xs font-semibold rounded-lg shadow-md">
                    Nổi bật
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Provider */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-amber-600">
                      {service.provider.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 truncate">{service.provider}</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {service.name}
                </h3>

                {/* Location & Rating */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <HiOutlineLocationMarker className="w-3.5 h-3.5" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <HiOutlineStar className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-medium">{service.rating}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="pt-3 border-t border-gray-50">
                  <span className="text-amber-600 font-bold text-sm">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-amber-600 border-2 border-amber-200 rounded-xl hover:bg-amber-50 hover:border-amber-300 transition-all"
          >
            Xem tất cả dịch vụ
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
