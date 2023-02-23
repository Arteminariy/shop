const Router = require('express')
const favoriteController = require('../controllers/favoriteController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()

router.get('/:id', authMiddleware, favoriteController.get)
router.post('/:id', authMiddleware, favoriteController.addToFavorite)
router.delete('/:id', authMiddleware, favoriteController.removeFromFavorite)


module.exports = router