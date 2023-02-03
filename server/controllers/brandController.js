const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')
class brandController {
    async create(req, res, next) {
        try {
            const { name } = req.body

            if(name) {
                const brand = await Brand.create({ name })
                return next(res.status(201).json(brand))
            }
            else {
                return next(ApiError.badRequest(error.messege))
            }
        } catch (error) {
            next(ApiError.internal(error.messege))
        }
    }
    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll()
            return res.status(200).json(brands)
        } catch (error) {
            next(ApiError.internal(error.messege))
        }
    }
    async update(req, res, next) {
        try {
            let { name } = req.body
            const { id } = req.params
            const brand = await Brand.findOne({ where: { id: id } })
            if (brand && name) {
                await Brand.update({ name }, { where: { id: id } })
                return res.json({ message: 'Товар изменён' })
            }
            if (!brand) {
                return next(ApiError.badRequest(error.message))
            }
            if (!name) {
                return next(ApiError.badRequest(error.message))
            }
        } catch (error) {
            next(ApiError.internal(error.messege))
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params
            const brand = await Brand.findOne({ where: { id: id } })
            if (brand) {
                await Brand.destroy({ where: { id: id } })
                res.json({
                    message: `Уволен id:${id}`
                })
            }
            else {
                next(ApiError.notFound(error.message))
            }
        } catch (error) {
            next(ApiError.internal(error.messege))
        }
    }
}

module.exports = new brandController()