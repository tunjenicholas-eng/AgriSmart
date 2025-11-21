export default function ProductTable({ products, onEdit, onDelete, loading }) {
  if (loading) {
    return <div className="text-center py-8"><p className="text-gray-600">Loading...</p></div>
  }

  if (products.length === 0) {
    return <div className="text-center py-8"><p className="text-gray-600">No listings yet. Create your first listing!</p></div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Product</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price/kg</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantity</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4 text-gray-700">{product.category}</td>
              <td className="px-6 py-4 text-gray-700">₹{product.price_per_kg}</td>
              <td className="px-6 py-4 text-gray-700">{product.quantity_available} kg</td>
              <td className="px-6 py-4">
                {onEdit && (
                  <button
                    onClick={() => onEdit(product)}
                    className="px-3 py-1 text-blue-600 hover:text-blue-700 font-semibold mr-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onDelete(product._id)}
                  className="px-3 py-1 text-red-600 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
