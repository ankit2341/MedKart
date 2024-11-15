const express = require('express')
const { orderController } = require('../controllers/orders.controller')
const { authenticate } = require('../middlewares/authenticate.middleware')
const orderRouter = express.Router()

orderRouter.get('/', authenticate, orderController.getOrderByUserId)

orderRouter.post('/post', authenticate, orderController.postOrderByUserId)

module.exports = {
  orderRouter,
}
