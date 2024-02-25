const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  name: String,
  addressline1: String,
  city: String,
  pincode: Number,
  phoneNumber: Number,
  type: { type: String, enum: ['HOME', 'WORK'] },
})

const AddressModel = mongoose.model('addresses', addressSchema)

module.exports = {
  AddressModel,
}
