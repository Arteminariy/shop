const uuid = require('uuid')
const path = require('path')
const { Product, ProductDescription } = require('../models/models')
const { nextTick } = require('process')
const ApiError = require('../error/ApiError')

class productController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, description } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({ name, price, brandId, typeId, description, img: fileName })

            if (description) {
                description = JSON.parse(description)
                description.array.forEach(i => 
                    ProductDescription.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })    
                );
            }

            return res.json(product)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let products
        if (!brandId && !typeId) {
            products = await Product.findAndCountAll({ limit, offset })
        }
        if (brandId && !typeId) {
            products = await Product.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (!brandId && typeId) {
            products = await Product.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (brandId && typeId) {
            products = await Product.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        }
        return res.json(products)
    }
    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne({
            where: {id},
            include: [{model: ProductDescription, as: 'description'}]
        })
        return res.json(product)
    }
}

module.exports = new productController()