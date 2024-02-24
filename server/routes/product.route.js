const express = require('express')
const { productController } = require('../controllers/product.controller')
const productRouter = express.Router()

productRouter.get('/', productController.getProducts)

productRouter.post('/add', productController.postProducts)

module.exports = {
  productRouter,
}
