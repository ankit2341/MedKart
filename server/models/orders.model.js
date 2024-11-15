const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  productId: { type: mongoose.Schema.Types.ObjectId },
  image: String,
  productName: String,
  variantPrice: Number,
  isAvailable: Boolean,
  quantity: Number,
})

const OrderModel = mongoose.model('orders', orderSchema)

module.exports = {
  OrderModel,
}
