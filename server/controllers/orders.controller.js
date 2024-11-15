const { OrderModel } = require('../models/orders.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const orderController = {
  getOrderByUserId: async (req, res) => {
    const id = req.userId
    try {
      if (!id) {
        return res.status(401).send({ Messsage: 'userId is missing' })
      }
      const cart = await OrderModel.find({ userId: id })
      res.status(200).send(cart)
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postOrderByUserId: async (req, res) => {
    try {
      const data = req.body
      const id = req.userId
      if (!id) {
        return res.status(401).send({ Messsage: 'userId is missing' })
      }
      const {
        productId,
        image,
        productName,
        variantPrice,
        isAvailable,
        quantity,
      } = req.body

      if (
        !productId ||
        !productName ||
        !variantPrice ||
        quantity == null ||
        isAvailable == null
      ) {
        return res
          .status(400)
          .send({ message: 'Missing required fields in the request body' })
      }

      const cart = new OrderModel({
        userId: id,
        productId,
        image,
        productName,
        variantPrice,
        isAvailable,
        quantity,
      })
      await cart.save()

      res.send({ Messsage: 'Item ordered successfully' })
    } catch (err) {
      res.send({ Messsage: 'Failed to order the item' })
    }
  },
}

module.exports = {
  orderController,
}
