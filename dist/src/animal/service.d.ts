import { Animal } from "./model";
import type { CreateAnimalDto } from "./dto/create-aminal.dto";
import type { UpdateAnimalDto } from "./dto/update-animal.dto";
export declare const findAllAnimals: () => Promise<{
    animals: Animal[];
}>;
export declare const registerAnimal: (animal: CreateAnimalDto) => Promise<{
    animalCreated: Animal;
}>;
export declare const registerParent: ({ animalId, parentId, }: {
    animalId: Animal["id"];
    parentId: Animal["id"];
}) => Promise<void>;
export declare const updateAnimal: (animal: UpdateAnimalDto) => Promise<Animal>;
export declare const deleteAnimal: (id: Animal["id"]) => Promise<{
    animalDeleted: Animal;
}>;
