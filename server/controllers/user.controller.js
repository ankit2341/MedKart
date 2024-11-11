const { UserModel } = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const errorMessage = {
  Response: 'false',
  Messsage: 'Error connecting Api',
}

const userController = {
  getUserById: async (req, res) => {
    const id = req.params.id
    try {
      const users = await UserModel.find({ _id: id })
      res.status(200).send(users)
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  getUserData: async (req, res) => {
    try {
      const user = await UserModel.findById(req.userId, "-password"); 
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: errorMessage });
    }
  },
  getUsers: async (req, res) => {
    const { page } = req.query
    try {
      if (page) {
        const users = await UserModel.find()
          .skip((page - 1) * 10)
          .limit(10)
        res.status(200).send(users)
      } else {
        res.status(200).send({ Message: 'Page is mising' })
      }
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  postUser: async (req, res) => {
    const data = req.body
    try {
      const user = new UserModel(data)
      await user.save()
      res.status(200).send({ Message: 'User added successfully' })
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  patchUser: async (req, res) => {
    const { id } = req.query
    const payload = req.body

    try {
      const { phoneNumber, username, avatar } = payload
      const payloadToUpdate = {}
      if (username) {
        updateObject.username = username
      }
      if (phoneNumber) {
        updateObject.phoneNumber = phoneNumber
      }
      if (avatar) {
        updateObject.avatar = avatar
      }
      await UserModel.findByIdAndUpdate({ _id: id }, payloadToUpdate)
      res.status(200).send({ Message: 'User updated successfully' })
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.query
    try {
      await UserModel.findByIdAndDelete({ _id: id })
      res.send({ Message: 'user deleted successfully' })
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  registerUser: async (req, res) => {
    const { username, email, password, avatar, phoneNumber } = req.body

    try {
      const users = await UserModel.find({ email })
      if (users.length > 0) {
        res.status(200).send({ Message: 'User already registered' })
      } else {
        bcrypt.hash(password, 5, async (err, secured_pass) => {
          if (err) {
            res.status(404).send({ Message: 'Failed to register' })
          } else {
            const user = new UserModel({
              username,
              email,
              password: secured_pass,
              role:
                email === process.env.adminemail
                  ? 'PLATFORM_ADMIN'
                  : 'STANDARD_USER',
              avatar,
              phoneNumber,
            })
            await user.save()
            res.send({ Message: 'User registered successfully' })
          }
        })
      }
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await UserModel.find({ email })
      const hashed_pass = user[0].password
      if (user.length > 0) {
        bcrypt.compare(password, hashed_pass, (err, result) => {
          if (result) {
            const token = jwt.sign(
              { role: user[0].role, userId: user[0]._id },
              process.env.secret,
            )
            res.status(200).send({
              Message: 'User logged in successfully',
              token: token,
              username: user[0].username,
              avatar: user[0].avatar,
              id: user[0]._id,
            })
          } else {
            res.status(404).send({ Message: 'Invalid Credentials' })
          }
        })
      } else {
        res
          .status(200)
          .send({ Message: 'User with entered credentials does not exist' })
      }
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
  googleLoginUser: async (req, res) => {
    const { googletoken } = req.body
    try {
      if (!googletoken) {
        return res.status(400).send({ Message: 'Token is missing' })
      }
      const decoded = jwt.decode(googletoken)
      const email = decoded.email
      const user = await UserModel.find({ email })
      if (user.length > 0) {
        await UserModel.findByIdAndUpdate(
          { _id: user[0]._id },
          {
            username: decoded.name,
            avatar: decoded.picture,
          },
        )

        const token = jwt.sign(
          { role: user[0].role, userId: user[0]._id },
          process.env.secret,
        )
        res.status(200).send({
          Message: 'User logged in successfully',
          token: token,
          username: user[0].username,
          avatar: user[0].avatar,
          id: user[0]._id,
        })
      } else {
        const newuser = new UserModel({
          username: decoded.name,
          email: decoded.email,
          password: '*',
          avatar: decoded.picture,
          phoneNumber: 0,
          role:
            decoded.email === process.env.adminemail
              ? 'PLATFORM_ADMIN'
              : 'STANDARD_USER',
        })
        await newuser.save()
        const token = jwt.sign(
          { role: user[0].role, userId: user[0]._id },
          process.env.secret,
        )
        res.status(200).send({
          Message: 'User logged in successfully',
          token: token,
          username: user[0].username,
          avatar: user[0].avatar,
          id: user[0]._id,
        })
      }
    } catch (err) {
      res.status(404).send(errorMessage)
    }
  },
}

module.exports = {
  userController,
}
