import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to AgriSmart</h1>
          <p className="text-xl text-green-100 mb-8">
            Direct farm-to-market connection. Fair prices for farmers, fresh produce for buyers.
          </p>
          <div className="flex gap-4">
            <Link to="/marketplace" className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100">
              Browse Products
            </Link>
            <Link to="/register" className="px-8 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AgriSmart?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-3xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Smart pricing engine shows real market rates so farmers earn fair value.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Direct Connection</h3>
              <p className="text-gray-600">Buy and sell directly. No middlemen, no hidden costs.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-gray-600">View price trends and make informed decisions with real data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
