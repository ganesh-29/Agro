const mongoose = require('mongoose');
const organicschema = new mongoose.Schema({
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
});
mongoose.model('organics', organicschema);