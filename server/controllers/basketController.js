const { Basket, Product, BasketProduct, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async get(req, res, next) {
        try {
            const { id } = req.params
            
            const basket = await Basket.findOne({
                where: { id },
                include: [{ model: BasketProduct}]
            })
            return res.status(200).json(basket)
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async addToBasket(req, res, next) {
        try {
            const { id } = req.params
            const { productId } = req.body

            const basket = await Basket.findOne({ where: { id: id } })
            const product = await Product.findOne({ where: { id: productId } })

            const basket_product = BasketProduct.create({ basketId: id, productId })
            res.json({ message: `Создана связь товар-корзина: Корзина — ${id}, Товар — ${productId}` })
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async removeFromBasket(req, res, next) {
        try {
            const { id } = req.params
            const { productId } = req.body

            const basket = await Basket.findOne({ where: { id: id } })

            const product = await Product.findOne({ where: { id: productId } })

            const basket_product = await BasketProduct.destroy({ where: { productId: product.id, basketId: basket.id } })
            console.log(`basket_product: ` + JSON.stringify(basket_product));
            res.json(JSON.stringify(basket_product))
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
}

module.exports = new BasketController