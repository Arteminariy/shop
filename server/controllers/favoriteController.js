const { Favorite, Product, FavoriteProduct } = require("../models/models");
const ApiError = require("../error/ApiError");

class FavoriteController {
    async get(req, res, next) {
        try {
            const { id } = req.params;
            const { user } = req;

            const favorite = await Favorite.findOne({
                where: { id },
                include: [{ model: FavoriteProduct }],
            });
            if (user.id === favorite.userId) {
                return res.status(200).json(basket);
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async addToFavorite(req, res, next) {
        try {
            const { id } = req.params;
            const { productId } = req.body;
            const { user } = req;

            const favorite = await Favorite.findOne({ where: { userId: id } });
            const product = await Product.findOne({ where: { id: productId } });

            if (user.id == id) {
                const favorite_product = FavoriteProduct.create({
                    favoriteId: favorite.id,
                    productId: product.id,
                });
                return res
                    .status(201)
                    .json({
                        message: `Создана связь товар-корзина: Избранное — ${favorite.id}, Товар — ${product.id}`,
                    });
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async removeFromFavorite(req, res, next) {
        try {
            const { id } = req.params;
            const { productId } = req.body;
            const { user } = req;

            const favorite = await Favorite.findOne({ where: { id: id } });

            if (user.id === favorite.userId) {
                const product = await Product.findOne({
                    where: { id: productId },
                });

                const favorite_product = await FavoriteProduct.findOne({
                    where: { favoriteId: favorite.id },
                });

                if (favorite_product.productId === product.id) {
                    const favorite_product = await FavoriteProduct.destroy({
                        where: { productId: product.id, favoriteId: favorite.id },
                    });
                    return res.json(JSON.stringify(favorite_product));
                } else {
                    next(
                        ApiError.badRequest(`Нет ♿️ для удаления из избранного`)
                    );
                }
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
}

module.exports = new FavoriteController();
