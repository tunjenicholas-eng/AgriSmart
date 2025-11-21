import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  farmer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Root', 'Leafy', 'Fruit', 'Grain', 'Legume'],
  },
  price_per_kg: {
    type: Number,
    required: true,
  },
  quantity_available: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  harvest_date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Product', productSchema);
