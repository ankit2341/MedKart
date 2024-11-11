const express = require('express')
const { userController } = require('../controllers/user.controller')
const { authenticate } = require('../middlewares/authenticate.middleware')
const {
  verifyUserRole,
} = require('../middlewares/role-based-access-control.middleware')
const userRouter = express.Router()

userRouter.get('/userdata', authenticate, userController.getUserData)

userRouter.get('/', authenticate, verifyUserRole, userController.getUsers)

userRouter.get('/:id', authenticate, verifyUserRole, userController.getUserById)

userRouter.post('/add', authenticate, verifyUserRole, userController.postUser)

userRouter.patch(
  '/patch',
  authenticate,
  verifyUserRole,
  userController.patchUser,
)

userRouter.delete(
  '/delete',
  authenticate,
  verifyUserRole,
  userController.deleteUser,
)

userRouter.post('/register', userController.registerUser)

userRouter.post('/login', userController.loginUser)

userRouter.post('/googlelogin', userController.googleLoginUser)

module.exports = {
  userRouter,
}
