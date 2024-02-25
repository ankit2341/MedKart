const express = require('express')
const { productController } = require('../controllers/product.controller')
const productRouter = express.Router()

productRouter.get('/', productController.getProducts)

productRouter.get('/:id', productController.getProductById)

productRouter.post('/add', productController.postProduct)

productRouter.patch('/update', productController.patchProductById)

productRouter.delete('/delete', productController.deleteProductById)

module.exports = {
  productRouter,
}
