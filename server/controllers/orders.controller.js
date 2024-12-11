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
  getOrders: async (req, res) => {
    const { page } = req.query
    try {
      if (page) {
        const orders = await OrderModel.find()
          .skip((page - 1) * 10)
          .limit(10)
        res.status(200).send(orders)
      } else {
        res.status(200).send({ Message: 'Page is mising' })
      }
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postOrderByUserId: async (req, res) => {
    try {
      const data = req.body
      const id = req.userId
      if (!id) {
        return res.status(401).send({ message: 'userId is missing' })
      }

      const items = data.items
      if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).send({ message: 'Cart is Empty' })
      }

      for (const item of items) {
        const {
          productId,
          image,
          productName,
          variantPrice,
          isAvailable,
          quantity,
        } = item

        if (
          !productId ||
          !productName ||
          !variantPrice ||
          quantity == null ||
          isAvailable == null
        ) {
          return res
            .status(400)
            .send({ message: 'Missing required fields in one or more items' })
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
      }

      res.send({ message: 'Items ordered successfully' })
    } catch (err) {
      console.error(err)
      res.status(500).send({ message: 'Failed to order the items' })
    }
  },
}

module.exports = {
  orderController,
}
