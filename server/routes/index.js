const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)

module.exports = router