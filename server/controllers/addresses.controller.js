const { AddressModel } = require('../models/addresses.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const addressController = {
  getAddressesByUserId: async (req, res) => {
    const { id } = req.query
    try {
      const product = await AddressModel.find({ userId: id })
      res.status(200).send(product)
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postAddressByUserId: async (req, res) => {
    const body = req.body
    try {
      if (!body?.userId) {
        return res.status(401).send({
          Message: 'User Id is missing',
        })
      }
      const addresses = new AddressModel(body)
      await addresses.save()
      res.send({ Message: 'Product added successfully' })
    } catch (err) {
      console.log(err)
      res.status(404).send(errorMessage)
    }
  },
  patchAddressById: async (req, res) => {
    const { id } = req.query
    const payload = req.body

    try {
      await ProductModel.findByIdAndUpdate({ _id: id }, payload)
      res.status(200).send({ Message: 'Address updated successfully' })
    } catch (err) {
      res.status(404).send({ Message: '404 eror' })
    }
  },
  deleteAddressById: async (req, res) => {
    const { id } = req.query
    try {
      await ProductModel.findByIdAndDelete({ _id: id })
      res.status(200).send({ Message: 'Address deleted successfully' })
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
}

module.exports = {
  addressController,
}
