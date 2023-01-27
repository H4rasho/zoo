"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE = void 0;
const dotenv = require("dotenv");
dotenv.config();
const { DB_NAME, DB_USER, DB_PASS, DB_DIALECT, DB_PORT, DB_HOST } = process.env;
exports.DATABASE = {
    NAME: DB_NAME || "zoo",
    USER: DB_USER || "postgres",
    PASS: DB_PASS || "123456",
    HOST: DB_HOST || "localhost",
    DIALECT: DB_DIALECT || "postgres",
    PORT: DB_PORT || 5432,
};
//# sourceMappingURL=config.js.map