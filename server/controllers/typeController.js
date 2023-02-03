const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class typeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
    async update(req, res) {
        try {
            
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }
    async remove(req, res) {
        try {

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Не удалось удалить товар'
            })
        }
    }
}

module.exports = new typeController()