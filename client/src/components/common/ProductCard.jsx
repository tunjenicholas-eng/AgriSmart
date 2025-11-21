import { useCart } from '../../context/CartContext'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image_url || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-bold text-green-600">₹{product.price_per_kg}</p>
            <p className="text-sm text-gray-500">per kg</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{product.quantity_available} kg available</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">Farmer: {product.farmer_id?.name || 'Unknown'}</p>

        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            max={product.quantity_available}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-16 px-2 py-2 border border-gray-300 rounded text-center"
          />
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
