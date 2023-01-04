import { CreateAnimalDto } from "./dto/create-aminal.dto";
import { Animal } from "./model";
import { Parents } from "./parents-model";

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
