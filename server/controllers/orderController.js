const { Order, Product, OrderProduct, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController {
    async getOrders(req, res, next) {
        try {
            const { userId } = req.body
            
            const order = await Order.findAll({
                where: { userId: userId }
            })
            return res.status(200).json(order)
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async getOrder(req, res, next) {
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

            const order_product = OrderProduct.create({ orderId: id, productId })
            res.json({ message: `Создана связь заказ-товар: Заказ — ${id}, Товар — ${productId}` })
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async createOrder(req, res, next) {
        try {
            const { userId } = req.body

            const order = await Order.create({ userId: userId })

            res.json({ message: `Создан заказ — ${order.id}`})
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
    async clearOrder(req, res, next) {
        try {
            const { orderId } = req.body

            const order = await Order.findOne({ where: { id: orderId } })

            const order_product = await OrderProduct.destroy({ where: {  orderId: order.id } })
            console.log(`order_product: ` + JSON.stringify(order_product));
            res.json(JSON.stringify(order_product))
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
}

module.exports = new OrderController