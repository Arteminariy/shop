const Router = require('express')
const basketController = require('../controllers/basketController')
const router = new Router()

router.get('/:id', basketController.get)

module.exports = router