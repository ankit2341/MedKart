const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.secret

const authenticate = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    const decoded = jwt.verify(token, SECRET_KEY)
    if (decoded) {
      next()
    } else {
      res.status(401).send({ Message: 'You are not authorized' })
    }
  } else {
    res.status(401).send({ Message: 'You are not Logged in' })
  }
}

module.exports = {
  authenticate,
}
