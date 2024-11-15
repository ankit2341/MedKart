const { LabTestModel, LabTestObjectModel } = require('../models/labtest.model')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const labtestController = {
  getAllLabTests: async (req, res) => {
    try {
      const labtest = await LabTestObjectModel.find()
      res.status(200).send(labtest)
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  getLabtestByUserId: async (req, res) => {
    const id = req.userId
    try {
      if (!id) {
        return res.status(401).send({ Messsage: 'userId is missing' })
      }
      const labtest = await LabTestModel.find({ userId: id })
      res.status(200).send(labtest)
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postLabtestByUserId: async (req, res) => {
    try {
      const { userId } = req
      if (!userId) {
        return res.status(401).send({ message: 'userId is missing' })
      }

      const { name, icon, price, originalPrice, features } = req.body

      if (
        !name ||
        !icon ||
        price == null ||
        originalPrice == null ||
        !features ||
        !features.length
      ) {
        return res
          .status(400)
          .send({ message: 'Missing required fields in the request body' })
      }

      const labTest = new LabTestModel({
        userId,
        name,
        icon,
        price,
        originalPrice,
        features,
      })

      await labTest.save()

      res.send({ message: 'Lab test added successfully' })
    } catch (err) {
      console.error(err)
      res.status(500).send({ message: 'Failed to add the lab test' })
    }
  },
}

module.exports = {
  labtestController,
}
