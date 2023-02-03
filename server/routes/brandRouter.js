const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')
const { brandValidator } = require('../validators')

router.post('/', checkRole('ADMIN'), brandValidator, brandController.create)
router.get('/', brandController.getAll)
router.patch('/:id', checkRole('ADMIN'), brandValidator, brandController.update)
router.delete('/:id', checkRole('ADMIN'), brandValidator, brandController.remove)

module.exports = router