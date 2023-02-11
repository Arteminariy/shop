const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Basket, Order } = require("../models/models");
const jwt = require("jsonwebtoken");

const generateJWT = (id, login, role) => {
    return jwt.sign({ id, login, role }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};

class userController {
    async registration(req, res, next) {
        const { login, password, role } = req.body;
        if (!login || !password) {
            return next(ApiError.badRequest("Некорректный логин или пароль"));
        }
        const candidate = await User.findOne({ where: { login } });
        if (candidate) {
            return next(
                ApiError.badRequest(
                    "Пользователь с таким логином уже существует"
                )
            );
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ login, role, password: hashPassword });
        const basket = await Basket.create({ userId: user.id });
        const token = generateJWT(user.id, user.login, user.role);
        return res.json({ token });
    }
    async login(req, res, next) {
        const { login, password } = req.body;
        const user = await User.findOne({ where: { login } });
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!user || !comparePassword) {
            return next(ApiError.internal("Неверный логин или пароль"));
        }
        const token = generateJWT(user.id, user.login, user.role);
        return res.json({ token });
    }
    async checkAuth(req, res, next) {
        const token = generateJWT(req.user.id, req.user.login, req.user.role);
        res.json({ token });
    }
    async getUser(req, res, next) {
        const { id } = req.params;

        const user = await User.findOne({
            where: { id },
            include: [{ model: Basket }],
        });
        return res.json({user})
    }
}

module.exports = new userController();
