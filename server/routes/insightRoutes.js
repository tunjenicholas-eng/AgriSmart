import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Get price trends for a crop
router.get('/price-trends', async (req, res) => {
  try {
    const { crop } = req.query;
    if (!crop) {
      return res.status(400).json({ message: 'Crop parameter required' });
    }

    const products = await Product.find({ name: new RegExp(crop, 'i') });
    
    if (products.length === 0) {
      return res.json({
        average_price: 0,
        trend: 'STABLE',
        suggested_price: 0,
        message: 'No data available',
      });
    }

    const prices = products.map(p => p.price_per_kg);
    const average_price = prices.reduce((a, b) => a + b, 0) / prices.length;
    const suggested_price = average_price * 1.05; // Suggest 5% markup
    const trend = 'UP'; // Simplified for MVP

    res.json({
      average_price: Math.round(average_price * 100) / 100,
      trend,
      suggested_price: Math.round(suggested_price * 100) / 100,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
