"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parents = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
class Parents extends sequelize_1.Model {
}
exports.Parents = Parents;
Parents.init({
    animalId: {
        type: sequelize_1.DataTypes.UUID,
    },
    parentId: {
        type: sequelize_1.DataTypes.UUID,
    },
}, { sequelize: connection_1.sequelize });
//# sourceMappingURL=parents-model.js.map