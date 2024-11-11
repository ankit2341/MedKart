const { ProductModel } = require('../models/product.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const productController = {
  getProducts: async (req, res) => {
    const { search, sort, page, sortby, price, offer, rating } = req.query
    const filter = !!(price || offer || rating)

    try {
      if (!page || !sort) {
        res.status(400).send({
          Message: 'Page and Sort is missing',
        })
      } else {
        switch (true) {
          case search && !filter:
            const products = await ProductModel.find({
              $or: [
                { productName: { $regex: search, $options: 'i' } },
                { maker: { $regex: search, $options: 'i' } },
                { subtext: { $regex: search, $options: 'i' } },
              ],
            })
              .sort({ [sort]: sortby === 'asc' ? 1 : -1 })
              .skip((page - 1) * 10)
              .limit(10)
              .collation({ locale: 'en', caseLevel: true })
            return res.status(200).send(products)

          case !search && filter:
            const filterCriteria = {
              variantPrice: {
                $gte: !isNaN(price) && price ? parseFloat(price) : 0,
              },
              variantOffer: {
                $gte: !isNaN(offer) && offer ? parseFloat(offer) : 0,
              },
              rating: {
                $gte: !isNaN(rating) && rating ? parseFloat(rating) : 0,
              },
            }

            const productsFiltered = await ProductModel.find(filterCriteria)
              .sort({ [sort]: sortby === 'asc' ? 1 : -1 })
              .skip((page - 1) * 10)
              .limit(10)
              .collation({ locale: 'en', caseLevel: true })
            return res.status(200).send(productsFiltered)

          default:
            const productsPaginated = await ProductModel.find()
              .sort({ [sort]: sortby === 'asc' ? 1 : -1 })
              .skip((page - 1) * 10)
              .limit(10)
              .collation({ locale: 'en', caseLevel: true })
            return res.status(200).send(productsPaginated)
        }
      }
    } catch {
      res.status(404).send(errorMessage)
    }
  },
  getProductById: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await ProductModel.find({ _id: id })
      res.status(200).send(product.length>0?product[0]:{})
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postProduct: async (req, res) => {
    const body = req.body
    try {
      const products = new ProductModel(body)
      await products.save()
      res.send({ Message: 'Product added successfully' })
    } catch (err) {
      console.log(err)
      res.status(404).send(errorMessage)
    }
  },
  patchProductById: async (req, res) => {
    const { id } = req.query
    const payload = req.body

    try {
      await ProductModel.findByIdAndUpdate({ _id: id }, payload)
      res.status(200).send({ Message: 'Product updated successfully' })
    } catch (err) {
      res.status(404).send({ Message: '404 eror' })
    }
  },
  deleteProductById: async (req, res) => {
    const { id } = req.query
    try {
      await ProductModel.findByIdAndDelete({ _id: id })
      res.status(200).send({ Message: 'Product deleted successfully' })
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
}

module.exports = {
  productController,
}
