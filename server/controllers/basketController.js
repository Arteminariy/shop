const { Basket, Product, BasketProduct, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async get(req, res, next) {
        try {
            const { id } = req.params
            const basket = await Basket.findOne({ where: { id } })

            const user = await User.findOne({ where: { id: basket.userId } })
            console.log(user.login);

            const productsInBasket = BasketProduct.findAll({ where: { basketId: Number(id) } })
            console.log(JSON.stringify(productsInBasket));
            return res.status(200).json(basket)
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async addToBasket(req, res, next) {
        try {
            const { basketId } = req.body
            const { productId } = req.body

            const basket = await Basket.findOne({ where: { id: basketId } })
            const product = await Product.findOne({ where: { id: productId } })

            const basket_product = BasketProduct.create({ basketId, productId })
            res.json({ message: `Создана связь товар-корзина: Корзина — ${basketId}, Товар — ${productId}` })
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async removeFromBasket(req, res, next) {
        try {
            const { basketId } = req.body
            const { productId } = req.body

            const basket = await Basket.findOne({ where: { id: basketId } })
            console.log(JSON.stringify(basket.id));
            console.log(JSON.stringify(typeof (basket.id)));

            const product = await Product.findOne({ where: { id: productId } })
            console.log(JSON.stringify(product.id));
            console.log(JSON.stringify(typeof (product.id)));

            const basket_product = BasketProduct.findOne({ where: { productId: product.id, basketId: basket.id } })
            console.log(`basket_product: ` + JSON.stringify(basket_product));
            res.json(JSON.stringify(basket_product))
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
}

module.exports = new BasketController