const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  image: String,
  productName: String,
  variantPrice: Number,
  variantOldPrice: Number,
  variantOffer: Number,
  rating: Number,
  subtext: String,
  maker: String,
  isAvailable: Boolean,
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = {
  ProductModel,
}
