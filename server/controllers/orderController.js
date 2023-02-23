const { Order, Product, OrderProduct, User } = require("../models/models");
const ApiError = require("../error/ApiError");

const checkUsersId = (id, orders) => {
    let counter = 0;
    for (let i = 0; i < orders.length; i++) {
        if (id === orders[i].dataValues.userId) {
            counter++;
        }
    }
    let Is = counter == orders.length;
    return Is;
};

class OrderController {
    async getOrders(req, res, next) {
        try {
            const { userId } = req.body;
            const { user } = req;

            const orders = await Order.findAll({
                where: { userId: userId },
            });

            if (checkUsersId(user.id, orders)) {
                return res.status(200).json(orders);
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async getOrder(req, res, next) {
        try {
            const { id } = req.params;
            const { user } = req;

            const order = await Order.findOne({
                where: { id },
                include: [{ model: OrderProduct }],
            });
            if (order) {
                if (user.id === order.userId) {
                    return res.status(200).json(order);
                } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
            } else {
                next(ApiError.badRequest(`Нет такого заказа: ${order}`));
            }
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async addToOrder(req, res, next) {
        try {
            const { id } = req.params;
            const { productId } = req.body;
            const { user } = req;

            const order = await Order.findOne({ where: { id: id } });
            const product = await Product.findOne({ where: { id: productId } });

            if (user.id === order.userId) {
                const order_product = OrderProduct.create({
                    orderId: id,
                    productId,
                });
                res.json({
                    message: `Создана связь заказ-товар: Заказ — ${id}, Товар — ${productId}`,
                });
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async createOrder(req, res, next) {
        try {
            const { userId } = req.body;
            const { user } = req;

            console.log(userId);
            console.log(user.id);

            if (user.id === userId) {
                const order = await Order.create({ userId: userId });
                return res.status(200).json(order);
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async removeFromOrder(req, res, next) {
        try {
            const { id } = req.params;
            const { productId } = req.body;
            const { user } = req;

            const order = await Order.findOne({ where: { id: id } });

            const product = await Product.findOne({ where: { id: productId } });

            if (user.id === order.userId) {
                const order_product = await OrderProduct.destroy({
                    where: { productId: product.id, orderId: order.id },
                });
                return res.json(JSON.stringify(order_product));
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async clearOrder(req, res, next) {
        try {
            const { orderId } = req.body;
            const { user } = req;

            const order = await Order.findOne({ where: { id: orderId } });

            if (user.id === order.userId) {
                const order_product = await OrderProduct.destroy({
                    where: { orderId: order.id },
                });
                res.json(JSON.stringify(order_product));
            } else next(ApiError.forbidden(`Не свою коляску катишь, ♿️`));
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
}

module.exports = new OrderController();
