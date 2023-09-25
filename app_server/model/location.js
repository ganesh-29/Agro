const mongoose = require('mongoose');

const fertilizerschema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
mongoose.model('fertilizer', fertilizerschema);