const ApiError = require("../../error/ApiError")
const { Type } = require("../../models/models")

module.exports = function(req, res, next) {
    try {
        const { name } = req.body
        if(name !== Type.findOne({where: {name: name}})) {
            next()
        }
    } catch (error) {
        next(ApiError.internal(error.message))
    }
}