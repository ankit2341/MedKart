const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  image: String,
  productName: String,
  variantPrice: String,
  variantOldPrice: String,
  variantOffer: String,
  rating: String,
  subtext: String,
  maker: String,
  isAvailable: Boolean,
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = {
  ProductModel,
}
