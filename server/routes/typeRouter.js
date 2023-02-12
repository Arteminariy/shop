const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')
const { typeValidator } = require('../validators')

router.post('/', checkRole('ADMIN'), typeValidator, typeController.create)
router.get('/', typeController.getAll)
router.patch('/:id', checkRole('ADMIN'), typeValidator, typeController.update)
router.delete('/:id', checkRole('ADMIN'), typeValidator, typeController.remove)

module.exports = router