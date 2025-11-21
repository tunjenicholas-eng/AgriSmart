export default function DashboardStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Total Sales</p>
            <p className="text-3xl font-bold text-green-600">₹{stats.totalSales || 0}</p>
          </div>
          <div className="text-4xl text-green-100">💰</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Active Listings</p>
            <p className="text-3xl font-bold text-blue-600">{stats.activeListings || 0}</p>
          </div>
          <div className="text-4xl text-blue-100">📦</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Pending Orders</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pendingOrders || 0}</p>
          </div>
          <div className="text-4xl text-yellow-100">⏳</div>
        </div>
      </div>
    </div>
  )
}
