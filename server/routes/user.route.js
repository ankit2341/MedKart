const express = require('express')
const { userController } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.get('/', userController.getUsers)

userRouter.get('/:id', userController.getUserById)

userRouter.post('/add', userController.postUser)

userRouter.patch('/patch', userController.patchUser)

userRouter.delete('/delete', userController.deleteUser)

userRouter.post('/register', userController.registerUser)

userRouter.post('/login', userController.loginUser)

userRouter.post('/googlelogin', userController.googleLoginUser)

module.exports = {
  userRouter,
}
