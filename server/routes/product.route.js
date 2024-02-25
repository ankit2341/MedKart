const express = require('express')
const { productController } = require('../controllers/product.controller')
const { authenticate } = require('../middlewares/authenticate.middleware')
const {
  verifyUserRole,
} = require('../middlewares/role-based-access-control.middleware')
const productRouter = express.Router()

productRouter.get('/', productController.getProducts)

productRouter.get('/:id', productController.getProductById)

productRouter.post(
  '/add',
  authenticate,
  verifyUserRole,
  productController.postProduct,
)

productRouter.patch(
  '/update',
  authenticate,
  verifyUserRole,
  productController.patchProductById,
)

productRouter.delete(
  '/delete',
  authenticate,
  verifyUserRole,
  productController.deleteProductById,
)

module.exports = {
  productRouter,
}
