const { connection } = require('./config/databse')
const cors = require('cors')
const express = require('express')
const { productRouter } = require('./routes/product.route')
const { userRouter } = require('./routes/user.route')
const { addressRouter } = require('./routes/address.route')
const { cartRouter } = require('./routes/cart.route')
const { orderRouter } = require('./routes/orders.route')
const { labtestRouter } = require('./routes/labtest.route')

const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/address', addressRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)
app.use('/labtest', labtestRouter)

app.get('/', async (req, res) => {
  try {
    res.status(200).send({ Message: 'Welocme to Medkart' })
  } catch (err) {
    res.status(404).send({ Message: 'Error connecting to api' })
  }
})

app.listen(4500, async (req, res) => {
  try {
    await connection
    console.log('connected to db')
  } catch (err) {
    console.log(err)
  }
  console.log('Server running at port')
})
