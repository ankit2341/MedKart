const { AddressModel } = require('../models/addresses.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const addressController = {
  getAddressesByUserId: async (req, res) => {
    const id = req.userId
    try {
      if (!id) {
        return res.status(401).send({ Messsage: 'userId is missing' })
      }
      const address = await AddressModel.find({ userId: id })
      res.status(200).send(address)
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postAddressByUserId: async (req, res) => {
    const { name, addressline1, city, pincode, phoneNumber, type } = req.body
    const userId = req.userId
    try {
      if (!userId) {
        return res.status(401).send({
          Message: 'User Id is missing',
        })
      }
      const addresses = new AddressModel({
        userId: userId,
        name: name,
        addressline1: addressline1,
        city: city,
        pincode: pincode,
        phoneNumber: phoneNumber,
        type,
      })
      await addresses.save()
      res.send({ Message: 'Address saved successfully' })
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
