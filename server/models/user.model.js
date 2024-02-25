const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  avatar: String,
  phoneNumber: Number,
  role: { type: String, enum: ['STANDARD_USER', 'PLATFORM_ADMIN'] },
})

const UserModel = mongoose.model('users', userSchema)

module.exports = {
  UserModel,
}
