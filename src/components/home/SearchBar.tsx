'use client';

import { HiOutlineSearch } from 'react-icons/hi';
import { LOCATIONS } from '@/utils/constants';
import { useState } from 'react';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState(LOCATIONS[0]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
        {/* Keyword Input */}
        <div className="flex-1 flex items-center px-4 py-3 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-100">
          <HiOutlineSearch className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Tìm dịch vụ cưới..."
            className="w-full px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        {/* Location Select */}
        <div className="flex items-center px-4 py-3 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-100">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-sm text-gray-600 bg-transparent focus:outline-none cursor-pointer pr-2 py-2"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium text-sm hover:from-amber-600 hover:to-amber-700 transition-all cursor-pointer">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
