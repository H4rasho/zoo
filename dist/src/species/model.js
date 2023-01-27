"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Species = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
class Species extends sequelize_1.Model {
}
exports.Species = Species;
Species.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: "Nombre de la especie",
    },
}, { sequelize: connection_1.sequelize });
//# sourceMappingURL=model.js.map