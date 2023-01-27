"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../../config");
const { USER, PASS, NAME, DIALECT, PORT, HOST } = config_1.DATABASE;
exports.sequelize = new sequelize_1.Sequelize(NAME, USER, PASS, {
    host: HOST,
    dialect: DIALECT,
    port: Number(PORT),
});
const db = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await exports.sequelize.sync();
        console.log("All models were synchronized successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
exports.db = db;
//# sourceMappingURL=connection.js.map