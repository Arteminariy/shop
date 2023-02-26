const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const {
	User,
	Basket,
	Order,
	BasketProduct,
	OrderProduct,
	Favorite,
	FavoriteProduct,
} = require('../models/models');
const jwt = require('jsonwebtoken');

const generateJWT = (id, login, role) => {
	return jwt.sign({ id, login, role }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	});
};

class userController {
	async registration(req, res, next) {
		try {
			const { login, password } = req.body;
			if (!login || !password) {
				return next(
					ApiError.badRequest('Некорректный логин или пароль')
				);
			}
			const candidate = await User.findOne({ where: { login } });
			if (candidate) {
				return next(
					ApiError.badRequest(
						'Пользователь с таким логином уже существует'
					)
				);
			}
			const hashPassword = await bcrypt.hash(password, 5);
			const user = await User.create({
				login,
				role: 'USER',
				password: hashPassword,
			});
			const basket = await Basket.create({ userId: user.id });
			const favorite = await Favorite.create({ userId: user.id });
			const token = generateJWT(user.id, user.login, user.role);
			return res.json({ token });
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async login(req, res, next) {
		try {
			const { login, password } = req.body;
			const user = await User.findOne({ where: { login } });
			let comparePassword = bcrypt.compareSync(password, user.password);
			if (!user || !comparePassword) {
				return next(ApiError.internal('Неверный логин или пароль'));
			}
			const token = generateJWT(user.id, user.login, user.role);
			return res.json({ token });
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async checkAuth(req, res, next) {
		try {
			const token = generateJWT(
				req.user.id,
				req.user.login,
				req.user.role
			);
			res.json({ token });
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
	async getUser(req, res, next) {
		try {
			const { id } = req.params;

			const user = await User.findOne({
				where: { id },
				include: [
					{ model: Basket, include: { model: BasketProduct } },
					{ model: Order, include: { model: OrderProduct } },
					{ model: Favorite, include: { model: FavoriteProduct } },
				],
			});
			return res.json({ user });
		} catch (error) {
			next(ApiError.internal(error.message));
		}
	}
}

module.exports = new userController();
