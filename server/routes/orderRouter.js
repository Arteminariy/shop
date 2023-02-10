const Router = require('express')
const orderController = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()

router.get('/:id', authMiddleware, orderController.get)
router.post('/:id', authMiddleware, orderController.addToOrder)
router.delete('/:id', authMiddleware, orderController.removeFromOrder)


module.exports = router