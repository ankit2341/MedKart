const express = require('express')
const { cartController } = require('../controllers/cart.controller')
const { authenticate } = require('../middlewares/authenticate.middleware')
const cartRouter = express.Router()

cartRouter.get('/', authenticate, cartController.getCartByUserId)

cartRouter.post('/post', authenticate, cartController.postCartByUserId)

cartRouter.patch('/patch/:id', authenticate, cartController.patchCartItemById)

cartRouter.delete(
  '/delete/:id',
  authenticate,
  cartController.deleteCartItemById,
)

cartRouter.delete('/clear', authenticate, cartController.resetCartByUserId)

module.exports = {
  cartRouter,
}
