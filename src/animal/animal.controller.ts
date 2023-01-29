import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { AnimalService } from "./animal.service";
import { Animal } from "./entities/animal.entity";
import { CreateAnimalDto } from "./dto/create-aminal.dto";
import { UpdateAnimalDto } from "./dto/update-animal.dto";
import { Param } from "@nestjs/common/decorators";

@Controller("animals")
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  @Get()
  findAll(): Promise<Animal[]> {
    return this.animalService.findAllAnimals();
  }

  @Post()
  create(@Body() animal: CreateAnimalDto): Promise<Animal> {
    return this.animalService.registerAnimal(animal);
  }

  @Put()
  update(@Body() animal: UpdateAnimalDto): Promise<Animal> {
    return this.animalService.updateAnimal(animal);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<Animal> {
    return this.animalService.deleteAnimal(id);
  }
}
