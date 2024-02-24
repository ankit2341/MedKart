const { ProductModel } = require('../models/product.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const productController = {
  getProducts: async (req, res) => {
    const { search, sort, page } = req.query
    const { filter } = req.body
    // console.log(search,sort)
    console.log(filter)
    try {
      if (!page || !sort) {
        res.status(400).send({
          Message: 'Page is missing',
        })
      } else {
        switch (true) {
          case search && !filter:
            const products = await ProductModel.find({
              $or: [
                { productName: { $regex: search, $options: 'i' } },
                { variantPrice: { $regex: search, $options: 'i' } },
                { variantOldPrice: { $regex: search, $options: 'i' } },
                { variantOffer: { $regex: search, $options: 'i' } },
                { rating: { $regex: search, $options: 'i' } },
                { subtext: { $regex: search, $options: 'i' } },
                { maker: { $regex: search, $options: 'i' } },
              ],
            })
              .sort({ productName: sort === 'true' ? 1 : -1 })
              .skip((page - 1) * 10)
              .limit(10)
              .collation({ locale: 'en', caseLevel: true })
            return res.status(200).send(products)

          case !search && filter:
            console.log(sort, search, filter, page)
            const variantPricePipeline = [
              {
                $addFields: {
                  variantPriceNumeric: {
                    $toInt: { $trim: { input: '$variantPrice', chars: '₹ ' } },
                  },
                },
              },
              {
                $match: {
                  variantPriceNumeric: {
                    $gt: filter?.price ? filter.price : 400,
                  },
                },
              },
            ]

            // Pipeline for filtering by variantOffer
            const variantOfferPipeline = [
              {
                $addFields: {
                  variantOfferNumeric: {
                    $toInt: {
                      $trim: { input: '$variantOffer', chars: '% off' },
                    },
                  },
                },
              },
              {
                $match: {
                  variantOfferNumeric: {
                    $gt: filter?.offer ? filter.offer : 0,
                  }, // Example: Filter documents where offer is greater than 30%
                },
              },
            ]

            // Pipeline for filtering by rating
            const ratingPipeline = [
              {
                $addFields: {
                  ratingNumeric: { $toDouble: '$rating' }, // Convert rating to double
                },
              },
              {
                $match: {
                  ratingNumeric: { $gt: filter?.rating ? filter.rating : 0 }, // Example: Filter documents where rating is greater than 4.5
                },
              },
            ]

            // Merge pipelines using $facet
            const productsFiltered = await ProductModel.aggregate([
              {
                $facet: {
                  variantPriceResults: variantPricePipeline,
                  variantOfferResults: variantOfferPipeline,
                  ratingResults: ratingPipeline,
                },
              },
            ])
              .sort({ productName: sort === 'true' ? 1 : -1 })
              .skip((page - 1) * 10)
              .limit(10)
              .collation({ locale: 'en', caseLevel: true })
            return res.status(200).send(productsFiltered)
          default:
            const productsPaginated = await ProductModel.find()
              .sort({ productName: sort === 'true' ? 1 : -1 })
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
  postProducts: async (req, res) => {
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
}

module.exports = {
  productController,
}
