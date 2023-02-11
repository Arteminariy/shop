const Router = require('express')
const orderController = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()

router.get('/', authMiddleware, orderController.getOrders)
router.get('/:id', authMiddleware, orderController.getOrder)
router.post('/:id', authMiddleware, orderController.addToOrder)
router.post('/', authMiddleware, orderController.createOrder)
router.delete('/:id', authMiddleware, orderController.removeFromOrder)
router.delete('/', authMiddleware, orderController.clearOrder)


module.exports = router