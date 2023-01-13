import { Animal } from "./model";
import { Parents } from "./parents-model";
import type { CreateAnimalDto } from "./dto/create-aminal.dto";
import type { UpdateAnimalDto } from "./dto/update-animal.dto";
import { Species } from "../species/model";

export const findAllAnimals = async () => {
  const animals = await Animal.findAll({
    include: [Species, { model: Animal, as: "parents" }],
  });
  return { animals };
};

export const registerAnimal = async (animal: CreateAnimalDto) => {
  const { fatherId, motherId, ...rest } = animal;
  const animalCreated = await Animal.create(rest);
  if (fatherId)
    await registerParent({ animalId: animalCreated.id, parentId: fatherId });
  if (motherId)
    await registerParent({ animalId: animalCreated.id, parentId: motherId });
  return { animalCreated };
};

export const registerParent = async ({
  animalId,
  parentId,
}: {
  animalId: Animal["id"];
  parentId: Animal["id"];
}) => {
  await Parents.create({ animalId, parentId });
};

export const updateAnimal = async (animal: UpdateAnimalDto) => {
  const exitAnimal = await Animal.findByPk(animal.id);
  if (!exitAnimal) throw new Error("Animal not found");
  return await exitAnimal.update(animal);
};

export const deleteAnimal = async (id: Animal["id"]) => {
  const exitAnimal = await Animal.findByPk(id);
  if (!exitAnimal) throw new Error("Animal not found");
  await exitAnimal.destroy();
  return { animalDeleted: exitAnimal };
};
