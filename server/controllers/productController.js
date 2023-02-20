const uuid = require('uuid');
const path = require('path');
const {
	Product,
	ProductDescription,
	Brand,
	Type,
} = require('../models/models');
const ApiError = require('../error/ApiError');

class productController {
	async create(req, res, next) {
		try {
			let { name, price, brandId, typeId, description } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));

			const product = await Product.create({
				name,
				price,
				brandId,
				typeId,
				description,
				img: fileName,
			});

			if (description) {
				description = JSON.parse(description);
				description.array.forEach((i) =>
					ProductDescription.create({
						title: i.title,
						description: i.description,
						productId: product.id,
					})
				);
			}
			return res.json(JSON.stringify(product) + `♿️`);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}
	async getAll(req, res) {
		try {
			let { brandId, typeId, limit, page } = req.query;
			page = page || 1;
			limit = limit || 10;
			let offset = page * limit - limit;
			let products;
			if (!brandId && !typeId) {
				products = await Product.findAndCountAll({
					limit,
					offset,
					include: [
						{ model: ProductDescription, as: 'description' },
						{ model: Brand, as: 'brand' },
						{ model: Type, as: 'type' },
					],
				});
			}
			if (brandId && !typeId) {
				products = await Product.findAndCountAll({
					where: { brandId },
					limit,
					offset,
					include: [
						{ model: ProductDescription, as: 'description' },
						{ model: Brand, as: 'brand' },
						{ model: Type, as: 'type' },
					],
				});
			}
			if (!brandId && typeId) {
				products = await Product.findAndCountAll({
					where: { typeId },
					limit,
					offset,
					include: [
						{ model: ProductDescription, as: 'description' },
						{ model: Brand, as: 'brand' },
						{ model: Type, as: 'type' },
					],
				});
			}
			if (brandId && typeId) {
				products = await Product.findAndCountAll({
					where: { brandId, typeId },
					limit,
					offset,
					include: [
						{ model: ProductDescription, as: 'description' },
						{ model: Brand, as: 'brand' },
						{ model: Type, as: 'type' },
					],
				});
			}
			return res.json(products);
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async getOne(req, res) {
		try {
			const { id } = req.params;
			const product = await Product.findOne({
				where: { id },
				include: [
					{ model: ProductDescription, as: 'description' },
					{ model: Brand, as: 'brand' },
					{ model: Type, as: 'type' },
				],
			});
			return res.json(product);
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async update(req, res, next) {
		try {
			let { name, price, brandId, typeId, description } = req.body;
			const { id } = req.params;
			const product = await Product.findOne({ where: { id: id } });
			if (product && name && price && brandId && typeId && description) {
				const product = await Product.update(
					{ name, price, brandId, typeId, description },
					{ where: { id: id } }
				);
				return res.json(product);
			}
			if (!product) {
				return next(ApiError.notFound('Не существует такого товара'));
			}
			if (!(name && price && brandId && typeId && description)) {
				return next(ApiError.badRequest('Неправильный ввод'));
			}
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async remove(req, res, next) {
		try {
			const { id } = req.params;
			const product = await Product.findOne({ where: { id: id } });
			if (product) {
				await Product.destroy({ where: { id: id } });
				return res.json({ message: `Уволен ♿️ с id: ${id}` });
			} else {
				next(ApiError.notFound('Не существует такого товара'));
			}
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async addDescription(req, res, next) {
		try {
			const { id } = req.params;
			const { title, text } = req.body;
			const product_description = await ProductDescription.create({
				title,
				description: text,
				productId: id,
			});
			res.json(product_description);
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
}

module.exports = new productController();
