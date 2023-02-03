const { Basket } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async get(req, res, next) {
        try {
            const { id } = req.params
            const basket = await Basket.findOne({
                where: { id }
            })
            return res.json(basket)
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
}

module.exports = new BasketController