const ApiError = require("../../error/ApiError")
const { Brand } = require("../../models/models")

module.exports = function(req, res, next) {
    try {
        const { name } = req.body
        if(name !== Brand.findOne({where: {name: name}})) {
            next()
        }
    } catch (error) {
        next(ApiError.internal(error.message))
    }
}