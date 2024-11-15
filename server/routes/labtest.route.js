const express = require('express')
const { labtestController } = require('../controllers/labtest.controller')
const { authenticate } = require('../middlewares/authenticate.middleware')
const labtestRouter = express.Router()

labtestRouter.get('/getall', labtestController.getAllLabTests)

labtestRouter.get('/', authenticate, labtestController.getLabtestByUserId)

labtestRouter.post('/post', authenticate, labtestController.postLabtestByUserId)

module.exports = {
  labtestRouter,
}
