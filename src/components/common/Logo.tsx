import Link from 'next/link';
import { GiDiamondRing } from 'react-icons/gi';
import { ROUTES } from '@/utils/constants';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      href={ROUTES.HOME}
      className={`flex items-center gap-2 group ${className}`}
    >
      <GiDiamondRing className="w-8 h-8 text-amber-500 group-hover:text-amber-600 transition-colors" />
      <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
        Wedding
      </span>
    </Link>
  );
}
