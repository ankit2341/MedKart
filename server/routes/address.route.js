const express = require('express')
const { addressController } = require('../controllers/addresses.controller')
const addressRouter = express.Router()

addressRouter.get('/', addressController.getAddressesByUserId)

addressRouter.post('/post', addressController.postAddressByUserId)

addressRouter.patch('/patch', addressController.patchAddressById)

addressRouter.delete('/delete', addressController.deleteAddressById)

module.exports = {
  addressRouter,
}
