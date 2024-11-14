const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  porductId: { type: mongoose.Schema.Types.ObjectId },
  image: String,
  productName: String,
  variantPrice: Number,
  isAvailable: Boolean,
  quantity: Number,
})

const CartModel = mongoose.model('carts', cartSchema)

module.exports = {
  CartModel,
}
