const mongoose = require('mongoose');
const fertilizerschema = new mongoose.Schema({
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
mongoose.model('fertilizers', fertilizerschema);