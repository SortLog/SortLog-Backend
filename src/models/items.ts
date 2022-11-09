import mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    size: {
      type: String,
    },
    tags: {
      type: Array,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('items', ItemSchema);
export default Item;
