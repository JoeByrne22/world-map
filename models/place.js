const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  name: String,
  capital: String,
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  }
});

placeSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Place', placeSchema);
