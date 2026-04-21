'use client';

import { HiOutlineUsers, HiOutlineBriefcase, HiOutlineCurrencyDollar, HiOutlineChartBar } from 'react-icons/hi';

const STATS = [
  {
    title: 'Tổng người dùng',
    value: '1,234',
    change: '+12%',
    icon: <HiOutlineUsers className="w-6 h-6" />,
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    changeColor: 'text-green-500',
  },
  {
    title: 'Dịch vụ đang hoạt động',
    value: '567',
    change: '+8%',
    icon: <HiOutlineBriefcase className="w-6 h-6" />,
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    changeColor: 'text-green-500',
  },
  {
    title: 'Doanh thu tháng',
    value: '45.2M',
    change: '+23%',
    icon: <HiOutlineCurrencyDollar className="w-6 h-6" />,
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    changeColor: 'text-green-500',
  },
  {
    title: 'Lượt truy cập',
    value: '8,901',
    change: '-2%',
    icon: <HiOutlineChartBar className="w-6 h-6" />,
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    changeColor: 'text-red-500',
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {STATS.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${stat.bgColor} ${stat.textColor} flex items-center justify-center`}>
              {stat.icon}
            </div>
            <span className={`text-xs font-semibold ${stat.changeColor}`}>
              {stat.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
          <p className="text-sm text-gray-500">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
