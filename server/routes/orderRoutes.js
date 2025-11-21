import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import Order from '../models/Order.js';
import OrderItem from '../models/OrderItem.js';
import Product from '../models/Product.js';

const router = express.Router();

// Create order
router.post('/', verifyToken, async (req, res) => {
  try {
    const { items } = req.body;
    let totalAmount = 0;

    // Create order items and calculate total
    const orderItems = [];
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product ${item.productId} not found` });
      }

      const itemTotal = product.price_per_kg * item.qty;
      totalAmount += itemTotal;

      const orderItem = new OrderItem({
        order_id: null, // Will be set after order creation
        product_id: item.productId,
        quantity: item.qty,
        price_at_purchase: product.price_per_kg,
      });

      orderItems.push(orderItem);
    }

    // Create order
    const order = new Order({
      buyer_id: req.userId,
      items: [],
      total_amount: totalAmount,
    });

    await order.save();

    // Update order items with order_id
    for (const orderItem of orderItems) {
      orderItem.order_id = order._id;
      await orderItem.save();
      order.items.push(orderItem._id);
    }

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get buyer orders
router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ buyer_id: req.userId })
      .populate('items')
      .populate('buyer_id', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
