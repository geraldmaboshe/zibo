const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  specification: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  apartmentImage: {
    type: String,
    required: true
  }
});
module.exports = Apartment = mongoose.model('apartment', ApartmentSchema);
