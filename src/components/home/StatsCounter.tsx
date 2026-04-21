'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/data/mockServices';
import { HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineHeart, HiOutlineEmojiHappy } from 'react-icons/hi';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const STAT_ITEMS: StatItem[] = [
  {
    icon: <HiOutlineBriefcase className="w-8 h-8" />,
    value: STATS.services,
    suffix: '+',
    label: 'Dịch vụ cưới',
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8" />,
    value: STATS.partners,
    suffix: '+',
    label: 'Đối tác uy tín',
  },
  {
    icon: <HiOutlineHeart className="w-8 h-8" />,
    value: STATS.weddings,
    suffix: '+',
    label: 'Đám cưới thành công',
  },
  {
    icon: <HiOutlineEmojiHappy className="w-8 h-8" />,
    value: STATS.satisfaction,
    suffix: '%',
    label: 'Khách hàng hài lòng',
  },
];

function useCountUp(target: number, duration: number = 2000, startCount: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startCount]);

  return count;
}

function StatCard({ item, isVisible }: { item: StatItem; isVisible: boolean }) {
  const count = useCountUp(item.value, 2000, isVisible);

  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300 mb-4">
        {item.icon}
      </div>
      <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
        {count}
        <span className="text-amber-500">{item.suffix}</span>
      </p>
      <p className="text-sm text-gray-500">{item.label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {STAT_ITEMS.map((item) => (
            <StatCard key={item.label} item={item} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
