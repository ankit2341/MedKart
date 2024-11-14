const express = require('express')
const { addressController } = require('../controllers/addresses.controller')
const { authenticate } = require('../middlewares/authenticate.middleware')
const addressRouter = express.Router()

addressRouter.get('/', authenticate, addressController.getAddressesByUserId)

addressRouter.post('/post', authenticate, addressController.postAddressByUserId)

addressRouter.patch('/patch', authenticate, addressController.patchAddressById)

addressRouter.delete(
  '/delete',
  authenticate,
  addressController.deleteAddressById,
)

module.exports = {
  addressRouter,
}
