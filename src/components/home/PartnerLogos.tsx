'use client';

import { MOCK_PARTNERS } from '@/data/mockServices';

export default function PartnerLogos() {
  // Duplicate for infinite scroll effect
  const partners = [...MOCK_PARTNERS, ...MOCK_PARTNERS];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Đối tác tin cậy
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hợp tác cùng những thương hiệu uy tín trong ngành cưới
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex items-center gap-8 animate-marquee">
          {partners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-44 h-20 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-amber-200 hover:shadow-md transition-all group"
            >
              <span className="text-sm font-semibold text-gray-400 group-hover:text-amber-600 transition-colors text-center px-3">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
