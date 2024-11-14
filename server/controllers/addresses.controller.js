const { AddressModel } = require('../models/addresses.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const addressController = {
  getAddressesByUserId: async (req, res) => {
    try {
      const address = await AddressModel.findById(req.userId); 
      if (!address) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ message: errorMessage });
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
