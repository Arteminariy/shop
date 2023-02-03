const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.patch('/:id', checkRole('ADMIN'), typeController.update)
router.delete('/:id', checkRole('ADMIN'), typeController.remove)

module.exports = router