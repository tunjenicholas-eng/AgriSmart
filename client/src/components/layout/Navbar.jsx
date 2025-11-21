import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-green-600 border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            AgriSmart
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/marketplace" className="text-white hover:text-green-100">
              Marketplace
            </Link>

            {user ? (
              <>
                {user.role === 'FARMER' ? (
                  <Link to="/farmer-dashboard" className="text-white hover:text-green-100">
                    Dashboard
                  </Link>
                ) : (
                  <Link to="/buyer-dashboard" className="text-white hover:text-green-100">
                    Dashboard
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-green-100">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
