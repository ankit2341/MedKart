const verifyUserRole = (req, res, next) => {
  if (req.role !== 'PLATFORM_ADMIN') {
    return res
      .status(401)
      .send({ Message: 'Not authorized to perform this action' })
  }
  next()
}

module.exports = {
  verifyUserRole,
}
