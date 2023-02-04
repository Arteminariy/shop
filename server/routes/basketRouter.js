const Router = require('express')
const basketController = require('../controllers/basketController')
const router = new Router()

router.get('/:id', basketController.get)
router.post('/:id', basketController.addToBasket)
router.delete('/:id', basketController.removeFromBasket)


module.exports = router