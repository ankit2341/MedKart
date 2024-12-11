const { CartModel } = require('../models/cart.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const cartController = {
  getCartByUserId: async (req, res) => {
    const id = req.userId
    try {
      if (!id) {
        return res.status(401).send({ Messsage: 'userId is missing' })
      }
      const cart = await CartModel.find({ userId: id })
      res.status(200).send(cart)
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postCartByUserId: async (req, res) => {
    try {
      const data = req.body
      const id = req.userId

      if (!id) {
        return res.status(401).send({ Message: 'userId is missing' })
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

      const existingItem = await CartModel.findOne({ userId: id, productId })

      if (existingItem) {
        return res
          .status(400)
          .send({ Message: 'Item already exists in the cart' })
      }

      const cart = new CartModel({
        userId: id,
        productId,
        image,
        productName,
        variantPrice,
        isAvailable,
        quantity,
      })
      await cart.save()

      res.send({ Message: 'Item added to cart successfully' })
    } catch (err) {
      res
        .status(500)
        .send({ Message: 'Failed to add item to cart', error: err })
    }
  },
  patchCartItemById: async (req, res) => {
    const id = req.params.id
    const payload = req.body

    try {
      await CartModel.findByIdAndUpdate({ _id: id }, payload)
      res.status(200).send({ Messsage: 'Cart updated successfully' })
    } catch (err) {
      res.status(404).send({ Messsage: 'Failed to updated cart' })
    }
  },
  deleteCartItemById: async (req, res) => {
    const id = req.params.id
    try {
      await CartModel.findByIdAndDelete({ _id: id })
      res.status(200).send({ Messsage: 'item removed from cart successfully' })
    } catch (err) {
      res.status(404).send({ Messsage: 'Failed to remove item from cart' })
    }
  },
  resetCartByUserId: async (req, res) => {
    try {
      const id = req.userId

      if (!id) {
        return res.status(401).send({ message: 'userId is missing' })
      }

      const result = await CartModel.deleteMany({ userId: id })
      console.log(result)
      if (result.deletedCount === 0) {
        return res
          .status(404)
          .send({ message: 'No items found in the cart to delete' })
      }

      res.send({ message: 'Cart has been emptied successfully' })
    } catch (err) {
      console.error(err)
      res.status(500).send({ message: 'Failed to empty the cart' })
    }
  },
}

module.exports = {
  cartController,
}
