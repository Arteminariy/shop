const uuid = require('uuid')
const path = require('path')
const { Product } = require('../models/models')
const { nextTick } = require('process')
const ApiError = require('../error/ApiError')

class productController {
    async create(req, res, next) {
        try {
            const { name, price, description } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({ name, price, description, img: fileName })

            return res.json(product)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req, res) {
        
    }
    async getOne(req, res) {

    }
}

module.exports = new productController()