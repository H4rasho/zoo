import { Animal } from "./entities/animal.entity";
import { Parents } from "./parents-model";
import type { CreateAnimalDto } from "./dto/create-aminal.dto";
import type { UpdateAnimalDto } from "./dto/update-animal.dto";
import { Species } from "src/species/entites/specie.entity";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel(Animal)
    private readonly animalModel: typeof Animal
  ) {}

  async findAllAnimals() {
    const animals = await this.animalModel.findAll({
      include: [Species, { model: Animal, as: "parents" }],
    });
    return animals;
  }

  async registerAnimal(animal: CreateAnimalDto) {
    const { fatherId, motherId, ...rest } = animal;
    const animalCreated = await this.animalModel.create(rest);
    if (fatherId)
      await this.registerParent({
        animalId: animalCreated.id,
        parentId: fatherId,
      });
    if (motherId)
      await this.registerParent({
        animalId: animalCreated.id,
        parentId: motherId,
      });
    return animalCreated;
  }

  async registerParent({
    animalId,
    parentId,
  }: {
    animalId: Animal["id"];
    parentId: Animal["id"];
  }) {
    await Parents.create({ animalId, parentId });
  }

  async updateAnimal(animal: UpdateAnimalDto) {
    const { id, ...animalData } = animal;
    return await this.animalModel.update(animalData, { where: { id } });
  }

  async deleteAnimal(id: Animal["id"]) {
    return await this.animalModel.destroy({ where: { id } });
  }
}
