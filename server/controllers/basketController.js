const { Basket, Product, BasketProduct } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
    async get(req, res, next) {
        try {
            const { id } = req.params;
            const { user } = req;

            const basket = await Basket.findOne({
                where: { id },
                include: [{ model: BasketProduct }],
            });
            if (user.id === basket.userId) {
                return res.status(200).json(basket);
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async addToBasket(req, res, next) {
        try {
            const { id } = req.params;
            const { productId } = req.body;
            const { user } = req;

            const basket = await Basket.findOne({ where: { id: id } });
            const product = await Product.findOne({ where: { id: productId } });

            if (user.id === basket.userId) {
                const basket_product = BasketProduct.create({
                    basketId: id,
                    productId,
                });
                return res
                    .status(201)
                    .json({
                        message: `Создана связь товар-корзина: Корзина — ${id}, Товар — ${productId}`,
                    });
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async removeFromBasket(req, res, next) {
        try {
            const { id } = req.params;
            const { productId } = req.body;
            const { user } = req;

            const basket = await Basket.findOne({ where: { id: id } });

            if (user.id === basket.userId) {
                const product = await Product.findOne({
                    where: { id: productId },
                });

                const basket_product = await BasketProduct.findOne({
                    where: { basketId: basket.id },
                });

                if (basket_product.productId === product.id) {
                    const basket_product = await BasketProduct.destroy({
                        where: { productId: product.id, basketId: basket.id },
                    });
                    return res.json(JSON.stringify(basket_product));
                } else {
                    next(
                        ApiError.badRequest(`Нет ♿️ для удаления из корзины`)
                    );
                }
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
}

module.exports = new BasketController();
