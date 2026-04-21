'use client';

import DashboardStats from '@/components/admin/DashboardStats';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">Tổng quan hệ thống quản trị Wedding</p>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Doanh thu theo tháng</h3>
          <ImagePlaceholder height="h-64" label="Biểu đồ doanh thu" />
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Phân bố dịch vụ</h3>
          <ImagePlaceholder height="h-64" label="Biểu đồ phân bố" />
        </div>
      </div>

      {/* Recent Orders Placeholder */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Đơn hàng gần đây</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-100">
                <th className="pb-3 font-medium text-gray-500">Mã đơn</th>
                <th className="pb-3 font-medium text-gray-500">Khách hàng</th>
                <th className="pb-3 font-medium text-gray-500">Dịch vụ</th>
                <th className="pb-3 font-medium text-gray-500">Giá trị</th>
                <th className="pb-3 font-medium text-gray-500">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { id: 'WD-001', customer: 'Nguyễn Văn A', service: 'Gói chụp ảnh Premium', amount: '15,000,000đ', status: 'Hoàn thành', statusColor: 'bg-green-100 text-green-700' },
                { id: 'WD-002', customer: 'Trần Thị B', service: 'Tiệc cưới 50 bàn', amount: '120,000,000đ', status: 'Đang xử lý', statusColor: 'bg-amber-100 text-amber-700' },
                { id: 'WD-003', customer: 'Lê Văn C', service: 'Trang trí Rustic', amount: '25,000,000đ', status: 'Chờ xác nhận', statusColor: 'bg-blue-100 text-blue-700' },
                { id: 'WD-004', customer: 'Phạm Thị D', service: 'Áo dài cưới Hoàng Gia', amount: '8,000,000đ', status: 'Hoàn thành', statusColor: 'bg-green-100 text-green-700' },
                { id: 'WD-005', customer: 'Hoàng Văn E', service: 'MC Song ngữ', amount: '12,000,000đ', status: 'Hủy bỏ', statusColor: 'bg-red-100 text-red-700' },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-800">{order.id}</td>
                  <td className="py-3 text-gray-600">{order.customer}</td>
                  <td className="py-3 text-gray-600">{order.service}</td>
                  <td className="py-3 font-medium text-gray-800">{order.amount}</td>
                  <td className="py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
