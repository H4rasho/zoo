"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnimal = exports.updateAnimal = exports.registerParent = exports.registerAnimal = exports.findAllAnimals = void 0;
const model_1 = require("./model");
const parents_model_1 = require("./parents-model");
const model_2 = require("../species/model");
const findAllAnimals = async () => {
    const animals = await model_1.Animal.findAll({
        include: [model_2.Species, { model: model_1.Animal, as: "parents" }],
    });
    return { animals };
};
exports.findAllAnimals = findAllAnimals;
const registerAnimal = async (animal) => {
    const { fatherId, motherId, ...rest } = animal;
    const animalCreated = await model_1.Animal.create(rest);
    if (fatherId)
        await (0, exports.registerParent)({ animalId: animalCreated.id, parentId: fatherId });
    if (motherId)
        await (0, exports.registerParent)({ animalId: animalCreated.id, parentId: motherId });
    return { animalCreated };
};
exports.registerAnimal = registerAnimal;
const registerParent = async ({ animalId, parentId, }) => {
    await parents_model_1.Parents.create({ animalId, parentId });
};
exports.registerParent = registerParent;
const updateAnimal = async (animal) => {
    const exitAnimal = await model_1.Animal.findByPk(animal.id);
    if (!exitAnimal)
        throw new Error("Animal not found");
    return await exitAnimal.update(animal);
};
exports.updateAnimal = updateAnimal;
const deleteAnimal = async (id) => {
    const exitAnimal = await model_1.Animal.findByPk(id);
    if (!exitAnimal)
        throw new Error("Animal not found");
    await exitAnimal.destroy();
    return { animalDeleted: exitAnimal };
};
exports.deleteAnimal = deleteAnimal;
//# sourceMappingURL=service.js.map