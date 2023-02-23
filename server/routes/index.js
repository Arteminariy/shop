const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')
const favoriteRouter = require('./favoriteRouter')
const orderRouter = require('./orderRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/basket', basketRouter)
router.use('/favorite', favoriteRouter)
router.use('/order', orderRouter)

module.exports = router