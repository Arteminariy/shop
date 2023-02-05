const Router = require('express')
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()

router.get('/:id', authMiddleware, basketController.get)
router.post('/:id', authMiddleware, basketController.addToBasket)
router.delete('/:id', authMiddleware, basketController.removeFromBasket)


module.exports = router