# AgriSmart - Agricultural Marketplace Platform

A complete full-stack application connecting farmers directly with buyers through a modern marketplace platform.

## Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB + Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)

## Features

- 🔐 Role-based authentication (Farmer & Buyer)
- 🛍️ Product marketplace with advanced filtering
- 🛒 Shopping cart & checkout system
- 👨‍🌾 Farmer dashboard for inventory management
- 👤 Buyer dashboard for order tracking
- 📊 Price analytics & market trends
- 🔒 JWT-based security
- 📱 Fully responsive design

## Quick Start

### Prerequisites

- Node.js v16 or higher
- MongoDB (local or cloud)
- npm or yarn

### Installation & Setup

#### 1. Clone or Extract the Project

\`\`\`bash
# Navigate to project root
cd agrismart
\`\`\`

#### 2. Backend Setup

\`\`\`bash
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB URI and JWT secret
nano .env
# MONGODB_URI=mongodb://localhost:27017/agrismart
# JWT_SECRET=your-secret-key
# PORT=5000

# Start backend server
npm run dev
\`\`\`

Backend will run on `http://localhost:5000`

#### 3. Frontend Setup

\`\`\`bash
cd ../client

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Verify VITE_API_URL points to your backend
# VITE_API_URL=http://localhost:5000/api/v1

# Start frontend development server
npm run dev
\`\`\`

Frontend will run on `http://localhost:3000`

#### 4. MongoDB

Ensure MongoDB is running:

\`\`\`bash
# Local MongoDB
mongod

# Or use MongoDB Atlas and update MONGODB_URI in .env
\`\`\`

## Project Structure

\`\`\`
agrismart/
├── server/                          # Backend - Express + MongoDB
│   ├── config/
│   │   └── db.js                   # Database connection
│   ├── models/
│   │   ├── User.js                 # User schema
│   │   ├── Product.js              # Product schema
│   │   ├── Order.js                # Order schema
│   │   └── OrderItem.js            # Order items schema
│   ├── routes/
│   │   ├── authRoutes.js           # Authentication endpoints
│   │   ├── productRoutes.js        # Product endpoints
│   │   ├── orderRoutes.js          # Order endpoints
│   │   └── insightRoutes.js        # Analytics endpoints
│   ├── middleware/
│   │   ├── auth.js                 # JWT verification
│   │   └── errorHandler.js         # Error handling
│   ├── server.js                   # Main server file
│   ├── package.json
│   └── .env.example
│
├── client/                          # Frontend - React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── common/
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   └── DashboardStats.jsx
│   │   │   └── product/
│   │   │       ├── ProductForm.jsx
│   │   │       └── ProductTable.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx     # Authentication state
│   │   │   └── CartContext.jsx     # Shopping cart state
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Marketplace.jsx
│   │   │   ├── FarmerDashboard.jsx
│   │   │   ├── BuyerDashboard.jsx
│   │   │   └── Checkout.jsx
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # Entry point
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
│
├── SETUP.md                         # Detailed setup guide
└── README.md                        # This file
\`\`\`

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/v1/auth/register` | Register new user | No |
| POST | `/api/v1/auth/login` | Login & get JWT token | No |

### Products

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/v1/products` | Get all products (with filters) | No |
| POST | `/api/v1/products` | Create new product | Yes (Farmer) |
| PUT | `/api/v1/products/:id` | Update product | Yes (Farmer) |
| DELETE | `/api/v1/products/:id` | Delete product | Yes (Farmer) |

### Orders

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/v1/orders` | Create new order | Yes |
| GET | `/api/v1/orders` | Get user's orders | Yes |
| GET | `/api/v1/orders/:id` | Get order details | Yes |

### Insights

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/v1/insights/price-trends` | Get price trends by crop | Yes (Farmer) |

## Authentication Flow

1. **Register**: POST `/api/v1/auth/register` with email, password, role (farmer/buyer), and user info
2. **Login**: POST `/api/v1/auth/login` with email and password
3. **Receive JWT Token**: Store in localStorage/sessionStorage
4. **Use Token**: Add `Authorization: Bearer <token>` header to protected requests

## Testing the Application

### 1. Create an Account

- Navigate to `http://localhost:3000`
- Click "Sign Up"
- Register as either Farmer or Buyer

### 2. Test as Farmer

- Add products to marketplace
- View analytics
- Manage inventory
- Track sales

### 3. Test as Buyer

- Browse marketplace
- Add products to cart
- Place orders
- View order history

### 4. Test API Directly

\`\`\`bash
# Register
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "farmer@test.com",
    "password": "password123",
    "role": "farmer",
    "firstName": "John",
    "lastName": "Farmer"
  }'

# Login
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "farmer@test.com",
    "password": "password123"
  }'

# Get all products
curl http://localhost:5000/api/v1/products

# Get products with filter
curl "http://localhost:5000/api/v1/products?category=vegetables&maxPrice=100"
\`\`\`

## Environment Variables

### Backend (.env)

\`\`\`env
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/agrismart

# JWT secret key (change in production!)
JWT_SECRET=your_super_secret_key_here

# Server port
PORT=5000

# Node environment
NODE_ENV=development
\`\`\`

### Frontend (.env)

\`\`\`env
# Backend API base URL
VITE_API_URL=http://localhost:5000/api/v1
\`\`\`

## Troubleshooting

### MongoDB Connection Error

\`\`\`
Error: connect ECONNREFUSED 127.0.0.1:27017
\`\`\`

**Solution**: 
- Make sure MongoDB is running: `mongod`
- Or use MongoDB Atlas and update MONGODB_URI in `.env`

### Backend Won't Start

\`\`\`
Port 5000 is already in use
\`\`\`

**Solution**:
- Change PORT in `.env` file
- Or kill the process using port 5000

### Frontend Can't Connect to Backend

\`\`\`
CORS error or Failed to fetch
\`\`\`

**Solution**:
- Verify backend is running on port 5000
- Check VITE_API_URL in frontend `.env`
- Ensure backend CORS is enabled

### Module Not Found Errors

**Solution**:
\`\`\`bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

## Deployment

### Deploy Backend

1. Push code to GitHub/GitLab
2. Deploy to Heroku, Railway, or your preferred platform
3. Set environment variables in deployment dashboard
4. Ensure MongoDB URI points to production database

### Deploy Frontend

1. Build the project: `npm run build`
2. Deploy to Vercel, Netlify, or your preferred platform
3. Update VITE_API_URL to production API URL

## Contributing

Feel free to submit pull requests or open issues for improvements!

## License

MIT License - feel free to use for personal and commercial projects.

## Support

For issues or questions, please open an issue in the repository or refer to SETUP.md for detailed setup instructions.
