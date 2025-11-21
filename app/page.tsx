export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-green-600">AgriSmart</div>
            <div className="flex gap-4">
              <a href="#overview" className="text-gray-700 hover:text-green-600">Overview</a>
              <a href="#setup" className="text-gray-700 hover:text-green-600">Setup</a>
              <a href="#structure" className="text-gray-700 hover:text-green-600">Structure</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AgriSmart</h1>
          <p className="text-xl text-gray-600 mb-4">
            A complete full-stack farmer marketplace platform connecting farmers directly with buyers
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Built with React + Vite + Tailwind, Node.js + Express, and MongoDB
          </p>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <div className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-semibold">
              React + Vite + Tailwind
            </div>
            <div className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-semibold">
              Node.js + Express
            </div>
            <div className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold">
              MongoDB + Mongoose
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a 
              href="http://localhost:3000" 
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Open Frontend (localhost:3000)
            </a>
            <a 
              href="http://localhost:5000/api/v1/products" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Test Backend API (localhost:5000)
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Role-Based Auth', description: 'JWT authentication for Farmers and Buyers' },
              { title: 'Product Marketplace', description: 'Browse and filter fresh farm produce' },
              { title: 'Shopping Cart', description: 'Add products and create orders' },
              { title: 'Farmer Dashboard', description: 'Manage products and track sales' },
              { title: 'Buyer Dashboard', description: 'View orders and manage purchases' },
              { title: 'Price Analytics', description: 'Market trends and pricing insights' }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Instructions */}
      <section id="setup" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Getting Started</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Step 1: Backend Server</h3>
              <p className="text-gray-600 mb-4">Open a terminal and run:</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <div>$ cd server</div>
                <div>$ npm install</div>
                <div>$ npm run dev</div>
                <div className="text-gray-500 mt-4">Server runs on http://localhost:5000</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Step 2: Frontend Application</h3>
              <p className="text-gray-600 mb-4">Open another terminal and run:</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <div>$ cd client</div>
                <div>$ npm install</div>
                <div>$ npm run dev</div>
                <div className="text-gray-500 mt-4">Frontend runs on http://localhost:3000</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Step 3: Database</h3>
              <p className="text-gray-600 mb-4">Make sure MongoDB Atlas is configured with your connection string in:</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                server/.env
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section id="structure" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Project Structure</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Backend Structure</h3>
              <div className="bg-gray-900 text-gray-300 p-4 rounded font-mono text-xs overflow-x-auto">
                <div>/server</div>
                <div>├── config/db.js (MongoDB connection)</div>
                <div>├── models/ (User, Product, Order)</div>
                <div>├── routes/ (Auth, Products, Orders, Insights)</div>
                <div>├── middleware/ (Auth, Error handling)</div>
                <div>└── server.js (Express app)</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Frontend Structure</h3>
              <div className="bg-gray-900 text-gray-300 p-4 rounded font-mono text-xs overflow-x-auto">
                <div>/client/src</div>
                <div>├── components/ (Layout, Product, etc.)</div>
                <div>├── pages/ (Home, Login, Marketplace, Dashboards)</div>
                <div>├── context/ (Auth, Cart)</div>
                <div>└── App.jsx (Main router)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Quick Reference</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="font-semibold text-gray-900">Frontend</div>
              <div className="text-gray-600 text-sm">http://localhost:3000 - React + Vite application</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="font-semibold text-gray-900">Backend API</div>
              <div className="text-gray-600 text-sm">http://localhost:5000 - Express REST API</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="font-semibold text-gray-900">Database</div>
              <div className="text-gray-600 text-sm">MongoDB Atlas - Cloud database connection</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="font-semibold text-gray-900">API Endpoint Example</div>
              <div className="text-gray-600 text-sm font-mono">GET http://localhost:5000/api/v1/products</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-green-100 mb-8">
            Follow the setup instructions above to run the backend and frontend servers
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="http://localhost:3000" className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100">
              Open Frontend
            </a>
            <a href="http://localhost:5000" className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 border border-white">
              Test Backend
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 AgriSmart - Full Stack Farmer Marketplace</p>
        </div>
      </footer>
    </div>
  )
}
