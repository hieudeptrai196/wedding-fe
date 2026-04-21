'use client';

import { HiOutlinePhotograph } from 'react-icons/hi';

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  label?: string;
  className?: string;
  rounded?: boolean;
}

export default function ImagePlaceholder({
  width = 'w-full',
  height = 'h-48',
  label = 'Hình ảnh',
  className = '',
  rounded = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`
        ${width} ${height}
        bg-gradient-to-br from-amber-50 to-amber-100
        border-2 border-dashed border-amber-200
        flex flex-col items-center justify-center gap-2
        ${rounded ? 'rounded-xl' : ''}
        ${className}
      `}
    >
      <HiOutlinePhotograph className="w-8 h-8 text-amber-300" />
      <span className="text-xs text-amber-400 font-medium">{label}</span>
    </div>
  );
}
