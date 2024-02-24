const { ProductModel } = require('../models/product.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const productController = {
  getProducts: async (req, res) => {
    try {
      const products = await ProductModel.find()
      res.status(200).send(products)
    } catch {
      res.status(404).send(errorMessage)
    }
  },
  postProducts: async (req, res) => {
    const body = req.body
    try {
      const products = new ProductModel(body[i])
      await products.save()
      res.send({ Message: 'Product added successfully' })
    } catch (err) {
      console.log(err)
      res.status(404).send(errorMessage)
    }
  },
}

module.exports = {
  productController,
}
