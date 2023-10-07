const mongoose = require('mongoose');
const seedschema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: Number,
  MRP: Number,
  Quantity: String,
  description: String,
  availability: String,
});
mongoose.model('seeds', seedschema);