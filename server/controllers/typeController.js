const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class typeController {
    async create(req, res, next) {
        try {
            const { name } = req.body;

			if (name) {
				const type = await Type.create({ name });
				return next(res.status(201).json(type));
			} else {
				return next(ApiError.badRequest(error.messege));
			}
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async getAll(req, res) {
		try {
			const types = await Type.findAll();
			return res.json(types);
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async getOne(req, res) {
		try {
			const { id } = req.params;
			const type = await Type.findOne({ where: { id: id } });
			return res.json(type);
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async update(req, res) {
		try {
			let { name } = req.body;
			const { id } = req.params;
			const type = await Type.findOne({ where: { id: id } });
			if (type && name) {
				await Type.update({ name }, { where: { id: id } });
				return res.json({ message: `Тип №${id} изменён` });
			}
			if (!type) {
				return next(ApiError.badRequest(error.message));
			}
			if (!name) {
				return next(ApiError.badRequest(error.message));
			}
		} catch (error) {
			next(ApiError.internal(error.messege));
		}
	}
	async remove(req, res) {
		try {
			const { id } = req.params;
			const type = await Type.findOne({ where: { id: id } });
			if (type) {
				await Type.destroy({ where: { id: id } });
				res.json({
					message: `Уволен id:${id}`,
				});
			} else {
				next(ApiError.notFound(error.message));
			}
		} catch (error) {
			next(ApiError.internal(error.messege));
		}
	}
}

module.exports = new typeController();
