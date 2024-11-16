const express = require('express')
const { orderController } = require('../controllers/orders.controller')
const { authenticate } = require('../middlewares/authenticate.middleware')
const {
  verifyUserRole,
} = require('../middlewares/role-based-access-control.middleware')
const orderRouter = express.Router()

orderRouter.get('/', authenticate, orderController.getOrderByUserId)

orderRouter.post('/post', authenticate, orderController.postOrderByUserId)

orderRouter.get(
  '/getall',
  authenticate,
  verifyUserRole,
  orderController.getOrders,
)

module.exports = {
  orderRouter,
}
