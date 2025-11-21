import express from 'express';
import { verifyToken, requireRole } from '../middleware/auth.js';
import Product from '../models/Product.js';

const router = express.Router();

// Get all products (with filtering)
router.get('/', async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (minPrice) filter.price_per_kg = { $gte: parseFloat(minPrice) };
    if (maxPrice) {
      filter.price_per_kg = { ...filter.price_per_kg, $lte: parseFloat(maxPrice) };
    }

    const products = await Product.find(filter).populate('farmer_id', 'name location phone');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('farmer_id');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create product (Farmer only)
router.post('/', verifyToken, requireRole('FARMER'), async (req, res) => {
  try {
    const { name, category, price_per_kg, quantity_available, image_url, harvest_date } = req.body;

    const product = new Product({
      farmer_id: req.userId,
      name,
      category,
      price_per_kg,
      quantity_available,
      image_url,
      harvest_date,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product
router.put('/:id', verifyToken, requireRole('FARMER'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.farmer_id.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    Object.assign(product, req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete product
router.delete('/:id', verifyToken, requireRole('FARMER'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.farmer_id.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
