export default function ProductForm({ formData, handleInputChange, handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g., Organic Tomatoes"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
          >
            <option value="Root">Root Vegetables</option>
            <option value="Leafy">Leafy Greens</option>
            <option value="Fruit">Fruits</option>
            <option value="Grain">Grains</option>
            <option value="Legume">Legumes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price per kg (₹) *</label>
          <input
            type="number"
            step="0.01"
            name="price_per_kg"
            value={formData.price_per_kg}
            onChange={handleInputChange}
            placeholder="40.50"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Available (kg) *</label>
          <input
            type="number"
            name="quantity_available"
            value={formData.quantity_available}
            onChange={handleInputChange}
            placeholder="500"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL *</label>
          <input
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleInputChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Harvest Date *</label>
          <input
            type="date"
            name="harvest_date"
            value={formData.harvest_date}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 transition"
      >
        {loading ? 'Creating Listing...' : 'Create Listing'}
      </button>
    </form>
  )
}
