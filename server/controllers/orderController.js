const { Order, Product, OrderProduct, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController {
    async get(req, res, next) {
        try {
            const { id } = req.params
            
            const order = await Order.findOne({
                where: { id },
                include: [{ model: OrderProduct}]
            })
            return res.status(200).json(order)
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async addToOrder(req, res, next) {
        try {
            const { id } = req.params
            const { productId } = req.body

            const order = await Order.findOne({ where: { id: id } })
            const product = await Product.findOne({ where: { id: productId } })

            const order_product = OrderProduct.create({ basketId: id, productId })
            res.json({ message: `Создана связь заказ-товар: Заказ — ${id}, Товар — ${productId}` })
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async removeFromOrder(req, res, next) {
        try {
            const { id } = req.params
            const { productId } = req.body

            const order = await Order.findOne({ where: { id: id } })

            const product = await Product.findOne({ where: { id: productId } })

            const order_product = await OrderProduct.destroy({ where: { productId: product.id, orderId: order.id } })
            console.log(`order_product: ` + JSON.stringify(order_product));
            res.json(JSON.stringify(order_product))
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
}

module.exports = new OrderController