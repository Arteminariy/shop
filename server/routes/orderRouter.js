const Router = require('express')
const orderController = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()

router.get('/', authMiddleware, orderController.getOrders)
router.get('/:id', authMiddleware, orderController.getOrder)
router.post('/', authMiddleware, orderController.createOrder)
router.post('/:id', authMiddleware, orderController.addToOrder)
router.delete('/', authMiddleware, orderController.clearOrder)
router.delete('/:id', authMiddleware, orderController.removeFromOrder)


module.exports = router