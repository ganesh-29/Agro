const mongoose = require('mongoose');
const pesticideschema = new mongoose.Schema({
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
  SellPrice: Number,
  Quantity: String,
  description: String,
  availability: String,
});
mongoose.model('pesticides', pesticideschema);