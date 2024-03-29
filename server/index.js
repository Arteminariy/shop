require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const router = require("./routes/index");
const errHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

//Обработчик ошибок (Должен стоять в конце)
app.use(errHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>
            console.log(`Server has been started on port ${PORT}`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
