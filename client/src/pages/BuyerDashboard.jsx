import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import axios from 'axios'

export default function BuyerDashboard() {
  const { user } = useAuth()
  const { cart, getTotalPrice } = useCart()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/orders', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setOrders(response.data)
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }

  const handleCheckout = async () => {
    if (cart.length === 0) return

    try {
      const items = cart.map(item => ({
        productId: item.product._id,
        qty: item.quantity,
      }))

      await axios.post('http://localhost:5000/api/v1/orders', { items }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      fetchOrders()
    } catch (error) {
      console.error('Error creating order:', error)
    }
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Buyer Dashboard</h1>

        {/* Welcome Card */}
        <div className="bg-green-600 text-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h2>
          <p className="text-green-100">Browse fresh produce and manage your orders.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-2xl font-bold mb-6">Shopping Cart</h3>
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.product._id} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h4 className="font-semibold">{item.product.name}</h4>
                        <p className="text-gray-600">{item.quantity} kg × ₹{item.product.price_per_kg}/kg</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{item.product.price_per_kg * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-green-600">₹{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Orders History */}
        <div className="mt-12 bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-bold mb-6">Order History</h3>
          {orders.length === 0 ? (
            <p className="text-gray-600">No orders yet</p>
          ) : (
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order._id} className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Order #{order._id.substring(0, 8)}</p>
                      <p className="text-gray-600">₹{order.total_amount}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${order.status === 'DELIVERED' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {order.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
