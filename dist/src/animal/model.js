"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
const model_1 = require("../species/model");
const parents_model_1 = require("./parents-model");
class Animal extends sequelize_1.Model {
}
exports.Animal = Animal;
Animal.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: "Nombre del animal",
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        comment: "Edad del animal",
    },
}, { sequelize: connection_1.sequelize });
Animal.belongsTo(model_1.Species, {
    foreignKey: "specieId",
});
model_1.Species.hasMany(Animal, {
    foreignKey: "specieId",
});
Animal.belongsToMany(Animal, {
    through: parents_model_1.Parents,
    foreignKey: "animalId",
    otherKey: "parentId",
    as: "parents",
});
//# sourceMappingURL=model.js.map