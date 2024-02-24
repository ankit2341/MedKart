const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  avatar: String,
  role: String,
  phoneNumber: Number,
  addresses: [
    {
      addressline1: String,
      city: String,
      pincode: Number,
    },
  ],
  mobileNumber: String,
})

const UserModel = mongoose.model('users', userSchema)

module.exports = {
  UserModel,
}
