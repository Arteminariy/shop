const Router = require('express')
const orderController = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()

router.get('/', orderController.getOrders)
router.get('/:id', orderController.getOrder)
router.post('/:id', orderController.addToOrder)
router.post('/', orderController.createOrder)
router.delete('/:id', orderController.removeFromOrder)
router.delete('/', orderController.clearOrder)


module.exports = router