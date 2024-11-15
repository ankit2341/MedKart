const mongoose = require('mongoose')

const labTestSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  name: String,
  icon: String,
  price: Number,
  originalPrice: Number,
  features: [String],
})

const labTestObjectSchema = mongoose.Schema({
  name: String,
  icon: String,
  price: Number,
  originalPrice: Number,
  features: [String],
})

const LabTestModel = mongoose.model('lab-test', labTestSchema)
const LabTestObjectModel = mongoose.model(
  'lab-test-object',
  labTestObjectSchema,
)

module.exports = {
  LabTestModel,
  LabTestObjectModel,
}
