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
        const { id } = req.params
        const product = await Product.findOne({
            where: { id },
            include: [{ model: ProductDescription, as: 'description' }]
        })
        return res.json(product)
    }
    async update(req, res, next) {
        try {
            let { name, price, brandId, typeId, description } = req.body
            const { id } = req.params
            const product = await Product.findOne({ where: { id: id } })
            if (product && name && price && brandId && typeId && description) {
                await Product.update({ name, price, brandId, typeId, description }, { where: { id: id } })
                return res.json({message: 'Товар изменён'})
            }
            if(!product) {
                return next(ApiError.badRequest(error.message))
            }
            if(!(name && price && brandId && typeId && description)) {
                return next(ApiError.badRequest(error.message))
            }
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params
            const product = await Product.findOne({ where: { id: id } })
            if (product) {
                await Product.destroy({ where: { id: id } })
                res.json({
                    message: `Уволен id:${id}`
                })
            }
            else {
                next(ApiError.notFound(error.message))
            }
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
}

module.exports = new productController()