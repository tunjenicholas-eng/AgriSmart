import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import DashboardStats from '../components/common/DashboardStats'
import ProductForm from '../components/product/ProductForm'
import ProductTable from '../components/product/ProductTable'

export default function FarmerDashboard() {
  const { user } = useAuth()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [stats, setStats] = useState({
    totalSales: 0,
    activeListings: 0,
    pendingOrders: 0,
  })
  const [formData, setFormData] = useState({
    name: '',
    category: 'Root',
    price_per_kg: '',
    quantity_available: '',
    image_url: '',
    harvest_date: '',
  })

  useEffect(() => {
    fetchFarmerProducts()
  }, [])

  const fetchFarmerProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5000/api/v1/products', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      const farmerProducts = response.data.filter(p => p.farmer_id._id === user.id)
      setProducts(farmerProducts)
      
      setStats({
        totalSales: farmerProducts.reduce((sum, p) => sum + (p.price_per_kg * p.quantity_available), 0),
        activeListings: farmerProducts.length,
        pendingOrders: 0, // Would need orders API
      })
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await axios.post('http://localhost:5000/api/v1/products', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setFormData({
        name: '',
        category: 'Root',
        price_per_kg: '',
        quantity_available: '',
        image_url: '',
        harvest_date: '',
      })
      setShowForm(false)
      fetchFarmerProducts()
    } catch (error) {
      console.error('Error creating product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (productId) => {
    if (confirm('Are you sure you want to delete this listing?')) {
      try {
        await axios.delete(`http://localhost:5000/api/v1/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        fetchFarmerProducts()
      } catch (error) {
        console.error('Error deleting product:', error)
      }
    }
  }

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Farmer Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your listings and track your sales</p>
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-green-100">You have {stats.activeListings} active listings</p>
        </div>

        {/* Stats */}
        <DashboardStats stats={stats} />

        {/* Add Product Section */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow"
          >
            {showForm ? '✕ Cancel' : '+ Add New Listing'}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Create New Listing</h3>
            <ProductForm 
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        )}

        {/* Products List */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-bold mb-6">Your Listings</h3>
          <ProductTable 
            products={products}
            onDelete={handleDelete}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}
